# Executive Copilot

A front-end executive decision-intelligence demo that switches between Rogers
Communications and Comcast operator experiences without a page reload. Rogers
Communications is selected by default. The app starts in dark mode and includes
a header toggle for light mode.

> All dashboard metrics, scenarios, recommendations, and outcomes in this demo
> are synthetic and illustrative. The app is not connected to live operator
> systems and does not represent reported company results.

## What it demonstrates

- **Operator Experience selector** — switches executive personas, role-filtered
  KPIs, briefings, anomalies, Q&A prompts and answers, strategic priorities,
  walkthrough scenarios, architecture sources, and outcome cards.
- **Executive Brief** — daily executive narrative, role-focused metrics,
  anomaly/driver analysis, and operator-aware conversational Q&A.
- **Solution Overview** — capabilities, value flow, operator executive personas,
  and strategic priorities.
- **Agent Team** — specialist roles with active operator context and priorities.
- **Architecture** — clickable platform layers and operator-specific source
  systems.
- **Business Outcomes** — operator-specific illustrative outcomes and use cases.
- **Executive Demo Walkthrough** — full-screen tile tour with Rogers-specific
  household growth, wireless churn, mobile attach, retail, business services,
  and executive briefing scenarios; Comcast has its own tour.
- **Deployment Plan** — the phased FDE plan, starting with the 30-day
  non-billable POC.
- **Theme toggle** — dark by default, with light mode available in the header.

## Running the demo

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

## Project structure

- `src/data/OperatorContext.jsx` — centralized app context, operator selection,
  and theme state.
- `src/data/operators/rogers.js` and `src/data/operators/comcast.js` — operator
  profiles, metrics, briefings, answer banks, priorities, architecture sources,
  walkthrough content, and outcome areas.
- `src/data/mockData.js` — original Comcast demo data.
- `src/data/solutionContent.js` — reusable capabilities, agent roles, and
  deployment phases.
- `src/components/` — dashboard and operator-aware experience pages.
- `src/App.jsx` — global selectors, navigation, and page wiring.

## Relationship to the FDE proposal

The deployment page summarizes the phased plan in
[`FDE-PROPOSAL.md`](./FDE-PROPOSAL.md): a focused, 30-day, non-billable POC,
followed by funded MVP and production phases if leadership is satisfied with
the results.
