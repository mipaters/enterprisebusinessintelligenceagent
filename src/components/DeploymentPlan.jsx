import { deploymentPhases } from '../data/solutionContent';

export default function DeploymentPlan() {
  return (
    <div className="deployment-page">
      <section className="card">
        <p className="eyebrow">FDE deployment plan</p>
        <h2>From Proof of Concept to Enterprise Scale</h2>
        <p className="overview-lede">
          The engagement starts with a short, non-billable proof of concept to prove value quickly, then
          proceeds through funded phases based on demonstrated results and leadership approval.
        </p>
      </section>

      <section className="card">
        <div className="deployment-phase-list">
          {deploymentPhases.map((phase) => (
            <div key={phase.id} className="deployment-phase-card">
              <div className="deployment-phase-header">
                <span className="deployment-phase-label">{phase.label}</span>
                <h3>{phase.name}</h3>
                <span className="badge badge-phase">{phase.badge}</span>
              </div>
              <p className="deployment-phase-objective">{phase.objective}</p>
              <ul>
                {phase.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
