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
  menu,
  chevronBack
} from 'ionicons/icons';
import './STEMLearning.css';

const STEMLearning: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border stem-learning-header">
        <IonToolbar className="stem-learning-toolbar">
          <div className="stem-learning-header-content">
            <IonIcon icon={menu} className="menu-icon" />
            <div className="header-icons">
              <IonIcon icon={searchOutline} className="header-icon" />
              <IonIcon icon={notifications} className="header-icon" />
            </div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="stem-learning-content">
        {/* Title Section */}
        <div className="stem-learning-title-section">
          <div className="breadcrumb">
            <IonIcon icon={chevronBack} className="breadcrumb-icon" />
            <span className="breadcrumb-text">Learn</span>
          </div>
          <p className="stem-learning-subtitle">What would you like to learn?</p>
        </div>

        {/* Category Pills */}
        <div className="stem-learning-pills">
          <div className="stem-pill purple">Exams</div>
          <div className="stem-pill orange">STEM</div>
          <div className="stem-pill pink">Skills</div>
          <div className="stem-pill red">Career</div>
        </div>

        {/* STEM Learning Section */}
        <div className="stem-section">
          <h3 className="stem-section-title">STEM learning</h3>

          {/* Subject Cards Stack */}
          <div className="subject-stack">
            <div className="subject-stack-card mathematics">
              <h2 className="stack-card-title">Mathematics</h2>
            </div>

            <div className="subject-stack-card physics">
              <h2 className="stack-card-title">Physics</h2>
            </div>

            <div className="subject-stack-card chemistry">
              <h2 className="stack-card-title">Chemistry</h2>
            </div>

            <div className="subject-stack-card biology">
              <h2 className="stack-card-title">Biology</h2>
            </div>
          </div>

          {/* Fun Equation Solver Card */}
          <div className="equation-solver-card">
            <h3 className="solver-title">Fun Equation Solver</h3>
            <p className="solver-description">
              Step-by-step explanations for Maths, Physics & Accounting problems
            </p>
            <IonButton className="solver-button">Open Solver</IonButton>
          </div>
        </div>

        {/* Bottom padding for tab bar */}
        <div style={{ height: '80px' }}></div>
      </IonContent>
    </IonPage>
  );
};

export default STEMLearning;
