import React, { useState } from 'react';
import { IonContent, IonPage, IonIcon } from '@ionic/react';
import { searchOutline, notifications, menuOutline, chevronBack, add } from 'ionicons/icons';
import './ParentInvited.css';

const ParentInvited: React.FC = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <IonPage>
      <IonContent fullscreen className="ion-no-padding">
        <div className="parent-invited-app">
          {/* Status Bar */}
          <div className="invited-status-bar">
            <span className="invited-time">9:41</span>
            <div className="invited-status-icons">
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
          <div className="invited-header">
            <IonIcon icon={menuOutline} className="invited-menu-icon" />
            <div className="invited-header-icons">
              <IonIcon icon={searchOutline} className="invited-header-icon" />
              <IonIcon icon={notifications} className="invited-header-icon" />
            </div>
          </div>

          {/* Page Header */}
          <div className="page-header-section">
            <div className="page-header-left">
              <IonIcon icon={chevronBack} className="page-back-icon" />
              <div className="page-title-section">
                <h1 className="page-main-title">Manage Parent</h1>
                <p className="page-main-subtitle">manage all student in your school</p>
              </div>
            </div>
          </div>

          {/* All Parent Section */}
          <div className="all-parent-header-section">
            <div className="all-parent-info">
              <h2 className="all-parent-heading">All Parent</h2>
              <p className="all-parent-text">You have 482 parents</p>
            </div>
            <button className="add-parent-fab">
              <IonIcon icon={add} className="add-fab-icon" />
            </button>
          </div>

          {/* Success Modal */}
          {showModal && (
            <div className="modal-overlay">
              <div className="success-modal">
                <h3 className="modal-title">Parent successfully Invited</h3>
                <p className="modal-text">only those you invite have access to their learner dashboard</p>
                
                <div className="modal-buttons">
                  <button className="modal-cancel-btn" onClick={() => setShowModal(false)}>
                    Cancel
                  </button>
                  <button className="modal-submit-btn" onClick={() => setShowModal(false)}>
                    Go back
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ParentInvited;
