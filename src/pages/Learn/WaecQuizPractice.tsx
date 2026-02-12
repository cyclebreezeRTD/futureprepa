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
  IonButton,
  IonIcon,
} from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';
import './WaecQuizPractice.css';

const WaecQuizPractice: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="quiz-header ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/waec" />
          </IonButtons>

          <IonTitle className="quiz-title">
            <div className="title-main">WAEC</div>
            <div className="title-sub">West African Examination Council</div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="quiz-content">
        {/* Tabs */}
        <IonSegment value="practice" className="quiz-segment">
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

        {/* Quiz Card */}
        <div className="quiz-card">
          <div className="quiz-text">
            <h3>Quiz on lectures</h3>
            <p>
              Practising the quiz is not a mandatory part of the course
            </p>
          </div>

          <IonIcon icon={chevronForwardOutline} />
        </div>

        <IonButton expand="block" className="start-btn">
          Start Practice
        </IonButton>

        <div className="ask-ai">Ask AI a question</div>
      </IonContent>
    </IonPage>
  );
};

export default WaecQuizPractice;
