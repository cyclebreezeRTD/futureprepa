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
  checkmarkCircleOutline
} from 'ionicons/icons';
import './TailoringLesson.css';

const TailoringLesson: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border tailoring-lesson-header">
        <IonToolbar className="tailoring-lesson-toolbar">
          <div className="tailoring-lesson-header-content">
            <IonIcon icon={chevronBack} className="back-icon" />
            <div className="header-icons">
              <IonIcon icon={searchOutline} className="header-icon" />
              <IonIcon icon={notifications} className="header-icon" />
            </div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="tailoring-lesson-content">
        {/* Title Section */}
        <div className="lesson-title-section">
          <div className="breadcrumb">
            <IonIcon icon={chevronBack} className="breadcrumb-icon" />
            <span className="breadcrumb-text">Tailoring</span>
          </div>
          <p className="lesson-subtitle">Tools & Value</p>
        </div>

        {/* Hero Image */}
        <div className="lesson-hero-container">
          <div className="lesson-hero-image">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop" 
              alt="Tailoring workspace"
              className="hero-img"
            />
          </div>
        </div>

        {/* What you will learn Section */}
        <div className="learn-section">
          <h3 className="learn-title">What you will learn</h3>

          <div className="learn-items">
            <div className="learn-item">
              <IonIcon icon={checkmarkCircleOutline} className="check-icon" />
              <span className="learn-text">Understand the basic principles</span>
            </div>

            <div className="learn-item">
              <IonIcon icon={checkmarkCircleOutline} className="check-icon" />
              <span className="learn-text">Apply concept to solve problems</span>
            </div>

            <div className="learn-item">
              <IonIcon icon={checkmarkCircleOutline} className="check-icon" />
              <span className="learn-text">Build confidence for assessments</span>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="lesson-navigation-buttons">
          <IonButton className="lesson-nav-btn prev-btn" fill="outline">
            Previous
          </IonButton>
          <IonButton className="lesson-nav-btn next-btn">
            Next
          </IonButton>
        </div>

        {/* Bottom padding for tab bar */}
        <div style={{ height: '80px' }}></div>
      </IonContent>
    </IonPage>
  );
};

export default TailoringLesson;
