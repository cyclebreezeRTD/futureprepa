import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonIcon,
} from '@ionic/react';
import { 
  searchOutline, 
  notifications,
  menu,
  informationCircleOutline
} from 'ionicons/icons';
import './LearnCourses.css';

const LearnCourses: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border learn-courses-header">
        <IonToolbar className="learn-courses-toolbar">
          <div className="learn-courses-header-content">
            <IonIcon icon={menu} className="menu-icon" />
            <div className="header-icons">
              <IonIcon icon={searchOutline} className="header-icon" />
              <IonIcon icon={notifications} className="header-icon" />
            </div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="learn-courses-content">
        {/* Title Section */}
        <div className="learn-courses-title-section">
          <h1 className="learn-courses-title">Learn</h1>
          <p className="learn-courses-subtitle">What would you like to learn?</p>
        </div>

        {/* Category Pills */}
        <div className="learn-courses-pills">
          <div className="course-pill purple">Exams</div>
          <div className="course-pill orange">STEM</div>
          <div className="course-pill pink">Skills</div>
          <div className="course-pill red">Career</div>
        </div>

        {/* Secondary School Exams Section */}
        <div className="courses-section">
          <div className="section-header-row">
            <h3 className="section-title">Secondary School Exams</h3>
            <IonIcon icon={informationCircleOutline} className="info-icon" />
          </div>

          <div className="course-card orange-gradient">
            <div className="course-card-content">
              <h4 className="course-card-title">WAEC PREPARATION</h4>
              <p className="course-card-description">
                Complete preparation for West African Senior School Leaving Certificate
              </p>
              <div className="course-card-footer">
                <span className="course-level">VOCATIONAL</span>
                <span className="course-lessons">45 Lessons</span>
              </div>
            </div>
            <div className="course-card-icon">
              <span className="icon-text">GEN</span>
            </div>
          </div>

          <div className="course-card pink-gradient">
            <div className="course-card-content">
              <h4 className="course-card-title">WAEC PREPARATION</h4>
              <p className="course-card-description">
                Complete preparation for West African Senior School Leaving Certificate
              </p>
              <div className="course-card-footer">
                <span className="course-level">VOCATIONAL</span>
                <span className="course-lessons">45 Lessons</span>
              </div>
            </div>
            <div className="course-card-icon pink-icon">
              <span className="icon-text">GEN</span>
            </div>
          </div>

          <div className="course-card yellow-gradient">
            <div className="course-card-content">
              <h4 className="course-card-title">WAEC PREPARATION</h4>
              <p className="course-card-description">
                Complete preparation for West African Senior School Leaving Certificate
              </p>
              <div className="course-card-footer">
                <span className="course-level">ICT LESSONS</span>
                <span className="course-lessons">45 Lessons</span>
              </div>
            </div>
            <div className="course-card-icon yellow-icon">
              <span className="icon-text">GEN</span>
            </div>
          </div>
        </div>

        {/* Professional Certificate Section */}
        <div className="courses-section">
          <div className="section-header-row">
            <h3 className="section-title">Professional Certificate</h3>
            <IonIcon icon={informationCircleOutline} className="info-icon" />
          </div>

          <div className="course-card red-gradient">
            <div className="course-card-content">
              <h4 className="course-card-title">ICAN FINANCIAL ACCOUNTING</h4>
              <p className="course-card-description">
                institute of chartered accountants of Nigeria.
              </p>
              <div className="course-card-footer">
                <span className="course-level">VOCATIONAL</span>
                <span className="course-lessons">45 Lessons</span>
              </div>
            </div>
            <div className="course-card-icon red-icon">
              <span className="icon-text">PRO</span>
            </div>
          </div>

          <div className="course-card purple-gradient">
            <div className="course-card-content">
              <h4 className="course-card-title">ACCA FUNDAMENTALS</h4>
              <p className="course-card-description">
                Association of chartered certified accountants.
              </p>
              <div className="course-card-footer">
                <span className="course-level">VOCATIONAL</span>
                <span className="course-lessons">45 Lessons</span>
              </div>
            </div>
            <div className="course-card-icon purple-icon">
              <span className="icon-text">PRO</span>
            </div>
          </div>
        </div>

        {/* Bottom padding for tab bar */}
        <div style={{ height: '80px' }}></div>
      </IonContent>
    </IonPage>
  );
};

export default LearnCourses;
