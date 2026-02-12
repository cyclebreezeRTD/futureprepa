import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonChip,
  IonLabel,
  IonButton,
} from '@ionic/react';
import './Message.css';

const MesaageCat: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border categories-header">
        <IonToolbar className="categories-toolbar">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" text="" />
          </IonButtons>

          <IonTitle className="categories-title">
            Categories
          </IonTitle>
        </IonToolbar>

        <div className="categories-sub">
          Stay updated with your learning journey
        </div>

        <div className="categories-chips">
          <IonChip className="pill all">
            <IonLabel>All</IonLabel>
          </IonChip>

          <IonChip className="pill unread">
            <IonLabel>Unread</IonLabel>
          </IonChip>

          <IonChip className="pill messages">
            <IonLabel>Messages</IonLabel>
          </IonChip>
        </div>
      </IonHeader>

      <IonContent fullscreen>
        <div className="dm-empty">
          <h2>Welcome to your direct message!</h2>

          <p>
            Drop a message, share your posts and do more with personal
            and direct messaging between you and others on Circue
          </p>

          <IonButton className="dm-btn">
            Start a chat
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MesaageCat;
