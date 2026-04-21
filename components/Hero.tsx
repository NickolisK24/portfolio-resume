export function Hero() {
  return (
    <section className="border-b border-line py-14 md:py-20">
      <div className="reveal d1 mb-6 flex items-center gap-3 text-xs tracking-[0.1em] text-ink-dim">
        <span aria-hidden="true" className="h-px w-6 bg-ink-low" />
        {"// self-taught · full-stack · us army veteran"}
      </div>

      <h1 className="reveal d2 mb-7 font-serif text-[clamp(44px,7vw,88px)] leading-none font-normal tracking-[-0.02em] text-ink">
        I build <em className="text-accent not-italic italic">tools</em> that
        <br />
        solve real problems
        <span
          aria-hidden="true"
          className="cursor-blink ml-1 inline-block h-[0.9em] w-[0.4em] bg-accent align-baseline shadow-[0_0_12px_var(--color-accent)]"
        />
      </h1>

      <p className="reveal d3 max-w-[640px] text-[15px] leading-relaxed text-ink-dim">
        <strong className="font-medium text-ink">Nikko</strong> — full-stack engineer working in
        Python, TypeScript, and PostgreSQL. I ship end-to-end systems: data pipelines, simulation
        engines, clean APIs, and the frontends that sit on top. Currently shipping baseball
        analytics and ARPG theorycrafting tools on nights and weekends.
      </p>

      <dl className="reveal d4 mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs text-ink-dim">
        <div>
          <dt className="inline text-ink-low">status </dt>
          <dd className="inline-flex items-center gap-1.5 text-accent">
            <span aria-hidden="true" className="pulse text-[8px]">
              ●
            </span>
            open to work
          </dd>
        </div>
        <div>
          <dt className="inline text-ink-low">focus </dt>
          <dd className="inline text-ink">full-stack · data eng</dd>
        </div>
        <div>
          <dt className="inline text-ink-low">stack </dt>
          <dd className="inline text-ink">react · flask · postgres</dd>
        </div>
        <div>
          <dt className="inline text-ink-low">based </dt>
          <dd className="inline text-ink">united states</dd>
        </div>
      </dl>
    </section>
  );
}
