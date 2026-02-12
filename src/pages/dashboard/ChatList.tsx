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
  IonSearchbar,
  IonAvatar,
} from '@ionic/react';
import './ChatList.css';

const chats = Array.from({ length: 8 });

const ChatList: React.FC = () => {
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
          <IonChip className="msg-pill chat">
            <IonLabel>Chat</IonLabel>
          </IonChip>

          <IonChip className="msg-pill unread">
            <IonLabel>Unread Messages</IonLabel>
          </IonChip>
        </div>
      </IonHeader>

      <IonContent>
        {/* Search */}
        <IonSearchbar className="chat-search" placeholder="Search" />

        {/* Stories */}
        <div className="story-row">
          {[1,2,3,4,5,6].map(i => (
            <IonAvatar key={i} className="story-avatar">
              <img src={`https://i.pravatar.cc/100?img=${i}`} />
            </IonAvatar>
          ))}
        </div>

        {/* Chat List */}
        {chats.map((_, i) => (
          <div className="chat-item" key={i}>
            <IonAvatar className="chat-avatar">
              <img src={`https://i.pravatar.cc/100?img=${i+10}`} />
            </IonAvatar>

            <div className="chat-center">
              <div className="chat-name">Adebayo Mokunola Ope</div>
              <div className="chat-preview">
                Hey man, need that slide file today, can yo...
              </div>
            </div>

            <div className="chat-right">
              <div className="chat-time">Mon</div>
              <div className="chat-dot" />
            </div>
          </div>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default ChatList;
