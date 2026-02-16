import React from 'react';
import { IonContent, IonPage, IonIcon } from '@ionic/react';
import { searchOutline, notifications, chevronBack, add } from 'ionicons/icons';
import './ManageStudents.css';

const ManageStudents: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-no-padding">
        <div className="manage-students-app">
          {/* Status Bar */}
          <div className="manage-status-bar">
            <span className="manage-time">9:41</span>
            <div className="manage-status-icons">
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
          <div className="manage-header">
            <div className="manage-header-left">
              <IonIcon icon={chevronBack} className="manage-back-icon" />
              <div className="manage-title-section">
                <h1 className="manage-title">Manage Students</h1>
                <p className="manage-subtitle">manage all student in your school</p>
              </div>
            </div>
            <div className="manage-header-right">
              <IonIcon icon={searchOutline} className="manage-header-icon" />
              <IonIcon icon={notifications} className="manage-header-icon" />
            </div>
          </div>

          {/* Class Pills */}
          <div className="class-pills-section">
            <div className="class-pill blue-pill">All classes</div>
            <div className="class-pill red-pill">SSS 1</div>
            <div className="class-pill purple-pill">SSS 2</div>
            <div className="class-pill light-purple-pill">SSS 3</div>
          </div>

          {/* Students Grid */}
          <div className="students-grid">
            {/* Student Card 1 */}
            <div className="student-card">
              <div className="student-avatar purple-avatar">
                <span className="avatar-initials">TS</span>
              </div>
              <h3 className="student-name">Tony Soap</h3>
              <p className="student-class">James Soap</p>
              <button className="student-btn yellow-btn">SSS 2</button>
            </div>

            {/* Student Card 2 */}
            <div className="student-card">
              <div className="student-avatar purple-avatar">
                <span className="avatar-initials">TS</span>
              </div>
              <h3 className="student-name">Tony Soap</h3>
              <p className="student-class">James Soap</p>
              <button className="student-btn pink-btn">SSS 2</button>
            </div>

            {/* Student Card 3 */}
            <div className="student-card">
              <div className="student-avatar purple-avatar">
                <span className="avatar-initials">TS</span>
              </div>
              <h3 className="student-name">Tony Soap</h3>
              <p className="student-class">James Soap</p>
              <button className="student-btn yellow-btn">SSS 2</button>
            </div>

            {/* Student Card 4 */}
            <div className="student-card">
              <div className="student-avatar purple-avatar">
                <span className="avatar-initials">TS</span>
              </div>
              <h3 className="student-name">Tony Soap</h3>
              <p className="student-class">James Soap</p>
              <button className="student-btn pink-btn">SSS 2</button>
            </div>

            {/* Student Card 5 */}
            <div className="student-card">
              <div className="student-avatar purple-avatar">
                <span className="avatar-initials">TS</span>
              </div>
              <h3 className="student-name">Tony Soap</h3>
              <p className="student-class">James Soap</p>
              <button className="student-btn yellow-btn">SSS 2</button>
            </div>

            {/* Student Card 6 */}
            <div className="student-card">
              <div className="student-avatar purple-avatar">
                <span className="avatar-initials">TS</span>
              </div>
              <h3 className="student-name">Tony Soap</h3>
              <p className="student-class">James Soap</p>
              <button className="student-btn pink-btn">SSS 2</button>
            </div>
          </div>

          {/* Add New Student Button */}
          <div className="add-student-section">
            <button className="add-student-btn">
              <IonIcon icon={add} className="add-icon" />
              New Student
            </button>
          </div>

          {/* Bottom spacing for tab bar */}
          <div style={{ height: '100px' }}></div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ManageStudents;
