import React, { useRef } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './AskQuestionPage.css';

const AskQuestionPage: React.FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <IonPage>
      <IonContent fullscreen className="ion-no-padding">
        <div className="ask-app">

          {/* Status Bar */}
          <div className="status-bar">
            <span className="time">9:41</span>
            <div className="status-icons">
              <svg width="18" height="12" viewBox="0 0 18 12" fill="#1a1a1a">
                <path d="M0 0h4v12H0V0zm7 0h4v12H7V0zm7 0h4v12h-4V0z" opacity="0.3"/>
                <path d="M0 0h4v12H0V0z"/>
              </svg>
              <svg width="16" height="11" viewBox="0 0 16 11" fill="#1a1a1a">
                <path d="M8 0C3.6 0 0 2.5 0 5.5S3.6 11 8 11s8-2.5 8-5.5S12.4 0 8 0z" opacity="0.3"/>
                <path d="M8 2c2.8 0 5 1.6 5 3.5S10.8 9 8 9 3 7.4 3 5.5 5.2 2 8 2z"/>
              </svg>
              <svg width="25" height="12" viewBox="0 0 25 12" fill="#1a1a1a">
                <rect width="22" height="12" rx="2" opacity="0.25"/>
                <rect x="23" y="4" width="2" height="4" rx="1" opacity="0.4"/>
                <rect x="1" y="1" width="18" height="10" rx="1.5" fill="#1a1a1a"/>
              </svg>
            </div>
          </div>

          {/* Header */}
          <header className="ask-header">
            <button className="close-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 5l10 10M15 5L5 15" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <h1 className="ask-title">Ask question</h1>
            <button className="post-btn">Post</button>
          </header>

          {/* User + Audience Row */}
          <div className="user-row">
            {/* Avatar with play icon overlay */}
            <div className="avatar-wrap">
              <img
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80"
                alt="User"
                className="user-avatar"
              />
              <div className="play-badge">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M2 1.5l4.5 2.5L2 6.5V1.5z" fill="white"/>
                </svg>
              </div>
            </div>

            {/* Audience Selector */}
            <button className="audience-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7.5" stroke="#555" strokeWidth="1"/>
                <path d="M3 8c0-2.2 0-3 1-4M13 8c0-2.2 0-3-1-4M5 13.5c.5-1.5 1.5-2.5 3-2.5s2.5 1 3 2.5M8 1v2M8 13v2M5.5 2.5c.5 1 .8 2 .8 3.5s-.3 2.5-.8 3.5M10.5 2.5c-.5 1-.8 2-.8 3.5s.3 2.5.8 3.5" stroke="#555" strokeWidth="1" strokeLinecap="round"/>
              </svg>
              <span>Everyone</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5l3 3 3-3" stroke="#555" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Text Input Area */}
          <div className="input-area">
            <textarea
              ref={textareaRef}
              className="question-input"
              placeholder="What do you wish to know?"
              rows={8}
            />
          </div>

          {/* Divider */}
          <div className="mid-divider"/>

          {/* Action Items */}
          <div className="action-list">

            <button className="action-item">
              <div className="action-icon-wrap pink-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 13V5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2z" stroke="#e91e8c" strokeWidth="1.5"/>
                  <path d="M6 7h6M6 10h4" stroke="#e91e8c" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="action-label">Format text</span>
            </button>

            <button className="action-item">
              <div className="action-icon-wrap orange-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2L7 9H2l4 3-1.5 5L9 14l4.5 3L12 12l4-3h-5L9 2z" stroke="#f97316" strokeWidth="1.4" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="action-label">Translate text</span>
            </button>

            <button className="action-item">
              <div className="action-icon-wrap blue-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="2" width="14" height="14" rx="3" stroke="#3b82f6" strokeWidth="1.5"/>
                  <path d="M9 6v6M6 9h6" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="action-label">Add a photo/video</span>
            </button>

            <button className="action-item">
              <div className="action-icon-wrap green-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 3C6 3 3 5.5 3 9s3 6 6 6 6-2.5 6-6-3-6-6-6z" stroke="#22c55e" strokeWidth="1.5"/>
                  <path d="M7 9l2 2 4-4" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="action-label">Tag Interest</span>
            </button>

            <button className="action-item">
              <div className="action-icon-wrap purple-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="7" cy="6" r="3" stroke="#8b5cf6" strokeWidth="1.5"/>
                  <circle cx="12" cy="6" r="3" stroke="#8b5cf6" strokeWidth="1.5"/>
                  <path d="M2 15c0-2.8 2.2-5 5-5h4c2.8 0 5 2.2 5 5" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="action-label">Tag people</span>
            </button>

            <button className="action-item">
              <div className="action-icon-wrap teal-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2C6 2 3 4.7 3 8c0 4.5 6 8 6 8s6-3.5 6-8c0-3.3-3-6-6-6z" stroke="#14b8a6" strokeWidth="1.5"/>
                  <circle cx="9" cy="8" r="2" stroke="#14b8a6" strokeWidth="1.5"/>
                </svg>
              </div>
              <span className="action-label">Add location</span>
            </button>

          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default AskQuestionPage;
