import React from 'react';
import { IonContent, IonPage, IonIcon } from '@ionic/react';
import { searchOutline, notifications, chevronBack, locationOutline, callOutline, personOutline, mailOutline, sendOutline } from 'ionicons/icons';
import './StudentDetail.css';

const StudentDetail: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-no-padding">
        <div className="student-detail-app">
          {/* Status Bar */}
          <div className="detail-status-bar">
            <span className="detail-time">9:41</span>
            <div className="detail-status-icons">
              <svg width="18" height="12" viewBox="0 0 18 12" fill="black">
                <path d="M0 0h4v12H0V0zm7 0h4v12H7V0zm7 0h4v12h-4V0z" opacity="0.4"/>
                <path d="M14 0h4v12h-4V0z"/>
              </svg>
              <svg width="16" height="11" viewBox="0 0 16 11" fill="black">
                <path d="M8 0C3.6 0 0 2.5 0 5.5S3.6 11 8 11s8-2.5 8-5.5S12.4 0 8 0z" opacity="0.4"/>
                <path d="M8 2c2.8 0 5 1.6 5 3.5S10.8 9 8 9 3 7.4 3 5.5 5.2 2 8 2z"/>
              </svg>
              <svg width="25" height="12" viewBox="0 0 25 12" fill="black">
                <rect width="18" height="12" rx="2" opacity="0.4"/>
                <rect x="20" y="4" width="2" height="4" rx="1" opacity="0.4"/>
                <rect x="23" y="2" width="2" height="8" rx="1" opacity="0.4"/>
                <rect x="2" y="2" width="14" height="8" rx="1"/>
              </svg>
            </div>
          </div>

          {/* Header */}
          <div className="detail-header">
            <div className="detail-header-left">
              <IonIcon icon={chevronBack} className="detail-back-icon" />
              <div className="detail-title-section">
                <h1 className="detail-title">Manage Students</h1>
                <p className="detail-subtitle">manage all student in your school</p>
              </div>
            </div>
            <div className="detail-header-right">
              <IonIcon icon={searchOutline} className="detail-header-icon" />
              <IonIcon icon={notifications} className="detail-header-icon" />
            </div>
          </div>

          {/* Student Card */}
          <div className="student-info-card">
            <div className="card-background">
              <div className="bg-shape circle-shape"></div>
              <div className="bg-shape square-shape-blue"></div>
              <div className="bg-shape square-shape-yellow"></div>
            </div>
            <div className="student-avatar-large">
              <span className="avatar-text-large">KH</span>
            </div>
            <h2 className="student-name-large">Karen Hope</h2>
            <p className="student-id">Student</p>
          </div>

          {/* Contact Info Section */}
          <div className="contact-info-section">
            {/* Address */}
            <div className="info-row">
              <div className="info-icon-wrapper blue-info">
                <IonIcon icon={locationOutline} className="info-icon" />
              </div>
              <div className="info-content">
                <p className="info-label">Address:</p>
                <p className="info-value">Jakarta, Indonesia</p>
              </div>
            </div>

            {/* Phone */}
            <div className="info-row">
              <div className="info-icon-wrapper pink-info">
                <IonIcon icon={callOutline} className="info-icon" />
              </div>
              <div className="info-content">
                <p className="info-label">Phone:</p>
                <p className="info-value">+12 345 6789 9</p>
              </div>
            </div>

            {/* Parents */}
            <div className="info-row">
              <div className="info-icon-wrapper blue-info">
                <IonIcon icon={personOutline} className="info-icon" />
              </div>
              <div className="info-content">
                <p className="info-label">Parents:</p>
                <p className="info-value">Justin Hope</p>
              </div>
            </div>

            {/* Email */}
            <div className="info-row">
              <div className="info-icon-wrapper pink-info">
                <IonIcon icon={mailOutline} className="info-icon" />
              </div>
              <div className="info-content">
                <p className="info-label">Email:</p>
                <p className="info-value">Hope@email.com</p>
              </div>
            </div>
          </div>

          {/* Recent Activities Section */}
          <div className="activities-section">
            <h3 className="activities-title">Recent Activities</h3>
            <p className="activities-date">Thursday, 5th April, 2025</p>

            {/* Activity 1 */}
            <div className="activity-item">
              <div className="activity-left">
                <h4 className="activity-title">Basic Algorithm</h4>
                <div className="activity-time">
                  <IonIcon icon={callOutline} className="time-icon" />
                  <span className="time-text">March 28, 2024</span>
                </div>
                <div className="activity-time">
                  <IonIcon icon={callOutline} className="time-icon" />
                  <span className="time-text">09:00 - 11:00 AM</span>
                </div>
              </div>
              <div className="activity-avatar purple-activity-avatar">
                <span className="activity-initials">BA</span>
              </div>
            </div>

            {/* Activity 2 */}
            <div className="activity-item">
              <div className="activity-left">
                <h4 className="activity-title">Basic Art</h4>
                <div className="activity-time">
                  <IonIcon icon={callOutline} className="time-icon" />
                  <span className="time-text">March 28, 2024</span>
                </div>
                <div className="activity-time">
                  <IonIcon icon={callOutline} className="time-icon" />
                  <span className="time-text">09:00 - 11:00 AM</span>
                </div>
              </div>
              <div className="activity-avatar purple-activity-avatar">
                <span className="activity-initials">BA</span>
              </div>
            </div>
          </div>

          {/* Send Report Button */}
          <div className="report-button-section">
            <button className="send-report-btn">
              <IonIcon icon={sendOutline} className="send-icon" />
              Send report to parent
            </button>
          </div>

          {/* Bottom spacing */}
          <div style={{ height: '100px' }}></div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default StudentDetail;
