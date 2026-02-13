import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { searchOutline, notificationsOutline, menuOutline } from 'ionicons/icons';
import './MentorPage.css';

const MentorPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton>
              <IonIcon icon={menuOutline} />
            </IonButton>
          </IonButtons>
          <IonTitle>Mentor</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={searchOutline} />
            </IonButton>
            <IonButton>
              <IonIcon icon={notificationsOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="mentor-content">
        <div className="mentor-description">
          A platform that creates quality plug-ins for accounting and project management
        </div>

        <div className="section-title">Available Mentors</div>

        {/* Mentor Card 1 */}
        <div className="mentor-card">
          <div className="mentor-avatar">
            <img src="https://via.placeholder.com/70" alt="Samson Hungeford" />
          </div>
          <div className="mentor-name">Samson Hungeford</div>
          <div className="mentor-role">Mentor</div>
          <button className="mentor-btn support-btn">
            Support by chat
          </button>
        </div>

        {/* Mentor Card 2 */}
        <div className="mentor-card">
          <div className="mentor-avatar">
            <img src="https://via.placeholder.com/70" alt="Khwalo Joseph" />
          </div>
          <div className="mentor-name">Khwalo Joseph</div>
          <div className="mentor-role">CEO</div>
          <button className="mentor-btn video-btn">
            Video partner
          </button>
          <div className="partner-text">
            Want to partner up <span className="more-text">more</span>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MentorPage;
