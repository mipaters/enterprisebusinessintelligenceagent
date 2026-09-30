# Comcast Executive Intelligence — Demo Mockup

A front-end mockup of the **Executive Intelligence** experience described in the Comcast
Enterprise Decision Intelligence FDE engagement proposal. This demo shows what a daily
executive brief, role-filtered KPI view, driver/anomaly analysis, and conversational
Q&A over trusted enterprise metrics could look like — using **mock data only**.

> This is a UX/concept mockup for demonstration purposes. It is not connected to any
> live Comcast data source, semantic model, or Microsoft 365 Copilot. No real
> Comcast performance data is used.

## What it demonstrates

- **Daily executive brief** — an AI-generated narrative summarizing performance,
  anomalies, and a recommended focus area.
- **Role-based KPI view** — selecting a different executive (CEO, EVP EBI, CFO, COO)
  filters the enterprise metrics shown to that role's priorities.
- **Anomalies & business drivers** — automatically surfaced changes with plain-language
  driver explanations and source citations.
- **Conversational Q&A** — a chat panel that answers natural-language questions about
  metrics and drivers using a small canned "answer bank," with source traceability and
  a thumbs up/down feedback mechanism, standing in for a future grounded, governed
  semantic-layer integration (e.g. via Microsoft 365 Copilot).

## Running the demo

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

## Project structure

- `src/data/mockData.js` — all mock executives, metrics, anomalies, brief narrative,
  and the chat "answer bank." Edit this file to change the scenario.
- `src/components/` — `DailyBrief`, `KpiGrid`/`KpiCard`, `DriverAnalysis`, `ChatPanel`,
  `ExecutiveSelector`, and `Sparkline`.
- `src/App.jsx` — layout and state wiring (selected executive, chat hand-off from
  "Ask about this metric" links).

## Relationship to the FDE proposal

This mockup corresponds to **Workstream 3: Executive Intelligence** and the
**Phase 1 thin slice** described in the Comcast FDE intake request — a narrow,
high-value executive experience intended to validate the Enterprise Decision
Intelligence vision before broader investment in data/agent workstreams.
