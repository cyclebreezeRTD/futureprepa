import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonIcon,
  IonButton,
} from '@ionic/react';
import {
  searchOutline,
  notifications,
  chevronBack,
  chevronForward,
  playCircle,
} from 'ionicons/icons';
import './CodingLesson.css';

const CodingLesson: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border course-details-header">
        <IonToolbar className="header-toolbar">
          <div className="header-content">
            <button className="menu-button">
              <div className="menu-line"></div>
              <div className="menu-line"></div>
              <div className="menu-line"></div>
            </button>
            <div className="header-icons">
              <IonIcon icon={searchOutline} className="header-icon" />
              <IonIcon icon={notifications} className="header-icon" />
            </div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent className="lesson-content">
        <div className="lesson-container">
          {/* Course Title */}
          <div className="course-header">
            <h1 className="course-title">Coding</h1>
            <p className="course-subtitle">26Min Video</p>
          </div>

          {/* Video Card */}
          <div className="video-card">
            <div className="video-gradient">
              <div className="webflow-logo">
                <span className="logo-text">W</span>
              </div>
              <IonIcon icon={playCircle} className="play-icon" />
              <h2 className="video-title">Custom domain</h2>
              <p className="video-source">webflow University</p>
            </div>
          </div>

          {/* Learning Objectives */}
          <div className="learning-section">
            <h3 className="learning-title">What you will learn</h3>
            
            <div className="learning-items">
              <div className="learning-item">
                <span className="emoji">💡</span>
                <p className="learning-text">Understand the basic principles</p>
              </div>

              <div className="learning-item">
                <span className="emoji">💡</span>
                <p className="learning-text">Apply concept to solve problems</p>
              </div>

              <div className="learning-item">
                <span className="emoji">💡</span>
                <p className="learning-text">Build confidence for assessments</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="navigation-buttons">
            <IonButton fill="clear" className="nav-button prev-button">
              <IonIcon slot="start" icon={chevronBack} />
              Previous
            </IonButton>
            <IonButton className="nav-button next-button">
              Next
              <IonIcon slot="end" icon={chevronForward} />
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CodingLesson;
