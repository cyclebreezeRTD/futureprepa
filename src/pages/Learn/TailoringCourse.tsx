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
  download,
  school,
  checkmarkCircle,
  bookOutline,
  chatbubbleEllipsesOutline,
  hammerOutline,
  cutOutline,
  shirtOutline,
  sparklesOutline
} from 'ionicons/icons';
import './TailoringCourse.css';

const TailoringCourse: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border tailoring-header">
        <IonToolbar className="tailoring-toolbar">
          <div className="tailoring-header-content">
            <IonIcon icon={chevronBack} className="back-icon" />
            <div className="header-icons">
              <IonIcon icon={searchOutline} className="header-icon" />
              <IonIcon icon={notifications} className="header-icon" />
            </div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="tailoring-content">
        {/* Course Title Section */}
        <div className="tailoring-title-section">
          <div className="breadcrumb">
            <IonIcon icon={chevronBack} className="breadcrumb-icon" />
            <span className="breadcrumb-text">Tailoring</span>
          </div>
          <p className="tailoring-subtitle">Vocational</p>
        </div>

        {/* Progress Card */}
        <div className="tailoring-progress-card">
          <div className="progress-content">
            <span className="progress-label">Your Progress</span>
            <span className="progress-value">72%</span>
          </div>
        </div>

        {/* Stats Row */}
        <div className="tailoring-stats-row">
          <div className="stat-item">
            <IonIcon icon={download} className="stat-icon" />
            <div className="stat-text">
              <div className="stat-value">40 Minutes</div>
            </div>
          </div>
          <div className="stat-item">
            <IonIcon icon={school} className="stat-icon" />
            <div className="stat-text">
              <div className="stat-value">300</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-text">
              <div className="stat-value">8220 Students</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="tailoring-features-section">
          <h3 className="section-heading">Features</h3>

          <div className="feature-item">
            <div className="feature-icon-wrapper pink">
              <IonIcon icon={checkmarkCircle} className="feature-icon" />
            </div>
            <div className="feature-content">
              <h4 className="feature-title">100% Offline</h4>
              <p className="feature-description">
                Start practice and learn it as you schedule
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
                There is a we will try and use current ones
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

        {/* Lessons Section */}
        <div className="tailoring-lessons-section">
          <h3 className="section-heading">Lessons</h3>

          <div className="lesson-item">
            <div className="lesson-icon-wrapper purple">
              <IonIcon icon={hammerOutline} className="lesson-icon" />
            </div>
            <div className="lesson-content">
              <h4 className="lesson-title">Tools & Equipment</h4>
              <p className="lesson-description">
                We study the scissors and formulas to ensure safe handling and the basic machines
              </p>
            </div>
          </div>

          <div className="lesson-item">
            <div className="lesson-icon-wrapper purple">
              <IonIcon icon={cutOutline} className="lesson-icon" />
            </div>
            <div className="lesson-content">
              <h4 className="lesson-title">Cutting & Drafting</h4>
              <p className="lesson-description">
                We study the machine and formulas to ensure safe the basic machines
              </p>
            </div>
          </div>

          <div className="lesson-item">
            <div className="lesson-icon-wrapper purple">
              <IonIcon icon={shirtOutline} className="lesson-icon" />
            </div>
            <div className="lesson-content">
              <h4 className="lesson-title">Garment Assembly</h4>
              <p className="lesson-description">
                We study the machine and formulas to ensure safe the basic machines
              </p>
            </div>
            <IonIcon icon={sparklesOutline} className="lesson-badge" />
          </div>

          <div className="lesson-item">
            <div className="lesson-icon-wrapper purple">
              <IonIcon icon={sparklesOutline} className="lesson-icon" />
            </div>
            <div className="lesson-content">
              <h4 className="lesson-title">Finishing & Stitching operations</h4>
              <p className="lesson-description">
                We study the machine and formulas to ensure safe the basic machines
              </p>
            </div>
            <IonIcon icon={sparklesOutline} className="lesson-badge" />
          </div>
        </div>

        {/* Continue Learning Button */}
        <div className="action-button-container">
          <IonButton className="continue-learning-btn" expand="block">
            Continue Learning
          </IonButton>
        </div>

        {/* Bottom padding for tab bar */}
        <div style={{ height: '80px' }}></div>
      </IonContent>
    </IonPage>
  );
};

export default TailoringCourse;
