import React, { useState } from 'react';
import {
  IonPage,
  IonContent,
  IonIcon,

  IonHeader,

  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonChip,

  IonLabel,
  IonButton,
} from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';
import { searchOutline, notificationsOutline, menuOutline, informationCircleOutline } from 'ionicons/icons';
import './Learn.css';

const courses = [
  {
    id: 1,
    title: 'WAEC PREPARATION',
    desc: 'Complete preparation for West African Senior School Leaving Certificate',
    lessons: 120,
    mins: 40,
    progress: 50,
    total: 50,
    gradient: 'card-orange',
  },
  {
    id: 2,
    title: 'WAEC PREPARATION',
    desc: 'Complete preparation for West African Senior School Leaving Certificate',
    lessons: 120,
    mins: 40,
    progress: 80,
    total: null,
    gradient: 'card-pink',
  },
  {
    id: 3,
    title: 'WAEC PREPARATION',
    desc: 'Complete preparation for West African Senior School Leaving Certificate',
    lessons: 100,
    mins: 40,
    progress: 50,
    total: null,
    gradient: 'card-green',
  },
];

const profCourses = [
  {
    id: 4,
    title: 'ICAN FINANCIAL ACCOUNTING',
    desc: 'Institute of chartered accountants of Nigeria',
    lessons: 120,
    mins: 40,
    progress: 80,
    total: null,
    gradient: 'card-purple',
  },
  {
    id: 5,
    title: 'ACCA FUNDAMENTALS',
    desc: 'Association of chartered certified accountants.',
    lessons: 80,
    mins: 60,
    progress: 50,
    total: null,
    gradient: 'card-blue',
  },
];

const Learn: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('exams');

  return (
    <IonPage>
      <IonContent fullscreen scrollY className="learn-content">

        {/* Header */}
        <div className="learn-header">
          <IonIcon icon={menuOutline} className="learn-menu-icon" />

          <div className="learn-header-right">
            <IonIcon icon={searchOutline} className="learn-icon" />
            <IonIcon icon={notificationsOutline} className="learn-icon" />
          </div>
        </div>

           <div className="cat-header">
                  <div className="cat-header-top">
                    <IonIcon icon={chevronBackOutline} className="back-icon" />
                    <h1 className="cat-title">Learn</h1>
                  </div>
                  <p className="cat-subtitle">What would you like to learn?</p>
                <div className="filter-pills-row">
          <button
            className={`filter-pill pill-orange ${activeFilter === 'exams' ? 'active' : ''}`}
            onClick={() => setActiveFilter('exams')}
          >
            Exams
          </button>
          <button
            className={`filter-pill pill-pink ${activeFilter === 'stem' ? 'active' : ''}`}
            onClick={() => setActiveFilter('stem')}
          >
            STEM
          </button>
          <button
            className={`filter-pill pill-teal ${activeFilter === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveFilter('skills')}
          >
            Skills
          </button>
        </div>
      
        </div>
        

        {/* Filter Pills */}


        {/* Section: Secondary School Exams */}
        <div className="section-header">
          <span className="section-title">Secondary School Exams</span>
          <IonIcon icon={informationCircleOutline} className="section-info-icon" />
        </div>

        {courses.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}

        {/* Section: Professional Certificate */}
        <div className="section-header">
          <span className="section-title">Professional Certificate</span>
          <IonIcon icon={informationCircleOutline} className="section-info-icon" />
        </div>

        {profCourses.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}

        <div style={{ height: 32 }} />
      </IonContent>
    </IonPage>
  );
};

const CourseCard: React.FC<{ course: any }> = ({ course }) => {
  return (
    <div className={`course-card ${course.gradient}`}>
      {/* Stripe overlay */}
      <div className="card-stripes" />

      <div className="card-inner">
        {/* Left: big title */}
        <div className="card-left">
          <span className="card-title">{course.title}</span>
        </div>

        {/* Right: desc + stats */}
        <div className="card-right">
          <p className="card-desc">{course.desc}</p>

          <div className="card-stats">
            <div className="stat-col">
              <span className="stat-val">{course.lessons}</span>
              <span className="stat-lbl">Lessons</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-col">
              <span className="stat-val">{course.mins}</span>
              <span className="stat-lbl">Mins</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-col">
              <span className="stat-val">
                {course.total ? `${course.progress} of ${course.total}` : `${course.progress}%`}
              </span>
              <span className="stat-lbl">&nbsp;</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="card-progress-track">
        <div className="card-progress-fill" style={{ width: `${course.progress}%` }} />
      </div>

      <div className="card-progress-label">
        {course.progress}%
      </div>
    </div>
  );
};

export default Learn;
