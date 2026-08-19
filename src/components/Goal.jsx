import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <motion.div
      className="goals"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="goals-header">
        <div>
          <span>
            {completedGoals} of {goals.length} completed
          </span>
          <strong>{Math.round(progress)}%</strong>
        </div>

        <motion.button
          className="add-goal-button"
          onClick={() => setShowForm(!showForm)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showForm ? <X size={14} /> : <Plus size={14} />}
          {showForm ? "Cancel" : "Add Goal"}
        </motion.button>
      </div>

      <div className="goals-progress-track">
        <motion.div
          className="goals-progress"
          style={{ width: `${progress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div
            className="add-goal-form"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
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

            <motion.button
              onClick={addGoal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Add
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="goals-list">
        <AnimatePresence>
          {goals.map((goal, index) => (
            <motion.div
              className="goal"
              key={goal.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.02, x: 5 }}
            >
              <motion.button
                className={`goal-check ${goal.completed ? "completed" : ""}`}
                onClick={() => toggleGoal(goal.id)}
                aria-label={
                  goal.completed
                    ? "Mark goal as pending"
                    : "Mark goal as completed"
                }
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {goal.completed && <Check size={14} />}
              </motion.button>

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
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
