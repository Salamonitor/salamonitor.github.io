"use client";

import { useState } from "react";

type Variant = "B" | "C";
type Metaphor = "manager" | "janitor" | "monitor" | "salamander";

const META: Record<Metaphor, { badge: string; word: string }> = {
  manager: { badge: "The manager of your infra", word: "manager" },
  janitor: { badge: "The janitor of your infra", word: "janitor" },
  monitor: { badge: "The night-watch for your infra", word: "watch" },
  salamander: { badge: "Salamonitor · the salamander in your stack", word: "salamander" },
};

const COPY: Record<Variant, { h1: string; sub: string }[]> = {
  B: [
    {
      h1: 'We ship the PRs <em>you</em> keep snoozing.',
      sub: "Salamonitor runs a 6-step pipeline over your observability platform — groups recurring errors, investigates each in a sandbox, and lands a tiny, boring GitHub PR with full context.",
    },
    {
      h1: "Six steps from a logged error to a merged PR.",
      sub: "Scan, dedupe, locate, investigate, patch, learn. On cron. Per tenant. Audit-logged.",
    },
    {
      h1: "Stop ignoring your error budget.",
      sub: "Salamonitor turns recurring low-priority errors from your observability platform into small, reviewable pull requests with full blast radius and triage context.",
    },
  ],
  C: [
    {
      h1: 'We ship the PRs <em>you</em> keep snoozing.',
      sub: "Salamonitor reads your observability platform, finds the errors nobody owns, and files a tiny, reviewable PR. Merge it, don't, or close it — we learn either way.",
    },
    {
      h1: 'One less <em>paper-cut</em> per night.',
      sub: "Every night, Salamonitor picks a recurring error from your observability platform, investigates it in a sandbox, and opens a context-rich pull request. Nothing more.",
    },
    {
      h1: "Errors in. Pull requests out.",
      sub: "Salamonitor is the thin, boring layer between your observability platform and your repo. No agents screaming. No dashboards to babysit.",
    },
  ],
};

const HOW = [
  {
    eyebrow: "How it works · the pipeline",
    h2: "Six quiet things, on a schedule.",
    sub: "Wake up, sweep your observability platform, group repeats, investigate in a sandbox, open a PR with context, ping Slack, remember what happened. Repeat tomorrow.",
  },
  {
    eyebrow: "How it works",
    h2: "It runs while you sleep.",
    sub: "Every night Salamonitor walks your observability platform, picks the recurring errors nobody has touched, and opens a small pull request against the right repo. You wake up to a reviewable diff, not another page.",
  },
  {
    eyebrow: "The pipeline",
    h2: "Boring on purpose.",
    sub: "Six steps. Same ones every night. Scan, dedupe, locate, investigate, patch, learn. Each runs in isolation — one recurring error, one sandbox, one PR — so nothing surprises you at 4am.",
  },
  {
    eyebrow: "Errors → pull requests",
    h2: "One error in. One PR out.",
    sub: "Salamonitor turns a recurring error signature into a tiny, context-rich pull request: the fix, the trace, the affected services, the tests. Merge it, close it, or ignore it — we learn either way.",
  },
  {
    eyebrow: "The job",
    h2: "No heroics. No dashboards to babysit.",
    sub: "Salamonitor is the thin, boring layer between your observability and your repo. It finds paper-cuts, fixes them in a sandbox, and files the PR. That is the whole product.",
  },
];

export default function Landing() {
  const [variant, setVariant] = useState<Variant>("B");
  const [metaphor, setMetaphor] = useState<Metaphor>("manager");
  const [heroCopy, setHeroCopy] = useState(0);
  const [howCopy, setHowCopy] = useState(3);
  const [tweaksOpen, setTweaksOpen] = useState(false);

  const meta = META[metaphor];
  const vCopy = COPY[variant];
  const c = vCopy[Math.min(heroCopy, vCopy.length - 1)];
  const h = HOW[Math.min(howCopy, HOW.length - 1)];

  return (
    <>
      <div className="topnav">
        <div className="brand">
          <span className="mark">S</span> Salamonitor
        </div>
        <nav>
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#docs">Docs</a>
          <a href="#changelog">Changelog</a>
        </nav>
        <div className="right">
          <div className="vtabs" role="tablist" aria-label="Wireframe variant">
            <button
              className={variant === "B" ? "on" : ""}
              onClick={() => setVariant("B")}
            >
              B · Pipeline
            </button>
            <button
              className={variant === "C" ? "on" : ""}
              onClick={() => setVariant("C")}
            >
              C · PR-hero
            </button>
          </div>
          <a className="btn" href="#waitlist">
            Join waitlist
          </a>
        </div>
      </div>

      <div className="page">
        {/* Variant B — Pipeline-forward */}
        <div className={`variant B${variant === "B" ? " on" : ""}`}>
          <section className="hero">
            <span className="metabadge">{meta.badge}</span>
            <h1 dangerouslySetInnerHTML={{ __html: c.h1 }} />
            <p style={{ maxWidth: "62ch" }}>{c.sub}</p>
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
                    <span style={{ marginLeft: 10, fontFamily: "var(--mono)", fontSize: 11 }}>
                      errors · production · last 24h
                    </span>
                    <span className="live-dot" />
                    <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--accent)", fontWeight: 700, marginLeft: 4 }}>
                      LIVE
                    </span>
                  </div>
                  <div className="obs-kpis">
                    <div className="kpi"><div className="kpi-n" style={{ color: "var(--accent)" }}>412</div><div className="kpi-l">new errors</div></div>
                    <div className="kpi"><div className="kpi-n">2,847</div><div className="kpi-l">events / hr</div></div>
                    <div className="kpi"><div className="kpi-n">17</div><div className="kpi-l">services hit</div></div>
                    <div className="kpi"><div className="kpi-n" style={{ color: "var(--accent)" }}>↑ 23%</div><div className="kpi-l">vs last week</div></div>
                  </div>
                  <div className="obs-bar tall">
                    <svg viewBox="0 0 400 100" preserveAspectRatio="none">
                      <g stroke="rgba(0,0,0,.06)" strokeWidth="1">
                        <line x1="0" y1="25" x2="400" y2="25" /><line x1="0" y1="50" x2="400" y2="50" /><line x1="0" y1="75" x2="400" y2="75" />
                      </g>
                      <g fill="rgba(217,79,42,.55)">
                        <rect x="4" y="60" width="14" height="40" /><rect x="22" y="50" width="14" height="50" />
                        <rect x="40" y="56" width="14" height="44" /><rect x="58" y="38" width="14" height="62" />
                        <rect x="76" y="44" width="14" height="56" /><rect x="94" y="28" width="14" height="72" />
                        <rect x="112" y="36" width="14" height="64" /><rect x="130" y="22" width="14" height="78" />
                        <rect x="148" y="30" width="14" height="70" /><rect x="166" y="14" width="14" height="86" />
                        <rect x="184" y="20" width="14" height="80" /><rect x="202" y="8" width="14" height="92" />
                        <rect x="220" y="16" width="14" height="84" /><rect x="238" y="24" width="14" height="76" />
                        <rect x="256" y="18" width="14" height="82" /><rect x="274" y="30" width="14" height="70" />
                        <rect x="292" y="22" width="14" height="78" /><rect x="310" y="34" width="14" height="66" />
                        <rect x="328" y="26" width="14" height="74" /><rect x="346" y="38" width="14" height="62" />
                        <rect x="364" y="30" width="14" height="70" /><rect x="382" y="42" width="14" height="58" />
                      </g>
                      <g fontFamily="JetBrains Mono" fontSize="8" fill="#8a857a">
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
                  <path d="M6 25 Q 40 5 70 25 M58 16 L74 25 L62 36" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                    <span style={{ marginLeft: 10, fontFamily: "var(--mono)", fontSize: 11 }}>errors · production · last 24h</span>
                    <span className="live-dot ok" />
                    <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "#2f7a3d", fontWeight: 700, marginLeft: 4 }}>HEALTHY</span>
                  </div>
                  <div className="obs-kpis">
                    <div className="kpi"><div className="kpi-n" style={{ color: "#2f7a3d" }}>3</div><div className="kpi-l">new errors</div></div>
                    <div className="kpi"><div className="kpi-n">142</div><div className="kpi-l">events / hr</div></div>
                    <div className="kpi"><div className="kpi-n" style={{ color: "#2f7a3d" }}>409</div><div className="kpi-l">PRs merged</div></div>
                    <div className="kpi"><div className="kpi-n" style={{ color: "#2f7a3d" }}>↓ 95%</div><div className="kpi-l">vs before</div></div>
                  </div>
                  <div className="obs-bar tall">
                    <svg viewBox="0 0 400 100" preserveAspectRatio="none">
                      <g stroke="rgba(0,0,0,.06)" strokeWidth="1">
                        <line x1="0" y1="25" x2="400" y2="25" /><line x1="0" y1="50" x2="400" y2="50" /><line x1="0" y1="75" x2="400" y2="75" />
                      </g>
                      <path d="M0,12 Q60,18 100,40 Q160,70 220,86 Q300,94 400,96" fill="none" stroke="#2f7a3d" strokeWidth="2" />
                      <path d="M0,12 Q60,18 100,40 Q160,70 220,86 Q300,94 400,96 L400,100 L0,100 Z" fill="rgba(47,122,61,.18)" stroke="none" />
                      <g fill="#2f7a3d">
                        <circle cx="40" cy="15" r="3" /><circle cx="90" cy="36" r="3" />
                        <circle cx="150" cy="66" r="3" /><circle cx="220" cy="86" r="3" />
                        <circle cx="310" cy="94" r="3" /><circle cx="380" cy="96" r="3" />
                      </g>
                      <g fontFamily="JetBrains Mono" fontSize="8" fill="#8a857a">
                        <text x="2" y="98">Day 1</text><text x="180" y="98">Day 7</text><text x="360" y="98">Day 14</text>
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

            <div className="ba-text">
              <h2>You have a backlog of 412 low-priority errors. Nobody is going to touch them.</h2>
              <div>
                <p style={{ fontSize: 20 }}>
                  Salamonitor does. Every night it reads your observability platform, groups errors by signature, spins up a sandboxed agent per group, and opens a PR with the fix, the trace, and the blast radius. You merge, close, or ignore.
                </p>
              </div>
              <div className="stats" style={{ gridTemplateColumns: "repeat(4,1fr)", marginTop: 30 }}>
                <div className="st"><div className="n">412</div><div className="l">Errors in a median backlog</div></div>
                <div className="st"><div className="n">6</div><div className="l">Pipeline steps, nightly</div></div>
                <div className="st"><div className="n">~20m</div><div className="l">Per investigation, sandboxed</div></div>
                <div className="st"><div className="n">0</div><div className="l">Raw logs retained</div></div>
              </div>
            </div>
          </section>

          <section id="arch">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 28, alignItems: "start" }}>
              <div>
                <div className="eyebrow">{h.eyebrow}</div>
                <h2 style={{ marginBottom: 14 }}>{h.h2}</h2>
                <p style={{ marginBottom: 18 }}>{h.sub}</p>
                <ul style={{ padding: 0, margin: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8, fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink)" }}>
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
                  <span style={{ marginLeft: 10 }}>github.com / acme / billing-svc · PR #4821</span>
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

            <div style={{ marginTop: 40 }} className="eyebrow">What it actually does</div>
            <div className="pipeline">
              <div className="step"><span className="num">01</span><span className="t">Sees everything</span><span className="d">Continuously reads your production error stream. Nothing slips through.</span></div>
              <div className="step"><span className="num">02</span><span className="t">Cuts through the noise</span><span className="d">Groups repeats, skips the known, surfaces what actually matters.</span></div>
              <div className="step"><span className="num">03</span><span className="t">Finds the source</span><span className="d">Traces each error back through your services to the exact line of code.</span></div>
              <div className="step"><span className="num">04</span><span className="t">Investigates like an engineer</span><span className="d">Reasons about root cause in a sandbox. One error at a time.</span></div>
              <div className="step"><span className="num">05</span><span className="t">Ships the fix</span><span className="d">Opens a clean, reviewable pull request with tests and full context.</span></div>
              <div className="step"><span className="num">06</span><span className="t">Gets smarter</span><span className="d">Learns from every merge, close, and comment. Tomorrow&#39;s PRs are better.</span></div>
            </div>
          </section>

          <PricingB />
          <FAQ variant="B" />

          <section id="waitlist">
            <h2>It&#39;s ready. Is your backlog?</h2>
            <div className="ctas">
              <a className="btn accent" href="#">Join the waitlist →</a>
              <a className="btn ghost" href="#">Read the docs</a>
            </div>
          </section>
        </div>

        {/* Variant C — PR-as-hero */}
        <div className={`variant C${variant === "C" ? " on" : ""}`}>
          <section className="hero">
            <div>
              <span className="metabadge">{meta.badge}</span>
              <h1 dangerouslySetInnerHTML={{ __html: c.h1 }} />
              <p className="sub">{c.sub}</p>
              <div className="ctas">
                <a href="#waitlist" className="btn accent">Join the waitlist →</a>
                <a href="#how" className="btn ghost">See a sample PR</a>
              </div>
              <div style={{ marginTop: 22, fontFamily: "var(--mono)", fontSize: 11, color: "var(--muted)", letterSpacing: ".15em", textTransform: "uppercase" }}>
                Built on Temporal · your observability platform · GitHub · Vault
              </div>
            </div>

            <div>
              <div className="pr">
                <div className="pr-head">
                  <span className="dot r" /><span className="dot y" /><span className="dot g" />
                  <span style={{ marginLeft: 10 }}>github.com / your-org / payments-api · PR #2137</span>
                </div>
                <div className="pr-title">
                  <div className="tt">fix(auth): handle missing JWT claim without 500</div>
                  <div className="meta">salamonitor-bot · opened at 04:12 UTC · +6 / −2 · signature err_3c7a…9d · 132 hits / 24h</div>
                </div>
                <div className="pr-body">
                  <div className="hunk">
                    <span className="ctx">  def get_user(token):</span>
                    <span className="del">-     sub = decode(token)[&quot;sub&quot;]</span>
                    <span className="add">+     claims = decode(token)</span>
                    <span className="add">+     sub = claims.get(&quot;sub&quot;)</span>
                    <span className="add">+     if not sub:</span>
                    <span className="add">+         raise Unauthorized(&quot;missing sub&quot;)</span>
                    <span className="ctx">      return users.lookup(sub)</span>
                  </div>
                  <div style={{ marginTop: 4 }}>
                    <b>Why:</b> 132 occurrences in 24h, all from <b>payments-api</b> on route <code>POST /charge</code>. No <code>sub</code> in decoded JWT when refresh-token path is taken.
                  </div>
                  <div style={{ marginTop: 6 }}>
                    <b>Confidence:</b> medium. Tests added. No schema change.
                  </div>
                </div>
                <div className="pr-foot">
                  <span className="label">✓ tests</span>
                  <span className="label">✓ lint</span>
                  <span className="label">paper-cut</span>
                  <span style={{ marginLeft: "auto" }}>run_1204 · analysis → triage → fix</span>
                </div>
              </div>
            </div>
          </section>

          <section className="manifesto" id="how">
            <h2>You have a backlog of 412 low-priority errors. Nobody is going to touch them.</h2>
            <p style={{ fontSize: 20, maxWidth: "56ch", marginTop: 20 }}>
              Salamonitor does. Every night it reads your observability platform, groups errors by signature, spins up a sandboxed agent per group, and opens a PR with the fix, the trace, and the blast radius. You merge, close, or ignore.
            </p>
            <div className="stats">
              <div className="st"><div className="n">412</div><div className="l">Errors in a median backlog</div></div>
              <div className="st"><div className="n">6</div><div className="l">Pipeline steps, nightly</div></div>
              <div className="st"><div className="n">~20m</div><div className="l">Per investigation, sandboxed</div></div>
              <div className="st"><div className="n">0</div><div className="l">Raw logs retained</div></div>
            </div>
          </section>

          <section>
            <div className="eyebrow">The six things</div>
            <div className="pipeline">
              <div className="step"><span className="num">01</span><span className="t">Scan errors</span><span className="d">Nightly sweep, grouped by signature.</span></div>
              <div className="step"><span className="num">02</span><span className="t">Dedupe</span><span className="d">Known errors skipped. No repeats.</span></div>
              <div className="step"><span className="num">03</span><span className="t">Map to code</span><span className="d">Service + stack → repo path.</span></div>
              <div className="step"><span className="num">04</span><span className="t">Investigate</span><span className="d">Sandboxed agent, 3-phase.</span></div>
              <div className="step"><span className="num">05</span><span className="t">Open PR</span><span className="d">Context-rich, labeled, reviewable.</span></div>
              <div className="step"><span className="num">06</span><span className="t">Remember</span><span className="d">Outcomes feed client memory.</span></div>
            </div>
          </section>

          <PricingC />
          <FAQ variant="C" />

          <section id="waitlist">
            <h2 className="underline">Let it open the first PR tonight.</h2>
            <div className="ctas" style={{ marginTop: 18 }}>
              <a className="btn accent" href="#">Join the waitlist →</a>
            </div>
          </section>
        </div>
      </div>

      <footer>
        <div className="grow">Salamonitor · the manager of your infra · est. 2026</div>
        <div>docs</div><div>changelog</div><div>security</div><div>privacy</div>
        <div>hello@salamonitor.dev</div>
      </footer>

      {/* Tweaks */}
      {!tweaksOpen && (
        <button className="tweaks-toggle" onClick={() => setTweaksOpen(true)}>
          tweaks
        </button>
      )}
      <div id="tweaks" className={tweaksOpen ? "on" : ""}>
        <header>
          <span className="ttl">Tweaks</span>
          <button className="x" onClick={() => setTweaksOpen(false)}>close</button>
        </header>
        <div className="row">
          <div className="lbl">Wireframe variant</div>
          <div className="chips">
            <button className={`chip${variant === "B" ? " on" : ""}`} onClick={() => setVariant("B")}>B · Pipeline</button>
            <button className={`chip${variant === "C" ? " on" : ""}`} onClick={() => setVariant("C")}>C · PR-hero</button>
          </div>
        </div>
        <div className="row">
          <div className="lbl">Brand metaphor</div>
          <div className="chips">
            {(Object.keys(META) as Metaphor[]).map((m) => (
              <button key={m} className={`chip${metaphor === m ? " on" : ""}`} onClick={() => setMetaphor(m)}>
                {META[m].badge}
              </button>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="lbl">Hero copy</div>
          <div className="chips">
            {[0, 1, 2].map((i) => (
              <button key={i} className={`chip${heroCopy === i ? " on" : ""}`} onClick={() => setHeroCopy(i)}>
                v{i + 1}
              </button>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="lbl">How it works · copy (variant B)</div>
          <div className="chips">
            {HOW.map((opt, i) => (
              <button key={i} className={`chip${howCopy === i ? " on" : ""}`} onClick={() => setHowCopy(i)}>
                {opt.h2.split(".")[0]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function PricingB() {
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

function PricingC() {
  return (
    <section id="pricing">
      <div className="eyebrow">Pricing</div>
      <h2>Flat + per-merge.</h2>
      <div className="pricing">
        <div className="tier">
          <div className="tname">Starter</div>
          <div className="price">Free<small> · 30 days</small></div>
          <ul><li>1 repo, 20 PRs</li><li>Slack + observability</li></ul>
          <a className="btn ghost" href="#waitlist">Start free</a>
        </div>
        <div className="tier hi">
          <div className="ribbon">Most teams</div>
          <div className="tname">Team</div>
          <div className="price">$499<small> + $20/PR merged</small></div>
          <ul><li>10 repos</li><li>Vault · memory · long-term learning</li></ul>
          <a className="btn accent" href="#waitlist">Join waitlist</a>
        </div>
        <div className="tier">
          <div className="tname">Platform</div>
          <div className="price">Talk</div>
          <ul><li>Unlimited · SSO · audit · SLA</li></ul>
          <a className="btn ghost" href="#waitlist">Talk to us</a>
        </div>
      </div>
    </section>
  );
}

type FAQItem = { q: string; a: string };
const FAQ_COMMON: FAQItem[] = [
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
];
const FAQ_B_EXTRA: FAQItem[] = [
  {
    q: "How long until I see the first PR?",
    a: "Usually within 24 hours of connecting. The first run sweeps your existing backlog; from there it runs nightly and only acts on errors that are new, regressing, or rising in volume.",
  },
  {
    q: "What happens if it gets one wrong?",
    a: "You close the PR, optionally with a comment. Salamonitor remembers the outcome and won't pitch a similar fix again. The system gets better at your codebase over time — not better at \"coding\" in general.",
  },
];

function FAQ({ variant }: { variant: Variant }) {
  const items = variant === "B" ? [...FAQ_COMMON, ...FAQ_B_EXTRA] : FAQ_COMMON;
  return (
    <section id="faq" className="faq">
      <div className="eyebrow">Frequently asked</div>
      <h2>The honest answers.</h2>
      <div className="faq-list">
        {items.map((item, i) => (
          <details key={i}>
            <summary>{item.q}</summary>
            <div className="a">{item.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
