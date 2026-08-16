import { CourseCard } from "../components/CourseCard";
import { ContinueLearning } from "../components/ContinueLearning";
import { BookOpen, CheckCircle, Clock3 } from "lucide-react";
import { useState } from "react";
import javascriptIcon from "../assets/icons8-javascript.svg";
import reactIcon from "../assets/icons8-react.svg";
import pythonIcon from "../assets/icons8-python.svg";
import cssIcon from "../assets/icons8-css3.svg";

export function Learning() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "JavaScript",
      category: "Programming",
      progress: 85,
      lessons: 24,
      completedLessons: 20,
      icon: javascriptIcon,
    },
    {
      id: 2,
      title: "React",
      category: "Frontend",
      progress: 72,
      lessons: 30,
      completedLessons: 22,
      icon: reactIcon,
    },
    {
      id: 3,
      title: "Python",
      category: "Programming",
      progress: 55,
      lessons: 28,
      completedLessons: 15,
      icon: pythonIcon,
    },
    {
      id: 4,
      title: "CSS",
      category: "Frontend",
      progress: 100,
      lessons: 18,
      completedLessons: 18,
      icon: cssIcon,
    },
  ]);

  const [selectedCourseId, setSelectedCourseId] = useState(1);

  const updateCourseProgress = (courseId) => {
    setCourses((currentCourses) =>
      currentCourses.map((course) => {
        if (course.id === courseId) {
          const completedLessons = Math.min(
            course.completedLessons + 1,
            course.lessons,
          );

          return {
            ...course,
            completedLessons,
            progress: (completedLessons / course.lessons) * 100,
          };
        }

        return course;
      }),
    );
  };

  const selectedCourse = courses.find(
    (course) => course.id === selectedCourseId,
  );

  const completedCourses = courses.filter(
    (course) => course.progress === 100,
  ).length;

  const totalLessons = courses.reduce(
    (total, course) => total + course.lessons,
    0,
  );

  const completedLessons = courses.reduce(
    (total, course) => total + course.completedLessons,
    0,
  );

  return (
    <div className="learning">
      <div className="learning-header">
        <div>
          <h1>Learning Progress</h1>
          <p>Track your learning journey and keep building your skills.</p>
        </div>
      </div>

      <div className="learning-stats">
        <div className="learning-stat">
          <div className="learning-stat-icon">
            <BookOpen size={20} />
          </div>

          <div>
            <span>Total Courses</span>
            <strong>{courses.length}</strong>
          </div>
        </div>

        <div className="learning-stat">
          <div className="learning-stat-icon">
            <CheckCircle size={20} />
          </div>

          <div>
            <span>Completed Courses</span>
            <strong>{completedCourses}</strong>
          </div>
        </div>

        <div className="learning-stat">
          <div className="learning-stat-icon">
            <Clock3 size={20} />
          </div>

          <div>
            <span>Lessons Completed</span>
            <strong>
              {completedLessons}/{totalLessons}
            </strong>
          </div>
        </div>
      </div>

      {selectedCourse && (
        <ContinueLearning
          key={selectedCourse.id}
          course={selectedCourse}
          onProgressUpdate={updateCourseProgress}
        />
      )}

      <div className="courses-section">
        <div className="section-heading">
          <div>
            <h2>My Courses</h2>
            <p>Continue where you left off.</p>
          </div>

          <span>{courses.length} courses</span>
        </div>

        <div className="courses-grid">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              category={course.category}
              progress={course.progress}
              lessons={course.lessons}
              completedLessons={course.completedLessons}
              icon={course.icon}
              selected={selectedCourseId === course.id}
              onSelect={() => setSelectedCourseId(course.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
