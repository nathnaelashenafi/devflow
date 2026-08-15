import { useState } from "react";
import { Target, CheckCircle, Clock3 } from "lucide-react";
import { Goal } from "../components/Goal";
import "../index.css";
import { goalsData } from "../data/goals";

export function Goals() {
  const [goals, setGoals] = useState(goalsData);

  const completedGoals = goals.filter((goal) => goal.completed).length;

  const remainingGoals = goals.length - completedGoals;

  return (
    <div className="goals-page">
      <div className="goals-page-header">
        <div>
          <h1>My Goals</h1>
          <p>Set goals, track your progress, and stay consistent.</p>
        </div>
      </div>

      <div className="goals-page-stats">
        <div className="goals-page-stat">
          <div className="goals-page-icon">
            <Target size={20} />
          </div>

          <div>
            <span>Total Goals</span>
            <strong>{goals.length}</strong>
          </div>
        </div>

        <div className="goals-page-stat">
          <div className="goals-page-icon">
            <CheckCircle size={20} />
          </div>

          <div>
            <span>Completed</span>
            <strong>{completedGoals}</strong>
          </div>
        </div>

        <div className="goals-page-stat">
          <div className="goals-page-icon">
            <Clock3 size={20} />
          </div>

          <div>
            <span>Remaining</span>
            <strong>{remainingGoals}</strong>
          </div>
        </div>
      </div>

      <div className="goals-page-content">
        <div className="section-heading">
          <div>
            <h2>Today's Goals</h2>
            <p>Stay focused on what matters today.</p>
          </div>
        </div>

        <Goal goals={goals} setGoals={setGoals} />
      </div>
    </div>
  );
}
