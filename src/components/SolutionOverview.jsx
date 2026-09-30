import { capabilityTiles, todayVsFuture, valueFlowSteps, personas } from '../data/solutionContent';

export default function SolutionOverview() {
  return (
    <div className="solution-overview">
      <section className="card overview-hero">
        <p className="eyebrow">What it does</p>
        <h2>Turn Trusted Enterprise Data into Decision-Ready Intelligence</h2>
        <p className="overview-lede">
          The Enterprise Business Intelligence Agent transforms governed enterprise metrics, business
          context, and supporting evidence into concise executive insights, conversational analysis,
          decision scenarios, and reviewable recommendations.
        </p>
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
            <h3>With Enterprise Business Intelligence Agent</h3>
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
        <h2>Built Around Executive and Business Roles</h2>
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
    </div>
  );
}
