import "../index.css";

export function StatsGrid({ stats }) {
  return (
    <div className="stats-grid">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div key={stat.id} className="stats-card">
            <div className="stat-icon">
              <Icon size={22} />
            </div>
            <h3 className="stats-title">{stat.title}</h3>
            <strong>{stat.value}</strong>
            <p>{stat.description}</p>
          </div>
        );
      })}
    </div>
  );
}
