import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonAvatar,
  IonInput,
  IonIcon,
} from '@ionic/react';
import { attachOutline, happyOutline, send } from 'ionicons/icons';
import './ChatRoom.css';

const ChatRoom: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border chatroom-header">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" text="" />
          </IonButtons>

          <IonAvatar slot="start" className="chatroom-avatar">
            <img src="https://i.pravatar.cc/100?img=12" />
          </IonAvatar>

          <IonTitle className="chatroom-title">
            Adebayo Mokunola Ope
            <div className="chatroom-sub">Online</div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="chatroom-body">

          {/* Incoming */}
          <div className="bubble left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus suscipit lorem varius and distinct sagittis.
            <div className="bubble-time">12:30 PM</div>
          </div>

          {/* Outgoing */}
          <div className="bubble right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus suscipit lorem varius and distinct sagittis.
            <div className="bubble-time">12:31 PM</div>
          </div>

          {/* Image */}
          <div className="bubble right image">
            <img src="https://picsum.photos/200/140" />
            <div className="bubble-time">12:32 PM</div>
          </div>

          {/* Audio */}
          <div className="bubble right audio">
            ▶︎━━━━━━━ 2:30
          </div>

        </div>
      </IonContent>

      {/* Input */}
      <div className="chat-input">
        <IonIcon icon={happyOutline} />
        <IonInput placeholder="Type anything..." />
        <IonIcon icon={attachOutline} />
        <IonIcon icon={send} />
      </div>
    </IonPage>
  );
};

export default ChatRoom;
