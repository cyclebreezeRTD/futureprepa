import React, { useState } from 'react';
import { IonContent, IonPage, IonIcon } from '@ionic/react';
import { searchOutline, notifications, menuOutline, chevronDownOutline } from 'ionicons/icons';
import './InviteParent.css';

const InviteParent: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [learnerName, setLearnerName] = useState('');
  const [classLevel, setClassLevel] = useState('');

  return (
    <IonPage>
      <IonContent fullscreen className="ion-no-padding">
        <div className="invite-parent-app">
          {/* Status Bar */}
          <div className="invite-status-bar">
            <span className="invite-time">9:41</span>
            <div className="invite-status-icons">
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
          <div className="invite-header">
            <IonIcon icon={menuOutline} className="invite-menu-icon" />
            <div className="invite-header-icons">
              <IonIcon icon={searchOutline} className="invite-header-icon" />
              <IonIcon icon={notifications} className="invite-header-icon" />
            </div>
          </div>

          {/* Title Section */}
          <div className="invite-title-section">
            <h1 className="invite-page-title">Manage Parent</h1>
            <p className="invite-page-subtitle">manage all student in your school</p>
          </div>

          {/* Form Card */}
          <div className="invite-form-card">
            {/* Pink accent bar */}
            <div className="form-accent-bar"></div>

            <h2 className="invite-form-title">Invite Parent</h2>
            <p className="invite-form-subtitle">only those you invite have access to their learner dashboard</p>

            {/* Full Name */}
            <div className="invite-form-group">
              <label className="invite-form-label">Full Name</label>
              <input
                type="text"
                className="invite-form-input"
                placeholder="Vivian Ore"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            {/* Email Address */}
            <div className="invite-form-group">
              <label className="invite-form-label">Email Address</label>
              <input
                type="email"
                className="invite-form-input"
                placeholder="vivian@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Phone Number */}
            <div className="invite-form-group">
              <label className="invite-form-label">Phone Number</label>
              <input
                type="tel"
                className="invite-form-input"
                placeholder="08028755444"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* Learner Name */}
            <div className="invite-form-group">
              <label className="invite-form-label">Learner Name</label>
              <input
                type="text"
                className="invite-form-input"
                placeholder="08028755444"
                value={learnerName}
                onChange={(e) => setLearnerName(e.target.value)}
              />
            </div>

            {/* Class */}
            <div className="invite-form-group">
              <label className="invite-form-label">Class</label>
              <div className="invite-select-wrapper">
                <select
                  className="invite-form-select"
                  value={classLevel}
                  onChange={(e) => setClassLevel(e.target.value)}
                >
                  <option value="">Jss 1</option>
                  <option value="jss2">Jss 2</option>
                  <option value="jss3">Jss 3</option>
                  <option value="sss1">SSS 1</option>
                  <option value="sss2">SSS 2</option>
                  <option value="sss3">SSS 3</option>
                </select>
                <svg width="12" height="8" viewBox="0 0 12 8" className="invite-select-arrow" fill="none">
                  <path d="M1 1l5 5 5-5" stroke="#666" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            {/* Buttons */}
            <div className="invite-form-buttons">
              <button className="invite-cancel-btn">Cancel</button>
              <button className="invite-submit-btn">Invite Student</button>
            </div>
          </div>

          {/* Bottom spacing */}
          <div style={{ height: '100px' }}></div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default InviteParent;
