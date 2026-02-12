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
import './QuizLectures.css';

const QuizLectures: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border quiz-lectures-header">
        <IonToolbar className="quiz-lectures-toolbar">
          <div className="quiz-lectures-header-content">
            <IonIcon icon={chevronBack} className="back-icon" />
            <div className="header-icons">
              <IonIcon icon={searchOutline} className="header-icon" />
              <IonIcon icon={notifications} className="header-icon" />
            </div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="quiz-lectures-content">
        {/* Course Title Section */}
        <div className="quiz-course-title-section">
          <div className="breadcrumb">
            <IonIcon icon={chevronBack} className="breadcrumb-icon" />
            <span className="breadcrumb-text">WAEC</span>
          </div>
          <p className="quiz-course-subtitle">West African Examination Council</p>
        </div>

        {/* Category Pills */}
        <div className="quiz-category-pills">
          <div className="quiz-pill purple">Overview</div>
          <div className="quiz-pill orange">Practice</div>
          <div className="quiz-pill pink">IQ</div>
          <div className="quiz-pill blue">Analytics</div>
        </div>

        {/* Quiz Section */}
        <div className="quiz-section">
          {/* Quiz Card */}
          <div className="quiz-card">
            <div className="quiz-card-content">
              <h3 className="quiz-card-title">Quiz on lectures</h3>
              <p className="quiz-card-description">
                Practice the skills in a a mandatory part of the test
              </p>
            </div>
            <IonIcon icon={chevronForward} className="quiz-card-arrow" />
          </div>

          {/* Start Practice Button */}
          <IonButton className="quiz-start-practice-btn" expand="block">
            Start Practice
          </IonButton>

          {/* Ask AI Section */}
          <div className="ask-ai-section">
            <h4 className="ask-ai-title">Ask AI a question</h4>
          </div>
        </div>

        {/* Bottom padding for tab bar */}
        <div style={{ height: '80px' }}></div>
      </IonContent>
    </IonPage>
  );
};

export default QuizLectures;
