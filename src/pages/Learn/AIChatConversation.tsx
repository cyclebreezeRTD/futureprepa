import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonIcon,
  IonButton,
} from '@ionic/react';
import { 
  searchOutline, 
  notifications,
  menu,
  chevronBack,
  sparkles,
  copy,
  shareOutline,
  refresh
} from 'ionicons/icons';
import './AIChatConversation.css';

const AIChatConversation: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border ai-conversation-header">
        <IonToolbar className="ai-conversation-toolbar">
          <div className="ai-conversation-header-content">
            <IonIcon icon={chevronBack} className="back-icon" />
            <div className="header-icons">
              <IonIcon icon={searchOutline} className="header-icon" />
              <IonIcon icon={notifications} className="header-icon" />
            </div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ai-conversation-content">
        {/* Page Title */}
        <div className="conversation-title-section">
          <h2 className="conversation-title">AI Chat</h2>
        </div>

        {/* Chat Messages */}
        <div className="chat-messages">
          {/* User Message 1 */}
          <div className="message user-message">
            <div className="message-header">
              <IonIcon icon={sparkles} className="user-icon" />
              <span className="message-sender">You</span>
            </div>
            <div className="message-content">
              <p className="message-text">
                Tell me the story of a student who was going to school and went away tomorrow as a nice and interesting story
              </p>
              <div className="message-actions">
                <button className="action-btn">
                  <IonIcon icon={copy} />
                  <span>Copy</span>
                </button>
              </div>
            </div>
          </div>

          {/* AI Response 1 */}
          <div className="message ai-message">
            <div className="message-header">
              <IonIcon icon={sparkles} className="ai-icon" />
              <span className="message-sender">Chat Bot AI</span>
            </div>
            <div className="message-content">
              <p className="message-text">
                Once upon a time, in the quaint town of Willowbrook, there lived a curious and adventurous...
              </p>
              <div className="message-actions">
                <button className="action-btn">
                  <IonIcon icon={copy} />
                  <span>Copy</span>
                </button>
                <button className="action-btn">
                  <IonIcon icon={shareOutline} />
                  <span>Share</span>
                </button>
                <button className="action-btn">
                  <IonIcon icon={refresh} />
                  <span>Regenerate</span>
                </button>
              </div>
            </div>
          </div>

          {/* User Message 2 */}
          <div className="message user-message">
            <div className="message-header">
              <IonIcon icon={sparkles} className="user-icon" />
              <span className="message-sender">You</span>
            </div>
            <div className="message-content">
              <p className="message-text">
                Tell me the story of a student who was going to school and went away tomorrow as a nice and interesting story
              </p>
              <div className="message-actions">
                <button className="action-btn">
                  <IonIcon icon={copy} />
                  <span>Copy</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom padding for tab bar */}
        <div style={{ height: '80px' }}></div>
      </IonContent>
    </IonPage>
  );
};

export default AIChatConversation;
