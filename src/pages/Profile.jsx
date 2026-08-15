import {
  User,
  Mail,
  GraduationCap,
  Code2,
  Flame,
  BookOpen,
  FolderKanban,
} from "lucide-react";
import "../index.css";

export function Profile() {
  const skills = ["JavaScript", "React", "HTML", "CSS", "Python", "AWS"];

  return (
    <div className="profile">
      <div className="profile-header">
        <div className="profile-avatar">
          <User size={32} />
        </div>

        <div>
          <h1>Nathnael Ashenafi</h1>
          <p>Computer Science Student • Developer</p>
        </div>

        <button className="profile-edit-button">Edit Profile</button>
      </div>

      <div className="profile-grid">
        <div className="profile-card">
          <div className="profile-card-heading">
            <h2>Personal Information</h2>
          </div>

          <div className="profile-info">
            <div className="profile-info-item">
              <Mail size={18} />
              <div>
                <span>Email</span>
                <strong>
                  <a href="mailto:nathnaelahenafi21@gmail.com">
                    nathnaelashenafi21@gmail.com
                  </a>
                </strong>
              </div>
            </div>

            <div className="profile-info-item">
              <GraduationCap size={18} />
              <div>
                <span>Education</span>
                <strong>Computer Science</strong>
              </div>
            </div>

            <div className="profile-info-item">
              <Code2 size={18} />
              <div>
                <span>Role</span>
                <strong>Developer</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-card">
          <div className="profile-card-heading">
            <h2>Skills</h2>
          </div>

          <div className="profile-skills">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="profile-card profile-overview">
        <div className="profile-card-heading">
          <h2>Learning Overview</h2>
        </div>

        <div className="profile-stats">
          <div className="profile-stat">
            <BookOpen size={20} />
            <div>
              <span>Courses</span>
              <strong>4</strong>
            </div>
          </div>

          <div className="profile-stat">
            <Flame size={20} />
            <div>
              <span>Current Streak</span>
              <strong>14 days</strong>
            </div>
          </div>

          <div className="profile-stat">
            <FolderKanban size={20} />
            <div>
              <span>Projects</span>
              <strong>3</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
