import { motion } from "framer-motion";
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="learning"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="learning-header"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div>
          <h1>Learning Progress</h1>
          <p>Track your learning journey and keep building your skills.</p>
        </div>
      </motion.div>

      <div className="learning-stats">
        {[
          { icon: BookOpen, label: "Total Courses", value: courses.length },
          {
            icon: CheckCircle,
            label: "Completed Courses",
            value: completedCourses,
          },
          {
            icon: Clock3,
            label: "Lessons Completed",
            value: `${completedLessons}/${totalLessons}`,
          },
        ].map((stat, index) => (
          <motion.div
            className="learning-stat"
            key={stat.label}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            whileHover={{ y: -3 }}
          >
            <div className="learning-stat-icon">
              <stat.icon size={20} />
            </div>

            <div>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedCourse && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <ContinueLearning
            key={selectedCourse.id}
            course={selectedCourse}
            onProgressUpdate={updateCourseProgress}
          />
        </motion.div>
      )}

      <motion.div
        className="courses-section"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <div className="section-heading">
          <div>
            <h2>My Courses</h2>
            <p>Continue where you left off.</p>
          </div>

          <span>{courses.length} courses</span>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <CourseCard
                title={course.title}
                category={course.category}
                progress={course.progress}
                lessons={course.lessons}
                completedLessons={course.completedLessons}
                icon={course.icon}
                selected={selectedCourseId === course.id}
                onSelect={() => setSelectedCourseId(course.id)}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
