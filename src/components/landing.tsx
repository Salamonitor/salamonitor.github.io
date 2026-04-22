import Link from "next/link";

export type LandingVariant = "current" | "proof" | "story";

type StepIconName = "scan" | "filter" | "trace" | "investigate" | "pr" | "learn";

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
  value: string;
  label: string;
};

type ResultItem = {
  title: string;
  count: string;
  detail: string;
  tone?: "neutral" | "good";
};

type LandingProps = {
  variant?: LandingVariant;
};

const META_BADGE = "The manager of your infra";

const HERO_COPY = {
  h1: "We ship the PRs <em>you</em> keep snoozing.",
  sub: "Salamonitor runs a 6-step pipeline over your observability platform - groups recurring errors, investigates each in a sandbox, and lands a tiny, boring GitHub PR with full context.",
};

const VARIANT_OPTIONS = [
  { id: "current", label: "Current" },
  { id: "proof", label: "Proof First" },
  { id: "story", label: "Condensed" },
] satisfies Array<{ id: LandingVariant; label: string }>;

const HERO_SECONDARY_ACTION: Record<LandingVariant, { href: string; label: string }> = {
  current: { href: "#architecture", label: "Read the architecture" },
  proof: { href: "#proof", label: "See the proof" },
  story: { href: "#flow", label: "See the flow" },
};

const LANDING_STATS: MetricItem[] = [
  { value: "412", label: "Errors in a median backlog" },
  { value: "6", label: "Pipeline steps, nightly" },
  { value: "~20m", label: "Per investigation, sandboxed" },
  { value: "0", label: "Raw logs retained" },
];

const PIPELINE_STEPS = [
  {
    num: "01",
    title: "Sees everything",
    desc: "Continuously reads your production error stream. Nothing slips through.",
    icon: "scan",
  },
  {
    num: "02",
    title: "Cuts through the noise",
    desc: "Groups repeats, skips the known, surfaces what actually matters.",
    icon: "filter",
  },
  {
    num: "03",
    title: "Finds the source",
    desc: "Traces each error back through your services to the exact line of code.",
    icon: "trace",
  },
  {
    num: "04",
    title: "Investigates like an engineer",
    desc: "Reasons about root cause in a sandbox. One error at a time.",
    icon: "investigate",
  },
  {
    num: "05",
    title: "Ships the fix",
    desc: "Opens a clean, reviewable pull request with tests and full context.",
    icon: "pr",
  },
  {
    num: "06",
    title: "Gets smarter",
    desc: "Learns from every merge, close, and comment. Tomorrow's PRs are better.",
    icon: "learn",
  },
] satisfies StepItem[];

const PROOF_POINTS = [
  "One recurring error per PR. Small diffs stay mergeable.",
  "Each PR carries the trace, the 24h count, the affected services, and the tests.",
  "You merge, close, or ignore. Memory updates either way.",
];

const BEFORE_RESULTS: ResultItem[] = [
  {
    title: "Recurring errors",
    count: "412",
    detail: "new signatures stacked across 17 services",
  },
  {
    title: "Top offender",
    count: "132",
    detail: "TypeError in api-gateway",
  },
  {
    title: "Trend",
    count: "↑ 23%",
    detail: "week over week",
  },
];

const AFTER_RESULTS: ResultItem[] = [
  {
    title: "New errors",
    count: "3",
    detail: "everything else already triaged",
    tone: "good",
  },
  {
    title: "PRs merged",
    count: "409",
    detail: "tiny fixes shipped without a project",
    tone: "good",
  },
  {
    title: "Trend",
    count: "↓ 95%",
    detail: "noise cut down from the original backlog",
    tone: "good",
  },
];

const FLOW_RESULTS: MetricItem[] = [
  { value: "412", label: "before: recurring errors" },
  { value: "17", label: "services hit" },
  { value: "409", label: "PRs merged" },
  { value: "3", label: "after: net-new errors" },
];

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

export default function Landing({ variant = "current" }: LandingProps) {
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
          <a className="btn" href="#waitlist">
            Join waitlist
          </a>
        </div>
      </header>

      <LandingVariantBar active={variant} />

      {variant === "current" ? <CurrentLanding /> : null}
      {variant === "proof" ? <ProofFirstLanding /> : null}
      {variant === "story" ? <CondensedLanding /> : null}

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

function LandingVariantBar({ active }: { active: LandingVariant }) {
  return (
    <div className="variant-bar" aria-label="Landing page variants">
      <span className="variant-bar-label">Variants</span>
      {VARIANT_OPTIONS.map((option) => {
        const href = option.id === "current" ? "/" : `/${option.id}`;

        return (
          <Link
            key={option.id}
            href={href}
            className={`variant-pill${option.id === active ? " is-active" : ""}`}
            aria-current={option.id === active ? "page" : undefined}
          >
            {option.label}
          </Link>
        );
      })}
    </div>
  );
}

function CurrentLanding() {
  return (
    <main id="top" className="page">
      <HeroSection variant="current" />

      <section id="proof" className="manifesto">
        <ManifestoHeading />

        <div className="ba-grid">
          <div className="ba-col">
            <div className="ba-cap">
              <span className="ba-tag before">Before</span>
              <span className="ba-cap-t">your observability platform on a Tuesday</span>
            </div>
            <div className="obs">
              <div className="obs-head">
                <span className="dot r" />
                <span className="dot y" />
                <span className="dot g" />
                <span className="obs-head-t">errors · production · last 24h</span>
                <span className="live-dot" />
                <span className="obs-head-state live">LIVE</span>
              </div>
              <div className="obs-kpis">
                <div className="kpi">
                  <div className="kpi-n accent-n">412</div>
                  <div className="kpi-l">new errors</div>
                </div>
                <div className="kpi">
                  <div className="kpi-n">2,847</div>
                  <div className="kpi-l">events / hr</div>
                </div>
                <div className="kpi">
                  <div className="kpi-n">17</div>
                  <div className="kpi-l">services hit</div>
                </div>
                <div className="kpi">
                  <div className="kpi-n accent-n">↑ 23%</div>
                  <div className="kpi-l">vs last week</div>
                </div>
              </div>
              <div className="obs-bar tall">
                <svg viewBox="0 0 400 100" preserveAspectRatio="none">
                  <g stroke="var(--theme-color-gridline)" strokeWidth="1">
                    <line x1="0" y1="25" x2="400" y2="25" />
                    <line x1="0" y1="50" x2="400" y2="50" />
                    <line x1="0" y1="75" x2="400" y2="75" />
                  </g>
                  <path
                    d="M0,22 L18,38 L36,14 L54,48 L72,8 L90,42 L108,12 L126,55 L144,18 L162,40 L180,5 L198,30 L216,20 L234,44 L252,10 L270,36 L288,16 L306,52 L324,22 L342,40 L360,14 L378,32 L400,20 L400,100 L0,100 Z"
                    fill="var(--theme-color-chart-accent-fill)"
                    stroke="none"
                  />
                  <path
                    d="M0,22 L18,38 L36,14 L54,48 L72,8 L90,42 L108,12 L126,55 L144,18 L162,40 L180,5 L198,30 L216,20 L234,44 L252,10 L270,36 L288,16 L306,52 L324,22 L342,40 L360,14 L378,32 L400,20"
                    fill="none"
                    stroke="var(--theme-color-chart-accent-stroke)"
                    strokeWidth="1.5"
                  />
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
            <div className="ba-arrow-l">salamonitor</div>
            <svg viewBox="0 0 80 50" width="80" height="50">
              <path
                d="M6 25 Q 40 5 70 25 M58 16 L74 25 L62 36"
                fill="none"
                stroke="var(--ink)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="ba-arrow-l small">2 weeks</div>
          </div>

          <div className="ba-col">
            <div className="ba-cap">
              <span className="ba-tag after">After</span>
              <span className="ba-cap-t">same dashboard, two weeks later</span>
            </div>
            <div className="obs after">
              <div className="obs-head">
                <span className="dot r" />
                <span className="dot y" />
                <span className="dot g" />
                <span className="obs-head-t">errors · production · last 24h</span>
                <span className="live-dot ok" />
                <span className="obs-head-state ok">HEALTHY</span>
              </div>
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
                  <div className="kpi-n ok-n">409</div>
                  <div className="kpi-l">PRs merged</div>
                </div>
                <div className="kpi">
                  <div className="kpi-n ok-n">↓ 95%</div>
                  <div className="kpi-l">vs before</div>
                </div>
              </div>
              <div className="obs-bar tall">
                <svg viewBox="0 0 400 100" preserveAspectRatio="none">
                  <g stroke="var(--theme-color-gridline)" strokeWidth="1">
                    <line x1="0" y1="25" x2="400" y2="25" />
                    <line x1="0" y1="50" x2="400" y2="50" />
                    <line x1="0" y1="75" x2="400" y2="75" />
                  </g>
                  <path
                    d="M0,85 L50,89 L100,83 L150,91 L200,86 L250,90 L300,84 L350,88 L400,86 L400,100 L0,100 Z"
                    fill="var(--theme-color-chart-success-fill)"
                    stroke="none"
                  />
                  <path
                    d="M0,85 L50,89 L100,83 L150,91 L200,86 L250,90 L300,84 L350,88 L400,86"
                    fill="none"
                    stroke="var(--theme-color-chart-success-stroke)"
                    strokeWidth="1.5"
                  />
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
        title="Six quiet steps from error backlog to pull request."
        sub="The product flow is simple on purpose: watch the stream, narrow the problem, trace it to code, investigate in a sandbox, then open one clean PR."
        steps={PIPELINE_STEPS}
      />

      <Pricing />
      <FAQ />
      <WaitlistSection />
    </main>
  );
}

function ProofFirstLanding() {
  return (
    <main id="top" className="page">
      <HeroSection variant="proof" />

      <section id="proof" className="proof-section">
        <div className="proof-copy">
          <div className="eyebrow">Recurring error → pull request</div>
          <h2 className="proof-h2">One recurring error becomes one small GitHub PR.</h2>
          <p className="proof-p">
            The second screen should answer the only question that matters: what lands in GitHub? Start with the artifact, show the scope, then explain the system behind it.
          </p>
          <ul className="proof-list">
            {PROOF_POINTS.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <MiniStats stats={LANDING_STATS} />
        </div>

        <div className="proof-stack">
          <CompactIssueCard />
          <ArchitecturePrCard />
        </div>
      </section>

      <PipelineSection
        id="how"
        eyebrow="How it works"
        title="The flow stays tight: find the error, trace it, ship the fix."
        sub="The page only expands once the core promise is proven. After that, the six-step pipeline explains how Salamonitor gets from noisy backlog to reviewable pull request without asking your team to babysit it."
        steps={PIPELINE_STEPS}
      />

      <ResultsSection />
      <Pricing />
      <FAQ />
      <WaitlistSection />
    </main>
  );
}

function CondensedLanding() {
  return (
    <main id="top" className="page">
      <HeroSection variant="story" />

      <section id="proof" className="flow-section">
        <div className="pipeline-copy">
          <div className="eyebrow">The whole product in one pass</div>
          <h2 className="flow-h2">Watch the backlog. Investigate in a sandbox. Open the PR.</h2>
          <p className="pipeline-sub">
            No giant dashboard and no text sandwich. The first scroll tells the full story, then the rest of the page adds detail for people who want it.
          </p>
        </div>

        <div id="flow" className="storyboard">
          <StoryCard
            step="01"
            title="Watch the stream"
            desc="Recurring signatures are grouped so 412 paper-cuts become a ranked queue instead of background noise."
          >
            <CompactIssueCard tone="inline" />
          </StoryCard>
          <StoryCard
            step="02"
            title="Investigate in a sandbox"
            desc="Each group gets its own isolated run with traces, affected services, and a root-cause pass."
          >
            <SandboxCard />
          </StoryCard>
          <StoryCard
            step="03"
            title="Open the small PR"
            desc="Salamonitor lands a tiny, reviewable fix with tests, labels, and enough context to merge or close fast."
          >
            <MiniPrCard />
          </StoryCard>
        </div>

        <div className="flow-results">
          {FLOW_RESULTS.map((item) => (
            <div className="flow-result" key={item.label}>
              <div className="flow-result-value">{item.value}</div>
              <div className="flow-result-label">{item.label}</div>
            </div>
          ))}
        </div>

        <p className="flow-note">
          You do not prompt it. You connect observability plus GitHub, and the loop runs nightly. You merge, close, or ignore. Memory updates either way.
        </p>
      </section>

      <PipelineSection
        id="how"
        eyebrow="The six-step pipeline"
        title="The second screen gets the gist. This section proves the machinery."
        sub="The sequence is still the same: read the stream, narrow the problem, trace it to code, investigate in a sandbox, then open one quiet PR."
        steps={PIPELINE_STEPS}
      />

      <ResultsSection compact />
      <Pricing />
      <FAQ />
      <WaitlistSection />
    </main>
  );
}

function HeroSection({ variant }: { variant: LandingVariant }) {
  const secondaryAction = HERO_SECONDARY_ACTION[variant];

  return (
    <section className="hero">
      <span className="metabadge">{META_BADGE}</span>
      <h1 dangerouslySetInnerHTML={{ __html: HERO_COPY.h1 }} />
      <p className="hero-sub">{HERO_COPY.sub}</p>
      <div className="ctas">
        <a href="#waitlist" className="btn accent">
          Join the waitlist →
        </a>
        <a href={secondaryAction.href} className="btn ghost">
          {secondaryAction.label}
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
  return (
    <div className={`stats${className ? ` ${className}` : ""}`}>
      {LANDING_STATS.map((stat) => (
        <div className="st" key={stat.label}>
          <div className="n">{stat.value}</div>
          <div className="l">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

function MiniStats({ stats }: { stats: MetricItem[] }) {
  return (
    <div className="mini-stats">
      {stats.map((stat) => (
        <div className="mini-stat" key={stat.label}>
          <span className="mini-stat-value">{stat.value}</span>
          <span className="mini-stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

type PipelineSectionProps = {
  eyebrow: string;
  title: string;
  sub: string;
  steps: StepItem[];
  id?: string;
};

function PipelineSection({ eyebrow, title, sub, steps, id }: PipelineSectionProps) {
  return (
    <section id={id} className="pipeline-section">
      <div className="pipeline-copy">
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="pipeline-h2">{title}</h2>
        <p className="pipeline-sub">{sub}</p>
      </div>

      <div className="pipeline">
        {steps.map((step) => (
          <StepCard key={step.num} step={step} />
        ))}
      </div>
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
    case "filter":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6.5h16l-6.4 7.1v4.6l-3.2-1.8v-2.8L4 6.5Z" />
          <path d="M9 6.5 7.4 4.9M15 6.5l1.6-1.6" />
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
    case "learn":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 4.5a7.5 7.5 0 1 1-6.2 3.3" />
          <path d="M4.6 5v4.8h4.8" />
          <path d="M12 8.5v3.4l2.6 1.6" />
        </svg>
      );
  }
}

function CompactIssueCard({ tone = "card" }: { tone?: "card" | "inline" }) {
  return (
    <div className={`issue-card${tone === "inline" ? " issue-card-inline" : ""}`}>
      <div className="issue-card-top">
        <span className="label">Recurring signature</span>
        <span className="issue-card-count">132 in 24h</span>
      </div>
      <div className="issue-card-title">TypeError: cannot read &#39;sub&#39; of undefined</div>
      <div className="issue-card-meta">
        <span>api-gateway</span>
        <span>17 services touched</span>
        <span>trace linked</span>
      </div>
      <div className="issue-card-body">
        The system groups repeats, skips known noise, and picks one error worth a tiny PR instead of asking you to stare at another dashboard.
      </div>
    </div>
  );
}

function SandboxCard() {
  return (
    <div className="sandbox-card">
      <div className="sandbox-head">
        <span className="label">sandbox run_2041</span>
        <span>~20m</span>
      </div>
      <ul className="sandbox-list">
        <li>Grouped 41 matching events</li>
        <li>Traced auth fallback path</li>
        <li>Reproduced null idempotency key</li>
        <li>Drafted fix and regression test</li>
      </ul>
    </div>
  );
}

function MiniPrCard() {
  return (
    <div className="mini-pr">
      <div className="mini-pr-top">
        <span className="label">PR #4821</span>
        <span>+8 / -3</span>
      </div>
      <div className="mini-pr-title">fix(stripe): guard webhook replay when idempotency_key is null</div>
      <div className="mini-pr-copy">Small diff. Tests added. Full trace attached. Ready to merge, close, or ignore.</div>
      <div className="mini-pr-tags">
        <span className="label">paper-cut</span>
        <span className="label">auto</span>
        <span className="label">tests pass</span>
      </div>
    </div>
  );
}

function ArchitecturePrCard() {
  return (
    <div className="pr">
      <div className="pr-head">
        <span className="dot r" />
        <span className="dot y" />
        <span className="dot g" />
        <span className="pr-head-t">github.com / acme / billing-svc · PR #4821</span>
      </div>
      <div className="pr-title">
        <div className="tt">fix(stripe): guard webhook replay when idempotency_key is null</div>
        <div className="meta">
          salamonitor-bot wants to merge 1 commit · opened 03:41 UTC · +8 / -3 · <span className="label">paper-cut</span>{" "}
          <span className="label">auto</span>
        </div>
      </div>
      <div className="pr-body">
        <div className="hunk">
          <span className="ctx">  def handle_webhook(event):</span>
          <span className="del">-     key = event[&quot;idempotency_key&quot;]</span>
          <span className="add">+     key = event.get(&quot;idempotency_key&quot;)</span>
          <span className="add">+     if key is None:</span>
          <span className="add">+         return SKIP</span>
          <span className="ctx">      if replay_store.seen(key):</span>
        </div>
        <div>
          Error signature <b>err_8a3e…2b</b> · 41 occurrences / 24h · services: <b>billing-svc</b>
        </div>
      </div>
      <div className="pr-foot">
        <span className="label">✓ tests pass</span>
        <span className="label">✓ lint</span>
        <span>salamonitor · run_2041</span>
      </div>
    </div>
  );
}

function ResultsSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`results-section${compact ? " results-section-compact" : ""}`}>
      <div className="pipeline-copy">
        <div className="eyebrow">What changes after two weeks</div>
        <h2 className="results-h2">Same backlog. Less noise. A pile of tiny merged fixes.</h2>
        <p className="pipeline-sub">
          This keeps the before/after proof from the original page, but in a tighter shape: less spectacle, more evidence.
        </p>
      </div>

      <div className="results-grid">
        <ResultCard badge="Before" title="Your observability dashboard on a Tuesday" items={BEFORE_RESULTS} />
        <ResultCard badge="After" title="Same system, two weeks later" items={AFTER_RESULTS} success />
      </div>
    </section>
  );
}

function ResultCard({
  badge,
  title,
  items,
  success = false,
}: {
  badge: string;
  title: string;
  items: ResultItem[];
  success?: boolean;
}) {
  return (
    <div className={`result-card${success ? " is-success" : ""}`}>
      <div className="result-head">
        <span className={`ba-tag ${success ? "after" : "before"}`}>{badge}</span>
        <span className="result-title">{title}</span>
      </div>
      <div className="result-list">
        {items.map((item) => (
          <div className={`result-row${item.tone === "good" ? " is-good" : ""}`} key={item.title}>
            <div>
              <div className="result-row-title">{item.title}</div>
              <div className="result-row-detail">{item.detail}</div>
            </div>
            <div className="result-row-count">{item.count}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StoryCard({
  step,
  title,
  desc,
  children,
}: {
  step: string;
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <div className="story-card">
      <div className="story-card-top">
        <span className="story-step">{step}</span>
        <span className="label">quiet loop</span>
      </div>
      <div className="story-card-title">{title}</div>
      <p className="story-card-desc">{desc}</p>
      <div className="story-card-visual">{children}</div>
    </div>
  );
}

function Pricing() {
  return (
    <section id="pricing">
      <div className="eyebrow">Pricing</div>
      <h2>Three lines. No seat tax.</h2>
      <div className="pricing">
        <div className="tier">
          <div className="tname">Starter</div>
          <div className="price">
            $0<small> · 30 days</small>
          </div>
          <ul>
            <li>1 repo, 20 PRs</li>
            <li>Observability + GitHub</li>
            <li>Slack notifications</li>
          </ul>
          <a className="btn ghost" href="#waitlist">
            Start free
          </a>
        </div>
        <div className="tier hi">
          <div className="ribbon">Most teams</div>
          <div className="tname">Team</div>
          <div className="price">
            $499<small> /mo + $20 per merged PR</small>
          </div>
          <ul>
            <li>10 repos</li>
            <li>Vault-backed secrets</li>
            <li>Long-term memory of outcomes</li>
          </ul>
          <a className="btn accent" href="#waitlist">
            Join waitlist
          </a>
        </div>
        <div className="tier">
          <div className="tname">Platform</div>
          <div className="price">Talk</div>
          <ul>
            <li>Unlimited repos</li>
            <li>Dedicated Temporal ns</li>
            <li>SSO · audit export · SLA</li>
          </ul>
          <a className="btn ghost" href="#waitlist">
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="faq">
      <div className="eyebrow">Frequently asked</div>
      <h2>The honest answers.</h2>
      <div className="faq-list">
        {FAQ_ITEMS.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <div className="a">{item.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}

function WaitlistSection() {
  return (
    <section id="waitlist">
      <h2>It&#39;s ready. Is your backlog?</h2>
      <div className="ctas">
        <a className="btn accent" href="#top">
          Join the waitlist →
        </a>
        <a className="btn ghost" href="#top">
          Read the docs
        </a>
      </div>
    </section>
  );
}
