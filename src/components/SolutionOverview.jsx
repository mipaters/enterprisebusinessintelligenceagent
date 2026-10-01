import { capabilityTiles, todayVsFuture, valueFlowSteps, personas } from '../data/solutionContent';
import { useOperator } from '../data/OperatorContext';

export default function SolutionOverview() {
  const { operator } = useOperator();
  return (
    <div className="solution-overview">
      <section className="card overview-hero">
        <p className="eyebrow">{operator.name} · What it does</p>
        <h2>Turn Trusted Enterprise Data into Decision-Ready Intelligence</h2>
        <p className="overview-lede">
          Executive Copilot transforms governed {operator.name} metrics, business
          context, and supporting evidence into concise executive insights, conversational analysis,
          decision scenarios, and reviewable recommendations.
        </p>
        <p className="data-notice">{operator.sampleDataNotice}</p>
      </section>

      <section className="card">
        <div className="capability-grid">
          {capabilityTiles.map((tile, index) => (
            <div key={tile.id} className="capability-tile">
              <span className="capability-index">{index + 1}</span>
              <h3>{tile.title}</h3>
              <ul>
                {tile.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <p className="eyebrow">Why it is needed</p>
        <h2>Executives Need Decisions, Not More Dashboards</h2>
        <div className="today-future-grid">
          <div className="today-future-col today-col">
            <h3>Today</h3>
            <ul>
              {todayVsFuture.today.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="today-future-col future-col">
            <h3>With Executive Copilot</h3>
            <ul>
              {todayVsFuture.future.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="value-flow">
          {valueFlowSteps.map((step, index) => (
            <span key={step} className="value-flow-step">
              {step}
              {index < valueFlowSteps.length - 1 && <span className="value-flow-arrow"> → </span>}
            </span>
          ))}
        </div>
      </section>

      <section className="card">
        <p className="eyebrow">Who it is for</p>
        <h2>{operator.name} Executive and Business Roles</h2>
        <div className="operator-executive-list">
          {operator.executives.map((executive) => (
            <div key={executive.id} className="operator-executive-card">
              <strong>{executive.name}</strong>
              <span>{executive.title}</span>
            </div>
          ))}
        </div>
        <div className="persona-grid">
          {personas.map((persona) => (
            <div key={persona.id} className="persona-card">
              <h3>{persona.role}</h3>
              <p className="persona-needs-label">Needs:</p>
              <ul>
                {persona.needs.map((need) => (
                  <li key={need}>{need}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <p className="eyebrow">Strategic priorities</p>
        <h2>Operator-Specific Areas of Focus</h2>
        <div className="operator-chip-list">
          {operator.strategicPriorities.map((priority) => (
            <span key={priority} className="operator-chip">{priority}</span>
          ))}
        </div>
      </section>
      <section className="card">
        <p className="eyebrow">Market insights</p>
        <h2>{operator.name} Industry and Operating Themes</h2>
        <div className="outcome-grid">
          {operator.marketInsights.map((insight) => (
            <article className="outcome-card" key={insight.title}>
              <h3>{insight.title}</h3>
              <p>{insight.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
