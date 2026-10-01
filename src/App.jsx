import { useMemo, useState } from 'react';
import NavBar from './components/NavBar';
import ExecutiveSelector from './components/ExecutiveSelector';
import DailyBrief from './components/DailyBrief';
import KpiGrid from './components/KpiGrid';
import DriverAnalysis from './components/DriverAnalysis';
import ChatPanel from './components/ChatPanel';
import SolutionOverview from './components/SolutionOverview';
import AgentTeam from './components/AgentTeam';
import SolutionArchitecture from './components/SolutionArchitecture';
import DeploymentPlan from './components/DeploymentPlan';
import BusinessOutcomes from './components/BusinessOutcomes';
import ExecutiveWalkthrough from './components/ExecutiveWalkthrough';
import { useOperator } from './data/OperatorContext';
import OperatorProvider from './data/OperatorProvider';
import './App.css';

function OperatorSelector({ onSelectOperator }) {
  const { operatorId, setOperatorId, operators } = useOperator();
  return (
    <div className="operator-selector">
      <label htmlFor="operator-select">Operator Experience</label>
      <select
        id="operator-select"
        value={operatorId}
        onChange={(event) => {
          setOperatorId(event.target.value);
          onSelectOperator(event.target.value);
        }}
      >
        {operators.map((operator) => (
          <option key={operator.id} value={operator.id}>
            {operator.name}
          </option>
        ))}
      </select>
    </div>
  );
}

function ExecutiveCopilot() {
  const { operator, operators, theme, setTheme } = useOperator();
  const [activePage, setActivePage] = useState('brief');
  const [walkthroughOpen, setWalkthroughOpen] = useState(false);
  const [executiveSelection, setExecutiveSelection] = useState({
    operatorId: operator.id,
    executiveId: operator.defaultExecutiveId,
  });
  const [pendingQuestion, setPendingQuestion] = useState(null);

  const selectedExecId =
    executiveSelection.operatorId === operator.id
      ? executiveSelection.executiveId
      : operator.defaultExecutiveId;
  const selectedExec =
    operator.executives.find((exec) => exec.id === selectedExecId) ?? operator.executives[0];
  const selectedBrief = operator.executiveBriefs[selectedExec.id] ?? operator.dailyBrief;
  const metricsById = useMemo(
    () => Object.fromEntries(operator.metrics.map((metric) => [metric.id, metric])),
    [operator]
  );
  const visibleMetrics = selectedExec.focusMetrics
    .map((id) => metricsById[id])
    .filter(Boolean);
  const visibleAnomalies = operator.anomalies.filter((anomaly) =>
    selectedExec.focusMetrics.includes(anomaly.metricId)
  );
  const currentPendingQuestion =
    pendingQuestion?.operatorId === operator.id ? pendingQuestion.text : null;

  const askAboutMetric = (metric) => {
    setActivePage('brief');
    setPendingQuestion({
      operatorId: operator.id,
      text: `Tell me more about ${metric.name}`,
    });
  };
  const handleOperatorChange = (operatorId) => {
    const nextOperator = operators.find((item) => item.id === operatorId);
    if (!nextOperator?.hasDeploymentPlan) {
      setActivePage('brief');
    }
  };

  return (
    <div className="app-shell" data-theme={theme}>
      <header className="app-header">
        <div className="app-header-title">
          <span className="app-logo">EC</span>
          <div>
            <h1>Executive Copilot</h1>
            <p className="muted">{operator.name} · Executive decision intelligence demo</p>
          </div>
        </div>
        <div className="app-header-controls">
          <OperatorSelector onSelectOperator={handleOperatorChange} />
          {activePage === 'brief' && (
            <ExecutiveSelector
              executives={operator.executives}
              selectedId={selectedExec.id}
              onSelect={(executiveId) =>
                setExecutiveSelection({ operatorId: operator.id, executiveId })
              }
            />
          )}
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            aria-pressed={theme === 'dark'}
          >
            <span aria-hidden="true">{theme === 'dark' ? '☀' : '◐'}</span>
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>
        </div>
      </header>

      <NavBar
        activePage={activePage}
        onNavigate={setActivePage}
        onOpenWalkthrough={() => setWalkthroughOpen(true)}
      />

      <main key={operator.id} className="app-main operator-content">
        {activePage === 'brief' && (
          <>
            <div className="app-main-left">
              <DailyBrief
                brief={selectedBrief}
                executiveName={selectedExec.name}
                operatorName={operator.name}
              />
              <KpiGrid
                metrics={visibleMetrics}
                onAskAbout={askAboutMetric}
                operatorName={operator.name}
              />
              <DriverAnalysis
                anomalies={visibleAnomalies}
                metricsById={metricsById}
                onAskAbout={askAboutMetric}
              />
            </div>
            <div className="app-main-right">
              <ChatPanel
                key={operator.id}
                pendingQuestion={currentPendingQuestion}
                onConsumePendingQuestion={() => setPendingQuestion(null)}
              />
            </div>
          </>
        )}

        {activePage === 'overview' && (
          <div className="app-main-full">
            <SolutionOverview />
          </div>
        )}

        {activePage === 'agents' && (
          <div className="app-main-full">
            <AgentTeam />
          </div>
        )}

        {activePage === 'architecture' && (
          <div className="app-main-full">
            <SolutionArchitecture />
          </div>
        )}

        {activePage === 'deployment' && operator.hasDeploymentPlan && (
          <div className="app-main-full">
            <DeploymentPlan />
          </div>
        )}

        {activePage === 'outcomes' && (
          <div className="app-main-full">
            <BusinessOutcomes />
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>{operator.sampleDataNotice}</p>
      </footer>

      {walkthroughOpen && (
        <ExecutiveWalkthrough
          key={operator.id}
          onClose={() => setWalkthroughOpen(false)}
          onNavigate={(page) => setActivePage(page)}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <OperatorProvider>
      <ExecutiveCopilot />
    </OperatorProvider>
  );
}
