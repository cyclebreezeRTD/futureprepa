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
} from '@ionic/react';
import './MessageList.css';

const MessageList: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border msg-header">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" text="" />
          </IonButtons>

          <IonTitle className="msg-title">Message</IonTitle>
        </IonToolbar>

        <div className="msg-sub">
          Stay updated with your learning journey
        </div>

        <div className="msg-chips">
          <IonChip className="msg-pill notify">
            <IonLabel>Notification</IonLabel>
          </IonChip>

          <IonChip className="msg-pill chat">
            <IonLabel>Chat</IonLabel>
          </IonChip>

          <IonChip className="msg-pill unread">
            <IonLabel>Unread</IonLabel>
          </IonChip>
        </div>
      </IonHeader>

      <IonContent>
        <div className="message-card">
          <div className="message-left">
            <div className="msg-icon">🔔</div>

            <div>
              <div className="msg-text">Ayoola Sent you a message</div>
              <div className="msg-time">2 Hours Ago</div>
            </div>
          </div>

          <div className="msg-view">View Message</div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MessageList;
