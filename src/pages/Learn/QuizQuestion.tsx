import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonIcon,
  IonButton,
  IonRadioGroup,
  IonRadio,
} from '@ionic/react';
import { 
  searchOutline, 
  notifications,
  menu,
  chevronBack,
  chevronForward
} from 'ionicons/icons';
import './QuizQuestion.css';

const QuizQuestion: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');

  return (
    <IonPage>
      <IonHeader className="ion-no-border quiz-question-header">
        <IonToolbar className="quiz-question-toolbar">
          <div className="quiz-question-header-content">
            <IonIcon icon={menu} className="menu-icon" />
            <div className="header-icons">
              <IonIcon icon={searchOutline} className="header-icon" />
              <IonIcon icon={notifications} className="header-icon" />
            </div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="quiz-question-content">
        {/* Course Title Section */}
        <div className="quiz-question-course-section">
          <h2 className="quiz-question-course-title">WAEC</h2>
          <p className="quiz-question-course-subtitle">West African Examination Council</p>
        </div>

        {/* Category Pills */}
        <div className="quiz-question-pills">
          <div className="quiz-question-pill purple">Overview</div>
          <div className="quiz-question-pill orange">Practice</div>
          <div className="quiz-question-pill pink">Ai</div>
          <div className="quiz-question-pill blue">Learn</div>
        </div>

        {/* Question Section */}
        <div className="quiz-question-section">
          <div className="question-header-row">
            <h3 className="question-title">English Language</h3>
            <span className="question-count">60 questions</span>
          </div>
          <div className="question-mode">
            <span className="mode-text">One at a time</span>
            <span className="mode-link">View mode</span>
          </div>

          {/* Main Question */}
          <div className="main-question">
            <p className="question-text">
              1. What elements are basic in the paragraph?
            </p>
            <div className="hint-box">
              <span className="hint-icon">✕</span>
              <span className="hint-text">Hint Block</span>
            </div>
          </div>

          {/* Answer Options */}
          <IonRadioGroup value={selectedAnswer} onIonChange={e => setSelectedAnswer(e.detail.value)}>
            <div className="answer-option-item">
              <div className="option-header">
                <IonRadio value="2" mode="md" />
                <span className="option-label">2. Choose the correct option</span>
              </div>
              <p className="option-description">
                I am studying and writing is one sentence which shows a nice definition
              </p>
              <div className="option-explanation pink-explanation">
                <p className="explanation-text">
                  In the paragraph we can define the planning as,writing as one sentence which shows the nice definition of the planning we can defined of more value
                </p>
                <div className="explanation-note">
                  <span className="note-icon">✕</span>
                  <span className="note-text">If you explanation must it possible in simple language explain more</span>
                </div>
              </div>
            </div>

            <div className="answer-option-item">
              <div className="option-header">
                <IonRadio value="3" mode="md" />
                <span className="option-label">3. Choose the correct option</span>
              </div>
              <p className="option-description">
                I am studying and writing is one sentence which shows a nice definition
              </p>
              <div className="option-explanation orange-explanation">
                <p className="explanation-text">
                  In the paragraph we can define the planning as,writing as one sentence which shows a nice definition of the planning we can define of more value I am studying and writing is one sentence which shows a nice definition of the planning we can defined of more value
                </p>
              </div>
            </div>
          </IonRadioGroup>

          {/* Bottom Text */}
          <p className="bottom-note">from building que site use the Regem flow</p>

          {/* Progress Dots */}
          <div className="progress-dots-container">
            <div className="progress-dot active">1</div>
            <div className="progress-dot active">2</div>
            <div className="progress-dot active">3</div>
            <div className="progress-dot active">4</div>
            <div className="progress-dot active">5</div>
            <div className="progress-dot">6</div>
          </div>

          {/* Navigation Buttons */}
          <div className="quiz-navigation-buttons">
            <IonButton className="quiz-nav-btn prev-btn" fill="outline">
              <IonIcon icon={chevronBack} slot="start" />
              Previous
            </IonButton>
            <IonButton className="quiz-nav-btn next-btn">
              Next
              <IonIcon icon={chevronForward} slot="end" />
            </IonButton>
          </div>
        </div>

        {/* Bottom padding for tab bar */}
        <div style={{ height: '80px' }}></div>
      </IonContent>
    </IonPage>
  );
};

export default QuizQuestion;
