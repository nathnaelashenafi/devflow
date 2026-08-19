import { useState } from "react";
import { Check, Plus, X } from "lucide-react";
import "../index.css";

export function Goal({ goals, setGoals }) {
  const [showForm, setShowForm] = useState(false);
  const [newGoal, setNewGoal] = useState("");

  const completedGoals = goals.filter((goal) => goal.completed).length;
  const progress = goals.length ? (completedGoals / goals.length) * 100 : 0;

  const toggleGoal = (id) => {
    setGoals((currentGoals) =>
      currentGoals.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal,
      ),
    );
  };

  const addGoal = () => {
    if (!newGoal.trim()) {
      return;
    }

    const goal = {
      id: Date.now(),
      title: newGoal,
      completed: false,
    };

    setGoals((currentGoals) => [...currentGoals, goal]);
    setNewGoal("");
    setShowForm(false);
  };

  return (
    <div className="goals">
      <div className="goals-header">
        <div>
          <span>
            {completedGoals} of {goals.length} completed
          </span>
          <strong>{Math.round(progress)}%</strong>
        </div>

        <button
          className="add-goal-button"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? <X size={14} /> : <Plus size={14} />}
          {showForm ? "Cancel" : "Add Goal"}
        </button>
      </div>

      <div className="goals-progress-track">
        <div className="goals-progress" style={{ width: `${progress}%` }}></div>
      </div>

      {showForm && (
        <div className="add-goal-form">
          <input
            type="text"
            placeholder="Enter a new goal..."
            value={newGoal}
            onChange={(event) => setNewGoal(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                addGoal();
              }
            }}
          />

          <button onClick={addGoal}>Add</button>
        </div>
      )}

      <div className="goals-list">
        {goals.map((goal) => (
          <div className="goal" key={goal.id}>
            <button
              className={`goal-check ${goal.completed ? "completed" : ""}`}
              onClick={() => toggleGoal(goal.id)}
              aria-label={
                goal.completed
                  ? "Mark goal as pending"
                  : "Mark goal as completed"
              }
            >
              {goal.completed && <Check size={14} />}
            </button>

            <span className={goal.completed ? "goal-completed" : ""}>
              {goal.title}
            </span>

            <span
              className={`goal-status ${
                goal.completed ? "goal-done" : "goal-pending"
              }`}
            >
              {goal.completed ? "Done" : "Pending"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
