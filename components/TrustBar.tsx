import { trustPoints } from "@/data/siteData";

export default function TrustBar() {
  return (
    <section className="border-y border-ink/10 bg-ink text-ivory">
      <div className="luxury-container no-scrollbar flex gap-8 overflow-x-auto py-5">
        {trustPoints.map((point) => (
          <div
            key={point}
            className="flex shrink-0 items-center gap-8 text-sm font-semibold text-ivory/82"
          >
            <span>{point}</span>
            <span className="h-px w-10 bg-gold/70" aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
}
