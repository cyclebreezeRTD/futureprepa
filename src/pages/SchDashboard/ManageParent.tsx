import React from 'react';
import { IonContent, IonPage, IonIcon } from '@ionic/react';
import { searchOutline, notifications, chevronBack, add, trashOutline } from 'ionicons/icons';
import './ManageParent.css';

const ManageParent: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-no-padding">
        <div className="manage-parent-app">
          {/* Status Bar */}
          <div className="parent-status-bar">
            <span className="parent-time">9:41</span>
            <div className="parent-status-icons">
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
          <div className="parent-header">
            <div className="parent-header-left">
              <IonIcon icon={chevronBack} className="parent-back-icon" />
              <div className="parent-title-section">
                <h1 className="parent-title">Manage Parent</h1>
                <p className="parent-subtitle">manage all student in your school</p>
              </div>
            </div>
            <div className="parent-header-right">
              <IonIcon icon={searchOutline} className="parent-header-icon" />
              <IonIcon icon={notifications} className="parent-header-icon" />
            </div>
          </div>

          {/* All Parent Section */}
          <div className="all-parent-section">
            <div className="all-parent-header">
              <div className="all-parent-left">
                <h2 className="all-parent-title">All Parent</h2>
                <p className="all-parent-count">You have 482 parents</p>
              </div>
              <button className="add-parent-btn">
                <IonIcon icon={add} className="add-parent-icon" />
              </button>
            </div>

            {/* Parents List */}
            <div className="parents-list">
              {/* Parent 1 */}
              <div className="parent-item">
                <div className="parent-avatar">
                  <span className="parent-initials">BW</span>
                </div>
                <div className="parent-info">
                  <h3 className="parent-name">Bambinto William</h3>
                  <p className="parent-email">lilianan@gmail.com</p>
                </div>
                <button className="delete-btn">
                  <IonIcon icon={trashOutline} className="delete-icon" />
                </button>
              </div>

              {/* Parent 2 */}
              <div className="parent-item">
                <div className="parent-avatar">
                  <span className="parent-initials">BW</span>
                </div>
                <div className="parent-info">
                  <h3 className="parent-name">Bambinto William</h3>
                  <p className="parent-email">lilianan@gmail.com</p>
                </div>
                <button className="delete-btn">
                  <IonIcon icon={trashOutline} className="delete-icon" />
                </button>
              </div>

              {/* Parent 3 */}
              <div className="parent-item">
                <div className="parent-avatar">
                  <span className="parent-initials">BW</span>
                </div>
                <div className="parent-info">
                  <h3 className="parent-name">Bambinto William</h3>
                  <p className="parent-email">lilianan@gmail.com</p>
                </div>
                <button className="delete-btn">
                  <IonIcon icon={trashOutline} className="delete-icon" />
                </button>
              </div>

              {/* Parent 4 */}
              <div className="parent-item">
                <div className="parent-avatar">
                  <span className="parent-initials">TW</span>
                </div>
                <div className="parent-info">
                  <h3 className="parent-name">Termoche William</h3>
                  <p className="parent-email">lilianan@gmail.com</p>
                </div>
                <button className="delete-btn">
                  <IonIcon icon={trashOutline} className="delete-icon" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom spacing */}
          <div style={{ height: '100px' }}></div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ManageParent;
