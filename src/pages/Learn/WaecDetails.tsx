import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonIcon,
  IonButton,
} from '@ionic/react';
import {
  timeOutline,
  starOutline,
  peopleOutline,
  checkmarkCircleOutline,
  hourglassOutline,
  barChartOutline,
  chatbubbleEllipsesOutline,
} from 'ionicons/icons';
import './WaecDetails.css';

const WaecDetails: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="waec-header ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/learn" />
          </IonButtons>

          <IonTitle className="waec-title">
            <div className="title-main">WAEC</div>
            <div className="title-sub">West African Examination Council</div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="waec-content">
        {/* Progress Card */}
        <div className="exam-progress">
          <div className="progress-top">
            <span>Exam Readiness : 50%</span>
          </div>

          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '50%' }} />
          </div>

          <div className="progress-bottom">
            <span>Continue lesson</span>
            <span>50% completed</span>
          </div>
        </div>

        {/* Tabs */}
        <IonSegment value="practice" className="waec-segment">
          <IonSegmentButton value="overview">
            <IonLabel>Overview</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="practice">
            <IonLabel>Practice</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="pq">
            <IonLabel>PQ</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="analytics">
            <IonLabel>Analytics</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/* Stats */}
        <div className="stats">
          <div>
            <IonIcon icon={timeOutline} />
            <p>40 Mins</p>
          </div>
          <div>
            <IonIcon icon={starOutline} />
            <p>5/5 (122)</p>
          </div>
          <div>
            <IonIcon icon={peopleOutline} />
            <p>300 students</p>
          </div>
        </div>

        {/* Features */}
        <h3 className="section-title">Features</h3>

        <div className="feature">
          <IonIcon icon={checkmarkCircleOutline} />
          <div>
            <h4>100% Online</h4>
            <p>Start instantly and learn at your own schedule</p>
          </div>
        </div>

        <div className="feature">
          <IonIcon icon={hourglassOutline} />
          <div>
            <h4>CBT Past Questions</h4>
            <p>Explore & answer questions from the past exams</p>
          </div>
        </div>

        <div className="feature">
          <IonIcon icon={barChartOutline} />
          <div>
            <h4>Beginner Level</h4>
            <p>You will learn from the beginning</p>
          </div>
        </div>

        <div className="feature">
          <IonIcon icon={chatbubbleEllipsesOutline} />
          <div>
            <h4>Chat with AI</h4>
            <p>Ask questions and communicate with AI</p>
          </div>
        </div>

        {/* Subject Progress */}
        <h3 className="section-title">Subject Progress</h3>

        {[1, 2, 3, 4].map((_, i) => (
          <div className="subject-card" key={i}>
            <h4>Mathematics</h4>
            <div className="subject-footer">
              <span>Continue lesson</span>
              <span>50% completed</span>
            </div>
          </div>
        ))}

        <IonButton expand="block" className="start-btn">
          Start Practice
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default WaecDetails;
