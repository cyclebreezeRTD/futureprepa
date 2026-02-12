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
  menu
} from 'ionicons/icons';
import './PracticeComplete.css';

const PracticeComplete: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border practice-complete-header">
        <IonToolbar className="practice-complete-toolbar">
          <div className="practice-header-content">
            <IonIcon icon={menu} className="menu-icon" />
            <div className="header-icons">
              <IonIcon icon={searchOutline} className="header-icon" />
              <IonIcon icon={notifications} className="header-icon" />
            </div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="practice-complete-content">
        <div className="completion-container">
          {/* Title Section */}
          <div className="title-section">
            <h1 className="completion-title">Practice Complete</h1>
            <p className="completion-subtitle">Keep Practicing</p>
          </div>

          {/* Stats Cards */}
          <div className="stats-cards">
            <div className="stat-card purple">
              <div className="stat-value">76%</div>
              <div className="stat-label">Score</div>
            </div>

            <div className="stat-card pink">
              <div className="stat-value">85%</div>
              <div className="stat-label">Accuracy</div>
            </div>

            <div className="stat-card magenta">
              <div className="stat-value">8</div>
              <div className="stat-label">Review</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <IonButton className="action-btn secondary" fill="outline">
              Back to Exam
            </IonButton>
            <IonButton className="action-btn primary">
              Try Again
            </IonButton>
          </div>
        </div>

        {/* Bottom padding for tab bar */}
        <div style={{ height: '80px' }}></div>
      </IonContent>
    </IonPage>
  );
};

export default PracticeComplete;
