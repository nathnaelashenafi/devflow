import { StatCard } from "./StatCard";
import "../index.css";
export function StatsGrid({ stats }) {
  return (
    <div className="stats-grid">
      {stats.map((stat) => {
        return (
          <StatCard
            key={stat.id}
            title={stat.title}
            description={stat.description}
            value={stat.value}
            icon={stat.icon}
          />
        );
      })}
    </div>
  );
}
