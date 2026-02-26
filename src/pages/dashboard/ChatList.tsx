import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonIcon,
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
import './Category.css';
import { chevronBackOutline } from 'ionicons/icons';
const chats = Array.from({ length: 8 });

const ChatList: React.FC = () => {
  return (
<IonPage>
      <IonContent fullscreen scrollY={true} className="category-content">
   <div className="cat-header">
          <div className="cat-header-top">
            <IonIcon icon={chevronBackOutline} className="back-icon" />
            <h1 className="cat-title">Message</h1>
          </div>
          <p className="cat-subtitle">Stay updated with your learning journey</p>


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
</div>

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

  </IonContent>
</IonPage>

   

  );
};

export default ChatList;
