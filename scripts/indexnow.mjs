#!/usr/bin/env node
/**
 * IndexNow submitter.
 *
 * Why this exists: as of 2026-08 roughly 41% of the sister property's traffic
 * comes from the Bing index family (Bing, DuckDuckGo, Yahoo, Ecosia), and
 * Bing's index is what ChatGPT's search retrieval reads from. Google organic
 * is under 2%. Waiting for a Bingbot crawl is the slow path; IndexNow pushes
 * new URLs to all of those engines at once, usually within hours.
 *
 * Usage:
 *   node scripts/indexnow.mjs           # recent posts + homepage + hub
 *   node scripts/indexnow.mjs --all     # every URL (one-time seed)
 *   node scripts/indexnow.mjs --dry-run # print what would be sent
 *
 * Runs automatically after `npm run build`. It never fails the build: any
 * error is logged and swallowed, because a missed ping is not worth a failed
 * deploy.
 */

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const SITE = "https://blog.transcribetok.com";
const HOST = "blog.transcribetok.com";
const KEY = "b86aab1f741ddb317cccfa448f5c2210";
const KEY_LOCATION = `${SITE}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

// Only submit posts changed in this window on an automatic run. IndexNow is
// for *changed* URLs — blasting the full list on every deploy is what gets a
// site's submissions deprioritised.
const RECENT_DAYS = 3;

const args = process.argv.slice(2);
const submitAll = args.includes("--all");
const dryRun = args.includes("--dry-run");

const root = process.cwd();

function postUrls() {
  const dir = path.join(root, "posts");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(/\.md$/, "");
      const { data } = matter(fs.readFileSync(path.join(dir, f), "utf8"));
      return { url: `${SITE}/${slug}`, date: data.date };
    });
}

function languageUrls() {
  // Parsed from the source rather than imported, so this script stays plain
  // Node with no TypeScript build step in front of it.
  const file = path.join(root, "src", "lib", "languages.ts");
  if (!fs.existsSync(file)) return [];
  const src = fs.readFileSync(file, "utf8");
  const body = src.slice(
    src.indexOf("export const LANGUAGES"),
    src.indexOf("const SUFFIX")
  );
  return [...body.matchAll(/^\s{4}slug:\s*"([a-z-]+)"/gm)].map(
    (m) => `${SITE}/${m[1]}-tiktok-transcript`
  );
}

function isRecent(dateStr) {
  if (!dateStr) return false;
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return false;
  return (Date.now() - d.getTime()) / 86_400_000 <= RECENT_DAYS;
}

async function main() {
  const posts = postUrls();

  const urlList = submitAll
    ? [
        SITE,
        `${SITE}/tiktok-transcript-by-language`,
        ...posts.map((p) => p.url),
        ...languageUrls(),
      ]
    : [
        SITE,
        `${SITE}/tiktok-transcript-by-language`,
        ...posts.filter((p) => isRecent(p.date)).map((p) => p.url),
      ];

  const unique = [...new Set(urlList)];

  // Homepage + hub alone means nothing actually changed. Don't ping.
  if (!submitAll && unique.length <= 2) {
    console.log("[indexnow] no recently changed posts — skipping");
    return;
  }

  console.log(`[indexnow] ${unique.length} URLs`);
  unique.forEach((u) => console.log(`  ${u}`));

  if (dryRun) {
    console.log("[indexnow] dry run — nothing sent");
    return;
  }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: unique,
    }),
  });

  // 200 = accepted, 202 = accepted but key still being validated. Both fine.
  if (res.status === 200 || res.status === 202) {
    console.log(`[indexnow] submitted (${res.status})`);
  } else {
    console.warn(
      `[indexnow] endpoint returned ${res.status} ${res.statusText} — not fatal`
    );
  }
}

main().catch((err) => {
  console.warn("[indexnow] failed, continuing anyway:", err.message);
});
