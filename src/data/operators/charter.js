const source = (domain, report) => `Charter Demo Data Hub > ${domain} > ${report}`;

const metrics = [
  {
    id: 'charter-broadband-net-adds',
    name: 'Broadband Net Adds',
    domain: 'Connectivity',
    value: '+24.6K',
    unit: 'customers (QTD, illustrative)',
    trend: 'up',
    changePct: 4.8,
    status: 'healthy',
    sparkline: [12, 14, 15, 16, 18, 20, 22, 24.6],
    source: source('Connectivity', 'Broadband Growth'),
  },
  {
    id: 'charter-internet-arpu',
    name: 'Internet ARPU',
    domain: 'Connectivity',
    value: '$71.20',
    unit: 'monthly per customer (illustrative)',
    trend: 'up',
    changePct: 1.2,
    status: 'healthy',
    sparkline: [69.4, 69.7, 69.9, 70.1, 70.3, 70.6, 70.9, 71.2],
    source: source('Connectivity', 'Revenue & ARPU'),
  },
  {
    id: 'charter-mobile-lines',
    name: 'Mobile Line Growth',
    domain: 'Mobile',
    value: '+86.3K',
    unit: 'lines (QTD, illustrative)',
    trend: 'up',
    changePct: 8.2,
    status: 'healthy',
    sparkline: [42, 48, 54, 59, 65, 72, 79, 86.3],
    source: source('Mobile', 'Line Growth'),
  },
  {
    id: 'charter-mobile-attach',
    name: 'Mobile Attach Rate',
    domain: 'Households',
    value: '18.7%',
    unit: 'eligible internet households (illustrative)',
    trend: 'up',
    changePct: 2.9,
    status: 'watch',
    sparkline: [14, 14.7, 15.1, 15.8, 16.2, 17, 17.8, 18.7],
    source: source('Households', 'Mobile Attach'),
  },
  {
    id: 'charter-customer-churn',
    name: 'Internet Customer Churn',
    domain: 'Customer',
    value: '1.42%',
    unit: 'monthly (illustrative)',
    trend: 'down',
    changePct: -0.06,
    status: 'healthy',
    sparkline: [1.58, 1.55, 1.53, 1.51, 1.49, 1.47, 1.45, 1.42],
    source: source('Customer', 'Retention'),
  },
  {
    id: 'charter-video-engagement',
    name: 'Video Engagement Index',
    domain: 'Video',
    value: '68 / 100',
    unit: 'illustrative engagement index',
    trend: 'flat',
    changePct: 0.6,
    status: 'watch',
    sparkline: [66, 66.5, 67, 67, 67.5, 67.8, 68, 68],
    source: source('Video', 'Engagement'),
  },
  {
    id: 'charter-household-products',
    name: 'Multi-Product Households',
    domain: 'Households',
    value: '29.4%',
    unit: 'eligible households (illustrative)',
    trend: 'up',
    changePct: 1.7,
    status: 'watch',
    sparkline: [26, 26.5, 27, 27.4, 28, 28.4, 28.9, 29.4],
    source: source('Households', 'Product Relationships'),
  },
  {
    id: 'charter-business-growth',
    name: 'Business Services Growth',
    domain: 'Commercial',
    value: '+5.6%',
    unit: 'SMB revenue YoY (illustrative)',
    trend: 'up',
    changePct: 5.6,
    status: 'healthy',
    sparkline: [1.2, 1.8, 2.5, 3, 3.6, 4.2, 4.9, 5.6],
    source: source('Commercial', 'SMB Growth'),
  },
  {
    id: 'charter-advertising-growth',
    name: 'Advertising Opportunity Index',
    domain: 'Advertising',
    value: '74 / 100',
    unit: 'illustrative opportunity index',
    trend: 'up',
    changePct: 3.1,
    status: 'watch',
    sparkline: [62, 64, 66, 67, 69, 71, 72, 74],
    source: source('Advertising', 'Opportunity Signals'),
  },
  {
    id: 'charter-network-availability',
    name: 'Network Availability',
    domain: 'Network',
    value: '99.97%',
    unit: 'availability (30-day, illustrative)',
    trend: 'flat',
    changePct: 0.01,
    status: 'healthy',
    sparkline: [99.95, 99.96, 99.96, 99.97, 99.96, 99.97, 99.97, 99.97],
    source: source('Network', 'Reliability Monitor'),
  },
  {
    id: 'charter-digital-care',
    name: 'Digital Care Resolution',
    domain: 'Customer Experience',
    value: '63.8%',
    unit: 'eligible intents resolved digitally (illustrative)',
    trend: 'up',
    changePct: 3.6,
    status: 'watch',
    sparkline: [51, 53, 55, 57, 58, 60, 62, 63.8],
    source: source('Customer Experience', 'Digital Care'),
  },
  {
    id: 'charter-operating-efficiency',
    name: 'Care Cost Efficiency',
    domain: 'Operations',
    value: '−2.4%',
    unit: 'cost per resolved contact YoY (illustrative)',
    trend: 'up',
    changePct: 2.4,
    status: 'healthy',
    sparkline: [0.3, 0.6, 0.9, 1.2, 1.4, 1.8, 2.1, 2.4],
    source: source('Operations', 'Care Efficiency'),
  },
];

const executives = [
  {
    id: 'charter-ceo',
    name: 'Chris Winfrey',
    title: 'President & CEO',
    focusMetrics: ['charter-broadband-net-adds', 'charter-mobile-lines', 'charter-customer-churn', 'charter-business-growth', 'charter-household-products'],
  },
  {
    id: 'charter-cfo',
    name: 'Jessica Fischer',
    title: 'Chief Financial Officer',
    focusMetrics: ['charter-internet-arpu', 'charter-business-growth', 'charter-operating-efficiency', 'charter-advertising-growth', 'charter-customer-churn'],
  },
  {
    id: 'charter-coo',
    name: 'Nick Jeffery',
    title: 'Chief Operating Officer',
    focusMetrics: ['charter-network-availability', 'charter-digital-care', 'charter-operating-efficiency', 'charter-broadband-net-adds', 'charter-customer-churn'],
  },
  {
    id: 'charter-product-technology',
    name: 'Rich DiGeronimo',
    title: 'President, Product & Technology',
    focusMetrics: ['charter-video-engagement', 'charter-mobile-attach', 'charter-household-products', 'charter-network-availability', 'charter-broadband-net-adds'],
  },
  {
    id: 'charter-ctio',
    name: 'Jake Perlman',
    title: 'EVP, Chief Technology & Information Officer',
    focusMetrics: ['charter-network-availability', 'charter-digital-care', 'charter-operating-efficiency', 'charter-mobile-lines', 'charter-broadband-net-adds'],
  },
  {
    id: 'charter-commercial',
    name: 'Adam Ray',
    title: 'EVP, Chief Commercial Officer',
    focusMetrics: ['charter-business-growth', 'charter-advertising-growth', 'charter-mobile-lines', 'charter-internet-arpu', 'charter-mobile-attach'],
  },
];

const anomalies = [
  {
    id: 'charter-mobile-attach-opportunity',
    metricId: 'charter-mobile-attach',
    severity: 'medium',
    headline: 'Eligible internet households show a mobile attach opportunity',
    driverSummary: 'Synthetic cohort analysis indicates a pool of internet households without a mobile relationship. Validate eligibility, offer relevance, and customer consent before testing next-best-product recommendations; the estimate is illustrative.',
    relatedMetrics: ['charter-household-products', 'charter-mobile-lines'],
    source: source('Households', 'Mobile Attach Eligibility'),
  },
  {
    id: 'charter-retention',
    metricId: 'charter-customer-churn',
    severity: 'medium',
    headline: 'Retention signals vary by customer tenure and service experience',
    driverSummary: 'Illustrative risk segmentation highlights cohorts for further review using tenure, service events, and care interactions. Validate model coverage and compare any intervention against a holdout, including customer experience and offer cost.',
    relatedMetrics: ['charter-network-availability', 'charter-digital-care'],
    source: source('Customer', 'Retention Risk Signals'),
  },
  {
    id: 'charter-video-engagement',
    metricId: 'charter-video-engagement',
    severity: 'low',
    headline: 'Video engagement is steady; review segment-level changes',
    driverSummary: 'The synthetic engagement index is stable overall. A production review would compare product mix, viewing behaviors, customer feedback, and service interactions before proposing any packaging or engagement action.',
    relatedMetrics: ['charter-customer-churn'],
    source: source('Video', 'Engagement Trends'),
  },
  {
    id: 'charter-commercial',
    metricId: 'charter-business-growth',
    severity: 'low',
    headline: 'Commercial growth signals point to SMB and advertising opportunities',
    driverSummary: 'Illustrative SMB and advertising opportunity indicators are improving. Validate customer fit, serviceability, inventory, and pipeline quality before translating opportunity scores into a revenue forecast.',
    relatedMetrics: ['charter-advertising-growth'],
    source: source('Commercial', 'Growth Opportunities'),
  },
];

const dailyBrief = {
  date: 'Today',
  generatedAt: '6:00 AM ET',
  headline: 'Connectivity and mobile growth create opportunity; customer relationships and commercial execution remain key areas to monitor.',
  narrative: [
    'Good morning. This synthetic Charter operator scenario shows broadband net adds of +24.6K and mobile line growth of +86.3K quarter-to-date. Multi-product household penetration is 29.4%, creating an opportunity to examine eligible customer relationships across internet and mobile.',
    'Internet customer churn is 1.42% in this illustrative dataset. Review retention patterns alongside network events and care contacts, but validate risk signals before proposing a customer intervention. Video engagement remains steady at 68 / 100.',
    'Commercial indicators show illustrative SMB revenue growth of 5.6% and an advertising opportunity index of 74 / 100. Network availability is 99.97%, while digital care resolution is 63.8%; operational changes should be measured with customer experience and quality guardrails.',
  ],
  recommendedFocus: 'Choose one eligible household attach or retention opportunity for a controlled test, with clear customer, operational, and financial measures.',
};

const executiveBriefs = {
  'charter-ceo': {
    ...dailyBrief,
    headline: 'Connectivity and mobile momentum are positive; deepen customer relationships while maintaining disciplined commercial execution.',
    narrative: [
      'Good morning. The broad operating picture in this synthetic scenario is constructive: broadband net adds are +24.6K and mobile line growth is +86.3K quarter-to-date. The strategic opportunity is to build stronger multi-product relationships, with multi-product household penetration currently shown at 29.4%.',
      'Customer churn is 1.42% in the illustrative dataset, and network availability is 99.97%. These indicators should be considered together with customer experience and market-level context before setting enterprise priorities.',
      'Commercial signals also show illustrative SMB revenue growth of 5.6% and an advertising opportunity index of 74 / 100. These are synthetic demo values, not reported Charter results or forecasts.',
    ],
    recommendedFocus: 'Align product, operations, and commercial teams on a measurable household growth initiative with customer and financial guardrails.',
  },
  'charter-cfo': {
    ...dailyBrief,
    headline: 'Synthetic commercial growth indicators are positive; validate the economics of retention, attach, advertising, and care efficiency opportunities.',
    narrative: [
      'Good morning. This synthetic scenario shows internet ARPU of $71.20, SMB revenue growth of 5.6%, and an advertising opportunity index of 74 / 100. These are illustrative dashboard values, not company-reported financial results.',
      'Potential household attach and retention actions should be compared on incremental contribution, offer cost, persistence, and payback. Care cost efficiency is shown as improving 2.4% year over year in this sample scenario.',
      'Use finance-approved definitions and assumptions before converting an opportunity score or modeled customer value into a forecast or investment decision.',
    ],
    recommendedFocus: 'Request a comparable scenario analysis for household attach, retention, advertising, and care efficiency with explicit assumptions and downside sensitivities.',
  },
  'charter-coo': {
    ...dailyBrief,
    headline: 'Network availability and digital care are stable in the sample view; coordinate service quality with retention and operating efficiency.',
    narrative: [
      'Good morning. Network availability is 99.97% in this illustrative 30-day view. Review any market-level exceptions alongside incident status, affected customers, and service-contact signals before escalating.',
      'Digital care resolution is 63.8% of eligible intents, and care cost efficiency is shown as improving 2.4% year over year. Track resolution quality, repeat contacts, escalations, and accessibility with efficiency so the operating model continues to serve customers well.',
      'Internet customer churn is 1.42% in this synthetic dataset. Coordinate operational and care follow-up for cohorts showing service friction, while validating the evidence and measuring outcomes against a baseline.',
    ],
    recommendedFocus: 'Review operational exceptions by market and care journey, and track customer impact, repeat contacts, and resolution quality together.',
  },
  'charter-product-technology': {
    ...dailyBrief,
    headline: 'Product growth depends on reliable connectivity and relevant internet, mobile, and video experiences across eligible households.',
    narrative: [
      'Good morning. Broadband net adds are +24.6K and mobile line growth is +86.3K quarter-to-date in this synthetic scenario. Mobile attach is 18.7% of eligible internet households, while multi-product household penetration is 29.4%.',
      'Video engagement is steady at 68 / 100. Review product engagement by segment together with service quality and customer feedback to identify where product experience or packaging may merit a test.',
      'Network availability is 99.97% in the sample view. Use serviceability and network evidence when assessing product opportunities; the demo values are illustrative and are not reported Charter results.',
    ],
    recommendedFocus: 'Prioritize a product journey test that joins eligibility, serviceability, network quality, engagement, and customer feedback.',
  },
  'charter-ctio': {
    ...dailyBrief,
    headline: 'Reliable data and platform operations can enable better digital care and commercial decisions across connectivity products.',
    narrative: [
      'Good morning. The technology and information view highlights 99.97% illustrative network availability and 63.8% digital care resolution for eligible intents. These synthetic measures frame opportunities to connect platform reliability with customer-facing outcomes.',
      'Before scaling an AI or digital-care use case, confirm source-data quality, identity and access controls, integration reliability, observability, and audit requirements. Make model limitations and human escalation paths clear.',
      'Coordinate data and platform readiness with broadband, mobile, video, care, and commercial priorities. Evaluate operational performance and customer impact together rather than optimizing automation in isolation.',
    ],
    recommendedFocus: 'Validate the data, integration, identity, and observability requirements for one operator-aware AI use case before scaling.',
  },
  'charter-commercial': {
    ...dailyBrief,
    headline: 'Mobile attach, SMB services, and advertising are the leading illustrative commercial opportunities in this operator view.',
    narrative: [
      'Good morning. The commercial view shows synthetic SMB revenue growth of 5.6% and an advertising opportunity index of 74 / 100. Mobile line growth is +86.3K quarter-to-date, with mobile attach at 18.7% of eligible internet households.',
      'Prioritize opportunities only after validating account fit, serviceability, campaign or inventory constraints, and customer eligibility. Treat scores as signals to investigate, not as qualified pipeline or guaranteed revenue.',
      'Measure qualified opportunities through conversion and realized incremental value using agreed baselines and finance-approved assumptions. All figures in this view are illustrative demo data.',
    ],
    recommendedFocus: 'Prioritize a serviceable, evidence-backed commercial opportunity and measure qualified pipeline through realized incremental value.',
  },
};

const feedPrompts = [
  'Where is the household attach opportunity?',
  'What customer segments may need retention attention?',
  'How are mobile lines and broadband trending?',
  'What is driving commercial growth?',
  'What should I focus on today?',
];

const executivePrompts = {
  'charter-ceo': [
    'What are the enterprise growth and customer risks?',
    'Where can we deepen household relationships?',
    'Which cross-functional priorities need leadership alignment?',
    'What outcomes should we track across connectivity and commercial?',
  ],
  'charter-cfo': [
    'How are ARPU and commercial growth trending?',
    'What are the economics of mobile attach and retention?',
    'How is care efficiency changing after customer impact?',
    'What assumptions support the advertising opportunity estimate?',
  ],
  'charter-coo': [
    'Where are network availability exceptions affecting customers?',
    'How are digital care resolution and repeat contacts trending?',
    'Which operating issues are contributing to retention risk?',
    'Where can we improve care efficiency without hurting service quality?',
  ],
  'charter-product-technology': [
    'Where can internet and mobile products work better together?',
    'What is changing in video engagement by segment?',
    'Which product journey should we test next?',
    'How are serviceability and network quality affecting product opportunities?',
  ],
  'charter-ctio': [
    'Which AI use case is ready from a data and integration perspective?',
    'Where do identity, data quality, or platform controls need attention?',
    'What observability is needed before scaling digital care?',
    'How should we measure technology reliability and customer impact?',
  ],
  'charter-commercial': [
    'Which SMB opportunities are qualified and serviceable?',
    'What is driving the mobile attach opportunity?',
    'How are advertising signals aligned with campaign inventory?',
    'Which commercial opportunities have the strongest evidence for growth?',
  ],
};

const qaBank = [
  {
    keywords: ['household', 'attach', 'mobile'],
    answer: 'This synthetic scenario shows mobile attach at 18.7% of eligible internet households and multi-product households at 29.4%. Validate eligibility, serviceability, and customer consent, then test a relevant offer against a control group. The values are illustrative, not actual Charter results.',
    sources: [source('Households', 'Mobile Attach Eligibility')],
  },
  {
    keywords: ['churn', 'retention', 'customer'],
    answer: 'Internet customer churn is 1.42% in the illustrative dataset. Risk patterns should be validated across tenure, network events, and care interactions before selecting a retention action; measure incremental retained value and customer outcomes against a holdout.',
    sources: [source('Customer', 'Retention Risk Signals')],
  },
  {
    keywords: ['broadband', 'internet'],
    answer: 'Synthetic broadband net adds are +24.6K quarter-to-date, with internet ARPU at $71.20. Compare growth by market and customer segment using consistent periods, and keep the illustrative sample distinct from reported company metrics.',
    sources: [source('Connectivity', 'Broadband Growth')],
  },
  {
    keywords: ['business', 'commercial', 'smb', 'advertising'],
    answer: 'This sample view shows SMB revenue growth of 5.6% and an advertising opportunity index of 74 / 100. Treat these as illustrative signals; validate account fit, serviceability, inventory, and pipeline quality before forecasting revenue.',
    sources: [source('Commercial', 'Growth Opportunities')],
  },
  {
    keywords: ['video', 'engagement'],
    answer: 'The synthetic video engagement index is 68 / 100 and broadly steady. A useful follow-up is to compare engagement by product and customer segment, then review service and customer feedback before changing packaging or experience.',
    sources: [source('Video', 'Engagement Trends')],
  },
  {
    keywords: ['network', 'availability', 'reliability'],
    answer: 'Network availability is 99.97% in this illustrative 30-day view. Review exceptions by market, incident, and affected customers, and connect them to care and retention signals without inferring causation from correlation.',
    sources: [source('Network', 'Reliability Monitor')],
  },
  {
    keywords: ['digital care', 'automation', 'care'],
    answer: 'Digital care resolution is 63.8% of eligible intents in this sample. Evaluate resolution quality together with repeat contacts, escalations, accessibility, and customer feedback before expanding automation.',
    sources: [source('Customer Experience', 'Digital Care')],
  },
  {
    keywords: ['focus', 'today', 'recommend'],
    answer: 'The suggested focus is to validate an eligible household attach or retention opportunity and test it with customer, operational, and financial guardrails. All figures in this Charter demo are synthetic.',
    sources: [source('Households', 'Product Relationships'), source('Customer', 'Retention Risk Signals')],
  },
];

const dataSources = [
  'Customer relationship management and account data',
  'Internet / broadband platforms',
  'Mobile service and billing platforms',
  'Video product and engagement systems',
  'Customer care and contact-center systems',
  'Network performance and service operations',
  'Advertising sales, inventory, and campaign data',
  'Commercial and SMB account platforms',
];

const architectureLayers = [
  {
    id: 'data',
    name: 'Charter Operator Data & Semantic Sources',
    summary: 'Governed connectivity, product, customer, network, and commercial measures support the evidence layer.',
    components: dataSources,
  },
  {
    id: 'agents',
    name: 'Agent Orchestration & AI Platform',
    summary: 'Operator-aware specialist agents connect insight generation to reviewable decisions.',
    components: [
      'Azure AI Foundry (Agent Service) for orchestration',
      'Azure OpenAI models for reasoning and narrative generation',
      'Grounding against governed operator metrics and source systems',
      'Evaluation for groundedness, quality, and responsible AI',
    ],
  },
  {
    id: 'governance',
    name: 'Governance, Identity & Security',
    summary: 'Identity, data governance, safety, and audit controls apply across the experience.',
    components: [
      'Microsoft Entra ID for identity and role-based access',
      'Microsoft Purview for governance and lineage',
      'Content safety and responsible-AI controls',
      'Audit logging of agent activity, evidence, and human approvals',
    ],
  },
  {
    id: 'experience',
    name: 'Experience & Delivery Channels',
    summary: 'Executive and business users access Charter-context intelligence across familiar surfaces.',
    components: [
      'Microsoft 365 Copilot / Microsoft Teams',
      'Embedded Power BI visuals for supporting detail',
      'Executive Copilot web experience and conversational analysis',
      'Scheduled role-aware executive briefing',
    ],
  },
  {
    id: 'operations',
    name: 'Observability & Operations',
    summary: 'Monitoring and evaluations support reliable and measurable operator experiences.',
    components: [
      'Azure Monitor / Application Insights',
      'Evaluation dashboards for accuracy, groundedness, and usage',
      'User feedback loop for continuous improvement',
      'Operational support and production-readiness practices',
    ],
  },
];

const strategicPriorities = [
  'Grow broadband and mobile customer relationships',
  'Increase mobile attach among eligible internet households',
  'Reduce churn through validated, customer-appropriate actions',
  'Improve network and customer-care outcomes',
  'Strengthen product engagement across connectivity and video',
  'Grow SMB, commercial, and advertising opportunities',
  'Improve operating efficiency and digital care resolution',
];

const marketInsights = [
  {
    title: 'Household product relationships',
    description: 'Review internet-only and mobile-only cohorts to assess relevant attach opportunities, with eligibility and customer preference safeguards.',
  },
  {
    title: 'Connectivity and retention',
    description: 'Connect network, service, care, and customer signals to investigate retention trends without treating correlation as causation.',
  },
  {
    title: 'Video engagement',
    description: 'Compare engagement patterns across customer groups to inform experience and product questions.',
  },
  {
    title: 'Commercial and advertising growth',
    description: 'Bring SMB pipeline, serviceability, campaign, and inventory signals into a consistent opportunity review.',
  },
  {
    title: 'Digital service operations',
    description: 'Balance digital resolution and cost efficiency with repeat contacts, escalation quality, and customer feedback.',
  },
];

const aiRecommendations = [
  'Test mobile attach recommendations for eligible internet households against a control group.',
  'Validate retention risk cohorts before outreach and evaluate net retained value and customer outcomes.',
  'Investigate market-level broadband and network exceptions with care-contact evidence.',
  'Prioritize serviceable SMB opportunities and track qualified pipeline to realized revenue.',
  'Assess digital care changes on resolution quality, repeat contacts, escalations, and accessibility.',
  'Review advertising opportunity indicators alongside campaign performance and inventory constraints.',
];

const scenarioCards = [
  {
    title: 'Household Growth & Mobile Attach',
    signal: 'Identify internet-only households with eligible mobile opportunities and other product gaps.',
    action: 'Rank relevant next-best-product options after checking serviceability, eligibility, and consent.',
    measure: 'Incremental attach, household penetration, customer experience, and opt-outs versus a control.',
  },
  {
    title: 'Customer Retention',
    signal: 'Review churn signals with tenure, network events, service interactions, and customer feedback.',
    action: 'Recommend an eligible customer-care or retention motion for human review.',
    measure: 'Incremental retained value against a holdout, net of intervention cost and customer outcomes.',
  },
  {
    title: 'Broadband Growth',
    signal: 'Compare net adds and serviceability across markets, customer segments, and acquisition channels.',
    action: 'Surface opportunity areas and evidence for a targeted growth experiment.',
    measure: 'Net adds, conversion, retention, and service quality against an agreed baseline.',
  },
  {
    title: 'Video Engagement',
    signal: 'Analyze segment-level engagement and customer experience patterns across video products.',
    action: 'Recommend an experience or packaging question for business review, not an automatic change.',
    measure: 'Engagement, customer retention, and revenue using governed definitions.',
  },
  {
    title: 'Commercial & Advertising Growth',
    signal: 'Combine SMB fit and serviceability with commercial pipeline and advertising inventory signals.',
    action: 'Prioritize qualified cross-sell and campaign opportunities with visible assumptions.',
    measure: 'Qualified pipeline, conversion, campaign performance, and realized incremental value.',
  },
  {
    title: 'Executive AI Briefing',
    signal: 'Synthesize connectivity, mobile, video, customer, network, care, and commercial performance.',
    action: 'Summarize material risks and opportunities with evidence, assumptions, and accountable follow-up.',
    measure: 'Decision follow-through, outcome movement, evidence traceability, and executive usefulness.',
  },
];

const walkthroughSteps = [
  {
    id: 'household-growth',
    title: 'Household Growth & Mobile Attach',
    description: 'Find eligible internet-only households and product gaps; review next-best-product recommendations with customer eligibility, consent, and experience safeguards.',
    page: 'brief',
  },
  {
    id: 'retention',
    title: 'Customer Retention',
    description: 'Review validated customer risk signals, connect service and care evidence, and compare retention motions against a holdout.',
    page: 'brief',
  },
  {
    id: 'broadband',
    title: 'Broadband Growth',
    description: 'Compare illustrative net adds and serviceability patterns by market and acquisition channel.',
    page: 'brief',
  },
  {
    id: 'video',
    title: 'Video Engagement',
    description: 'Explore segment-level engagement and customer experience as evidence for product questions.',
    page: 'outcomes',
  },
  {
    id: 'commercial',
    title: 'Commercial & Advertising',
    description: 'Review SMB and advertising opportunity signals, including the evidence needed to qualify them.',
    page: 'outcomes',
  },
  {
    id: 'operations',
    title: 'Network & Digital Care Operations',
    description: 'Connect availability and digital-care metrics to quality, repeat contacts, and customer outcomes.',
    page: 'architecture',
  },
  {
    id: 'executive-briefing',
    title: 'Executive AI Briefing',
    description: 'Synthesize operator-specific risks and opportunities into an evidence-linked executive narrative.',
    page: 'brief',
  },
  {
    id: 'agents',
    title: 'Charter-Aware Agent Team',
    description: 'See how specialist agents work with Charter priorities, governed measures, and human review.',
    page: 'agents',
  },
];

const outcomes = [
  {
    title: 'Broadband Growth',
    description: 'Identify market and household opportunities to improve acquisition and broadband net adds.',
  },
  {
    title: 'Mobile Attach Growth',
    description: 'Find eligible internet households for relevant mobile offers and measure incremental attach.',
  },
  {
    title: 'Reduced Customer Churn',
    description: 'Use validated risk signals to review retention actions and measure net customer value.',
  },
  {
    title: 'Stronger Product Engagement',
    description: 'Use video and connectivity engagement evidence to guide product and experience decisions.',
  },
  {
    title: 'Commercial Revenue Growth',
    description: 'Qualify SMB and commercial opportunities based on account fit, serviceability, and pipeline evidence.',
  },
  {
    title: 'Advertising Opportunity',
    description: 'Bring campaign and inventory signals together to support evidence-based advertising decisions.',
  },
  {
    title: 'Improved Customer Experience',
    description: 'Balance digital resolution and operational efficiency with service quality and customer feedback.',
  },
];

export const charterOperator = {
  id: 'charter',
  name: 'Charter',
  description: 'Broadband, mobile, video, commercial, advertising, customer experience, and network operations',
  sampleDataNotice: 'Synthetic illustrative Charter demo values; not reported results and not connected to live systems.',
  defaultExecutiveId: 'charter-ceo',
  hasDeploymentPlan: false,
  executives,
  metrics,
  anomalies,
  dailyBrief,
  executiveBriefs,
  feedPrompts,
  executivePrompts,
  qaBank,
  defaultAnswer: {
    answer: 'This is a synthetic Charter operator demo. A production experience would ground answers in authorized, governed operator data and cite its evidence; no live Charter systems are connected here.',
    sources: [source('Platform', 'Live data connection not enabled')],
  },
  strategicPriorities,
  agentDirectives: [
    'Prioritize broadband, mobile, video, customer, network, and commercial signals.',
    'Investigate attach and retention opportunities using eligibility and customer-experience guardrails.',
    'Distinguish observed measures, modeled indicators, and scenario assumptions.',
    'Require human review before recommendations become customer or operational actions.',
  ],
  walkthroughSteps,
  architectureLayers,
  dataSources,
  compassDimensions: {
    region: { label: 'Region', options: ['Northeast', 'Central', 'Mountain', 'Southwest'] },
    market: { label: 'Market', options: ['New York', 'St. Louis', 'Denver', 'Phoenix', 'Dallas'] },
    channel: { label: 'Channel', options: ['Digital', 'Retail', 'Care'] },
  },
  outcomes,
  marketInsights,
  aiRecommendations,
  scenarioCards,
};
