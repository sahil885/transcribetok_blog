// Context-matched CTA for repurposing / research intent posts.
// These readers transcribe more than one video over time, so the relevant
// upgrade is the saved transcript library (a paid feature) rather than the
// free two-a-day allowance. Deliberately CYAN so it reads as a different
// action from the pink single-transcript CTAs used everywhere else.

export default function LibraryCTA() {
  return (
    <div className="mt-12 rounded-2xl border border-cyan-100 bg-cyan-50 p-6 sm:p-7">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-bold text-cyan-900 text-base">
            Doing this more than occasionally?
          </p>
          <p className="text-sm text-cyan-800/90 mt-1 max-w-xl">
            The free tier gives you two transcripts a day with no account. Paid
            plans on <strong>TranscribeTok</strong> keep every transcript saved
            in your library, so you can come back to a script weeks later
            instead of transcribing the same video twice.
          </p>
        </div>
        <a
          href="https://transcribetok.com/pricing"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
        >
          See plans →
        </a>
      </div>
    </div>
  );
}
