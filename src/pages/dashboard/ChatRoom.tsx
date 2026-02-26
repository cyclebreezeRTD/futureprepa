import React, { useRef, useEffect } from 'react';
import {
  IonContent,
  IonPage,
  IonIcon,
  IonInput,
  IonChip,
  IonLabel,
} from '@ionic/react';
import {
  chevronBackOutline,
  happyOutline,
  attachOutline,
  micOutline,
  ellipsisVertical,
  playCircle,
} from 'ionicons/icons';
import './ChatRoom.css';

const ChatRoom: React.FC = () => {
  const contentRef = useRef<HTMLIonContentElement>(null);

  useEffect(() => {
    setTimeout(() => {
      contentRef.current?.scrollToBottom(300);
    }, 100);
  }, []);

  return (
    <IonPage>
      <IonContent ref={contentRef} fullscreen scrollY={true} className="chatroom-content">

        {/* Top header: Message + subtitle */}
        <div className="chatroom-top-header">
          <div className="chatroom-top-row">
            <IonIcon icon={chevronBackOutline} className="chatroom-back-icon" />
            <h1 className="chatroom-main-title">Message</h1>
          </div>
          <p className="chatroom-main-subtitle">Stay updated with your learning journey</p>
        </div>

        {/* Contact row */}
        <div className="chatroom-contact-row">
          <div className="chatroom-contact-left">
            <IonIcon icon={chevronBackOutline} className="contact-back-icon" />
            <div className="contact-avatar-wrap">
              <img src="https://i.pravatar.cc/100?img=47" className="contact-avatar" alt="avatar" />
              <span className="contact-online-dot" />
            </div>
            <div className="contact-info">
              <span className="contact-name">Morola Makanjuola Opec</span>
              <span className="contact-status">Online</span>
            </div>
          </div>
          <IonIcon icon={ellipsisVertical} className="contact-menu-icon" />
        </div>

        {/* Messages */}
        <div className="chatroom-messages">

          {/* Incoming */}
          <div className="msg-row left">
            <div className="bubble left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phaedra suscipit fermentum mi urna dictumst sagittis nec.
              <div className="bubble-time">12:20 PM</div>
            </div>
          </div>

          {/* Outgoing text */}
          <div className="msg-row right">
            <div className="bubble right text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phaedra suscipit fermentum mi urna dictumst sagittis nec.
              <div className="bubble-time">12:20 PM</div>
            </div>
          </div>

          {/* Outgoing image */}
          <div className="msg-row right">
            <div className="bubble right image-bubble">
              <img src="https://picsum.photos/200/140?grayscale" alt="shared" className="bubble-img" />
              <div className="bubble-time">12:20 PM</div>
            </div>
          </div>

          {/* Outgoing audio */}
          <div className="msg-row right">
            <div className="bubble right audio-bubble">
              <IonIcon icon={playCircle} className="audio-play-icon" />
              <div className="audio-bar">
                <div className="audio-progress" />
                <div className="audio-dots">
                  {[...Array(18)].map((_, i) => (
                    <span key={i} className={`audio-dot ${i < 5 ? 'played' : ''}`} />
                  ))}
                </div>
              </div>
              <div className="bubble-time">12:20 PM</div>
            </div>
          </div>

        </div>

        {/* Quick chips */}
        <div className="quick-chips">
          <IonChip className="quick-chip">Hello, I am</IonChip>
          <IonChip className="quick-chip">Do you know about</IonChip>
          <IonChip className="quick-chip">Can you tell me</IonChip>
          <IonChip className="quick-chip">I've</IonChip>
        </div>

        {/* Input bar */}
        <div className="chat-input-bar">
          <IonIcon icon={happyOutline} className="chat-input-icon" />
          <IonInput placeholder="Type anything..." className="chat-input-field" />
          <IonIcon icon={attachOutline} className="chat-input-icon" />
          <IonIcon icon={micOutline} className="chat-input-icon" />
        </div>

      </IonContent>
    </IonPage>
  );
};

export default ChatRoom;
