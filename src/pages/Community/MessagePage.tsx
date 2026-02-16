import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonFooter,
  IonTextarea,
} from '@ionic/react';
import { 
  chevronBackOutline,
  ellipsisVerticalOutline,
  happyOutline,
  attachOutline,
  micOutline
} from 'ionicons/icons';
import './MessagePage.css';

const MessagePage: React.FC = () => {
  const [message, setMessage] = useState('');

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton>
              <IonIcon icon={chevronBackOutline} />
            </IonButton>
          </IonButtons>
          <IonTitle>Message</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={ellipsisVerticalOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="message-content">
        {/* Chat Header */}
        <div className="chat-header">
          <div className="chat-avatar">
            <img src="https://via.placeholder.com/45" alt="Khwalo Joseph" />
          </div>
          <div className="chat-info">
            <div className="chat-name">Khwalo Joseph from Bunc</div>
          </div>
          <IonIcon icon={chevronBackOutline} className="chat-arrow" />
        </div>

        {/* Messages */}
        <div className="messages-container">
          {/* Received Message */}
          <div className="message-wrapper received">
            <div className="message-bubble received-bubble">
              <div className="message-text">
                Quis tantorant at oreet, consectetur adipiticing at. Sulis massa maisuada orci semper dapibus, sed in.
              </div>
            </div>
          </div>

          {/* Sent Message with Image */}
          <div className="message-wrapper sent">
            <div className="message-bubble sent-bubble">
              <div className="message-text">
                UT ELIT FRILLIS PHARETTA CONSECTETUR ELT ET TORTOR
              </div>
              <div className="message-image">
                <img src="https://via.placeholder.com/200x150" alt="Shared" />
              </div>
            </div>
          </div>

          {/* Sent Message with Icon */}
          <div className="message-wrapper sent">
            <div className="message-bubble sent-bubble icon-message">
              <div className="message-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 11L12 14L22 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </IonContent>

      <IonFooter className="ion-no-border">
        <div className="message-input-container">
          <IonButton fill="clear" className="input-icon-btn">
            <IonIcon icon={happyOutline} />
          </IonButton>
          
          <div className="input-wrapper">
            <IonTextarea
              value={message}
              onIonInput={(e) => setMessage(e.detail.value!)}
              placeholder="Write message"
              autoGrow={true}
              rows={1}
            />
          </div>

          <IonButton fill="clear" className="input-icon-btn">
            <IonIcon icon={attachOutline} />
          </IonButton>
          
          <IonButton fill="clear" className="input-icon-btn">
            <IonIcon icon={micOutline} />
          </IonButton>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default MessagePage;
