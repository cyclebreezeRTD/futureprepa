import React, { useState } from 'react';
import { IonContent, IonPage, IonIcon } from '@ionic/react';
import { searchOutline, notifications, menuOutline } from 'ionicons/icons';
import './AddTeacher.css';

const AddTeacher: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');

  return (
    <IonPage>
      <IonContent fullscreen className="ion-no-padding">
        <div className="add-teacher-app">
          {/* Status Bar */}
          <div className="teacher-status-bar">
            <span className="teacher-time">9:41</span>
            <div className="teacher-status-icons">
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
          <div className="teacher-header">
            <div className="teacher-header-left">
              <IonIcon icon={menuOutline} className="teacher-menu-icon" />
          
            </div>
            <div className="teacher-header-right">
              <IonIcon icon={searchOutline} className="teacher-header-icon" />
              <IonIcon icon={notifications} className="teacher-header-icon" />
            </div>
          </div>

          {/* Form Card */}
          <div className="teacher-form-card">
            
            <h2 className="form-card-title">Aaa teacher</h2>
            <p className="form-card-subtitle">Add tutor's to your school platform</p>

            {/* Full Name */}
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Vivian Ore"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            {/* Email Address */}
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-input"
                placeholder="watooneha@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-input"
                placeholder="08028755444"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* Subject */}
            <div className="form-group">
              <label className="form-label">Subject</label>
              <div className="select-wrapper">
                <select
                  className="form-select"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option value="">English Language</option>
                  <option value="mathematics">Mathematics</option>
                  <option value="physics">Physics</option>
                  <option value="chemistry">Chemistry</option>
                  <option value="biology">Biology</option>
                </select>
                <IonIcon icon={menuOutline} className="select-arrow" style={{ display: 'none' }} />
                <svg width="12" height="8" viewBox="0 0 12 8" className="select-arrow-custom" fill="none">
                  <path d="M1 1l5 5 5-5" stroke="#666" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            {/* Buttons */}
            <div className="form-buttons">
              <button className="cancel-btn">Cancel</button>
              <button className="submit-btn">Add Teacher</button>
            </div>
          </div>

          {/* Bottom spacing */}
          <div style={{ height: '100px' }}></div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AddTeacher;
