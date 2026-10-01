import { useOperator } from '../data/OperatorContext';

const NAV_ITEMS = [
  { id: 'brief', label: 'Executive Brief' },
  { id: 'overview', label: 'Solution Overview' },
  { id: 'agents', label: 'Agent Team' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'outcomes', label: 'Business Outcomes' },
  { id: 'deployment', label: 'Deployment Plan' },
];

export default function NavBar({ activePage, onNavigate, onOpenWalkthrough }) {
  const { operatorId } = useOperator();
  const visibleNavItems = NAV_ITEMS.filter(
    (item) => item.id !== 'deployment' || operatorId !== 'rogers'
  );

  return (
    <nav className="app-nav">
      <div className="app-nav-tabs">
        {visibleNavItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={activePage === item.id ? 'nav-tab nav-tab-active' : 'nav-tab'}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <button type="button" className="walkthrough-button" onClick={onOpenWalkthrough}>
        ▶ Executive Demo Walkthrough
      </button>
    </nav>
  );
}
