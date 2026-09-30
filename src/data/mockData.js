// Mock data for the Comcast Enterprise Decision Intelligence / Executive Intelligence demo.
// All figures, names, and sources below are illustrative and for demonstration purposes only.

export const executives = [
  {
    id: 'ceo-connectivity',
    name: 'Steve Croney',
    title: 'CEO, Comcast Connectivity & Platforms',
    focusMetrics: ['broadband-net-adds', 'video-churn', 'enterprise-revenue', 'ebitda-margin', 'nps'],
  },
  {
    id: 'evp-ebi',
    name: 'Scott Engle',
    title: 'EVP, Enterprise Business Intelligence',
    focusMetrics: ['broadband-net-adds', 'mobile-line-adds', 'nps', 'network-reliability', 'ebitda-margin'],
  },
  {
    id: 'cfo',
    name: 'Jason Armstrong (mock)',
    title: 'CFO, Comcast Cable',
    focusMetrics: ['enterprise-revenue', 'ebitda-margin', 'capital-intensity', 'arpu'],
  },
  {
    id: 'coo',
    name: 'Dave Watson (mock)',
    title: 'COO, Comcast Cable',
    focusMetrics: ['network-reliability', 'call-center-aht', 'video-churn', 'broadband-net-adds'],
  },
];

export const metrics = [
  {
    id: 'broadband-net-adds',
    name: 'Broadband Net Adds',
    domain: 'Connectivity',
    value: '-18.4K',
    unit: 'subscribers (WoW)',
    trend: 'down',
    changePct: -12.3,
    status: 'attention',
    sparkline: [42, 38, 35, 30, 22, 14, -4, -18.4],
    source: 'Enterprise Metrics Hub > Connectivity > Broadband Subscriber Report',
  },
  {
    id: 'video-churn',
    name: 'Video Subscriber Churn',
    domain: 'Connectivity',
    value: '2.31%',
    unit: 'monthly churn',
    trend: 'up',
    changePct: 6.8,
    status: 'attention',
    sparkline: [1.9, 1.95, 2.0, 2.05, 2.1, 2.2, 2.25, 2.31],
    source: 'Enterprise Metrics Hub > Connectivity > Video Retention Dashboard',
  },
  {
    id: 'mobile-line-adds',
    name: 'Mobile Line Net Adds',
    domain: 'Connectivity',
    value: '+318K',
    unit: 'lines (QTD)',
    trend: 'up',
    changePct: 9.4,
    status: 'healthy',
    sparkline: [210, 240, 255, 270, 290, 300, 310, 318],
    source: 'Enterprise Metrics Hub > Connectivity > Mobile Performance Report',
  },
  {
    id: 'enterprise-revenue',
    name: 'Enterprise Revenue',
    domain: 'Business Services',
    value: '$2.41B',
    unit: 'quarterly',
    trend: 'up',
    changePct: 3.1,
    status: 'healthy',
    sparkline: [2.28, 2.3, 2.33, 2.35, 2.37, 2.38, 2.4, 2.41],
    source: 'Enterprise Metrics Hub > Business Services > Revenue Summary',
  },
  {
    id: 'ebitda-margin',
    name: 'Adjusted EBITDA Margin',
    domain: 'Finance',
    value: '40.2%',
    unit: 'trailing quarter',
    trend: 'flat',
    changePct: 0.2,
    status: 'healthy',
    sparkline: [39.8, 39.9, 40.0, 40.0, 40.1, 40.1, 40.2, 40.2],
    source: 'Enterprise Metrics Hub > Finance > Profitability Semantic Model',
  },
  {
    id: 'arpu',
    name: 'Residential ARPU',
    domain: 'Finance',
    value: '$196.40',
    unit: 'per customer relationship',
    trend: 'up',
    changePct: 1.4,
    status: 'healthy',
    sparkline: [190, 191, 192.5, 193, 194, 195, 196, 196.4],
    source: 'Enterprise Metrics Hub > Finance > ARPU Report',
  },
  {
    id: 'network-reliability',
    name: 'Network Reliability',
    domain: 'Operations',
    value: '99.982%',
    unit: 'availability (30-day)',
    trend: 'down',
    changePct: -0.03,
    status: 'watch',
    sparkline: [99.99, 99.99, 99.988, 99.986, 99.985, 99.984, 99.983, 99.982],
    source: 'Enterprise Metrics Hub > Operations > Network Health Dashboard',
  },
  {
    id: 'nps',
    name: 'Customer NPS',
    domain: 'Customer Experience',
    value: '+28',
    unit: 'net promoter score',
    trend: 'up',
    changePct: 4.2,
    status: 'healthy',
    sparkline: [22, 23, 24, 25, 26, 27, 27.5, 28],
    source: 'Enterprise Metrics Hub > Customer Experience > NPS Tracker',
  },
  {
    id: 'call-center-aht',
    name: 'Call Center AHT',
    domain: 'Customer Experience',
    value: '6m 42s',
    unit: 'average handle time',
    trend: 'up',
    changePct: 5.5,
    status: 'watch',
    sparkline: [5.9, 6.0, 6.1, 6.2, 6.3, 6.4, 6.6, 6.7],
    source: 'Enterprise Metrics Hub > Customer Experience > Contact Center Ops Report',
  },
  {
    id: 'capital-intensity',
    name: 'Capital Intensity',
    domain: 'Finance',
    value: '11.8%',
    unit: 'capex / revenue',
    trend: 'flat',
    changePct: -0.1,
    status: 'healthy',
    sparkline: [12.0, 11.9, 11.95, 11.9, 11.85, 11.8, 11.8, 11.8],
    source: 'Enterprise Metrics Hub > Finance > Capital Planning Model',
  },
];

export const anomalies = [
  {
    id: 'anomaly-broadband',
    metricId: 'broadband-net-adds',
    severity: 'high',
    headline: 'Broadband net adds declined sharply for the second consecutive week',
    driverSummary:
      'The decline is concentrated in the Northeast division and correlates with a competitor fixed-wireless promotion launched two weeks ago. Disconnect reason codes show a 22% increase in "switched provider" among promo-eligible households.',
    relatedMetrics: ['video-churn'],
    source: 'Enterprise Metrics Hub > Connectivity > Broadband Subscriber Report (Northeast Division cut)',
  },
  {
    id: 'anomaly-network',
    metricId: 'network-reliability',
    severity: 'medium',
    headline: 'Network reliability dipped slightly below target in two West Division markets',
    driverSummary:
      'A planned node maintenance window in Sacramento and a fiber cut near Fresno account for the majority of the availability dip. Both events are already logged as known incidents with remediation in progress.',
    relatedMetrics: ['call-center-aht'],
    source: 'Enterprise Metrics Hub > Operations > Network Health Dashboard (Incident Log)',
  },
  {
    id: 'anomaly-aht',
    metricId: 'call-center-aht',
    severity: 'low',
    headline: 'Average handle time trending up across contact centers',
    driverSummary:
      'A new billing-dispute workflow rolled out last week is adding roughly 45 seconds per call while agents ramp up. Training completion is tracking to close the gap within two weeks.',
    relatedMetrics: [],
    source: 'Enterprise Metrics Hub > Customer Experience > Contact Center Ops Report',
  },
];

export const dailyBrief = {
  date: 'Today',
  generatedAt: '6:00 AM ET',
  headline: 'Broadband softness driven by competitive pressure in the Northeast; mobile and enterprise revenue remain strong.',
  narrative: [
    'Good morning. Broadband net adds fell by 18.4K this week, the second straight week of decline, concentrated in the Northeast division where a competitor fixed-wireless promotion is pulling price-sensitive customers. Video churn rose in parallel, reinforcing that this is a competitive, not seasonal, effect.',
    'On the positive side, mobile line net adds are up 9.4% quarter-to-date and enterprise revenue grew 3.1%, keeping adjusted EBITDA margin stable at 40.2%. Residential ARPU also continues to climb, partially offsetting the broadband volume pressure.',
    'Two secondary items worth awareness: network reliability dipped slightly in two West Division markets due to known, already-remediated incidents, and contact center average handle time is elevated because of a new billing-dispute workflow that should normalize within two weeks as agent training completes.',
  ],
  recommendedFocus: "Recommend reviewing the Northeast retention offer and pricing response before next week's board update.",
};

export const feedPrompts = [
  'Why did broadband net adds decline this week?',
  'What is driving the increase in video churn?',
  'How is enterprise revenue trending this quarter?',
  'Summarize network reliability issues',
  'What should I focus on today?',
];

// Very small keyword-matched "answer bank" simulating a grounded, conversational
// Q&A experience over Comcast's trusted enterprise metrics and semantic layer.
export const qaBank = [
  {
    keywords: ['broadband', 'net add', 'decline', 'drop', 'why'],
    answer:
      'Broadband net adds fell 18.4K this week (-12.3% vs. last week), concentrated in the Northeast division. The primary driver is a competitor fixed-wireless promotion launched two weeks ago — disconnect reason codes show a 22% increase in "switched provider" among promo-eligible households. Video churn is rising in the same footprint, which supports the competitive-pressure explanation over a seasonal one.',
    sources: [
      'Enterprise Metrics Hub > Connectivity > Broadband Subscriber Report',
      'Enterprise Metrics Hub > Connectivity > Broadband Subscriber Report (Northeast Division cut)',
    ],
  },
  {
    keywords: ['churn', 'video'],
    answer:
      'Video subscriber churn is at 2.31% this month, up 6.8% from the prior period. The increase tracks closely with the Northeast broadband softness and the same competitor promotion, suggesting bundled households are leaving together rather than churning video independently.',
    sources: ['Enterprise Metrics Hub > Connectivity > Video Retention Dashboard'],
  },
  {
    keywords: ['enterprise revenue', 'revenue', 'business services'],
    answer:
      'Enterprise (Business Services) revenue is $2.41B for the quarter, up 3.1% quarter-over-quarter, continuing a steady eight-period growth trend. This growth is offsetting broadband volume softness at the consolidated EBITDA margin level, which remains stable at 40.2%.',
    sources: ['Enterprise Metrics Hub > Business Services > Revenue Summary'],
  },
  {
    keywords: ['network', 'reliability', 'outage', 'incident'],
    answer:
      'Network reliability is 99.982% over the trailing 30 days, a slight dip from target. Two West Division markets are responsible: planned node maintenance in Sacramento and a fiber cut near Fresno. Both are logged incidents with remediation already in progress, so no new action is required today.',
    sources: ['Enterprise Metrics Hub > Operations > Network Health Dashboard (Incident Log)'],
  },
  {
    keywords: ['focus', 'today', 'priorit', 'recommend'],
    answer:
      "The top item for today is the Northeast broadband and video softness tied to the competitor fixed-wireless promotion. Recommend reviewing the Northeast retention offer and pricing response ahead of next week's board update. Network and contact-center items are being actively managed and do not need executive attention today.",
    sources: [
      'Enterprise Metrics Hub > Connectivity > Broadband Subscriber Report (Northeast Division cut)',
      'Enterprise Metrics Hub > Customer Experience > Contact Center Ops Report',
    ],
  },
  {
    keywords: ['aht', 'handle time', 'call center', 'contact center'],
    answer:
      'Average handle time is up 5.5%, driven by a new billing-dispute workflow introduced last week that adds about 45 seconds per call while agents ramp up. Training completion is on track to close the gap within two weeks; this is being monitored but does not currently require escalation.',
    sources: ['Enterprise Metrics Hub > Customer Experience > Contact Center Ops Report'],
  },
  {
    keywords: ['mobile', 'line add'],
    answer:
      'Mobile line net adds are up 9.4% quarter-to-date at +318K lines, continuing a consistent upward trend and remaining one of the strongest-performing metrics this quarter.',
    sources: ['Enterprise Metrics Hub > Connectivity > Mobile Performance Report'],
  },
  {
    keywords: ['arpu'],
    answer:
      'Residential ARPU is $196.40, up 1.4% and trending steadily upward, partially offsetting the impact of lower broadband subscriber volume on revenue.',
    sources: ['Enterprise Metrics Hub > Finance > ARPU Report'],
  },
];

export const defaultAnswer = {
  answer:
    "This is a mocked response for the demo. In the production experience, this question would be routed through Comcast's governed semantic layer and trusted metric definitions to generate a grounded, traceable answer, with role-based access control applied automatically.",
  sources: ['Enterprise Metrics Hub (semantic layer) — live grounding not connected in this mockup'],
};
