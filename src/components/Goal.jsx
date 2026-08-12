import { useState } from "react";
import "../index.css";

export function Goal() {
  const initialGoals = [
    {
      id: 1,
      title: "Learn React Router",
      completed: true,
    },
    {
      id: 2,
      title: "Build Dashboard UI",
      completed: false,
    },
    {
      id: 3,
      title: "Push project to GitHub",
      completed: false,
    },
    {
      id: 4,
      title: "Read 20 pages of Clean Code",
      completed: false,
    },
  ];

  const [goals, setGoals] = useState(initialGoals);

  const completedGoals = goals.filter((goal) => goal.completed).length;

  const progress = (completedGoals / goals.length) * 100;

  const toggleGoal = (id) => {
    setGoals((currentGoals) =>
      currentGoals.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal,
      ),
    );
  };

  return (
    <div className="goals">
      <div className="goals-header">
        <span>
          {completedGoals} of {goals.length} completed
        </span>
      </div>

      <div className="goals-progress-track">
        <div className="goals-progress" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="goals-list">
        {goals.map((goal) => (
          <div className="goal" key={goal.id}>
            <input
              type="checkbox"
              checked={goal.completed}
              onChange={() => toggleGoal(goal.id)}
            />

            <span className={goal.completed ? "goal-completed" : ""}>
              {goal.title}
            </span>

            <span
              className={
                goal.completed
                  ? "goal-status goal-done"
                  : "goal-status goal-pending"
              }
            >
              {goal.completed ? "Done" : "Pending"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
