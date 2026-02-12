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
import './WaecPractice.css';

const WaecPractice: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="practice-header ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/waec" />
          </IonButtons>

          <IonTitle className="practice-title">
            <div className="title-main">WAEC</div>
            <div className="title-sub">West African Examination Council</div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="practice-content">
        {/* Tabs */}
        <IonSegment value="practice" className="practice-segment">
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

        {/* Card */}
        <div className="topic-card">
          <h3>Topic - Based Practice</h3>
          <p>Focus on specific topics to improve weak areas</p>

          <div className="topic-item math">
            <span>Mathematics</span>
            <IonIcon icon={chevronForwardOutline} />
          </div>

          <div className="topic-item english">
            <span>English</span>
            <IonIcon icon={chevronForwardOutline} />
          </div>

          <div className="topic-item biology">
            <span>Biology</span>
            <IonIcon icon={chevronForwardOutline} />
          </div>
        </div>

        <IonButton expand="block" className="start-btn">
          Start Practice
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default WaecPractice;
