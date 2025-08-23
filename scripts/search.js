(function () {
    // Read Eleventy-provided config from inline JSON
    let ELEVENTY = {};
    const cfgEl = document.getElementById('search-config');
    if (cfgEl) {
        try { ELEVENTY = JSON.parse(cfgEl.textContent || '{}'); } catch (e) { ELEVENTY = {}; }
    }

    // Simple tokenizer mirroring Lunr pipeline (lowercase + split on non-word)
    function tokenize(text) {
        return String(text || '')
            .toLowerCase()
            .split(/[^\p{L}\p{N}]+/u)
            .filter(Boolean);
    }

    function displaySearchResults(results, store) {
        const searchResults = document.getElementById('search-results');

        if (results.length) {
            var appendString = '';

            for (var i = 0; i < results.length; i++) {
                const post = store[results[i].ref];

                if (post.source === 'web') {
                    appendString += `
<article class="card mb-4 p-4">
    <div class="row justify-content-center">
        <div class="col-12 post-card-header">
            <h4 class="entry-title"><a href="${post.url}">${post.title}</a></h4>
            <p><i class="fa-solid fa-calendar-days me-1"></i> ${getDate(post.date)}</p>
            <p>${post.author ?? ''}</p>
            <p>
                ${getExcerpt(post)}...
            </p>
            <p>
                ${getTags(post)}
            </p>
        </div>
    </div>
</article>`;
                } else if (post.source === 'docs') {
                    const docsBase = ELEVENTY.docsBaseUrl || '';
                    appendString += `
<article class="card mb-4 p-4">
    <div class="row justify-content-center">
        <div class="col-12 post-card-header">
            <h4 class="entry-title"><a href="${docsBase}${post.key}" target="_blank" rel="noopener">${getEmoji(post.key)} ${post.title}</a></h4>
            <p>
                ${getDocsExcerpt(post)}...
            </p>
        </div>
    </div>
</article>`;
                }
            }
            searchResults.innerHTML = appendString;
        } else {
            searchResults.innerHTML = '<div class="card p-4"><h2>No results found</h2>Your query returned 0 results. Retry with a different search term, or try one of the links on the side.</div>';
        }
    }

    function getEmoji(key) {
        let splitKey = key.split('/');
        let firstWord = splitKey[0];

        switch(firstWord) {
            case 'manual':
                return '📚';
            case 'tutorials':
                return '🎓';
            case 'api':
                return '🔧';
            case 'ReleaseNotes':
                return '📝';
            case 'contributors':
                return '🌟';
            case 'community-resources':
                return '🏋🏽';
            default:
                return '';
        }
    }

    function getDate(date) {
        if (!date || (typeof date === 'string' && date.length === 0)) return '';
        return `${date}`;
    }

    function getExcerpt(post) {
        const content = post.content || '';
        const excerpt = post.excerpt || '';
        return excerpt.length === 0 ? content.substring(0, 200) : excerpt;
    }

    function getDocsExcerpt(post) {
        const content = post.content || '';
        return htmlEncode(content.substring(0, 200));
    }

    function getTags(post) {
        const raw = post.tags || '';
        var tags = raw.split(', ').filter(Boolean);
        return tags.filter(s => s !== 'blog' && s !== 'search').map(s => `<span class="badge text-bg-stride text-stride me-1" style="--bs-bg-opacity: .20;">${s.replace('-', ' ')}</span>`).join('');
    }

    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var pairs = query.split('&');

        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split('=');
            if (pair[0] === variable) {
                return decodeURIComponent((pair[1] || '').replace(/\+/g, '%20'));
            }
        }
    }

    function htmlEncode(str) {
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/\"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    }

    // Pagination + filtering helpers
    const STATE = {
        results: [], // raw lunr results
        store: [],
        currentPage: 1,
        pageSize: 10,
    };

    function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    function getActiveSources() {
        const container = document.getElementById('source-filters');
        if (!container) return null; // no filters present
        const checked = Array.from(container.querySelectorAll('input.form-check-input[type="checkbox"]'))
            .filter(i => i.checked)
            .map(i => i.value);
        const set = new Set(checked);
        console.log('[search] active sources:', Array.from(set));
        return set;
    }

    function getItemSource(post) {
        if (post.source === 'web') return 'web';
        if (post.source === 'docs') {
            const key = post.key || '';
            return key.split('/')[0] || 'docs';
        }
        return 'unknown';
    }

    function filterResults(rawResults) {
        const allowed = getActiveSources();
        if (!allowed || allowed.size === 0) return rawResults;
        const filtered = rawResults.filter(r => {
            const post = STATE.store[r.ref];
            const src = getItemSource(post);
            return allowed.has(src);
        });
        console.log(`[search] filtered results: ${filtered.length}/${rawResults.length}`);
        return filtered;
    }

    function renderPagination(totalResults, currentPage, pageSize) {
        const container = document.getElementById('search-pagination');
        if (!container) return;

        const totalPages = Math.ceil(totalResults / pageSize);
        if (totalPages <= 1) {
            container.innerHTML = '';
            return;
        }

        function pageBtn(label, page, disabled, active, ariaLabel) {
            const aria = ariaLabel ? ` aria-label="${ariaLabel}"` : '';
            const current = active ? ' aria-current="page"' : '';
            const disabledClass = disabled ? ' disabled' : '';
            const tabIndex = disabled ? ' tabindex="-1" aria-disabled="true"' : '';
            return `
<li class="page-item${disabledClass}${active ? ' active' : ''}">
  <a href="#" class="page-link" data-page="${page}"${tabIndex}${aria}${current}>${label}</a>
</li>`;
        }

        function ellipsis() {
            return `<li class="page-item disabled"><span class="page-link">&hellip;</span></li>`;
        }

        const parts = [];
        parts.push('<nav aria-label="Search results pages"><ul class="pagination justify-content-center">');

        // Prev
        parts.push(pageBtn('Previous', currentPage - 1, currentPage === 1, false, 'Previous page'));

        const totalPagesToShow = 7;
        if (totalPages <= totalPagesToShow) {
            for (let p = 1; p <= totalPages; p++) parts.push(pageBtn(String(p), p, false, p === currentPage));
        } else {
            // First
            parts.push(pageBtn('1', 1, false, currentPage === 1));

            // Left ellipsis
            if (currentPage > 4) parts.push(ellipsis());

            const start = Math.max(2, currentPage - 2);
            const end = Math.min(totalPages - 1, currentPage + 2);
            for (let p = start; p <= end; p++) parts.push(pageBtn(String(p), p, false, p === currentPage));

            // Right ellipsis
            if (currentPage < totalPages - 3) parts.push(ellipsis());

            // Last
            parts.push(pageBtn(String(totalPages), totalPages, false, currentPage === totalPages));
        }

        // Next
        parts.push(pageBtn('Next', currentPage + 1, currentPage === totalPages, false, 'Next page'));

        parts.push('</ul></nav>');

        container.innerHTML = parts.join('');
    }

    function renderPage(page) {
        const filtered = filterResults(STATE.results);
        const totalPages = Math.ceil(filtered.length / STATE.pageSize) || 1;
        STATE.currentPage = clamp(page, 1, totalPages);
        const start = (STATE.currentPage - 1) * STATE.pageSize;
        const end = start + STATE.pageSize;
        const pageResults = filtered.slice(start, end);

        console.log('[search] render page', { page: STATE.currentPage, pageSize: STATE.pageSize, total: filtered.length });
        displaySearchResults(pageResults, STATE.store);
        renderPagination(filtered.length, STATE.currentPage, STATE.pageSize);
    }

    // Pagination click handling (event delegation)
    document.addEventListener('click', function (e) {
        const link = e.target.closest('#search-pagination a.page-link[data-page]');
        if (!link) return;
        e.preventDefault();
        const page = parseInt(link.getAttribute('data-page'), 10);
        if (!isNaN(page)) renderPage(page);
    });

    // Filter handling (instant apply, no form submit needed)
    document.addEventListener('change', function (e) {
        const filterRoot = e.target && e.target.closest && e.target.closest('#source-filters');
        if (filterRoot) {
            // Trigger after checkbox state is updated by the browser
            setTimeout(() => {
                console.log('[search] source filter changed');
                renderPage(1);
            }, 0);
        }
    });

    var searchTerm = getQueryVariable('query');

    if (searchTerm) {
        const termEl = document.getElementById('search-result-term');
        if (termEl) termEl.textContent = searchTerm;
        var inputEl = document.getElementById('search-input');
        if (inputEl) inputEl.value = searchTerm;
        var formPostEl = document.getElementById('search-form-post');
        if (formPostEl) formPostEl.value = searchTerm;

        const success = res => res.ok ? res.json() : Promise.resolve({});

        const web = fetch(`/search.json`).then(success);

        var docs = Promise.resolve();
        if (ELEVENTY.docsSearch && ELEVENTY.docsSearchUrl) {
            const url = `${ELEVENTY.docsSearchUrl}?version=${encodeURIComponent(ELEVENTY.version || '')}`;
            docs = fetch(url).then(success);
        }

        Promise.all([web, docs])
        .then(([webData, docsData]) => {
            const merged = mergeSearchData(webData, docsData);
            search(merged)
        })
        .catch(error => console.error(error));
    } else {
        console.log('No search term found');
        var spinner = document.getElementById('spinner');
        if (spinner) spinner.remove();
    }

    function mergeSearchData(webData, docsData) {
        const data = [];

        for (var key in webData) {
            data.push({
                'key': key,
                'title': webData[key].title,
                'author': webData[key].author,
                'category': webData[key].category,
                'tags': webData[key].tags,
                'content': webData[key].content,
                'excerpt': webData[key].excerpt,
                'url': webData[key].url,
                'date': webData[key].date,
                'source': 'web',
            });
        }

        if (!docsData) return data;

        for (var key in docsData) {
            data.push({
                'key': key,
                'title': docsData[key].title,
                'content': docsData[key].keywords,
                'source': 'docs',
            });
        }

        return data;
    }

    // Build a Lunr query string supporting AND/OR/NOT and phrases (double quotes). Single quotes are ignored.
    function buildLunrQueryString(input) {
        if (!input) return '';

        const tokens = [];
        const re = /"([^"]+)"|(\S+)/g; // quoted phrase or non-space
        let m;
        let hasOr = false;
        while ((m = re.exec(input)) !== null) {
            const phrase = m[1];
            const rawWord = m[2];
            if (phrase !== undefined) {
                const cleaned = phrase.trim();
                if (cleaned.length > 0) tokens.push('"' + cleaned + '"');
            } else if (rawWord !== undefined) {
                // Strip leading/trailing single quotes only
                let word = rawWord.replace(/^'+|'+$/g, '');
                if (/^OR$/i.test(word)) {
                    hasOr = true;
                    tokens.push('OR');
                } else if (word.length > 0) {
                    tokens.push(word);
                }
            }
        }
        if (tokens.length === 0) return '';

        if (hasOr) {
            // Pass through, preserving OR and any explicit +/- the user added
            return tokens.join(' ');
        }

        // Enforce AND by prefixing '+' to non-operator tokens
        const mapped = tokens.map(t => {
            if (!t) return t;
            if (t === 'OR') return t; // shouldn't occur here
            const first = t[0];
            if (first === '-' || first === '+') return t; // keep user operators
            // Keep quotes for phrases
            return t.startsWith('"') ? ('+"' + t.slice(1)) : ('+' + t);
        });
        return mapped.join(' ');
    }

    function search(data) {
        // Initialize lunr index
        var idx = lunr(function () {
            this.field('id');
            this.field('title', { boost: 50 });
            this.field('author');
            this.field('category');
            this.field('tags');
            this.field('content');
            this.field('excerpt');

            // Add the data to lunr
            for (var key in data) {
                this.add({
                    'id': key,
                    'title': data[key].title,
                    'author': data[key].author,
                    'category': data[key].category,
                    'tags': data[key].tags,
                    'content': data[key].content,
                    'excerpt': data[key].excerpt
                });
            }
        });

        STATE.store = data;
        const queryString = buildLunrQueryString(searchTerm);
        console.log('[search] query:', queryString);
        try {
            // If the query is a single phrase (e.g., +"..."), add field scoping to improve matches
            const isSinglePhrase = /^\+?"[^"]+"$/.test(queryString.trim());
            if (isSinglePhrase) {
                STATE.results = idx.query(q => {
                    const phrase = queryString.replace(/^\+?"|"$/g, '');
                    const fields = [
                        { name: 'title', boost: 50 },
                        { name: 'tags', boost: 10 },
                        { name: 'excerpt', boost: 5 },
                        { name: 'content', boost: 1 },
                    ];
                    fields.forEach(f => q.term(tokenize(phrase), {
                        fields: [f.name], presence: lunr.Query.presence.REQUIRED, boost: f.boost, usePipeline: true
                    }));
                });
            } else {
                STATE.results = queryString ? idx.search(queryString) : [];
            }
        } catch (err) {
            console.warn('[search] lunr query failed, falling back to raw term', err);
            // Fallback: strip quotes and operators
            const fallback = (searchTerm || '').replace(/["'+-]/g, ' ').trim();
            STATE.results = fallback ? idx.search(fallback) : [];
        }

        // Remove spinner now that we have results
        var spinner = document.getElementById('spinner');
        if (spinner) spinner.remove();

        renderPage(1);
    }
})();