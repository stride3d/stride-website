/* latest-release.js
 * Fetch the latest Stride release from GitHub, cache it in localStorage for 1 hour,
 * and display it in an element with id="stride-version" if present.
 * Fails silently; only console warnings are emitted on issues.
 */
(function () {
    'use strict';

    var EL_ID = 'stride-version';
    var el = document.getElementById(EL_ID);

    if (!el) return; // Only run on pages that have the placeholder

    var API_URL = 'https://api.github.com/repos/stride3d/stride/releases/latest';
    var CACHE_KEY = 'stride_latest_release_v1';
    var CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

    function formatDate(iso) {
        try {
            var dt = new Date(iso);

            if (isNaN(dt)) return null;

            // Example: 20 February 2024
            return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(dt);
        } catch (e) {
            console.warn('latest-release: date format failed', e);
            return null;
        }
    }

    function display(version, publishedAtIso, htmlUrl) {
        var dateStr = formatDate(publishedAtIso);

        if (!version || !dateStr || !htmlUrl) return; // Show nothing on invalid data

        // Clear previous content
        el.textContent = '';
        // Build: "Latest release: version <a ...>version</a>, released on dateStr."
        var prefix = document.createTextNode('Latest release: version ');
        var link = document.createElement('a');
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.href = htmlUrl;
        link.textContent = version;
        var infix = document.createTextNode(', released on ' + dateStr + '.');
        el.appendChild(prefix);
        el.appendChild(link);
        el.appendChild(infix);
    }

    function readCache() {
        try {
            var raw = localStorage.getItem(CACHE_KEY);

            if (!raw) return null;

            var parsed = JSON.parse(raw);

            if (!parsed || !parsed.version || !parsed.publishedAt || !parsed.htmlUrl || !parsed.ts) return null;

            var expired = (Date.now() - parsed.ts) > CACHE_TTL_MS;

            return { version: parsed.version, publishedAt: parsed.publishedAt, htmlUrl: parsed.htmlUrl, expired: expired };
        } catch (e) {
            console.warn('latest-release: cache read failed', e);

            return null;
        }
    }

    function writeCache(version, publishedAt, htmlUrl) {
        try {
            localStorage.setItem(CACHE_KEY, JSON.stringify({ version: version, publishedAt: publishedAt, htmlUrl: htmlUrl, ts: Date.now() }));
        } catch (e) {
            console.warn('latest-release: cache write failed', e);
        }
    }

    async function fetchLatest() {
        try {
            var resp = await fetch(API_URL, {
                headers: { 'Accept': 'application/vnd.github+json' },
                cache: 'no-store'
            });

            if (!resp || !resp.ok) {
                console.warn('latest-release: fetch not ok', resp && resp.status);
                return null;
            }

            var data = await resp.json();
            var version = (data && (data.name || data.tag_name)) || null;
            var publishedAt = (data && data.published_at) || null;
            var htmlUrl = (data && data.html_url) || null;

            if (!version || !publishedAt || !htmlUrl) return null;

            writeCache(version, publishedAt, htmlUrl);

            return { version: version, publishedAt: publishedAt, htmlUrl: htmlUrl };
        } catch (e) {
            console.warn('latest-release: fetch failed', e);
            return null;
        }
    }

    async function init() {
        var cached = readCache();

        if (cached && !cached.expired) {
            display(cached.version, cached.publishedAt, cached.htmlUrl);
            return;
        }

        if (cached && cached.expired) {
            // Show stale cache immediately
            display(cached.version, cached.publishedAt, cached.htmlUrl);
            // Then try to refresh
            var freshExpired = await fetchLatest();

            if (freshExpired) display(freshExpired.version, freshExpired.publishedAt, freshExpired.htmlUrl);

            return;
        }

        // No cache, try fetch
        var fresh = await fetchLatest();

        if (fresh) display(fresh.version, fresh.publishedAt, fresh.htmlUrl);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
})();
