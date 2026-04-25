import AnimatedLandingStats from "@/components/animated-landing-stats";
import { PLAN_FEATURES, TIER_LABELS, TIER_ORDER, TIER_PRICES, type TierKey } from "@/lib/pricing";

type StepIconName = "scan" | "trace" | "investigate" | "pr";

type StepItem = {
  num: string;
  title: string;
  desc: string;
  icon: StepIconName;
};

type FAQItem = {
  q: string;
  a: string;
};

type MetricItem = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
};

type TrendDirection = "up" | "down";
type ObservabilityChartTone = "accent" | "success";

const META_BADGE = "The manager of your infra";

const HERO_COPY = {
  h1: "We ship the PRs <em>you</em> keep snoozing.",
  sub: "Salamonitor runs a 4-step pipeline over your observability platform - traces production errors to code, investigates each in a sandbox, and lands a tiny, boring GitHub PR with full context.",
};

const HERO_SECONDARY_ACTION = {
  href: "#architecture",
  label: "Read the architecture",
};

const PRIMARY_CTA = {
  href: "#get-started",
  label: "Get started",
};

const CONTACT_CTA = {
  href: "mailto:hello@salamonitor.dev?subject=Get%20started%20with%20Salamonitor",
  label: "Email us to get started",
};

const FEATURED_TIER: TierKey = "growth";

const LANDING_STATS: MetricItem[] = [
  { value: 412, label: "Errors in a median backlog" },
  { value: 4, label: "Pipeline steps, nightly" },
  { value: 20, label: "Per investigation, sandboxed", prefix: "~", suffix: "m" },
  { value: 0, label: "Raw logs retained" },
];

const BEFORE_BAR_SERIES = [58, 41, 72, 33, 81, 47, 63, 87, 54, 69, 44, 77];
const AFTER_BAR_SERIES = [10, 12, 8, 15, 11, 9, 13, 14, 10, 8, 12, 9];

const PIPELINE_STEPS = [
  {
    num: "01",
    title: "Sees everything",
    desc: "Continuously reads your production error stream. Nothing slips through.",
    icon: "scan",
  },
  {
    num: "02",
    title: "Finds the source",
    desc: "Traces each error back through your services to the exact line of code.",
    icon: "trace",
  },
  {
    num: "03",
    title: "Investigates like an engineer",
    desc: "Reasons about root cause in a sandbox. One error at a time.",
    icon: "investigate",
  },
  {
    num: "04",
    title: "Ships the fix",
    desc: "Opens a clean, reviewable pull request with tests and full context.",
    icon: "pr",
  },
] satisfies StepItem[];

const FAQ_ITEMS: FAQItem[] = [
  {
    q: "What does Salamonitor actually do?",
    a: "It reads your production error stream every night, groups recurring errors, investigates each one in an isolated sandbox, and opens a small, reviewable GitHub PR with the fix, the trace, and the affected services. You merge, close, or ignore.",
  },
  {
    q: "Will it touch production code without me asking?",
    a: "No. Salamonitor only opens pull requests. Nothing reaches main without a human merging it. Every PR has a tight scope, a generated changelog entry, and the exact error trace that triggered it.",
  },
  {
    q: "What does it need access to?",
    a: "Read access to your observability platform (Sentry, Datadog, Honeycomb, etc.), and a GitHub App scoped to the repos you choose. No raw logs are retained - only error signatures and the outcomes of past PRs.",
  },
  {
    q: "How is this different from Copilot, Cursor, or other coding agents?",
    a: "Those tools wait for you to start. Salamonitor starts on its own - from the actual errors your users are hitting in production. It's a manager, not an assistant. You don't prompt it; it ships work to your inbox.",
  },
  {
    q: "What about errors it can't fix?",
    a: "It tells you. Each investigation ends with one of: \"opened PR\", \"needs human - here's what I found\", or \"already fixed in #N\". You always know why a thing did or didn't ship.",
  },
  {
    q: "Is my code sent to a model provider?",
    a: "Only the minimum needed: the relevant files, the stack trace, and the error context. Investigations run in ephemeral sandboxes and are torn down on completion. Enterprise plans support self-hosted inference and VPC peering.",
  },
  {
    q: "How long until I see the first PR?",
    a: "Usually within 24 hours of connecting. The first run sweeps your existing backlog; from there it runs nightly and only acts on errors that are new, regressing, or rising in volume.",
  },
  {
    q: "What happens if it gets one wrong?",
    a: "You close the PR, optionally with a comment. Salamonitor remembers the outcome and won't pitch a similar fix again. The system gets better at your codebase over time - not better at \"coding\" in general.",
  },
];

export default function Landing() {
  return (
    <>
      <header className="topnav">
        <a href="#top" className="brand" aria-label="Salamonitor - home">
          <span className="mark">S</span>
          <span className="brand-word">Salamonitor</span>
        </a>
        <nav aria-label="Primary">
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#proof">Proof</a>
        </nav>
        <div className="right">
          <a className="btn" href={PRIMARY_CTA.href}>
            {PRIMARY_CTA.label}
          </a>
        </div>
      </header>

      <CurrentLanding />

      <footer>
        <div className="grow">Salamonitor · the manager of your infra · est. 2026</div>
        <div>docs</div>
        <div>changelog</div>
        <div>security</div>
        <div>privacy</div>
        <div>hello@salamonitor.dev</div>
      </footer>
    </>
  );
}

function TrendValue({ direction, value }: { direction: TrendDirection; value: string }) {
  return (
    <span className="delta-copy">
      <span className="kpi-delta-arrow" aria-hidden="true">
        {direction === "up" ? "↑" : "↓"}
      </span>
      <span>{value}</span>
    </span>
  );
}

function ObservabilityBarChart({ bars, tone }: { bars: number[]; tone: ObservabilityChartTone }) {
  const chartBase = 88;
  const chartHeight = 68;
  const barWidth = 20;
  const gap = 11;
  const totalWidth = bars.length * barWidth + (bars.length - 1) * gap;
  const xOffset = (400 - totalWidth) / 2;
  const barFill =
    tone === "accent" ? "var(--theme-color-chart-accent-stroke)" : "var(--theme-color-chart-success-stroke)";

  return (
    <svg viewBox="0 0 400 100" preserveAspectRatio="none" aria-hidden="true">
      <g stroke="var(--theme-color-gridline)" strokeWidth="1">
        <line x1="0" y1="25" x2="400" y2="25" />
        <line x1="0" y1="50" x2="400" y2="50" />
        <line x1="0" y1="75" x2="400" y2="75" />
      </g>
      <g>
        {bars.map((bar, index) => {
          const height = Math.max(8, (bar / 100) * chartHeight);
          const x = xOffset + index * (barWidth + gap);
          const y = chartBase - height;

          return (
            <g key={`${tone}-${index}`}>
              <rect x={x} y={y} width={barWidth} height={height} rx="2" fill={barFill} />
            </g>
          );
        })}
      </g>
      <g fontFamily="var(--mono)" fontSize="8" fill="var(--muted)">
        <text x="2" y="98">
          00:00
        </text>
        <text x="180" y="98">
          12:00
        </text>
        <text x="370" y="98">
          24:00
        </text>
      </g>
    </svg>
  );
}

function CurrentLanding() {
  return (
    <main id="top" className="page">
      <HeroSection />

      <section id="proof" className="manifesto">
        <div className="ba-grid">
          <div className="ba-col">
            <div className="obs before">
              <div className="obs-kpis">
                <div className="kpi alarm-kpi">
                  <div className="kpi-n danger-n">412</div>
                  <div className="kpi-l">new errors</div>
                </div>
                <div className="kpi">
                  <div className="kpi-n">2,847</div>
                  <div className="kpi-l">events / hr</div>
                </div>
                <div className="kpi alarm-kpi">
                  <div className="kpi-n delta-n danger-n">
                    <TrendValue direction="up" value="23%" />
                  </div>
                  <div className="kpi-l">vs last week</div>
                </div>
              </div>
              <div className="obs-bar tall">
                <ObservabilityBarChart bars={BEFORE_BAR_SERIES} tone="accent" />
              </div>
              <div className="obs-rows">
                <div className="row-e sev-hi">
                  <span className="bd">■</span>
                  <span className="msg">
                    <span>TypeError: cannot read &#39;sub&#39; of undefined</span>
                    <span className="svc">api-gateway</span>
                  </span>
                  <span className="cnt">132</span>
                </div>
                <div className="row-e sev-hi">
                  <span className="bd">■</span>
                  <span className="msg">
                    <span>StripeError: idempotency_key required</span>
                    <span className="svc">billing</span>
                  </span>
                  <span className="cnt">87</span>
                </div>
                <div className="row-e sev-md">
                  <span className="bd">■</span>
                  <span className="msg">
                    <span>Timeout waiting for pg pool (5000ms)</span>
                    <span className="svc">orders</span>
                  </span>
                  <span className="cnt">64</span>
                </div>
                <div className="row-e sev-md">
                  <span className="bd">■</span>
                  <span className="msg">
                    <span>KeyError: &#39;user_id&#39; in webhook payload</span>
                    <span className="svc">webhooks</span>
                  </span>
                  <span className="cnt">41</span>
                </div>
                <div className="row-e sev-lo">
                  <span className="bd">■</span>
                  <span className="msg">
                    <span>DeprecationWarning: legacy.decode()</span>
                    <span className="svc">workers</span>
                  </span>
                  <span className="cnt">29</span>
                </div>
                <div className="row-e sev-lo">
                  <span className="bd">■</span>
                  <span className="msg">
                    <span>ConnectionReset on upstream /internal/v2</span>
                    <span className="svc">edge</span>
                  </span>
                  <span className="cnt">22</span>
                </div>
                <div className="row-e sev-lo ghost">
                  <span className="bd">■</span>
                  <span className="msg">
                    <span>+ 399 more recurring errors…</span>
                  </span>
                  <span className="cnt">…</span>
                </div>
              </div>
            </div>
          </div>

          <div className="ba-arrow" aria-hidden="true">
            <svg className="ba-arrow-mark" viewBox="0 0 112 64" width="112" height="64">
              <path
                d="M28 32 H74"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path d="M62 20 L78 32 L62 44" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="ba-arrow-time">2 weeks</div>
          </div>

          <div className="ba-col">
            <div className="obs after">
              <div className="obs-kpis">
                <div className="kpi">
                  <div className="kpi-n ok-n">3</div>
                  <div className="kpi-l">new errors</div>
                </div>
                <div className="kpi">
                  <div className="kpi-n">142</div>
                  <div className="kpi-l">events / hr</div>
                </div>
                <div className="kpi">
                  <div className="kpi-n ok-n delta-n">
                    <TrendValue direction="down" value="95%" />
                  </div>
                  <div className="kpi-l">vs before</div>
                </div>
              </div>
              <div className="obs-bar tall">
                <ObservabilityBarChart bars={AFTER_BAR_SERIES} tone="success" />
              </div>
              <div className="obs-rows">
                <div className="row-e sev-md">
                  <span className="bd">■</span>
                  <span className="msg">
                    <span>RateLimit: external_api/v3</span>
                    <span className="svc new">new</span>
                  </span>
                  <span className="cnt">7</span>
                </div>
                <div className="row-e sev-lo">
                  <span className="bd">■</span>
                  <span className="msg">
                    <span>FlakyTest: order_spec.rb:42</span>
                    <span className="svc">tests</span>
                  </span>
                  <span className="cnt">3</span>
                </div>
                <div className="row-e fixed">
                  <span className="bd">✓</span>
                  <span className="msg">
                    <span>TypeError: cannot read &#39;sub&#39; of undefined</span>
                    <span className="svc pr">PR #412 merged</span>
                  </span>
                  <span className="cnt">-0</span>
                </div>
                <div className="row-e fixed">
                  <span className="bd">✓</span>
                  <span className="msg">
                    <span>StripeError: idempotency_key required</span>
                    <span className="svc pr">PR #411 merged</span>
                  </span>
                  <span className="cnt">-0</span>
                </div>
                <div className="row-e fixed">
                  <span className="bd">✓</span>
                  <span className="msg">
                    <span>Timeout waiting for pg pool (5000ms)</span>
                    <span className="svc pr">PR #408 merged</span>
                  </span>
                  <span className="cnt">-0</span>
                </div>
                <div className="row-e fixed">
                  <span className="bd">✓</span>
                  <span className="msg">
                    <span>KeyError: &#39;user_id&#39; in webhook payload</span>
                    <span className="svc pr">PR #404 merged</span>
                  </span>
                  <span className="cnt">-0</span>
                </div>
                <div className="row-e empty ghost">
                  <span className="bd"> </span>
                  <span className="msg">
                    <span>- quiet -</span>
                  </span>
                  <span className="cnt"> </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ManifestoHeading />

        <p className="ba-body">
          Salamonitor does. Every night it reads your observability platform, groups errors by signature, spins up a sandboxed agent per group, and opens a PR with the fix, the trace, and the blast radius. You merge, close, or ignore.
        </p>

        <LandingStats className="ba-stats" />
      </section>

      <section id="architecture">
        <div className="arch-grid">
          <div>
            <div className="eyebrow">Errors → pull requests</div>
            <h2 className="arch-h2">One error in. One PR out.</h2>
            <p className="arch-p">
              Salamonitor turns a recurring error signature into a tiny, context-rich pull request: the fix, the trace, the affected services, the tests. Merge it, close it, or ignore it - we learn either way.
            </p>
            <ul className="arch-list">
              <li>▪ Small, scoped diffs. One recurring error per PR.</li>
              <li>▪ Context: error signature, 24h occurrence count, affected services, trace link.</li>
              <li>▪ Tests added. Lint clean before it&#39;s opened.</li>
              <li>
                ▪ Labeled <span className="label">paper-cut</span> <span className="label">auto</span>. Easy to filter out.
              </li>
              <li>▪ You merge, close, or ignore. Memory updates either way.</li>
            </ul>
          </div>

          <ArchitecturePrCard />
        </div>
      </section>

      <PipelineSection
        id="how"
        eyebrow="What it actually does"
        title="Four quiet steps from error backlog to pull request."
        sub="The product flow is simple on purpose: watch the stream, trace it to code, investigate in a sandbox, then open one clean PR."
        steps={PIPELINE_STEPS}
      />

      <Pricing />
      <FAQ />
      <GetStartedSection />
    </main>
  );
}
function HeroSection() {
  return (
    <section className="hero">
      <span className="metabadge">{META_BADGE}</span>
      <h1 dangerouslySetInnerHTML={{ __html: HERO_COPY.h1 }} />
      <p className="hero-sub">{HERO_COPY.sub}</p>
      <div className="ctas">
        <a href={PRIMARY_CTA.href} className="btn accent">
          {PRIMARY_CTA.label} →
        </a>
        <a href={HERO_SECONDARY_ACTION.href} className="btn ghost">
          {HERO_SECONDARY_ACTION.label}
        </a>
      </div>
    </section>
  );
}

function ManifestoHeading() {
  return (
    <h2 className="ba-lede">
      You have a backlog of 412 low-priority errors.
      <span className="ba-punch">Nobody is going to touch them.</span>
    </h2>
  );
}

function LandingStats({ className }: { className?: string }) {
  return <AnimatedLandingStats className={className} stats={LANDING_STATS} />;
}

type PipelineSectionProps = {
  eyebrow: string;
  title: string;
  sub: string;
  steps: StepItem[];
  id?: string;
};

function PipelineSection({ eyebrow, title, sub, steps, id }: PipelineSectionProps) {
  const flowItems = steps.flatMap((step, index) => [
    <StepCard key={step.num} step={step} />,
    ...(index < steps.length - 1 ? [<PipelineArrow key={`${step.num}-arrow`} />] : []),
  ]);

  return (
    <section id={id} className="pipeline-section">
      <div className="pipeline-copy">
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="pipeline-h2">{title}</h2>
        <p className="pipeline-sub">{sub}</p>
      </div>

      <div className="pipeline">{flowItems}</div>
    </section>
  );
}

function StepCard({ step }: { step: StepItem }) {
  return (
    <div className="step">
      <div className="step-top">
        <span className="step-icon" aria-hidden="true">
          <StepIcon name={step.icon} />
        </span>
        <span className="num">{step.num}</span>
      </div>
      <span className="t">{step.title}</span>
      <span className="d">{step.desc}</span>
    </div>
  );
}

function PipelineArrow() {
  return (
    <div className="pipeline-arrow" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12h14" />
        <path d="m13 7 5 5-5 5" />
      </svg>
    </div>
  );
}

function StepIcon({ name }: { name: StepIconName }) {
  switch (name) {
    case "scan":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3.5 12c1.8-3.8 4.9-5.7 8.5-5.7s6.7 1.9 8.5 5.7c-1.8 3.8-4.9 5.7-8.5 5.7S5.3 15.8 3.5 12Z" />
          <circle cx="12" cy="12" r="2.6" />
          <path d="M12 3.5v1.8M4.8 6.1l1.3 1.3M19.2 6.1l-1.3 1.3" />
        </svg>
      );
    case "trace":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="6" r="2.2" />
          <circle cx="18" cy="7" r="2.2" />
          <circle cx="9" cy="17" r="2.2" />
          <circle cx="18" cy="18" r="2.2" />
          <path d="M7.8 7.2 16 8.1M7.4 7.8 8.1 15M10.9 16.4l5.2 1" />
        </svg>
      );
    case "investigate":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.5 17a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11Z" />
          <path d="m14.5 14.5 4 4" />
          <path d="M10.5 8.5v4M8.5 10.5h4" />
        </svg>
      );
    case "pr":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="7" cy="5.5" r="2.2" />
          <circle cx="17" cy="18.5" r="2.2" />
          <circle cx="17" cy="7.5" r="2.2" />
          <path d="M7 7.7v9.6c0 .7.6 1.2 1.2 1.2h6.6M15.4 7.5H9.2c-.7 0-1.2.5-1.2 1.2v1.8" />
        </svg>
      );
  }
}

function ArchitecturePrCard() {
  return (
    <div className="pr-card">
      <div className="pr-head">
        <span className="dot r" />
        <span className="dot y" />
        <span className="dot g" />
      </div>
      <div className="pr-title">
        <div className="tt">fix(stripe): guard webhook replay when idempotency_key is null</div>
        <div className="meta">
          <strong>salamonitor</strong> wants to merge 1 commit · opened 03:41
        </div>
      </div>
      <div className="pr-body">
        <div className="hunk">
          <div className="file-head" aria-hidden="true">
            <span className="file-icon">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.25 1.75h4.6l2.9 2.9v7.6a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-9.5a1 1 0 0 1 1-1Z" />
                <path d="M8.75 1.75v3h3" />
              </svg>
            </span>
            <span className="file-path">
              <span className="dir">services/billing/</span>
              <span className="name">stripe_webhook.py</span>
            </span>
          </div>
          <div className="diff-line ctx">
            <span className="ln">41</span>
            <span className="ln">41</span>
            <span className="code">def handle_webhook(event):</span>
          </div>
          <div className="diff-line del">
            <span className="ln">42</span>
            <span className="ln" />
            <span className="code">    key = event[&quot;idempotency_key&quot;]</span>
          </div>
          <div className="diff-line add">
            <span className="ln" />
            <span className="ln">42</span>
            <span className="code">    key = event.get(&quot;idempotency_key&quot;)</span>
          </div>
          <div className="diff-line add">
            <span className="ln" />
            <span className="ln">43</span>
            <span className="code">    if key is None:</span>
          </div>
          <div className="diff-line add">
            <span className="ln" />
            <span className="ln">44</span>
            <span className="code">        return SKIP</span>
          </div>
          <div className="diff-line ctx">
            <span className="ln">45</span>
            <span className="ln">45</span>
            <span className="code">    if replay_store.seen(key):</span>
          </div>
        </div>
      </div>
      <div className="pr-foot" aria-hidden="true">
        <span className="pr-merge">Merge</span>
      </div>
    </div>
  );
}

function Pricing() {
  return (
    <section id="pricing">
      <div className="eyebrow">Pricing</div>
      <h2>Three plans. No seat tax.</h2>
      <div className="pricing">
        {TIER_ORDER.map((tier) => {
          const plan = PLAN_FEATURES[tier];
          const isFeatured = tier === FEATURED_TIER;
          const isEnterprise = tier === "enterprise";
          const priceLabel = TIER_PRICES[tier];
          const hasMonthlySuffix = priceLabel.endsWith("/mo");
          const priceValue = hasMonthlySuffix ? priceLabel.slice(0, -3) : priceLabel;

          return (
            <div key={tier} className={`tier${isFeatured ? " hi" : ""}`}>
              <div className="tier-header">
                <div className="tier-topline">
                  <div className="tname">{TIER_LABELS[tier]}</div>
                  {isFeatured && <div className="ribbon">Recommended</div>}
                </div>
                <div className="price-line">
                  <span className="price">{priceValue}</span>
                  {hasMonthlySuffix && <span className="price-unit">/mo</span>}
                </div>
                {plan.includes && <p className="includes">{plan.includes}</p>}
              </div>
              <div className="tier-content">
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span className="tier-check" aria-hidden="true">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tier-footer">
                <a
                  className={`btn tier-button${isFeatured ? " accent" : " ghost"}`}
                  href={isEnterprise ? CONTACT_CTA.href : PRIMARY_CTA.href}
                >
                  {isEnterprise ? "Contact sales" : PRIMARY_CTA.label}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="faq">
      <div className="eyebrow">Frequently asked</div>
      <h2>The honest answers.</h2>
      <ul className="faq-list">
        {FAQ_ITEMS.map((item) => (
          <li key={item.q} className="faq-item">
            <details>
              <summary>{item.q}</summary>
              <p className="a">{item.a}</p>
            </details>
          </li>
        ))}
      </ul>
    </section>
  );
}

function GetStartedSection() {
  return (
    <section id="get-started" className="get-started">
      <h2>Ready to make production quieter?</h2>
      <div className="ctas">
        <a className="btn accent" href={CONTACT_CTA.href}>
          {PRIMARY_CTA.label} →
        </a>
        <a className="btn ghost" href={HERO_SECONDARY_ACTION.href}>
          {HERO_SECONDARY_ACTION.label}
        </a>
      </div>
    </section>
  );
}
