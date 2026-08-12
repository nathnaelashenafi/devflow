import "../index.css";
export function StatCard({ title, value, description, icon: Icon }) {
  return (
    <div className="stats-card">
      <div className="stat-icon">
        <Icon size={22} />
      </div>
      <div className="stat-content">
        <h3 className="stats-title">{title}</h3>
        <strong>{value}</strong>
        <p>{description}</p>
      </div>
      <div className="stat-line">
        <div className="stat-line-fill"></div>
      </div>
    </div>
  );
}
