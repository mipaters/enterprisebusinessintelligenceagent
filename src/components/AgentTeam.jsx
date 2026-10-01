import { agentTeam } from '../data/solutionContent';
import { useOperator } from '../data/OperatorContext';

export default function AgentTeam() {
  const { operator } = useOperator();
  return (
    <div className="agent-team-page">
      <section className="card">
        <p className="eyebrow">{operator.name} · Operator-aware agent team</p>
        <h2>Specialist Agents, One Operator Context</h2>
        <p className="overview-lede">
          An orchestration agent coordinates a team of specialist agents. Each specialist owns one part
          of the journey from trusted data to a reviewable executive decision. Every agent uses the
          selected operator's metrics, priorities, evidence, and safeguards.
        </p>
        <div className="operator-focus-panel">
          <h3>Active operator priorities</h3>
          <div className="operator-chip-list">
            {operator.strategicPriorities.map((priority) => (
              <span key={priority} className="operator-chip">{priority}</span>
            ))}
          </div>
        </div>
        <ul className="agent-context-list">
          {operator.agentDirectives.map((directive) => <li key={directive}>{directive}</li>)}
        </ul>
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
