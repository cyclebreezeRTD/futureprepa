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
  IonIcon,
  IonLabel,
  IonButton,
} from '@ionic/react';
import './MessageList.css';
import './Category.css';
import { chevronBackOutline } from 'ionicons/icons';
const MesaageList: React.FC = () => {
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
        <div className="message-card">
          <div className="message-left">
            <div className="msg-icon">🔔</div>

            <div>
              <div className="msg-text" style={{color: "black"}}>Ayoola Sent you a message</div>
              <div className="msg-time">2 Hours Ago</div>
            </div>
          </div>

          <div className="msg-view">View Message</div>
        </div>
      </IonContent>

  </IonContent>
</IonPage>
  );
};

export default MesaageList;
