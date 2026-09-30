import { agentTeam } from '../data/solutionContent';

export default function AgentTeam() {
  return (
    <div className="agent-team-page">
      <section className="card">
        <p className="eyebrow">Underlying agent team</p>
        <h2>The Specialist Agents Behind the Experience</h2>
        <p className="overview-lede">
          An orchestration agent coordinates a team of specialist agents. Each specialist owns one part
          of the journey from trusted data to a reviewable executive decision.
        </p>
      </section>

      <section className="card">
        <div className="agent-grid">
          {agentTeam.map((agent) => (
            <div key={agent.id} className={agent.id === 'orchestration' ? 'agent-card agent-card-lead' : 'agent-card'}>
              <h3>{agent.name}</h3>
              <p className="agent-role">{agent.role}</p>
              <ul>
                {agent.responsibilities.map((item) => (
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
