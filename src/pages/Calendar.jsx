import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  CalendarDays,
  Trash2,
  X,
} from "lucide-react";
import "../index.css";

export function Calendar() {
  const today = new Date();

  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1),
  );

  const [selectedDate, setSelectedDate] = useState(today.getDate());

  const [showEventForm, setShowEventForm] = useState(false);

  const [newEvent, setNewEvent] = useState({
    title: "",
    time: "",
  });

  const [events, setEvents] = useState([
    {
      id: 1,
      year: today.getFullYear(),
      month: today.getMonth(),
      date: today.getDate(),
      title: "React Learning",
      time: "10:00 AM",
    },
    {
      id: 2,
      year: today.getFullYear(),
      month: today.getMonth(),
      date: today.getDate() + 1,
      title: "Work on Portfolio",
      time: "2:00 PM",
    },
    {
      id: 3,
      year: today.getFullYear(),
      month: today.getMonth(),
      date: today.getDate() + 3,
      title: "GitHub Project",
      time: "4:00 PM",
    },
  ]);

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const monthName = currentDate.toLocaleString("default", {
    month: "long",
  });

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const firstDay = new Date(year, month, 1).getDay();

  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedDate(1);
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedDate(1);
  };

  const goToToday = () => {
    setCurrentDate(new Date(today.getFullYear(), today.getMonth(), 1));
    setSelectedDate(today.getDate());
  };

  const handleAddEvent = () => {
    if (!newEvent.title.trim()) {
      return;
    }

    const event = {
      id: Date.now(),
      year,
      month,
      date: selectedDate,
      title: newEvent.title.trim(),
      time: newEvent.time || "No time set",
    };

    setEvents((currentEvents) => [...currentEvents, event]);

    setNewEvent({
      title: "",
      time: "",
    });

    setShowEventForm(false);
  };

  const deleteEvent = (eventId) => {
    setEvents((currentEvents) =>
      currentEvents.filter((event) => event.id !== eventId),
    );
  };

  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  const selectedEvents = events.filter(
    (event) =>
      event.year === year &&
      event.month === month &&
      event.date === selectedDate,
  );

  return (
    <motion.div
      className="calendar-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="calendar-header"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div>
          <h1>Calendar</h1>
          <p>Plan your learning, projects, and daily tasks.</p>
        </div>

        <motion.button
          className="calendar-add-button"
          onClick={() => setShowEventForm(!showEventForm)}
          aria-label={showEventForm ? "Cancel adding event" : "Add new event"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showEventForm ? <X size={16} /> : <Plus size={16} />}
          {showEventForm ? "Cancel" : "Add Event"}
        </motion.button>
      </motion.div>

      <div className="calendar-layout">
        <motion.div
          className="calendar-card"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="calendar-toolbar">
            <motion.div
              className="calendar-month"
              key={`${month}-${year}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2>
                {monthName} {year}
              </h2>
            </motion.div>

            <div className="calendar-actions">
              <motion.button
                onClick={goToToday}
                aria-label="Go to today"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Today
              </motion.button>

              <motion.button
                onClick={previousMonth}
                aria-label="Previous month"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={17} />
              </motion.button>

              <motion.button
                onClick={nextMonth}
                aria-label="Next month"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={17} />
              </motion.button>
            </div>
          </div>

          <AnimatePresence>
            {showEventForm && (
              <motion.div
                className="calendar-event-form"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <input
                  type="text"
                  placeholder="Event title..."
                  value={newEvent.title}
                  onChange={(event) =>
                    setNewEvent({
                      ...newEvent,
                      title: event.target.value,
                    })
                  }
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleAddEvent();
                    }
                  }}
                />

                <input
                  type="text"
                  placeholder="Time e.g. 3:00 PM"
                  value={newEvent.time}
                  onChange={(event) =>
                    setNewEvent({
                      ...newEvent,
                      time: event.target.value,
                    })
                  }
                />

                <motion.button
                  onClick={handleAddEvent}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Add
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="calendar-weekdays">
            <span>Sun</span>
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
          </div>

          <div className="calendar-days">
            {days.map((day, index) => {
              if (!day) {
                return (
                  <div
                    className="calendar-day empty"
                    key={`empty-${index}`}
                  ></div>
                );
              }

              const isToday =
                day === today.getDate() &&
                month === today.getMonth() &&
                year === today.getFullYear();

              const isSelected = day === selectedDate;

              const hasEvent = events.some(
                (event) =>
                  event.year === year &&
                  event.month === month &&
                  event.date === day,
              );

              return (
                <motion.button
                  className={`calendar-day ${
                    isToday ? "today" : ""
                  } ${isSelected ? "selected" : ""}`}
                  key={day}
                  onClick={() => setSelectedDate(day)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.01 }}
                >
                  <span>{day}</span>
                  {hasEvent && <i></i>}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="calendar-events"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="calendar-events-header">
            <div>
              <h2>Upcoming Events</h2>
              <p>
                {monthName} {selectedDate}
              </p>
            </div>

            <CalendarDays size={20} />
          </div>

          {selectedEvents.length > 0 ? (
            <div className="event-list">
              <AnimatePresence>
                {selectedEvents.map((event, index) => (
                  <motion.div
                    className="event-item"
                    key={event.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="event-icon">
                      <CalendarDays size={17} />
                    </div>

                    <div className="event-details">
                      <strong>{event.title}</strong>
                      <span>{event.time}</span>
                    </div>

                    <motion.button
                      className="event-delete"
                      onClick={() => deleteEvent(event.id)}
                      aria-label={`Delete event: ${event.title}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Trash2 size={15} />
                    </motion.button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <motion.div
              className="no-events"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CalendarDays size={24} />
              <p>No events for this day.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
