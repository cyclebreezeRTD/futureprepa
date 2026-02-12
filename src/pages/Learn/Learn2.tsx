import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonIcon,
  IonButton,
  IonCard,
  IonCardContent,
  IonRadioGroup,
  IonRadio,
  IonLabel,
} from '@ionic/react';
import { 
  arrowBack, 
  searchOutline, 
  notifications, 
  closeCircle,
  chevronBack,
  chevronForward 
} from 'ionicons/icons';
import './Learn2.css';

const Learn2: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');

  return (
    <IonPage>
      <IonHeader className="ion-no-border learn-header">
        <IonToolbar className="learn-toolbar">
          <div className="learn-header-content">
            <IonIcon icon={arrowBack} className="back-icon" />
            <div className="header-icons">
              <IonIcon icon={searchOutline} className="header-icon" />
              <IonIcon icon={notifications} className="header-icon" />
            </div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="learn-content">
        {/* Subject Header */}
        <div className="subject-header">
          <h3 className="subject-title">WAEC</h3>
          <p className="subject-subtitle">West African Examination Council</p>
        </div>

        {/* Category Pills */}
        <div className="category-pills">
          <div className="pill active">Overview</div>
          <div className="pill">Practice</div>
          <div className="pill">Ai</div>
          <div className="pill">Learn</div>
        </div>

        {/* Main Content Card */}
        <IonCard className="learn-card">
          <IonCardContent className="learn-card-content">
            {/* Question Header */}
            <div className="question-header">
              <h2 className="question-title">English Language</h2>
              <p className="question-count">60 questions</p>
              <div className="view-mode">
                <span className="mode-text">One at a time</span>
                <span className="mode-link">View mode</span>
              </div>
            </div>

            {/* Question */}
            <div className="question-section">
              <h3 className="question-text">
                1. What elements are basic in the paragraph?
              </h3>
              
              <div className="hint-section">
                <IonIcon icon={closeCircle} className="hint-icon" />
                <p className="hint-text">Hint Block</p>
              </div>
            </div>

            {/* Answer Options */}
            <div className="answer-options">
              <IonRadioGroup value={selectedAnswer} onIonChange={e => setSelectedAnswer(e.detail.value)}>
                <div className="answer-option">
                  <div className="option-header">
                    <IonRadio value="1" mode="md" />
                    <span className="option-number">1. Choose the correct option</span>
                  </div>
                  <p className="option-text">
                    I am studying and writing is one sentence which shows a nice definition
                  </p>
                </div>

                <div className="answer-option explanation">
                  <div className="explanation-content">
                    <p className="explanation-text">
                      In the paragraph we can define the planning as,writing as one sentence which shows the nice definition of the planning we can defined of more value
                    </p>
                    <div className="explanation-footer">
                      <IonIcon icon={closeCircle} className="explanation-icon" />
                      <span className="explanation-label">If you explanation must it possible in simple language explain more</span>
                    </div>
                  </div>
                </div>

                <div className="answer-option">
                  <div className="option-header">
                    <IonRadio value="3" mode="md" />
                    <span className="option-number">3. Choose the correct option</span>
                  </div>
                  <p className="option-text">
                    I am studying and writing is one sentence which shows a nice definition
                  </p>
                </div>

                <div className="answer-option explanation-alt">
                  <div className="explanation-content">
                    <p className="explanation-text-alt">
                      In the paragraph we can define the planning as,writing as one sentence which shows a nice definition of the planning we can define of more value I am studying and writing is one sentence which shows a nice definition of the planning we can defined of more value
                    </p>
                  </div>
                </div>
              </IonRadioGroup>
            </div>

            {/* Bottom Text */}
            <p className="bottom-text">
              from building que site use the Regem flow
            </p>

            {/* Progress Dots */}
            <div className="progress-dots">
              <div className="dot active"></div>
              <div className="dot active"></div>
              <div className="dot active"></div>
              <div className="dot active"></div>
              <div className="dot active"></div>
              <div className="dot"></div>
            </div>

            {/* Navigation Buttons */}
            <div className="navigation-buttons">
              <IonButton className="nav-btn prev-btn" fill="outline">
                <IonIcon icon={chevronBack} slot="start" />
                Previous
              </IonButton>
              <IonButton className="nav-btn next-btn">
                Next
                <IonIcon icon={chevronForward} slot="end" />
              </IonButton>
            </div>
          </IonCardContent>
        </IonCard>

        {/* Bottom padding for tab bar */}
        <div style={{ height: '80px' }}></div>
      </IonContent>
    </IonPage>
  );
};

export default Learn2;
