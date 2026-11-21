import type { Dict } from '../i18n/dictionaries';
import { FadeIn } from '../components/FadeIn';

export function Process({ dict }: { dict: Dict }) {
  return (
    <section id="process" className="relative py-24 sm:py-32 px-5 sm:px-8 border-t border-line">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-14">
          <span className="eyebrow text-accent">{dict.process.eyebrow}</span>
          <h2 className="display-heading text-5xl sm:text-6xl md:text-7xl mt-4 mb-5 max-w-[14ch]">
            {dict.process.title}
          </h2>
          <p className="text-fg-muted text-[15px] sm:text-base leading-relaxed max-w-2xl">
            {dict.process.subtitle}
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {dict.process.steps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-3xl border border-line bg-bg-elev p-7 sm:p-8 flex flex-col justify-between hover:border-line-strong transition-colors">
                <div>
                  <div className="font-mono text-xs text-accent mb-5">{step.num}</div>
                  <h3 className="font-display text-xl sm:text-2xl text-fg mb-3">{step.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-fg-muted mb-7">
                    {step.description}
                  </p>
                </div>

                <div className="border-t border-line pt-4 font-mono text-[11px] uppercase tracking-wider text-fg-dim">
                  {step.deliverable}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
