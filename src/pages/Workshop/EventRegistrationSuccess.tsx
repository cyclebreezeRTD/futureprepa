import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonIcon,
  IonButton,
} from '@ionic/react';
import {
  menu,
  searchOutline,
  notificationsOutline,
} from 'ionicons/icons';
import './EventRegistrationSuccess.css';

const EventRegistrationSuccess: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-no-padding">
        <div className="success-app">
          {/* Status Bar */}
          <div className="success-status-bar">
            <span className="success-time">9:41</span>
            <div className="success-status-icons">
              <svg width="18" height="12" viewBox="0 0 18 12" fill="white">
                <path d="M0 0h4v12H0V0zm7 0h4v12H7V0zm7 0h4v12h-4V0z" opacity="0.4"/>
                <path d="M0 0h4v12H0V0z"/>
              </svg>
              <svg width="16" height="11" viewBox="0 0 16 11" fill="white">
                <path d="M8 0C3.6 0 0 2.5 0 5.5S3.6 11 8 11s8-2.5 8-5.5S12.4 0 8 0z" opacity="0.4"/>
                <path d="M8 2c2.8 0 5 1.6 5 3.5S10.8 9 8 9 3 7.4 3 5.5 5.2 2 8 2z"/>
              </svg>
              <svg width="25" height="12" viewBox="0 0 25 12" fill="white">
                <rect width="18" height="12" rx="2" opacity="0.4"/>
                <rect x="20" y="4" width="2" height="4" rx="1" opacity="0.4"/>
                <rect x="23" y="2" width="2" height="8" rx="1" opacity="0.4"/>
                <rect x="2" y="2" width="14" height="8" rx="1"/>
              </svg>
            </div>
          </div>

          {/* Header */}
          <header className="success-header">
            <button className="success-menu-btn">
              <IonIcon icon={menu} className="menu-icon-success" />
            </button>
            <div className="success-header-title-section">
              <h1 className="success-page-title">Event Ticket</h1>
            </div>
            <div className="success-header-actions">
              <IonIcon icon={searchOutline} className="success-action-icon" />
              <IonIcon icon={notificationsOutline} className="success-action-icon" />
            </div>
          </header>

          {/* Main Content Card */}
          <div className="success-card">
            <h2 className="success-card-title">Event Details</h2>

            {/* Confetti Container */}
            <div className="confetti-container">
              {/* Confetti pieces */}
              <div className="confetti confetti-1"></div>
              <div className="confetti confetti-2"></div>
              <div className="confetti confetti-3"></div>
              <div className="confetti confetti-4"></div>
              <div className="confetti confetti-5"></div>
              <div className="confetti confetti-6"></div>
              <div className="confetti confetti-7"></div>
              <div className="confetti confetti-8"></div>
              <div className="confetti confetti-9"></div>
              <div className="confetti confetti-10"></div>
              <div className="confetti confetti-11"></div>
              <div className="confetti confetti-12"></div>
              <div className="confetti confetti-13"></div>
              <div className="confetti confetti-14"></div>
              <div className="confetti confetti-15"></div>
              <div className="confetti confetti-16"></div>
              <div className="confetti confetti-17"></div>
              <div className="confetti confetti-18"></div>
              <div className="confetti confetti-19"></div>
              <div className="confetti confetti-20"></div>

              {/* Trophy Icon */}
              <div className="trophy-wrapper">
                <div className="trophy-icon">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    {/* Trophy cup */}
                    <path d="M15 8h30v20c0 8.284-6.716 15-15 15s-15-6.716-15-15V8z" fill="#5B4DFF"/>
                    {/* Trophy base */}
                    <rect x="22" y="38" width="16" height="6" rx="1" fill="#5B4DFF"/>
                    <rect x="18" y="44" width="24" height="4" rx="2" fill="#5B4DFF"/>
                    {/* Trophy handles */}
                    <path d="M10 10h5v8c0 2.761-2.239 5-5 5V10z" fill="#7C6FFF"/>
                    <path d="M50 10h-5v8c0 2.761 2.239 5 5 5V10z" fill="#7C6FFF"/>
                    {/* Medal circle */}
                    <circle cx="45" cy="18" r="7" fill="#FFD700"/>
                    <circle cx="45" cy="18" r="5" fill="#FFA500"/>
                    <text x="45" y="22" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">1</text>
                  </svg>
                </div>
              </div>

              {/* Stars decorations */}
              <div className="star star-1">⭐</div>
              <div className="star star-2">⭐</div>
              <div className="star star-3">⭐</div>
              <div className="star star-4">⭐</div>
            </div>

            {/* Success Message */}
            <div className="success-message-box">
              <h3 className="success-title">Event Registration</h3>
              <h3 className="success-subtitle">Successful!</h3>
            </div>

            {/* Action Buttons */}
            <div className="success-actions">
              <button className="btn-primary">Return to Available Event</button>
              <div className="terms-notice">
                <p className="terms-notice-text">
                  By clicking "Reserve Now" you agree to the{' '}
                  <span className="terms-notice-link">Terms of Use</span> and{' '}
                  <span className="terms-notice-link">Privacy Policy</span>
                </p>
              </div>
              <button className="btn-secondary">Check Registrant</button>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default EventRegistrationSuccess;
