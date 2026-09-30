// Content for the solution-level pages: Solution Overview, Agent Team, Architecture,
// and the Executive Demo Walkthrough. This is intentionally generic/product-level
// content (not tied to a specific customer's metrics).

export const capabilityTiles = [
  {
    id: 'brief',
    title: 'Builds the Executive Morning Brief',
    bullets: [
      'Reviews trusted enterprise metrics',
      'Detects material changes',
      'Prioritizes risks and opportunities',
      'Explains what changed since the previous brief',
      'Identifies decisions that may require attention',
      'Links every material statement to supporting evidence',
    ],
  },
  {
    id: 'qa',
    title: 'Answers Executive Questions',
    bullets: [
      'Provides conversational access to enterprise metrics',
      'Maintains context across follow-up questions',
      'Explains performance without requiring report navigation',
      "Uses the executive's role and decision context",
      'Shows assumptions and unresolved questions',
    ],
  },
  {
    id: 'drivers',
    title: 'Investigates Business Drivers',
    bullets: [
      'Decomposes material KPI movement',
      'Compares segments, products, regions, channels, and periods',
      'Identifies operational and customer contributors',
      'Separates observed evidence from calculated indicators',
      'Distinguishes correlation from demonstrated causation',
    ],
  },
  {
    id: 'scenarios',
    title: 'Models Decision Options',
    bullets: [
      'Creates controlled what-if scenarios',
      'Compares alternative business responses',
      'Models first-, second-, and third-order effects',
      'Shows revenue, margin, customer, operational, timing, and risk trade-offs',
      'Allows assumptions to be adjusted and stress-tested',
    ],
  },
  {
    id: 'recommendations',
    title: 'Prepares Recommendations',
    bullets: [
      'Synthesizes metric evidence, business drivers, contextual information, and scenario results',
      'Recommends an option for human consideration',
      'Explains why that option is preferred',
      'Identifies risks, assumptions, guardrails, approvals, and stop conditions',
      'Creates an executive decision brief',
    ],
  },
  {
    id: 'governance',
    title: 'Governs the Decision Process',
    bullets: [
      'Applies identity and role-based access',
      'Uses governed metric definitions',
      'Tracks source freshness and evidence coverage',
      'Records agent activity',
      'Preserves human approvals',
      'Creates an auditable decision record',
    ],
  },
];

export const todayVsFuture = {
  today: [
    'Business information is spread across many reports and tools.',
    'Executives must assemble the story themselves.',
    'Analysts spend substantial effort producing recurring reports and explanations.',
    'Different areas may use different definitions for the same metric.',
    'Business-driver analysis can require multiple manual hand-offs.',
    'Scenario analysis often happens outside the normal intelligence workflow.',
    'The path from insight to decision is difficult to trace.',
    'Traditional BI generally focuses on what happened.',
  ],
  future: [
    'The experience begins with a concise narrative.',
    'Material changes are prioritized automatically.',
    'Executives can ask follow-up questions conversationally.',
    'Responses use governed, certified business definitions.',
    'Business drivers are investigated consistently.',
    'Decision options can be compared in one workspace.',
    'Recommendations include evidence, assumptions, trade-offs, and approval requirements.',
    'The experience helps leaders move from "what happened?" to "what should we consider doing next?"',
  ],
};

export const valueFlowSteps = [
  'Trusted metrics',
  'Material change',
  'Business drivers',
  'Decision question',
  'Scenario options',
  'Recommendation',
  'Human review',
  'Measured outcome',
];

export const personas = [
  {
    id: 'ceo',
    role: 'Chief Executive Officer',
    needs: [
      'Enterprise performance narrative',
      'Strategic risks and opportunities',
      'Cross-functional dependencies',
      'Decisions requiring executive attention',
      'Progress against strategic priorities',
    ],
  },
  {
    id: 'cfo',
    role: 'Chief Financial Officer',
    needs: [
      'Revenue and margin performance',
      'Forecast variance',
      'Cost-to-serve changes',
      'Scenario economics',
      'Capital and operating trade-offs',
      'Financial guardrails',
    ],
  },
  {
    id: 'coo',
    role: 'Chief Operating Officer',
    needs: [
      'Operational performance',
      'Capacity constraints',
      'Service-demand changes',
      'Execution dependencies',
      'Operational risk',
      'Response readiness',
    ],
  },
  {
    id: 'cco',
    role: 'Chief Customer Officer',
    needs: [
      'Acquisition',
      'Retention',
      'Churn',
      'Customer lifetime value',
      'Digital completion',
      'Assisted-service demand',
      'Experience and complaint measures',
    ],
  },
  {
    id: 'ebi',
    role: 'Enterprise Business Intelligence Teams',
    needs: [
      'Trusted semantic definitions',
      'Metric governance',
      'Reusable analytical patterns',
      'Reduced recurring-report preparation',
      'Insight-quality controls',
      'Evidence traceability',
      'Scalable decision experiences',
    ],
  },
  {
    id: 'functional-leaders',
    role: 'Business and Functional Leaders',
    needs: [
      'Departmental performance in the context of enterprise priorities',
      'Metric definitions consistent with the enterprise standard',
      'Early warning on cross-team dependencies',
      'Simplified, less manual recurring reporting',
      'Context for escalating issues that need executive attention',
      'A consistent way to request deeper analysis',
    ],
  },
];

export const agentTeam = [
  {
    id: 'orchestration',
    name: 'Orchestration Agent',
    role: 'Coordinates the specialist agents and manages the end-to-end conversation and workflow state.',
    responsibilities: [
      'Routes each request to the right specialist agent',
      'Maintains conversation and session context',
      'Sequences multi-step investigations (brief → drivers → scenario → recommendation)',
      'Enforces the overall decision workflow',
    ],
  },
  {
    id: 'semantic-grounding',
    name: 'Metrics & Semantic Grounding Agent',
    role: "Connects to the enterprise's governed semantic layer and resolves trusted metric definitions.",
    responsibilities: [
      'Resolves metric names to certified definitions and owners',
      'Retrieves current and historical values from source systems',
      'Flags data freshness, coverage gaps, and definition conflicts',
      'Supplies grounded facts to every other agent',
    ],
  },
  {
    id: 'narrative',
    name: 'Narrative Briefing Agent',
    role: 'Builds the daily executive brief from prioritized, evidence-linked insights.',
    responsibilities: [
      'Identifies the most material changes since the last brief',
      'Drafts a concise, role-appropriate narrative',
      'Attaches source citations to every material statement',
      'Surfaces a recommended area of focus',
    ],
  },
  {
    id: 'qa',
    name: 'Conversational Q&A Agent',
    role: 'Answers natural-language follow-up questions about performance and metrics.',
    responsibilities: [
      'Maintains context across a multi-turn conversation',
      "Answers using the executive's role and decision context",
      'States assumptions and unresolved questions explicitly',
      'Escalates to the driver-analysis or scenario agents when needed',
    ],
  },
  {
    id: 'driver-analysis',
    name: 'Driver Analysis Agent',
    role: 'Decomposes material KPI movement into underlying business drivers.',
    responsibilities: [
      'Compares segments, products, regions, channels, and time periods',
      'Identifies operational and customer contributors to a change',
      'Separates observed evidence from calculated/derived indicators',
      'Distinguishes correlation from demonstrated causation',
    ],
  },
  {
    id: 'scenario',
    name: 'Scenario Modeling Agent',
    role: 'Builds controlled what-if scenarios to compare decision options.',
    responsibilities: [
      'Creates alternative business-response scenarios',
      'Models first-, second-, and third-order effects',
      'Quantifies revenue, margin, customer, operational, timing, and risk trade-offs',
      'Allows assumptions to be adjusted and stress-tested',
    ],
  },
  {
    id: 'recommendation',
    name: 'Recommendation Agent',
    role: 'Synthesizes evidence, drivers, and scenarios into a reviewable decision brief.',
    responsibilities: [
      'Combines metric evidence, driver analysis, context, and scenario results',
      'Recommends a preferred option and explains why',
      'Documents risks, assumptions, guardrails, and required approvals',
      'Produces an executive-ready decision brief',
    ],
  },
  {
    id: 'governance',
    name: 'Governance & Audit Agent',
    role: 'Enforces access control and preserves a complete, auditable decision record.',
    responsibilities: [
      'Applies identity and role-based access to every request',
      'Uses only governed, certified metric definitions',
      'Logs agent activity and evidence sources used',
      'Preserves human approvals and produces an audit trail',
    ],
  },
];

export const architectureLayers = [
  {
    id: 'data',
    name: 'Enterprise Data & Semantic Sources',
    summary: "The existing trusted data foundation — reused as-is, not replaced.",
    components: [
      'Existing enterprise data warehouses and platforms',
      'Certified semantic models and standardized metric definitions',
      'Power BI datasets / Microsoft Fabric semantic models',
      'Business metric ownership and stewardship',
    ],
  },
  {
    id: 'agents',
    name: 'Agent Orchestration & AI Platform',
    summary: 'The multi-agent reasoning layer that powers the brief, Q&A, driver analysis, and scenarios.',
    components: [
      'Azure AI Foundry (Agent Service) for orchestration',
      'Azure OpenAI models for reasoning and narrative generation',
      'Grounding and retrieval against the semantic layer',
      'Built-in evaluation of accuracy and groundedness',
    ],
  },
  {
    id: 'governance',
    name: 'Governance, Identity & Security',
    summary: 'Access control, data governance, and auditability applied across every agent.',
    components: [
      'Microsoft Entra ID for identity and role-based access',
      'Microsoft Purview for data governance and lineage',
      'Content safety and responsible-AI controls',
      'Centralized audit logging of agent activity and approvals',
    ],
  },
  {
    id: 'experience',
    name: 'Experience & Delivery Channels',
    summary: 'Where executives actually consume the intelligence.',
    components: [
      'Microsoft 365 Copilot / Microsoft Teams',
      'Embedded Power BI visuals for supporting detail',
      'This web experience (executive brief, KPIs, chat)',
      'Scheduled brief delivery (e.g. email, chat digest)',
    ],
  },
  {
    id: 'operations',
    name: 'Observability & Operations',
    summary: 'Keeping the system reliable, measurable, and continuously improving.',
    components: [
      'Azure Monitor / Application Insights',
      'Evaluation dashboards for accuracy, groundedness, and usage',
      'User feedback loop (👍/👎) feeding agent tuning',
      'Production-readiness and support runbooks',
    ],
  },
];

export const deploymentPhases = [
  {
    id: 'phase0',
    label: 'Phase 0',
    name: 'Proof of Concept',
    badge: 'Non-billable · 30 days',
    objective:
      'Deliver a focused, thin-sliced version of the Executive Intelligence experience quickly, as a non-billable investment, to demonstrate tangible value and give leadership the evidence needed to fund an ongoing engagement.',
    highlights: [
      'Small executive audience and a narrow set of priority metrics',
      'Working daily brief, role-filtered KPIs, driver highlights, and conversational Q&A',
      'Reuses existing trusted metrics and semantic layer — no data migration required',
      'Ends with a leadership readout and a go/no-go funding decision',
    ],
  },
  {
    id: 'phase1',
    label: 'Phase 1',
    name: 'MVP — Validate, Expand, and Harden',
    badge: 'Funded',
    objective:
      'Assuming a positive POC outcome, build a more complete, validated MVP: broaden the executive audience and metric coverage, harden the experience with real users, and establish the path to production.',
    highlights: [
      'Expanded executive audience, metrics, and business domains',
      'Structured feedback from real users on usefulness, clarity, and trust',
      'Authentication, authorization, telemetry, and operational controls',
      'Expanded evaluation for accuracy, groundedness, and reliability',
    ],
  },
  {
    id: 'phase2',
    label: 'Phase 2',
    name: 'Production Deployment and Expansion',
    badge: 'Funded',
    objective: 'Move the validated MVP into a supported production model and expand its business coverage.',
    highlights: [
      'Production deployment with formal service management',
      'Additional executive personas, business domains, and metrics',
      'Broader integration with Microsoft 365 Copilot',
      'Enhanced monitoring, support, and operational ownership',
    ],
  },
  {
    id: 'phase3',
    label: 'Phase 3',
    name: 'Scale Enterprise Decision Intelligence',
    badge: 'Future',
    objective: 'Establish a repeatable enterprise capability for role-specific decision intelligence.',
    highlights: [
      'Decision agents for individual business functions',
      'Scenario modelling, forecasting, and resource-planning agents',
      'Competitive intelligence and recommended actions with human approval',
      'Shared governance, evaluation, and lifecycle standards across the enterprise',
    ],
  },
];

export const walkthroughSteps = [
  {
    id: 'overview',
    title: 'Solution Overview',
    description: "Start with the executive summary: what it does, why it matters, and who it's for.",
    page: 'overview',
  },
  {
    id: 'brief',
    title: 'Executive Morning Brief',
    description: 'See the AI-generated daily brief with prioritized, evidence-linked insights.',
    page: 'brief',
  },
  {
    id: 'roles',
    title: 'Role-Based KPI View',
    description: 'Switch executives to see how priority metrics change by role.',
    page: 'brief',
  },
  {
    id: 'drivers',
    title: 'Business Driver Investigation',
    description: 'Explore anomalies and the drivers behind material KPI movement.',
    page: 'brief',
  },
  {
    id: 'qa',
    title: 'Conversational Q&A',
    description: 'Ask follow-up questions and get grounded, traceable answers.',
    page: 'brief',
  },
  {
    id: 'agents',
    title: 'Underlying Agent Team',
    description: 'See the specialist agents that power the experience end to end.',
    page: 'agents',
  },
  {
    id: 'architecture',
    title: 'Proposed Solution Architecture',
    description: 'Explore the proposed Microsoft architecture, layer by layer.',
    page: 'architecture',
  },
  {
    id: 'delivery',
    title: 'From POC to Production',
    description:
      'A short, non-billable proof of concept (30 days) demonstrates value first. A funded MVP and production deployment follow, based on results.',
    page: 'deployment',
  },
];
