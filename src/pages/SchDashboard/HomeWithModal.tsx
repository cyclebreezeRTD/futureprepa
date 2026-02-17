import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonAvatar,
  IonText,
  IonCard,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/react';
import {
  menuOutline,
  searchOutline,
  notificationsOutline,
  ellipsisVertical,
  checkmarkCircle,
} from 'ionicons/icons';
import LearnerAcceptedModal from './LearnerAcceptedModal';
import './Home.css';

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const messages = [
    { id: 1, sender: 'Samantha William', school: 'Unity Int School', read: false, important: true },
    { id: 2, sender: 'Samantha William', school: 'Unity Int School', read: false, important: true },
    { id: 3, sender: 'Samantha William', school: 'Unity Int School', read: false, important: true },
    { id: 4, sender: 'Samantha William', school: 'Unity Int School', read: false, important: true },
  ];

  const handleMessageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleGoToDashboard = () => {
    setShowModal(false);
    // Navigate to dashboard
    console.log('Navigate to dashboard');
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="header-toolbar">
          <IonButtons slot="start">
            <IonButton className="menu-button">
              <IonIcon icon={menuOutline} />
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton className="icon-button">
              <IonIcon icon={searchOutline} />
            </IonButton>
            <IonButton className="icon-button notification-button">
              <IonIcon icon={notificationsOutline} />
              <span className="notification-badge"></span>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="home-content">
        {/* Welcome Section */}
        <div className="welcome-section">
          <IonAvatar className="user-avatar">
            <img src="https://i.pravatar.cc/150?img=5" alt="User" />
          </IonAvatar>
          <div className="welcome-text">
            <p className="greeting">Welcome Back,</p>
            <h2 className="school-name">Unity Secondary school</h2>
          </div>
        </div>

        {/* Plan Card */}
        <IonCard className="plan-card">
          <IonCardContent className="plan-card-content">
            <div className="plan-header">
              <div>
                <p className="plan-label">Your Plan</p>
                <h1 className="plan-type">Free</h1>
              </div>
              <IonButton fill="clear" className="plan-menu-button">
                <IonIcon icon={ellipsisVertical} color="light" />
              </IonButton>
            </div>

            <div className="plan-features">
              <div className="feature-item">
                <span className="bullet">●</span>
                <span>50 GB Storage</span>
              </div>
              <div className="feature-item">
                <span className="bullet">●</span>
                <span>Limited Features</span>
              </div>
            </div>

            <p className="upgrade-text">
              Upgrade to Premium Plan to get more Features & Storage memory
            </p>

            <IonButton className="upgrade-button" expand="block">
              Upgrade Plan
            </IonButton>

            <div className="plan-decoration"></div>
          </IonCardContent>
        </IonCard>

        {/* Inbox Messages */}
        <div className="inbox-section">
          <h3 className="inbox-title">Inbox Messages</h3>
          <IonList className="messages-list">
            {messages.map((message) => (
              <IonItem 
                key={message.id} 
                className="message-item" 
                lines="none"
                button
                onClick={handleMessageClick}
              >
                <div className="message-content">
                  <p className="sender-name">{message.sender}</p>
                  <p className="school-name-msg">{message.school}</p>
                </div>
                <div className="message-status" slot="end">
                  <div className={`status-icon ${message.read ? 'read' : 'unread'}`}>
                    <IonIcon icon={checkmarkCircle} />
                  </div>
                </div>
              </IonItem>
            ))}
          </IonList>
        </div>
      </IonContent>

      {/* Learner Accepted Modal */}
      <LearnerAcceptedModal
        isOpen={showModal}
        onClose={handleCloseModal}
        onGoToDashboard={handleGoToDashboard}
      />
    </IonPage>
  );
};

export default Home;
