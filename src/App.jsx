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
import ExecutiveWalkthrough from './components/ExecutiveWalkthrough';
import { executives, metrics, anomalies, dailyBrief, executiveBriefs } from './data/mockData';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('brief');
  const [walkthroughOpen, setWalkthroughOpen] = useState(false);
  const [selectedExecId, setSelectedExecId] = useState(executives[0].id);
  const [pendingQuestion, setPendingQuestion] = useState(null);

  const selectedExec = executives.find((exec) => exec.id === selectedExecId);
  const selectedBrief = executiveBriefs[selectedExecId] ?? dailyBrief;

  const metricsById = useMemo(
    () => Object.fromEntries(metrics.map((metric) => [metric.id, metric])),
    []
  );

  const visibleMetrics = useMemo(
    () => selectedExec.focusMetrics.map((id) => metricsById[id]).filter(Boolean),
    [selectedExec, metricsById]
  );

  const visibleAnomalies = useMemo(
    () => anomalies.filter((anomaly) => selectedExec.focusMetrics.includes(anomaly.metricId)),
    [selectedExec]
  );

  const askAboutMetric = (metric) => {
    setActivePage('brief');
    setPendingQuestion(`Tell me more about ${metric.name}`);
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-header-title">
          <span className="app-logo">CI</span>
          <div>
            <h1>Comcast Executive Intelligence</h1>
            <p className="muted">Enterprise Decision Intelligence · Proof-of-concept demo (mock data)</p>
          </div>
        </div>
        {activePage === 'brief' && (
          <ExecutiveSelector
            executives={executives}
            selectedId={selectedExecId}
            onSelect={setSelectedExecId}
          />
        )}
      </header>

      <NavBar
        activePage={activePage}
        onNavigate={setActivePage}
        onOpenWalkthrough={() => setWalkthroughOpen(true)}
      />

      <main className="app-main">
        {activePage === 'brief' && (
          <>
            <div className="app-main-left">
              <DailyBrief brief={selectedBrief} executiveName={selectedExec.name} />
              <KpiGrid metrics={visibleMetrics} onAskAbout={askAboutMetric} />
              <DriverAnalysis
                anomalies={visibleAnomalies}
                metricsById={metricsById}
                onAskAbout={askAboutMetric}
              />
            </div>
            <div className="app-main-right">
              <ChatPanel
                pendingQuestion={pendingQuestion}
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

        {activePage === 'deployment' && (
          <div className="app-main-full">
            <DeploymentPlan />
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>
          Demo mockup only — all metrics, names, and narratives are illustrative. Not connected to live
          Comcast systems.
        </p>
      </footer>

      {walkthroughOpen && (
        <ExecutiveWalkthrough
          onClose={() => setWalkthroughOpen(false)}
          onNavigate={(page) => setActivePage(page)}
        />
      )}
    </div>
  );
}

export default App;
