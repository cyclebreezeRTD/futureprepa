import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './JobDetailPage.css';

const JobDetailPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-no-padding">
        <div className="job-detail-app">
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
                <rect x="20" y="4" width="2" height="4" rx="1" opacity="0.4"/>
                <rect x="23" y="2" width="2" height="8" rx="1" opacity="0.4"/>
                <rect x="2" y="2" width="14" height="8" rx="1"/>
              </svg>
            </div>
          </div>

          {/* Header */}
          <header className="detail-header">
            <button className="menu-btn">
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                <path d="M0 1h20M0 7h20M0 13h20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="header-actions">
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

          {/* Back Button */}
          <div className="back-section">
            <button className="back-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 16l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Job Header Card */}
          <div className="job-header-card">
            <div className="company-logo">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="white"/>
                <path d="M16 8l8 4v8l-8 4-8-4v-8l8-4z" fill="#6366f1"/>
              </svg>
            </div>
            <div className="job-header-info">
              <h1 className="job-title-main">UX designer, Search</h1>
              <p className="job-location">Bengaluru, Karnataka • Full Time</p>
            </div>
            <button className="favorite-btn-header">
              <svg width="24" height="22" viewBox="0 0 24 22" fill="none">
                <path d="M12 20l-1.5-1.3C5.4 14.36 2 11.28 2 7.5 2 4.42 4.42 2 7.5 2c1.74 0 3.41.81 4.5 2.09C13.09 2.81 14.76 2 16.5 2 19.58 2 22 4.42 22 7.5c0 3.78-3.4 6.86-8.5 11.2L12 20z" stroke="white" strokeWidth="1.5"/>
              </svg>
            </button>
          </div>

          {/* Info Grid */}
          <div className="info-grid">
            <div className="info-item">
              <p className="info-label">APPLY BEFORE</p>
              <p className="info-value">20 July</p>
            </div>
            <div className="info-item">
              <p className="info-label">JOB POSTING</p>
              <p className="info-value">Continuous</p>
            </div>
            <div className="info-item">
              <p className="info-label">SALARY RANGES</p>
              <p className="info-value">26 LPA - 32LPA (yearly)</p>
            </div>
            <div className="info-item">
              <p className="info-label">JOB LOCATION</p>
              <p className="info-value">Work From Home</p>
              <p className="info-subvalue">100% Work From Home</p>
            </div>
          </div>

          {/* Job Description */}
          <div className="content-section">
            <h2 className="section-title">Job Description</h2>
            <p className="section-text">
              It will be part of Secom, working on designing and communicating the guidelines around Search and the 
              great host (filled chairs (AIR)), in harm that is good and that leads to better Search engagement.
            </p>
            <button className="read-more-btn">Read More</button>
          </div>

          {/* Skills */}
          <div className="content-section">
            <h2 className="section-title">Skills 💡</h2>
            <div className="skills-list">
              <p className="section-text">
                • People of experience in designing for emerging platform (eg . Watch, Car
              </p>
              <p className="section-text">
                • Strong core mobile interaction design skills to anchor common guidelines, design system, and 
                nomenclature.
              </p>
              <p className="section-text">
                • SGCQ recognized, detailed-focused, and eager to learn and share findings
              </p>
              <p className="section-text">
                • Strong vehicle, written, and visual.
              </p>
            </div>
          </div>

          {/* Responsibilities */}
          <div className="content-section">
            <h2 className="section-title">Responsibilities</h2>
            <p className="section-text">
              The person must have basic skills, ability to phantom.
            </p>
          </div>

          {/* Benefits */}
          <div className="content-section">
            <h2 className="section-title">Benefits 🎁</h2>
            <div className="benefits-list">
              <p className="benefit-item">• Monthly stipend of ₹60,000</p>
              <p className="benefit-item">• Flexible work hours</p>
              <p className="benefit-item">• Health and dental</p>
              <p className="benefit-item">• Inclusive for fast time employment</p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="footer-note">
            <p className="note-text">
              Fill easy for the job, send your Application to 
              <span className="email-link"> mancritment@agroconsulting.com</span>, taking the link of you as Subject of 
              the Email
            </p>
          </div>

          {/* Apply Button */}
          <div className="apply-section">
            <button className="apply-btn">Apply</button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default JobDetailPage;
