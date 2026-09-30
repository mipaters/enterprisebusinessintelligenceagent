# FDE Intake Request: Comcast Enterprise Decision Intelligence

## Customer Information

**Customer:** Comcast Cable

**Industry:** Telco and Media

**Region:** Americas

**Engagement:** Forward Deployed Engineering

**Funding Model:** Phase 0 (Proof of Concept) delivered as a non-billable Microsoft investment. Funding for the MVP and production phases (ECIF and/or direct commercial engagement) to be confirmed with Comcast leadership based on POC outcomes, subject to final commercial confirmation.

**Offer Type:** FDE Standard — a short, non-billable Proof of Concept sprint, with a funded MVP and production engagement to follow based on the results of the POC and leadership approval.

**Preferred Microsoft Contact:** Jay Rao

**Microsoft Executive Sponsorship:** Deb Cupp and Kevin Shatzkamer

**Customer Executive Sponsorship:** Steve Croney, CEO, Comcast Connectivity

**Customer Business Sponsor:** Scott Engle, EVP, Enterprise Business Intelligence

## Title

**Comcast Enterprise Decision Intelligence: Executive Intelligence and AI-Enabled Business Insights**

## Executive Summary

Comcast Enterprise Business Intelligence is transforming from a traditional reporting and dashboard organization into an Enterprise Decision Intelligence capability.

The objective is to use Comcast's trusted enterprise data, standardized metrics, semantic models, and business context to deliver automated, role-specific intelligence that helps leaders understand performance, investigate underlying business drivers, and make better decisions.

The immediate priority is an Executive Intelligence experience for a focused group of Comcast executives. The experience would provide:

- A daily narrative business-insight briefing
- A consolidated view of priority enterprise metrics
- Identification of meaningful changes, anomalies, and business drivers
- Conversational access to trusted metrics through Microsoft 365 Copilot
- The ability to investigate performance without navigating multiple reports
- Links to supporting evidence and existing reports where deeper detail is required

To de-risk investment on both sides, Microsoft will deliver this initial experience as a focused, thin-sliced **Proof of Concept (POC)** over a 30-day sprint, funded as a non-billable Microsoft investment. The POC is intended to demonstrate tangible value quickly and give Comcast leadership the evidence needed to allocate funding for an ongoing, jointly resourced engagement. Assuming leadership is satisfied with the POC results, the engagement then proceeds into a funded MVP and, subsequently, a production deployment.

This initial experience will establish the foundation for Comcast's broader Enterprise Decision Intelligence vision, including decision and data agents for business functions, forecasting, scenario modelling, competitive intelligence, and eventually recommended actions.

## Business Scenario and Technical Blocker

Comcast has developed a mature enterprise Business Intelligence capability with a trusted business and semantic layer and approximately 500 standardized enterprise metrics.

However, the current operating model still depends heavily on dashboards, reports, analyst-driven investigation, and people-intensive processes for turning data into executive insight.

Executives may need to navigate multiple reports or depend on analysts to:

- Identify important performance changes
- Understand the drivers behind changes
- Connect information across business domains
- Determine whether an issue requires action
- Explore follow-up questions
- Evaluate potential decisions

The business challenge is therefore not a lack of data. It is the time and effort required to convert trusted enterprise data into timely, decision-ready intelligence for each business role.

The technical challenge is to create a governed intelligence layer that can:

- Use Comcast's existing trusted metrics and semantic definitions
- Generate concise and traceable executive narratives
- Support natural-language questions about performance and business drivers
- Enforce role-based access and appropriate data boundaries
- Preserve metric definitions and business context
- Integrate with current Comcast data platforms without requiring major upfront modernization
- Extend into forecasting, scenario modelling, and decision-support agents over time

## Why Existing Solutions Are Not Sufficient

Traditional dashboards and reports remain useful, but they require users to know where to look, understand the visualization model, and manually correlate information across domains.

Generic conversational AI solutions may provide natural-language access but do not automatically inherit Comcast's trusted metric definitions, business context, security policies, or decision logic.

A standalone product implementation or advisory engagement would not address the full need because Comcast requires:

- Joint business and technical discovery
- Experience design with executive users
- Integration with existing enterprise data sources
- Grounding in Comcast's standardized metrics
- AI engineering and orchestration
- Security and access-control design
- Evaluation of narrative accuracy and traceability
- Rapid iteration with Comcast stakeholders
- Production-oriented engineering patterns
- A scalable architecture for future decision and data agents

FDE is appropriate because this is a focused but complex code-with engagement requiring Microsoft engineers to work directly with Comcast's business, data, analytics, security, and engineering teams. Structuring the first phase as a short, non-billable POC allows this code-with model to begin immediately, without waiting on longer commercial or budget cycles.

## Initial Priority Scenario

### Executive Intelligence: Daily Enterprise Performance Insights

The first implementation will focus on demonstrating the end-state Executive Intelligence experience for a small executive audience.

The target experience includes:

1. A daily executive morning brief summarizing the most important enterprise performance insights.
2. Identification of material changes, exceptions, emerging issues, and business drivers.
3. Conversational access to trusted enterprise metrics through Microsoft 365 Copilot.
4. The ability to ask follow-up questions and investigate the underlying causes of performance.
5. Supporting links or references that allow users to validate the source data.
6. Role-based access to ensure each executive receives appropriate information.
7. User feedback mechanisms to improve relevance, accuracy, and usefulness.

The experience should use Comcast's existing trusted enterprise metrics and data sources wherever practical. A major data migration or broad modernization program should not be a prerequisite for the initial proof point.

## Broader Enterprise Decision Intelligence Vision

The initial Executive Intelligence experience is the first use case within a broader transformation that includes four connected workstreams.

### Workstream 1: Decision and Data Agents

Develop purpose-built agents for specific business functions and decision scenarios.

These agents would combine enterprise metrics, business context, and relevant supporting information to explain performance and assist users with defined decisions.

### Workstream 2: Future BI and Tooling Strategy

Define how Comcast's current BI environment evolves from report-centric experiences toward automated insights, conversational analysis, and agent-driven decision support.

Power BI would continue to provide visualization, semantic modelling, validation, and control capabilities where appropriate, without making dashboards the sole end-user experience.

### Workstream 3: Executive Intelligence

Deliver role-specific executive briefs, conversational KPI access, driver analysis, and guided investigation.

This is the recommended starting point for the initial FDE engagement, and the subject of the Phase 0 Proof of Concept.

### Workstream 4: Enterprise Decision Platforms

Extend the architecture into forecasting, scenario planning, competitive intelligence, resource modelling, and decision simulation.

This future capability could allow business leaders to model a potential action, evaluate likely market or operational responses, and understand financial and customer trade-offs.

# How FDE Would Deliver the Project

## Delivery Principles

The engagement would follow five principles.

### 1. Business outcomes before product selection

The project will begin with Comcast's executive decisions, user needs, metrics, and desired business outcomes.

Microsoft technologies will be selected only where they contribute directly to the required outcome. The engagement will not be structured as a Fabric, Foundry, Power BI, or Copilot product demonstration.

### 2. Code with Comcast, not in isolation

FDE engineers will work directly with Comcast's EBI, data, engineering, security, platform, and business teams.

Microsoft will not disappear for the length of the POC and return with a completed prototype. Comcast stakeholders will participate throughout discovery, development, validation, and prioritization.

### 3. Use the existing trusted data foundation

The initial implementation will reuse Comcast's standardized metrics, semantic models, and existing data sources, including Teradata where appropriate.

Moving data into Microsoft Fabric will not be treated as a prerequisite for initial value. Fabric may be evaluated as part of the longer-term target architecture after the first experience has demonstrated business value.

### 4. Thin-slice delivery

The first release will focus on a narrow, high-value executive experience rather than attempting to implement the complete Enterprise Decision Intelligence vision.

This thin slice is the Phase 0 Proof of Concept: a 30-day, non-billable sprint covering a limited set of executives, priority metrics, business domains, and follow-up questions, designed to prove value quickly and support a leadership funding decision for the phases that follow.

### 5. Production-minded engineering

Although the first milestone is a proof point, the architecture and engineering work will consider security, observability, evaluation, maintainability, integration, and future production scaling from the beginning, so that POC outputs can be extended rather than rebuilt in the MVP phase.

## Scoping Approach

FDE and Comcast will conduct a structured joint scoping process before committing to the final backlog or architecture.

Scoping will establish:

- The specific executive users included in the first release
- The business questions and decisions the experience must support
- The initial enterprise metrics and business domains
- Source systems and semantic models
- Metric owners and approval authorities
- Security, privacy, identity, and access requirements
- The required executive briefing format and delivery channel
- Conversational drill-down scenarios
- Data freshness expectations
- Narrative accuracy and traceability requirements
- Evaluation criteria and acceptance thresholds
- Comcast and Microsoft delivery roles
- Environment, access, legal, and onboarding dependencies
- The funding and production path following the initial POC

### Initial Scoping Workshops

The recommended scoping workshops are:

**Business Outcome Workshop**

- Identify the executive audience.
- Document the decisions and questions the experience must support.
- Prioritize the initial KPIs, exceptions, and business drivers.
- Agree on what constitutes a useful executive morning brief.

**Data and Semantic Foundation Workshop**

- Review existing standardized metrics and semantic models.
- Identify initial source systems and data owners.
- Confirm metric definitions, relationships, lineage, and freshness.
- Identify access or integration constraints.

**Experience and User Journey Workshop**

- Define the daily briefing experience.
- Define conversational follow-up journeys.
- Review examples of existing Comcast EBI tools and functional prototypes.
- Agree on validation and feedback methods.

**Architecture, Security, and Operations Workshop**

- Evaluate integration patterns with existing Comcast platforms.
- Confirm identity, authorization, logging, monitoring, and data handling.
- Determine which Microsoft services are required.
- Identify environment and onboarding requirements.
- Define the initial production-readiness backlog.

**Success and Value Workshop**

- Establish business, user, technical, and operational success measures.
- Define baseline measurements where available.
- Agree on the POC exit criteria and the evidence leadership needs to approve funding.
- Define the decision process for moving into the funded MVP phase.

## Sprint 0: Definition and Readiness

Sprint 0 converts the discovery output into an executable delivery plan for the POC.

Sprint 0 deliverables will include:

- Agreed problem statement and target executive experience
- Prioritized user journeys
- Initial KPI and data-domain scope
- Architecture decision record
- Data-access and environment-readiness plan
- Security and compliance requirements
- Product backlog with prioritized user stories
- Definition of done for each major capability
- Evaluation and testing plan
- Delivery governance and meeting cadence
- Risk, assumption, issue, and dependency register
- Comcast and Microsoft RACI
- Initial production and support strategy
- POC exit criteria and funding decision checkpoint

The joint team will not commit to a fixed POC start date until the required data access, architecture, security, environment, onboarding, and legal dependencies have been validated.

# Phased Implementation Approach

The engagement is structured in three stages: a short, non-billable Proof of Concept to prove value and unlock funding; a funded MVP to validate and harden the experience with real executive users; and production deployment and expansion once Comcast has committed to ongoing investment.

## Phase 0: Proof of Concept (Non-Billable, 30 Days)

**Objective:** Deliver a focused, thin-sliced version of the Executive Intelligence experience quickly, as a non-billable Microsoft investment, to demonstrate tangible business value and give Comcast leadership the evidence needed to fund an ongoing engagement.

**Funding:** Delivered at Microsoft's expense. No commercial commitment from Comcast is required to start. Continued investment beyond the POC (MVP and production) depends on a leadership go/no-go decision informed by the POC results.

**Duration:** 30 days, inclusive of mobilization, scoping, build, and a leadership readout.

**Activities:**

- Confirm executive sponsor, business owner, and initial executive users.
- Select a narrow set of priority metrics and business domains.
- Validate data-source availability and reuse Comcast's existing trusted metrics and semantic layer.
- Review Comcast's existing functional prototypes.
- Confirm minimum viable security, identity, and legal requirements for a non-production POC.
- Build a working daily executive brief, a role-filtered KPI view, anomaly/driver highlights, and conversational Q&A for the selected scope.
- Conduct regular demonstrations with Comcast stakeholders throughout the sprint.
- Prepare a leadership readout summarizing results, value demonstrated, and the funding ask for the next phase.

**Primary outputs:**

- Working thin-slice Executive Intelligence experience (daily brief, KPI view, driver analysis, conversational Q&A) for a small executive group
- Source traceability for generated narratives and answers
- Lightweight evaluation of usefulness and accuracy
- Architecture direction and reusable engineering patterns for the MVP
- Leadership readout with a clear funding recommendation and proposed MVP/production roadmap

**Exit criteria:**

- The POC has been demonstrated to the target executive audience and Comcast business sponsor.
- Comcast leadership has assessed the value of the experience against the effort required to scale it.
- A funding decision has been made on whether to proceed to the funded MVP phase.
- If approved, initial metrics, data access, security path, and joint team for the MVP are identified.

## Phase 1: MVP — Validate, Expand, and Harden (Funded)

**Objective:** Assuming a positive POC outcome and confirmed funding, build a more complete, validated MVP: broaden the executive audience and metric coverage, harden the experience with real users, and establish the path to production.

**Activities:**

- Confirm funding model (e.g., ECIF allocation or direct commercial engagement) and mobilize the funded joint team.
- Expand the executive audience, metrics, and business domains beyond the POC thin slice.
- Connect to additional approved Comcast data sources as needed.
- Run the experience with the target executive audience and capture structured feedback on usefulness, clarity, trust, and actionability.
- Tune narrative generation, driver analysis, and question handling based on feedback.
- Add authentication, authorization, telemetry, and operational controls appropriate for a validated MVP.
- Expand evaluation for accuracy, groundedness, security, and reliability.
- Document architecture, code, deployment methods, and operating procedures.
- Confirm the production backlog, ownership model, and funding approach for Phase 2.

**Primary outputs:**

- Validated, expanded Executive Intelligence MVP
- User feedback and adoption findings
- Accuracy and groundedness evaluation results
- Hardened architecture and updated backlog
- Production-readiness assessment
- Production and commercial recommendation for Phase 2

**Exit criteria:**

- Executive users confirm that the experience improves access to relevant business insights across the expanded scope.
- Agreed quality, security, and reliability criteria are met.
- Material gaps and risks are documented.
- Comcast and Microsoft agree on production scope, ownership, and funding path.

## Phase 2: Production Deployment and Expansion (Funded)

**Objective:** Move the validated MVP into a supported production model and expand its business coverage.

This phase would be separately scoped and commercially confirmed based on the results of the MVP.

Potential activities include:

- Production deployment
- Additional executive personas
- Additional business domains and metrics
- Broader integration with Microsoft 365 Copilot
- Enhanced monitoring and support
- Formal service management and operational ownership
- Expanded decision and data agents
- Forecasting and scenario-planning capabilities
- Selective adoption of Microsoft Fabric where it creates measurable architectural or business value
- Reusable patterns for other Comcast business functions

## Phase 3: Scale Enterprise Decision Intelligence

**Objective:** Establish a repeatable enterprise capability for role-specific decision intelligence across Comcast.

Potential future capabilities include:

- Decision agents for individual business functions
- Scenario modelling and simulation
- Forecasting and resource-planning agents
- Competitive intelligence
- Recommended actions with human approval
- Shared governance, evaluation, and lifecycle standards
- Portfolio-level monitoring of value, risk, usage, and quality
- Reusable semantic and agent patterns across Comcast entities

# Delivery Team and Operating Model

## Microsoft FDE Team

The final team composition will be determined during scoping, but the engagement may require:

- FDE engagement lead
- AI and application engineers
- Data and analytics engineer
- Technical program manager
- User-experience or service designer
- Security and identity specialist
- Microsoft 365 Copilot specialist
- Fabric, Power BI, or Foundry specialists where required
- Product engineering participation for identified product-level dependencies

The Phase 0 POC team will be intentionally small, reflecting its non-billable, thin-slice scope; the team would scale up for the funded MVP and production phases.

## Required Comcast Participation

Comcast participation is a dependency for success, including during the non-billable POC.

Comcast should provide:

- Executive sponsor
- Accountable EBI business owner
- Executive-user representatives
- Metric and semantic-model owners
- Data engineering and platform resources
- Security, identity, privacy, and compliance representatives
- Environment and onboarding support
- Comcast developers or engineers for code-with delivery
- Product owner with authority to prioritize the backlog
- Ongoing user validation and feedback
- Leadership availability for the POC readout and funding decision

## Delivery Governance

The recommended operating rhythm is:

- Joint product-owner and engineering backlog management
- Regular sprint planning
- Short daily engineering alignment during active build periods
- Weekly demonstrations of working capabilities
- Weekly risk and dependency review
- Executive checkpoints at agreed milestones, including the POC leadership readout and go/no-go decision
- Formal phase-entry and phase-exit decisions

The backlog will remain outcome-driven. Scope changes will be evaluated against the agreed executive experience, timeframe, dependencies, and success criteria.

# Success Criteria

## Business and User Outcomes

- Executives receive concise, role-relevant enterprise performance insights.
- Users can investigate priority metrics and business drivers conversationally.
- The experience reduces dependence on navigating multiple dashboards and reports.
- Executives can trace insights to trusted Comcast metrics and supporting evidence.
- Users indicate that the experience improves the speed or quality of performance investigation.
- Comcast identifies a clear path for extending the model to additional users and decisions.
- The POC generates enough evidence of value that Comcast leadership approves funding for the MVP and production phases.

## Technical Outcomes

- The solution uses approved Comcast data sources and semantic definitions.
- Data access respects Comcast identity and authorization policies.
- Generated narrative content is grounded in trusted source data.
- Responses provide appropriate traceability.
- Evaluation covers accuracy, completeness, groundedness, security, and reliability.
- Architecture and code patterns are reusable for future decision-intelligence scenarios, minimizing rework between the POC, MVP, and production phases.
- The production-readiness backlog is documented and prioritized.

# Work Completed to Date

Microsoft and Comcast have already conducted executive and working-level discussions about transforming EBI from traditional Business Intelligence toward Enterprise Decision Intelligence.

The discussions have established:

- A broader vision for Enterprise Decision Intelligence
- Four connected workstreams
- Executive Intelligence as the initial priority
- A daily narrative morning brief as the first target experience
- Conversational access to trusted enterprise KPIs
- The need to investigate performance drivers without navigating traditional reports
- A preference to reuse existing Comcast metrics, semantic models, and Teradata sources
- Agreement that a major Fabric migration should not be required before demonstrating value
- Agreement to start with a short, non-billable POC sprint (30 days) to demonstrate value before committing funding to the broader engagement
- The need for active Comcast participation throughout the engagement, including the POC
- The requirement to validate data access, environments, security, onboarding, legal, and funding readiness before committing to a final delivery plan for the funded phases

Comcast has indicated that the initial Executive Intelligence scenario provides the clearest, most achievable, and highest-visibility starting point for the broader EBI transformation.

# Recommended FDE Engagement Outcome

At the conclusion of the Phase 0 POC, Comcast should have:

1. A validated, thin-slice Executive Intelligence experience.
2. A working daily enterprise performance brief for the initial executive group.
3. Conversational access to a limited set of trusted enterprise metrics.
4. The ability to investigate selected performance drivers.
5. A documented and tested architecture direction.
6. A repeatable evaluation approach.
7. A clear, evidence-based recommendation on whether and how to fund the MVP and production phases.
8. A defined path to expand into broader Enterprise Decision Intelligence.
9. Reusable engineering patterns that Comcast can extend with Microsoft in subsequent phases.

At the conclusion of the funded MVP and production phases, Comcast should additionally have:

10. A production-deployed, hardened Executive Intelligence capability at expanded scale.
11. A commercial and delivery model for ongoing support and further expansion.
