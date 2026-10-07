/* latest-release.js
 * Fetch the latest Stride stable and beta releases from GitHub, cache them in localStorage for 1 hour,
 * and display them in an element with id="stride-version" if present.
 * Fails silently; only console warnings are emitted on issues.
 */
(() => {
    'use strict';

    const SHOW_BETA = true; // Set to false to hide the beta line (also skips the releases list request)

    const el = document.getElementById('stride-version');

    if (!el) return; // Only run on pages that have the placeholder

    const API_BASE = 'https://api.github.com/repos/stride3d/stride/releases';
    // The repo also publishes launcher/, samples/ and cli/ releases; engine releases are tagged releases/<version>
    const ENGINE_TAG_PREFIX = 'releases/';
    const CACHE_KEY = 'stride_latest_release_v2';
    const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

    // Example: 20 Feb 2024
    const dateFormat = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

    // releases/v4.3.0.2507 -> 4.3.0.2507, releases/4.4.0-beta9 -> 4.4.0-beta9
    const toRelease = (data) => data?.tag_name && data.published_at && data.html_url
        ? { version: data.tag_name.replace(ENGINE_TAG_PREFIX, '').replace(/^v/i, ''), publishedAt: data.published_at, htmlUrl: data.html_url }
        : null;

    // True when the beta version is ahead of the stable one, e.g. 4.4.0-beta9 > 4.3.0.2507, but 4.4.0-beta9 < 4.4.0
    function isNewer(beta, stable) {
        const parts = (version) => version.split('-')[0].split('.').map(Number);
        const [b, s] = [parts(beta), parts(stable)];

        for (let i = 0; i < Math.max(b.length, s.length); i++) {
            const diff = (b[i] || 0) - (s[i] || 0);

            if (diff) return diff > 0;
        }

        return false; // Same base version: the prerelease precedes the stable release
    }

    // Builds: "Label: <a ...>version</a> · date"
    function line(label, { version, publishedAt, htmlUrl }) {
        const link = Object.assign(document.createElement('a'), {
            href: htmlUrl, target: '_blank', rel: 'noopener noreferrer', textContent: version
        });

        return [`${label}: `, link, ` · ${dateFormat.format(new Date(publishedAt))}`];
    }

    function display({ stable, beta }) {
        const lines = [];

        if (stable) lines.push(line('Latest', stable));

        // Only show the beta while its version is newer than the stable release
        if (SHOW_BETA && beta && (!stable || isNewer(beta.version, stable.version))) lines.push(line('Beta', beta));

        el.replaceChildren(...lines.flatMap((parts, i) => i ? [document.createElement('br'), ...parts] : parts));
    }

    function readCache() {
        try {
            const cached = JSON.parse(localStorage.getItem(CACHE_KEY));

            return cached?.ts && (cached.stable || cached.beta) ? cached : null;
        } catch (e) {
            console.warn('latest-release: cache read failed', e);
            return null;
        }
    }

    function writeCache(releases) {
        try {
            localStorage.setItem(CACHE_KEY, JSON.stringify({ ...releases, ts: Date.now() }));
        } catch (e) {
            console.warn('latest-release: cache write failed', e);
        }
    }

    async function fetchJson(url) {
        const resp = await fetch(url, { headers: { Accept: 'application/vnd.github+json' }, cache: 'no-store' });

        if (!resp.ok) {
            console.warn('latest-release: fetch not ok', url, resp.status);
            return null;
        }

        return resp.json();
    }

    async function fetchLatest() {
        try {
            // /latest honours the release marked as "Latest" on GitHub; the list is needed for prereleases
            const [latest, list] = await Promise.all([fetchJson(`${API_BASE}/latest`), SHOW_BETA ? fetchJson(`${API_BASE}?per_page=50`) : null]);

            const stable = toRelease(latest);
            const beta = toRelease(Array.isArray(list)
                ? list.find(r => r.prerelease && !r.draft && r.tag_name?.startsWith(ENGINE_TAG_PREFIX))
                : null);

            if (!stable && !beta) return null;

            const releases = { stable, beta };
            writeCache(releases);

            return releases;
        } catch (e) {
            console.warn('latest-release: fetch failed', e);
            return null;
        }
    }

    async function init() {
        const cached = readCache();

        // Show cache immediately, even if stale
        if (cached) display(cached);

        if (cached && Date.now() - cached.ts <= CACHE_TTL_MS) return;

        const fresh = await fetchLatest();

        if (fresh) display(fresh);
    }

    init();
})();
