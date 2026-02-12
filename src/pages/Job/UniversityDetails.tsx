import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './UniversityDetails.css';

const UniversityDetails: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-no-padding">
        <div className="university-detail-app">
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
          <header className="uni-detail-header">
            <button className="back-btn-uni">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 16l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </header>

          {/* University Title Section */}
          <div className="uni-title-section">
            <h1 className="uni-title">Ladoke Akintola University of Technology</h1>
            <p className="uni-location">HTS - Lautech Nigeria</p>
          </div>

          {/* Info Grid */}
          <div className="uni-info-grid">
            <div className="uni-info-item">
              <p className="uni-info-label">APPLY BEFORE</p>
              <p className="uni-info-value">12 July, 2025</p>
            </div>
            <div className="uni-info-item">
              <p className="uni-info-label">JOB POSTING</p>
              <p className="uni-info-value">Continuous</p>
            </div>
            <div className="uni-info-item">
              <p className="uni-info-label">SALARY RANGES</p>
              <p className="uni-info-value">₦400k - ₦800k (yearly)</p>
            </div>
            <div className="uni-info-item">
              <p className="uni-info-label">LOCATION</p>
              <p className="uni-info-value">Osogbo, Osun, Nigeria</p>
            </div>
          </div>

          {/* Program Tags */}
          <div className="program-tags-section">
            <p className="tags-label">Available Programs</p>
            <div className="program-tags">
              <span className="program-tag purple">UNDERGRADUATE</span>
              <span className="program-tag pink">MASTER & DEGREE</span>
            </div>
            <div className="program-tags">
              <span className="program-tag blue">DIPLOMA</span>
            </div>
          </div>

          {/* About Section */}
          <div className="uni-content-section">
            <h2 className="uni-section-title">About the program</h2>
            <p className="uni-section-text">
              At LS Lautech/Ilo polytric, LAUTECH offers executive benefits to our students providing immaculate education at much for cost that makes higher education more accessible.
            </p>
            <ul className="uni-list">
              <li className="uni-list-item">
                <span className="bullet">•</span>
                <span>Monthly stipend of ₦60,000</span>
              </li>
              <li className="uni-list-item">
                <span className="bullet">•</span>
                <span>Flexible work hours</span>
              </li>
              <li className="uni-list-item">
                <span className="bullet">•</span>
                <span>Health and dental</span>
              </li>
              <li className="uni-list-item">
                <span className="bullet">•</span>
                <span>Potential for full-time employment</span>
              </li>
            </ul>
            <button className="read-more-btn-uni">Read More</button>
          </div>

          {/* Footer Note */}
          <div className="uni-footer-note">
            <p className="uni-note-text">
              To apply for the job, send your Application to 
              <span className="uni-email-link"> recruitment@lautech.edu.ng</span>, taking the link of you as Subject of the Email
            </p>
          </div>

          {/* Apply Button */}
          <div className="uni-apply-section">
            <button className="uni-apply-btn">Apply</button>
          </div>

          {/* Tab Bar Spacer */}
          <div style={{ height: '80px' }}></div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default UniversityDetails;
