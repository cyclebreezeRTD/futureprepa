import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './CommunityPage.css';

const CommunityPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-no-padding">
        <div className="community-app">

          {/* Status Bar */}
          <div className="status-bar">
            <span className="time">9:41</span>
            <div className="status-icons">
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
                <rect x="2" y="2" width="14" height="8" rx="1"/>
              </svg>
            </div>
          </div>

          {/* Top Header */}
          <header className="top-header">
            <button className="menu-btn">
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                <path d="M0 1h20M0 7h20M0 13h20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="header-right">
              <button className="icon-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="2"/>
                  <path d="M14 14l4 4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <button className="icon-btn">
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
                  <path d="M10 2c-1.1 0-2 .5-2 2v1c-2.2 0-4 1.8-4 4v5c0 1.1-.9 2-2 2h16c-1.1 0-2-.9-2-2V9c0-2.2-1.8-4-4-4V4c0-1.5-.9-2-2-2zm-3 18c0 1.7 1.3 3 3 3s3-1.3 3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </header>

          {/* Page Title Row */}
          <div className="page-title-row">
            <div className="page-title-left">
              <button className="back-btn">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M11 14l-5-5 5-5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <div>
                <h1 className="page-title">Community</h1>
                <p className="page-subtitle">Connect with learners like you</p>
              </div>
            </div>
            <button className="add-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2v12M2 8h12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Community Segments */}
          <div className="main-content">
            <h2 className="section-heading">Community Segments</h2>

            <div className="segments-list">
              {/* WAEC/JAMB */}
              <div className="segment-card">
                <div className="segment-icon dropbox-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 3l6 4-6 4-6-4 6-4z" fill="#0061FF"/>
                    <path d="M18 3l6 4-6 4-6-4 6-4z" fill="#0061FF"/>
                    <path d="M12 11l6 4-6 4-6-4 6-4z" fill="#0061FF"/>
                    <path d="M12 11l-6 4 6 4 6-4-6-4z" fill="#0061FF" opacity="0.6"/>
                  </svg>
                </div>
                <div className="segment-info">
                  <div className="segment-top-row">
                    <h3 className="segment-name">WAEC/JAMB Students</h3>
                    <span className="member-count">5.2k Members</span>
                  </div>
                  <p className="segment-desc">Connect with fellow sec school Exam Students 🔥</p>
                </div>
                <button className="join-btn orange">Join</button>
              </div>

              {/* GMAT/GRE */}
              <div className="segment-card">
                <div className="segment-icon dropbox-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 3l6 4-6 4-6-4 6-4z" fill="#0061FF"/>
                    <path d="M18 3l6 4-6 4-6-4 6-4z" fill="#0061FF"/>
                    <path d="M12 11l6 4-6 4-6-4 6-4z" fill="#0061FF"/>
                    <path d="M12 11l-6 4 6 4 6-4-6-4z" fill="#0061FF" opacity="0.6"/>
                  </svg>
                </div>
                <div className="segment-info">
                  <div className="segment-top-row">
                    <h3 className="segment-name">GMAT/GRE Students</h3>
                    <span className="member-count">5.2k Members</span>
                  </div>
                  <p className="segment-desc">International exams preparation community for graduate school applicants</p>
                </div>
                <button className="join-btn orange">Join</button>
              </div>

              {/* ICAN */}
              <div className="segment-card">
                <div className="segment-icon dropbox-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 3l6 4-6 4-6-4 6-4z" fill="#0061FF"/>
                    <path d="M18 3l6 4-6 4-6-4 6-4z" fill="#0061FF"/>
                    <path d="M12 11l6 4-6 4-6-4 6-4z" fill="#0061FF"/>
                    <path d="M12 11l-6 4 6 4 6-4-6-4z" fill="#0061FF" opacity="0.6"/>
                  </svg>
                </div>
                <div className="segment-info">
                  <div className="segment-top-row">
                    <h3 className="segment-name">ICAN Professionals</h3>
                    <span className="member-count">5.2k Members</span>
                  </div>
                  <p className="segment-desc">Professional certification study groups for accounting and project management.</p>
                </div>
                <button className="join-btn orange">Join</button>
              </div>
            </div>

            {/* Planned Features */}
            <h2 className="section-heading planned-heading">Planned Features</h2>

            <div className="features-list">

              {/* Mentorship */}
              <div className="feature-item">
                <div className="feature-icon purple-icon">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <circle cx="8" cy="7" r="3.5" stroke="#9b59b6" strokeWidth="1.8"/>
                    <circle cx="15" cy="7" r="3.5" stroke="#9b59b6" strokeWidth="1.8"/>
                    <path d="M2 18c0-3.3 2.7-6 6-6h2M12 18c0-3.3 2.7-6 6-6h-2" stroke="#9b59b6" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="feature-info">
                  <h3 className="feature-name">Mentorship</h3>
                  <p className="feature-desc">Connect with experienced mentors</p>
                </div>
              </div>

              {/* CBT Past Questions */}
              <div className="feature-item">
                <div className="feature-icon yellow-icon">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <circle cx="11" cy="11" r="8.5" stroke="#f39c12" strokeWidth="1.8"/>
                    <path d="M8.5 9c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 1.4-1.1 2-2.5 2.5v1.5" stroke="#f39c12" strokeWidth="1.8" strokeLinecap="round"/>
                    <circle cx="11" cy="15.5" r="1" fill="#f39c12"/>
                  </svg>
                </div>
                <div className="feature-info">
                  <h3 className="feature-name">CBT Past Questions</h3>
                  <p className="feature-desc">Explore & answer questions from the past exams</p>
                </div>
              </div>

              {/* Q&A Forum */}
              <div className="feature-item">
                <div className="feature-icon green-icon">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <rect x="2" y="5" width="13" height="9" rx="2" stroke="#27ae60" strokeWidth="1.8"/>
                    <path d="M6 18l3-4h6c1.1 0 2-.9 2-2V7" stroke="#27ae60" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 9h7M6 12h4" stroke="#27ae60" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="feature-info">
                  <h3 className="feature-name">Question & Answer forum</h3>
                  <p className="feature-desc">Get answers from peers & mentors</p>
                </div>
              </div>

              {/* Study Groups */}
              <div className="feature-item">
                <div className="feature-icon blue-icon">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M4 18v-1.5C4 14.5 6.5 12 9.5 12h3c3 0 5.5 2.5 5.5 4.5V18" stroke="#3498db" strokeWidth="1.8" strokeLinecap="round"/>
                    <circle cx="11" cy="7" r="3.5" stroke="#3498db" strokeWidth="1.8"/>
                    <path d="M17 12c1.7.5 3 2 3 4v2" stroke="#3498db" strokeWidth="1.8" strokeLinecap="round"/>
                    <circle cx="17.5" cy="7" r="2.5" stroke="#3498db" strokeWidth="1.8"/>
                  </svg>
                </div>
                <div className="feature-info">
                  <h3 className="feature-name">Study groups</h3>
                  <p className="feature-desc">Join or create study groups</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default CommunityPage;
