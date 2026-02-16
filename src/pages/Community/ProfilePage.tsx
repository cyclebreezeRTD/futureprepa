import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { 
  searchOutline, 
  notificationsOutline, 
  menuOutline,
  personOutline,
  callOutline,
  mailOutline,
  documentTextOutline,
  chevronForwardOutline
} from 'ionicons/icons';
import './ProfilePage.css';

const ProfilePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton>
              <IonIcon icon={menuOutline} />
            </IonButton>
          </IonButtons>
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

      <IonContent className="profile-content">
        {/* Profile Header Section */}
        <div className="profile-header">
          <div className="profile-avatar-wrapper">
            <div className="profile-avatar">
              <img src="https://via.placeholder.com/120" alt="Kwama Joseph" />
            </div>
          </div>
          <div className="profile-name-section">
            <div className="profile-name">KWAMA JOSEPH</div>
            <div className="profile-title">Chief executive officer</div>
          </div>
        </div>

        {/* General Info Card */}
        <div className="info-card">
          <div className="card-header">
            <span className="card-title">General</span>
            <span className="card-action">Edit</span>
          </div>
          <div className="card-description">
            Occaecat aliquip dolor et amet. Unhackful stantarid Lorem aliquip dolor et amet. Unhackful stantarid
          </div>

          <div className="info-list">
            <div className="info-item">
              <IonIcon icon={personOutline} className="info-icon" />
              <span className="info-text">My life. My satisfaction</span>
            </div>
            <div className="info-item">
              <IonIcon icon={callOutline} className="info-icon" />
              <span className="info-text">Digital Type</span>
            </div>
            <div className="info-item">
              <IonIcon icon={mailOutline} className="info-icon" />
              <span className="info-text">Varius nec tortor eusisiun pharm</span>
            </div>
            <div className="info-item">
              <IonIcon icon={documentTextOutline} className="info-icon" />
              <span className="info-text">Tortor eusisiun 8787</span>
            </div>
            <div className="info-item">
              <IonIcon icon={documentTextOutline} className="info-icon" />
              <span className="info-text">Vita vendor land take</span>
            </div>
          </div>
        </div>

        {/* About Interest Card */}
        <div className="info-card">
          <div className="card-header">
            <span className="card-title">About Interest</span>
          </div>
          <div className="card-description">
            Amet cubo nunc nunc sagittis netus terra. Vitate dictum met vitae pulvinar est amet quisqui luctus sit congitir sit alia tempor potens metus qurm ipsum.
          </div>
          <div className="card-description">
            Id sapien proin ante et. Pellentesque ante et. Pellentesque adipilis ante magna proin adipilis congue ultricies elit. Tortor ultricies egestas amet maeceo amet maecenas mollicies habitasse euisis eu tempus sed nunc ultricies euilis elementum tos curidio proin in dis tempor magna amet. Moles.
          </div>
        </div>

        {/* Message Mentor Button */}
        <button className="message-btn">
          Message Mentor
          <IonIcon icon={chevronForwardOutline} className="btn-arrow" />
        </button>
      </IonContent>
    </IonPage>
  );
};

export default ProfilePage;
