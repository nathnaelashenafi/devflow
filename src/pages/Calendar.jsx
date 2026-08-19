import { useState } from "react";
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
    <div className="calendar-page">
      <div className="calendar-header">
        <div>
          <h1>Calendar</h1>
          <p>Plan your learning, projects, and daily tasks.</p>
        </div>

        <button
          className="calendar-add-button"
          onClick={() => setShowEventForm(!showEventForm)}
          aria-label={showEventForm ? "Cancel adding event" : "Add new event"}
        >
          {showEventForm ? <X size={16} /> : <Plus size={16} />}
          {showEventForm ? "Cancel" : "Add Event"}
        </button>
      </div>

      <div className="calendar-layout">
        <div className="calendar-card">
          <div className="calendar-toolbar">
            <div className="calendar-month">
              <h2>
                {monthName} {year}
              </h2>
            </div>

            <div className="calendar-actions">
              <button onClick={goToToday} aria-label="Go to today">
                Today
              </button>

              <button onClick={previousMonth} aria-label="Previous month">
                <ChevronLeft size={17} />
              </button>

              <button onClick={nextMonth} aria-label="Next month">
                <ChevronRight size={17} />
              </button>
            </div>
          </div>

          {showEventForm && (
            <div className="calendar-event-form">
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

              <button onClick={handleAddEvent}>Add</button>
            </div>
          )}

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
                <button
                  className={`calendar-day ${
                    isToday ? "today" : ""
                  } ${isSelected ? "selected" : ""}`}
                  key={day}
                  onClick={() => setSelectedDate(day)}
                >
                  <span>{day}</span>

                  {hasEvent && <i></i>}
                </button>
              );
            })}
          </div>
        </div>

        <div className="calendar-events">
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
              {selectedEvents.map((event) => (
                <div className="event-item" key={event.id}>
                  <div className="event-icon">
                    <CalendarDays size={17} />
                  </div>

                  <div className="event-details">
                    <strong>{event.title}</strong>
                    <span>{event.time}</span>
                  </div>

                  <button
                    className="event-delete"
                    onClick={() => deleteEvent(event.id)}
                    aria-label={`Delete event: ${event.title}`}
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-events">
              <CalendarDays size={24} />
              <p>No events for this day.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
