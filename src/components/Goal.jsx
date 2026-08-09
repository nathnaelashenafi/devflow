import { useState } from "react";

export function Goal() {
  const initialGoals = [
    {
      id: 1,
      title: "Complete React lesson",
      completed: false,
    },
    {
      id: 2,
      title: "Build dashboard",
      completed: true,
    },
    {
      id: 3,
      title: "Practice JavaScript",
      completed: false,
    },
    {
      id: 4,
      title: "Work on project",
      completed: false,
    },
  ];

  const [goals, setGoals] = useState(initialGoals);

  const completedGoals = goals.filter((goal) => goal.completed).length;
  const progress = (completedGoals / goals.length) * 100;

  return (
    <div className="goals">
      <div className="goals-header">
        <span>
          {completedGoals} of {goals.length} Completed
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
              onChange={() => {
                setGoals(
                  goals.map((item) => {
                    if (item.id === goal.id) {
                      return {
                        ...item,
                        completed: !item.completed,
                      };
                    }

                    return item;
                  }),
                );
              }}
            />

            <span>{goal.title}</span>

            <span className="completed">
              {goal.completed ? "Completed" : "In progress"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
