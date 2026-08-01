// Context-matched CTA for bulk / research intent posts.
// TranscribeTok's real differentiator over single-video transcript tools is
// transcribing 100+ videos at once and keeping them in a searchable library.
// Deliberately CYAN so it reads as a different action from the pink
// single-transcript CTAs used everywhere else on the blog.

export default function BulkCTA() {
  return (
    <div className="mt-12 rounded-2xl border border-cyan-100 bg-cyan-50 p-6 sm:p-7">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-bold text-cyan-900 text-base">
            Need more than one video at a time?
          </p>
          <p className="text-sm text-cyan-800/90 mt-1 max-w-xl">
            <strong>TranscribeTok</strong> transcribes 100+ TikToks in one go and
            keeps every transcript in a searchable library — so you can pull a
            competitor&apos;s entire hook catalogue in a single pass instead of
            pasting links one by one.
          </p>
        </div>
        <a
          href="https://transcribetok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
        >
          Transcribe in bulk →
        </a>
      </div>
    </div>
  );
}
