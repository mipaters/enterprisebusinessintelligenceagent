# Comcast Executive Intelligence — Demo Mockup

A front-end mockup of the **Executive Intelligence** experience described in the Comcast
Enterprise Decision Intelligence FDE engagement proposal. This demo shows what a daily
executive brief, role-filtered KPI view, driver/anomaly analysis, and conversational
Q&A over trusted enterprise metrics could look like — using **mock data only**.

> This is a UX/concept mockup for demonstration purposes. It is not connected to any
> live Comcast data source, semantic model, or Microsoft 365 Copilot. No real
> Comcast performance data is used.

## What it demonstrates

The demo has five sections, reachable from the top navigation bar:

- **Executive Brief** — the original working demo: an AI-generated daily narrative,
  a role-filtered KPI view (switch executives via the dropdown), anomaly/driver
  analysis with source citations, and a conversational Q&A chat panel with a
  canned "answer bank," source traceability, and thumbs up/down feedback.
- **Solution Overview** — answers "what does it do, why is it needed, who is it
  for" with six capability tiles, a Today-vs-Future comparison and value-flow
  diagram, and role-based persona cards (CEO, CFO, COO, CCO, EBI teams, and
  business/functional leaders).
- **Agent Team** — the underlying specialist agents (orchestration, semantic
  grounding, narrative briefing, conversational Q&A, driver analysis, scenario
  modeling, recommendation, and governance/audit) and what each one owns.
- **Architecture** — an interactive, clickable layered view of the proposed
  Microsoft solution architecture (data/semantic sources, agent orchestration,
  governance/identity/security, experience channels, and observability).
- **Deployment Plan** — the phased FDE delivery plan (non-billable POC → funded
  MVP → production → enterprise scale), summarized from `FDE-PROPOSAL.md`.

A persistent **▶ Executive Demo Walkthrough** button (top right of the nav bar)
opens a full-screen, tile-based guided tour that links each step of the demo
storyline to the relevant page.

## Running the demo

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

## Project structure

- `src/data/mockData.js` — mock executives, metrics, anomalies, brief narrative,
  and the chat "answer bank" used by the Executive Brief page.
- `src/data/solutionContent.js` — content for the Solution Overview, Agent Team,
  Architecture, and Deployment Plan pages, plus the walkthrough script.
- `src/components/` — `NavBar`, `ExecutiveWalkthrough`, the Executive Brief
  components (`DailyBrief`, `KpiGrid`/`KpiCard`, `DriverAnalysis`, `ChatPanel`,
  `ExecutiveSelector`, `Sparkline`), and the solution pages (`SolutionOverview`,
  `AgentTeam`, `SolutionArchitecture`, `DeploymentPlan`).
- `src/App.jsx` — top-level navigation state, walkthrough overlay, and the
  Executive Brief state wiring (selected executive, chat hand-off from
  "Ask about this metric" / "Investigate further" links).

## Relationship to the FDE proposal

This mockup corresponds to **Workstream 3: Executive Intelligence** and the
**Phase 0 Proof of Concept** described in [`FDE-PROPOSAL.md`](./FDE-PROPOSAL.md) —
a short, non-billable, thin-slice sprint (45-60 days) intended to demonstrate
value quickly and support a Comcast leadership decision to fund the following
MVP and production phases.
