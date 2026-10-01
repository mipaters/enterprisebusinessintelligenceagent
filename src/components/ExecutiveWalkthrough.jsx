import { useState } from 'react';
import { useOperator } from '../data/OperatorContext';

export default function ExecutiveWalkthrough({ onClose, onNavigate }) {
  const { operator } = useOperator();
  const walkthroughSteps = operator.walkthroughSteps;
  const [activeStepId, setActiveStepId] = useState(null);
  const activeStep = walkthroughSteps.find((step) => step.id === activeStepId);

  const handleGoTo = (step) => {
    if (step.page) {
      onNavigate(step.page);
      onClose();
    }
  };

  return (
    <div className="walkthrough-overlay" role="dialog" aria-modal="true">
      <div className="walkthrough-header">
        <div>
          <p className="eyebrow">{operator.name} · Executive demo walkthrough</p>
          <h2>Guided Tour of Executive Copilot</h2>
        </div>
        <button type="button" className="walkthrough-close" onClick={onClose} aria-label="Close walkthrough">
          ✕
        </button>
      </div>

      <div className="walkthrough-tiles">
        {walkthroughSteps.map((step, index) => (
          <button
            key={step.id}
            type="button"
            className={
              activeStepId === step.id ? 'walkthrough-tile walkthrough-tile-active' : 'walkthrough-tile'
            }
            onClick={() => setActiveStepId(step.id)}
          >
            <span className="walkthrough-tile-index">{index + 1}</span>
            <span className="walkthrough-tile-title">{step.title}</span>
          </button>
        ))}
      </div>

      {activeStep && (
        <div className="walkthrough-detail">
          <h3>{activeStep.title}</h3>
          <p>{activeStep.description}</p>
          {activeStep.page ? (
            <button type="button" className="walkthrough-goto" onClick={() => handleGoTo(activeStep)}>
              Go to this step →
            </button>
          ) : (
            <p className="muted">This step is informational — see FDE-PROPOSAL.md for the full plan.</p>
          )}
        </div>
      )}
    </div>
  );
}
