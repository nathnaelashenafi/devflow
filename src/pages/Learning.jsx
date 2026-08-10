import { ContinueLearning } from "../components/ContinueLearning";
import { CourseCard } from "../components/CourseCard";
import "../index.css";
export function Learning() {
  const courses = [
    {
      id: 1,
      title: "JavaScript",
      category: "Programming",
      progress: 85,
      lessons: 24,
      completedLessons: 20,
    },
    {
      id: 2,
      title: "React",
      category: "Frontend",
      progress: 72,
      lessons: 30,
      completedLessons: 22,
    },
  ];
  const currentCourse = courses.find((course) => course.progress < 100);
  return (
    <>
      <h1>Learning Progress</h1>
      <p>Track your Learning Journey</p>
      <ContinueLearning course={currentCourse} />
      <div className="courses-section">
        <h2>My Courses</h2>
        <div className="courses-grid">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              category={course.category}
              progress={course.progress}
              lessons={course.lessons}
              completedLessons={course.completedLessons}
            />
          ))}
        </div>
      </div>
    </>
  );
}
