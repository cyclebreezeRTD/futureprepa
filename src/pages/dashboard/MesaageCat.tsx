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
import './Message.css';
import './Category.css';
import { chevronBackOutline } from 'ionicons/icons';
const MesaageCat: React.FC = () => {
  return (
<IonPage className="message-cat-page">
  <IonHeader className="ion-no-border categories-header">
          <div className="cat-header-top">
            <IonIcon icon={chevronBackOutline} className="back-icon" />
            <h1 className="cat-title">Categories</h1>
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
  </IonHeader>

  <IonContent fullscreen className="message-cat-page">
    <div className="dm-empty">
      <h2>Welcome to your direct message!</h2>
      <p>
        Drop a message, share your posts and do more with personal
        and direct messaging between you and others on Circue
      </p>
      <IonButton className="dm-btn" style={{ color: 'white' }}>
        Start a chat
      </IonButton>
    </div>
  </IonContent>
</IonPage>
  );
};

export default MesaageCat;
