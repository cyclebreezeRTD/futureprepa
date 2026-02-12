import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonIcon,
  IonButton,
  IonTextarea,
  IonCard,
  IonCardContent,
} from '@ionic/react';
import { 
  searchOutline, 
  notifications,
  menu,
  sendSharp,
  chevronForward
} from 'ionicons/icons';
import './AIChat.css';

const AIChat: React.FC = () => {
  const [message, setMessage] = useState('');

  return (
    <IonPage>
      <IonHeader className="ion-no-border ai-chat-header">
        <IonToolbar className="ai-chat-toolbar">
          <div className="ai-chat-header-content">
            <IonIcon icon={menu} className="menu-icon" />
            <div className="header-icons">
              <IonIcon icon={searchOutline} className="header-icon" />
              <IonIcon icon={notifications} className="header-icon" />
            </div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ai-chat-content">
        {/* Title Section */}
        <div className="chat-title-section">
          <h1 className="chat-title">AI Chat</h1>
          <p className="chat-subtitle">ask me question and get support</p>
        </div>

        {/* Category Pills */}
        <div className="chat-category-pills">
          <div className="chat-pill purple">Overview</div>
          <div className="chat-pill pink">Practice</div>
          <div className="chat-pill magenta">Ai</div>
          <div className="chat-pill blue">Learn</div>
        </div>

        {/* Message Input */}
        <div className="message-input-container">
          <IonTextarea
            className="message-input"
            placeholder="Type your question below or click a picture and get smarter and try to get on track"
            value={message}
            onIonInput={(e) => setMessage(e.detail.value!)}
            autoGrow={true}
            rows={3}
          />
          <button className="send-button">
            <IonIcon icon={sendSharp} />
          </button>
        </div>

        {/* Subjects Section */}
        <div className="subjects-section">
          <h3 className="section-title">Subjects</h3>
          <div className="subject-buttons">
            <IonButton className="subject-btn purple">Mathematics</IonButton>
            <IonButton className="subject-btn orange">Chemistry</IonButton>
            <IonButton className="subject-btn purple-alt">Physics</IonButton>
            <IonButton className="subject-btn orange-alt">Accounting</IonButton>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="faq-section">
          <h3 className="section-title">Frequently asked questions</h3>
          
          <div className="faq-item">
            <p className="faq-question">the concept What 18 values mention?</p>
            <IonIcon icon={chevronForward} className="faq-arrow" />
          </div>

          <div className="faq-item">
            <p className="faq-question">What verb VPP</p>
            <IonIcon icon={chevronForward} className="faq-arrow" />
          </div>

          <div className="faq-item">
            <p className="faq-question">Value of Naptial's constant *s*</p>
            <IonIcon icon={chevronForward} className="faq-arrow" />
          </div>
        </div>

        {/* Bottom padding for tab bar */}
        <div style={{ height: '80px' }}></div>
      </IonContent>
    </IonPage>
  );
};

export default AIChat;
