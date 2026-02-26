import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonIcon,
  IonButton,
} from '@ionic/react';
import { 
  searchOutline, 
  notifications,
  chevronBack,
  chevronForward
} from 'ionicons/icons';
import './Topicpractice.css';

const TopicPractice: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border topic-practice-header">
        <IonToolbar className="topic-practice-toolbar">
          <div className="topic-practice-header-content">
            <IonIcon icon={chevronBack} className="back-icon" />
            <div className="header-icons">
              <IonIcon icon={searchOutline} className="header-icon" />
              <IonIcon icon={notifications} className="header-icon" />
            </div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="topic-practice-content">
        {/* Course Title Section */}
        <div className="topic-course-title-section">
          <h2 className="topic-course-title">WAEC</h2>
          <p className="topic-course-subtitle">West African Examination Council</p>
        </div>

        {/* Category Pills */}
        <div className="topic-category-pills">
          <div className="topic-pill purple">Overview</div>
          <div className="topic-pill orange">Practice</div>
          <div className="topic-pill pink">IQ</div>
          <div className="topic-pill blue">Analytics</div>
        </div>

        {/* Topic Based Practice Section */}
        <div className="topic-section">
          <h3 className="topic-section-title">Topic - Based Practice</h3>
          <p className="topic-section-description">
            Practice specific topics to improve weak areas
          </p>

          {/* Subject Cards */}
          <div className="subject-cards-list">
            <div className="subject-card purple-subject">
              <span className="subject-name">Mathematics</span>
              {/* <IonIcon icon={chevronForward} className="subject-arrow" /> */}
            </div>

            <div className="subject-card orange-subject">
              <span className="subject-name">English</span>
              {/* <IonIcon icon={chevronForward} className="subject-arrow" /> */}
            </div>

            <div className="subject-card brown-subject">
              <span className="subject-name">Biology</span>
              {/* <IonIcon icon={chevronForward} className="subject-arrow" /> */}
            </div>
          </div>

          {/* Start Practice Button */}
          <IonButton className="topic-start-practice-btn" expand="block">
            Start Practice
          </IonButton>
        </div>

        {/* Bottom padding for tab bar */}
        <div style={{ height: '80px' }}></div>
      </IonContent>
    </IonPage>
  );
};

export default TopicPractice;
