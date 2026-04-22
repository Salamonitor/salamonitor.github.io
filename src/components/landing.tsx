const META_BADGE = "The manager of your infra";

const HERO_COPY = {
  h1: 'We ship the PRs <em>you</em> keep snoozing.',
  sub: "Salamonitor runs a 6-step pipeline over your observability platform — groups recurring errors, investigates each in a sandbox, and lands a tiny, boring GitHub PR with full context.",
};

const HOW_COPY = {
  eyebrow: "Errors → pull requests",
  h2: "One error in. One PR out.",
  sub: "Salamonitor turns a recurring error signature into a tiny, context-rich pull request: the fix, the trace, the affected services, the tests. Merge it, close it, or ignore it — we learn either way.",
};

export default function Landing() {
  return (
    <>
      <header className="topnav">
        <a href="#top" className="brand" aria-label="Salamonitor — home">
          <span className="mark">S</span>
          <span className="brand-word">Salamonitor</span>
        </a>
        <nav aria-label="Primary">
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#docs">Docs</a>
        </nav>
        <div className="right">
          <a className="btn" href="#waitlist">
            Join waitlist
          </a>
        </div>
      </header>

      <main id="top" className="page">
        <section className="hero">
          <span className="metabadge">{META_BADGE}</span>
          <h1 dangerouslySetInnerHTML={{ __html: HERO_COPY.h1 }} />
          <p className="hero-sub">{HERO_COPY.sub}</p>
          <div className="ctas">
            <a href="#waitlist" className="btn accent">
              Join the waitlist →
            </a>
            <a href="#arch" className="btn ghost">
              Read the architecture
            </a>
          </div>
        </section>

        <section className="manifesto">
          <h2 className="ba-lede">You have a backlog of 412 low-priority errors. Nobody is going to touch them.</h2>

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
                  <div className="kpi"><div className="kpi-n accent-n">412</div><div className="kpi-l">new errors</div></div>
                  <div className="kpi"><div className="kpi-n">2,847</div><div className="kpi-l">events / hr</div></div>
                  <div className="kpi"><div className="kpi-n">17</div><div className="kpi-l">services hit</div></div>
                  <div className="kpi"><div className="kpi-n accent-n">↑ 23%</div><div className="kpi-l">vs last week</div></div>
                </div>
                <div className="obs-bar tall">
                  <svg viewBox="0 0 400 100" preserveAspectRatio="none">
                    <g stroke="var(--theme-color-gridline)" strokeWidth="1">
                      <line x1="0" y1="25" x2="400" y2="25" /><line x1="0" y1="50" x2="400" y2="50" /><line x1="0" y1="75" x2="400" y2="75" />
                    </g>
                    <path d="M0,22 L18,38 L36,14 L54,48 L72,8 L90,42 L108,12 L126,55 L144,18 L162,40 L180,5 L198,30 L216,20 L234,44 L252,10 L270,36 L288,16 L306,52 L324,22 L342,40 L360,14 L378,32 L400,20 L400,100 L0,100 Z" fill="var(--theme-color-chart-accent-fill)" stroke="none" />
                    <path d="M0,22 L18,38 L36,14 L54,48 L72,8 L90,42 L108,12 L126,55 L144,18 L162,40 L180,5 L198,30 L216,20 L234,44 L252,10 L270,36 L288,16 L306,52 L324,22 L342,40 L360,14 L378,32 L400,20" fill="none" stroke="var(--theme-color-chart-accent-stroke)" strokeWidth="1.5" />
                    <g fontFamily="var(--mono)" fontSize="8" fill="var(--muted)">
                      <text x="2" y="98">00:00</text><text x="180" y="98">12:00</text><text x="370" y="98">24:00</text>
                    </g>
                  </svg>
                </div>
                <div className="obs-rows">
                  <div className="row-e sev-hi"><span className="bd">■</span><span className="msg"><span>TypeError: cannot read &#39;sub&#39; of undefined</span><span className="svc">api-gateway</span></span><span className="cnt">132</span></div>
                  <div className="row-e sev-hi"><span className="bd">■</span><span className="msg"><span>StripeError: idempotency_key required</span><span className="svc">billing</span></span><span className="cnt">87</span></div>
                  <div className="row-e sev-md"><span className="bd">■</span><span className="msg"><span>Timeout waiting for pg pool (5000ms)</span><span className="svc">orders</span></span><span className="cnt">64</span></div>
                  <div className="row-e sev-md"><span className="bd">■</span><span className="msg"><span>KeyError: &#39;user_id&#39; in webhook payload</span><span className="svc">webhooks</span></span><span className="cnt">41</span></div>
                  <div className="row-e sev-lo"><span className="bd">■</span><span className="msg"><span>DeprecationWarning: legacy.decode()</span><span className="svc">workers</span></span><span className="cnt">29</span></div>
                  <div className="row-e sev-lo"><span className="bd">■</span><span className="msg"><span>ConnectionReset on upstream /internal/v2</span><span className="svc">edge</span></span><span className="cnt">22</span></div>
                  <div className="row-e sev-lo ghost"><span className="bd">■</span><span className="msg"><span>+ 399 more recurring errors…</span></span><span className="cnt">…</span></div>
                </div>
              </div>
            </div>

            <div className="ba-arrow" aria-hidden="true">
              <div className="ba-arrow-l">salamonitor</div>
              <svg viewBox="0 0 80 50" width="80" height="50">
                <path d="M6 25 Q 40 5 70 25 M58 16 L74 25 L62 36" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                  <span className="dot r" /><span className="dot y" /><span className="dot g" />
                  <span className="obs-head-t">errors · production · last 24h</span>
                  <span className="live-dot ok" />
                  <span className="obs-head-state ok">HEALTHY</span>
                </div>
                <div className="obs-kpis">
                  <div className="kpi"><div className="kpi-n ok-n">3</div><div className="kpi-l">new errors</div></div>
                  <div className="kpi"><div className="kpi-n">142</div><div className="kpi-l">events / hr</div></div>
                  <div className="kpi"><div className="kpi-n ok-n">409</div><div className="kpi-l">PRs merged</div></div>
                  <div className="kpi"><div className="kpi-n ok-n">↓ 95%</div><div className="kpi-l">vs before</div></div>
                </div>
                <div className="obs-bar tall">
                  <svg viewBox="0 0 400 100" preserveAspectRatio="none">
                    <g stroke="var(--theme-color-gridline)" strokeWidth="1">
                      <line x1="0" y1="25" x2="400" y2="25" /><line x1="0" y1="50" x2="400" y2="50" /><line x1="0" y1="75" x2="400" y2="75" />
                    </g>
                    <path d="M0,85 L50,89 L100,83 L150,91 L200,86 L250,90 L300,84 L350,88 L400,86 L400,100 L0,100 Z" fill="var(--theme-color-chart-success-fill)" stroke="none" />
                    <path d="M0,85 L50,89 L100,83 L150,91 L200,86 L250,90 L300,84 L350,88 L400,86" fill="none" stroke="var(--theme-color-chart-success-stroke)" strokeWidth="1.5" />
                    <g fontFamily="var(--mono)" fontSize="8" fill="var(--muted)">
                      <text x="2" y="98">00:00</text><text x="180" y="98">12:00</text><text x="370" y="98">24:00</text>
                    </g>
                  </svg>
                </div>
                <div className="obs-rows">
                  <div className="row-e sev-md"><span className="bd">■</span><span className="msg"><span>RateLimit: external_api/v3</span><span className="svc new">new</span></span><span className="cnt">7</span></div>
                  <div className="row-e sev-lo"><span className="bd">■</span><span className="msg"><span>FlakyTest: order_spec.rb:42</span><span className="svc">tests</span></span><span className="cnt">3</span></div>
                  <div className="row-e fixed"><span className="bd">✓</span><span className="msg"><span>TypeError: cannot read &#39;sub&#39; of undefined</span><span className="svc pr">PR #412 merged</span></span><span className="cnt">−0</span></div>
                  <div className="row-e fixed"><span className="bd">✓</span><span className="msg"><span>StripeError: idempotency_key required</span><span className="svc pr">PR #411 merged</span></span><span className="cnt">−0</span></div>
                  <div className="row-e fixed"><span className="bd">✓</span><span className="msg"><span>Timeout waiting for pg pool (5000ms)</span><span className="svc pr">PR #408 merged</span></span><span className="cnt">−0</span></div>
                  <div className="row-e fixed"><span className="bd">✓</span><span className="msg"><span>KeyError: &#39;user_id&#39; in webhook payload</span><span className="svc pr">PR #404 merged</span></span><span className="cnt">−0</span></div>
                  <div className="row-e empty ghost"><span className="bd"> </span><span className="msg"><span>— quiet —</span></span><span className="cnt"> </span></div>
                </div>
              </div>
            </div>
          </div>

          <p className="ba-body">
            Salamonitor does. Every night it reads your observability platform, groups errors by signature, spins up a sandboxed agent per group, and opens a PR with the fix, the trace, and the blast radius. You merge, close, or ignore.
          </p>

          <div className="stats ba-stats">
            <div className="st"><div className="n">412</div><div className="l">Errors in a median backlog</div></div>
            <div className="st"><div className="n">6</div><div className="l">Pipeline steps, nightly</div></div>
            <div className="st"><div className="n">~20m</div><div className="l">Per investigation, sandboxed</div></div>
            <div className="st"><div className="n">0</div><div className="l">Raw logs retained</div></div>
          </div>
        </section>

        <section id="arch">
          <div className="arch-grid">
            <div>
              <div className="eyebrow">{HOW_COPY.eyebrow}</div>
              <h2 className="arch-h2">{HOW_COPY.h2}</h2>
              <p className="arch-p">{HOW_COPY.sub}</p>
              <ul className="arch-list">
                <li>▪ Small, scoped diffs. One recurring error per PR.</li>
                <li>▪ Context: error signature, 24h occurrence count, affected services, trace link.</li>
                <li>▪ Tests added. Lint clean before it&#39;s opened.</li>
                <li>▪ Labeled <span className="label">paper-cut</span> <span className="label">auto</span>. Easy to filter out.</li>
                <li>▪ You merge, close, or ignore. Memory updates either way.</li>
              </ul>
            </div>

            <div className="pr">
              <div className="pr-head">
                <span className="dot r" /><span className="dot y" /><span className="dot g" />
                <span className="pr-head-t">github.com / acme / billing-svc · PR #4821</span>
              </div>
              <div className="pr-title">
                <div className="tt">fix(stripe): guard webhook replay when idempotency_key is null</div>
                <div className="meta">
                  salamonitor-bot wants to merge 1 commit · opened 03:41 UTC · +8 / −3 ·{" "}
                  <span className="label">paper-cut</span> <span className="label">auto</span>
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
          </div>

          <div className="arch-pipeline-head eyebrow">What it actually does</div>
          <div className="pipeline">
            <div className="step"><span className="num">01</span><span className="t">Sees everything</span><span className="d">Continuously reads your production error stream. Nothing slips through.</span></div>
            <div className="step"><span className="num">02</span><span className="t">Cuts through the noise</span><span className="d">Groups repeats, skips the known, surfaces what actually matters.</span></div>
            <div className="step"><span className="num">03</span><span className="t">Finds the source</span><span className="d">Traces each error back through your services to the exact line of code.</span></div>
            <div className="step"><span className="num">04</span><span className="t">Investigates like an engineer</span><span className="d">Reasons about root cause in a sandbox. One error at a time.</span></div>
            <div className="step"><span className="num">05</span><span className="t">Ships the fix</span><span className="d">Opens a clean, reviewable pull request with tests and full context.</span></div>
            <div className="step"><span className="num">06</span><span className="t">Gets smarter</span><span className="d">Learns from every merge, close, and comment. Tomorrow&#39;s PRs are better.</span></div>
          </div>
        </section>

        <Pricing />
        <FAQ />

        <section id="waitlist">
          <h2>It&#39;s ready. Is your backlog?</h2>
          <div className="ctas">
            <a className="btn accent" href="#">Join the waitlist →</a>
            <a className="btn ghost" href="#">Read the docs</a>
          </div>
        </section>
      </main>

      <footer>
        <div className="grow">Salamonitor · the manager of your infra · est. 2026</div>
        <div>docs</div><div>changelog</div><div>security</div><div>privacy</div>
        <div>hello@salamonitor.dev</div>
      </footer>
    </>
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
          <div className="price">$0<small> · 30 days</small></div>
          <ul><li>1 repo, 20 PRs</li><li>Observability + GitHub</li><li>Slack notifications</li></ul>
          <a className="btn ghost" href="#waitlist">Start free</a>
        </div>
        <div className="tier hi">
          <div className="ribbon">Most teams</div>
          <div className="tname">Team</div>
          <div className="price">$499<small> /mo + $20 per merged PR</small></div>
          <ul><li>10 repos</li><li>Vault-backed secrets</li><li>Long-term memory of outcomes</li></ul>
          <a className="btn accent" href="#waitlist">Join waitlist</a>
        </div>
        <div className="tier">
          <div className="tname">Platform</div>
          <div className="price">Talk</div>
          <ul><li>Unlimited repos</li><li>Dedicated Temporal ns</li><li>SSO · audit export · SLA</li></ul>
          <a className="btn ghost" href="#waitlist">Talk to us</a>
        </div>
      </div>
    </section>
  );
}

type FAQItem = { q: string; a: string };
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
    a: "Read access to your observability platform (Sentry, Datadog, Honeycomb, etc.), and a GitHub App scoped to the repos you choose. No raw logs are retained — only error signatures and the outcomes of past PRs.",
  },
  {
    q: "How is this different from Copilot, Cursor, or other coding agents?",
    a: "Those tools wait for you to start. Salamonitor starts on its own — from the actual errors your users are hitting in production. It's a manager, not an assistant. You don't prompt it; it ships work to your inbox.",
  },
  {
    q: "What about errors it can't fix?",
    a: "It tells you. Each investigation ends with one of: \"opened PR\", \"needs human—here's what I found\", or \"already fixed in #N\". You always know why a thing did or didn't ship.",
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
    a: "You close the PR, optionally with a comment. Salamonitor remembers the outcome and won't pitch a similar fix again. The system gets better at your codebase over time — not better at \"coding\" in general.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="faq">
      <div className="eyebrow">Frequently asked</div>
      <h2>The honest answers.</h2>
      <div className="faq-list">
        {FAQ_ITEMS.map((item, i) => (
          <details key={i}>
            <summary>{item.q}</summary>
            <div className="a">{item.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
