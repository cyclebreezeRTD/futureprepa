import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonIcon,
  IonButton,
  IonProgressBar,
} from '@ionic/react';
import { 
  searchOutline, 
  notifications,
  arrowBack,
  download,
  bookOutline,
  school,
  chatbubbleEllipsesOutline,
  checkmarkCircle
} from 'ionicons/icons';
import './CourseDetails.css';

const CourseDetails: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border course-details-header">
        <IonToolbar className="course-details-toolbar">
          <div className="course-details-header-content">
            <IonIcon icon={arrowBack} className="back-icon" />
            <div className="header-icons">
              <IonIcon icon={searchOutline} className="header-icon" />
              <IonIcon icon={notifications} className="header-icon" />
            </div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="course-details-content">
        {/* Course Title Section */}
        <div className="course-title-section">
          <h2 className="course-main-title">WAEC</h2>
          <p className="course-subtitle">West African Examination Council</p>
        </div>

        {/* Exam Results Card */}
        <div className="exam-results-card">
          <div className="results-content">
            <div className="result-item">
              <span className="result-label">Exam Readiness</span>
              <span className="result-value">72%</span>
            </div>
          </div>
        </div>

        {/* Action Pills */}
        <div className="action-pills-container">
          <div className="action-pill purple">Overview</div>
          <div className="action-pill orange">Practice</div>
          <div className="action-pill pink">IQ</div>
          <div className="action-pill blue">Analytics</div>
        </div>

        {/* Stats Row */}
        <div className="stats-row">
          <div className="stat-item">
            <IonIcon icon={download} className="stat-icon" />
            <div className="stat-text">
              <div className="stat-value">40 Minutes</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="igs-badge">IGS</div>
            <div className="stat-text">
              <div className="stat-value">600 Students</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <h3 className="section-heading">Features</h3>

          <div className="feature-item">
            <div className="feature-icon-wrapper pink">
              <IonIcon icon={checkmarkCircle} className="feature-icon" />
            </div>
            <div className="feature-content">
              <h4 className="feature-title">100% Offline</h4>
              <p className="feature-description">
                Download videos and watch on schedule
              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon-wrapper yellow">
              <IonIcon icon={bookOutline} className="feature-icon" />
            </div>
            <div className="feature-content">
              <h4 className="feature-title">CBT Past Questions</h4>
              <p className="feature-description">
                Over 10,000 past questions to try out speed
              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon-wrapper cyan">
              <IonIcon icon={school} className="feature-icon" />
            </div>
            <div className="feature-content">
              <h4 className="feature-title">Beginner Level</h4>
              <p className="feature-description">
                Basic courses and best learning
              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon-wrapper gray">
              <IonIcon icon={chatbubbleEllipsesOutline} className="feature-icon" />
            </div>
            <div className="feature-content">
              <h4 className="feature-title">Chat with AI</h4>
              <p className="feature-description">
                Ask question and converse with AI
              </p>
            </div>
          </div>
        </div>

        {/* Subject Progress Section */}
        <div className="subject-progress-section">
          <h3 className="section-heading">Subject Progress</h3>

          <div className="progress-item purple-progress">
            <div className="progress-header">
              <span className="progress-subject">MATHEMATICS</span>
              <span className="progress-percentage">100% completed</span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{ width: '100%' }}></div>
            </div>
          </div>

          <div className="progress-item pink-progress">
            <div className="progress-header">
              <span className="progress-subject">MATHEMATICS</span>
              <span className="progress-percentage">100% completed</span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{ width: '100%' }}></div>
            </div>
          </div>

          <div className="progress-item blue-progress">
            <div className="progress-header">
              <span className="progress-subject">MATHEMATICS</span>
              <span className="progress-percentage">100% completed</span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{ width: '100%' }}></div>
            </div>
          </div>

          <div className="progress-item pink-alt-progress">
            <div className="progress-header">
              <span className="progress-subject">MATHEMATICS</span>
              <span className="progress-percentage">100% completed</span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>

        {/* Start Practice Button */}
        <div className="action-button-container">
          <IonButton className="start-practice-btn" expand="block">
            Start Practice
          </IonButton>
        </div>

        {/* Bottom padding for tab bar */}
        <div style={{ height: '80px' }}></div>
      </IonContent>
    </IonPage>
  );
};

export default CourseDetails;
