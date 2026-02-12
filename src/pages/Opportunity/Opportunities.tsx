import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonIcon,
} from '@ionic/react';
import { 
  searchOutline, 
  notifications,
  menu,
  chevronBack,
  heartOutline,
  locationOutline
} from 'ionicons/icons';
import './Opportunities.css';

const Opportunities: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border opportunities-header">
        <IonToolbar className="opportunities-toolbar">
          <div className="opportunities-header-content">
            <IonIcon icon={menu} className="menu-icon" />
            <div className="header-icons">
              <IonIcon icon={searchOutline} className="header-icon" />
              <IonIcon icon={notifications} className="header-icon" />
            </div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="opportunities-content">
        {/* Title Section */}
        <div className="opportunities-title-section">
          <div className="breadcrumb">
            <IonIcon icon={chevronBack} className="breadcrumb-icon" />
            <span className="breadcrumb-text">Opportunities</span>
          </div>
          <p className="opportunities-subtitle">Turn learning into real income</p>
        </div>

        {/* Category Pills */}
        <div className="opportunities-pills">
          <div className="opportunities-pill purple">All</div>
          <div className="opportunities-pill orange">Jobs</div>
          <div className="opportunities-pill magenta">Internships</div>
          <div className="opportunities-pill red">Gigs</div>
        </div>

        {/* Job Cards */}
        <div className="opportunities-list">
          {/* Job Card 1 */}
          <div className="job-card">
            <div className="job-card-header">
              <div className="company-logo blue-logo">
                <svg viewBox="0 0 40 40" className="logo-icon">
                  <path d="M20 5 L35 12 L35 28 L20 35 L5 28 L5 12 Z" fill="currentColor"/>
                </svg>
              </div>
              <IonIcon icon={heartOutline} className="favorite-icon" />
            </div>

            <div className="job-content">
              <div className="company-name">Dropbox</div>
              <h3 className="job-title">Research Designer</h3>
              
              <div className="job-meta">
                <div className="job-type-badge">INTERNSHIP</div>
                <div className="job-location">
                  <IonIcon icon={locationOutline} className="location-icon" />
                  <span>Lagos, Lagos</span>
                </div>
              </div>

              <div className="job-tags">
                <span className="job-tag">Figma</span>
                <span className="job-tag">Research</span>
                <span className="job-tag">Survey</span>
              </div>

              <div className="job-footer">
                <p className="job-description">
                  Highlight - Student & Recent Graduates. Deadline: 24th Jan 2025
                </p>
                <button className="view-details-btn">View Details</button>
              </div>
            </div>
          </div>

          {/* Job Card 2 */}
          <div className="job-card">
            <div className="job-card-header">
              <div className="company-logo blue-logo">
                <svg viewBox="0 0 40 40" className="logo-icon">
                  <path d="M20 5 L35 12 L35 28 L20 35 L5 28 L5 12 Z" fill="currentColor"/>
                </svg>
              </div>
              <IonIcon icon={heartOutline} className="favorite-icon" />
            </div>

            <div className="job-content">
              <div className="company-name">Dropbox</div>
              <h3 className="job-title">Research Designer</h3>
              
              <div className="job-meta">
                <div className="job-type-badge">INTERNSHIP</div>
                <div className="job-location">
                  <IonIcon icon={locationOutline} className="location-icon" />
                  <span>Lagos, Majoro</span>
                </div>
              </div>

              <div className="job-tags">
                <span className="job-tag">Figma</span>
                <span className="job-tag">Research</span>
                <span className="job-tag">Survey</span>
              </div>

              <div className="job-footer">
                <p className="job-description">
                  Highlight - Student & Recent Graduates. Deadline: 24th Jan 2025
                </p>
                <button className="view-details-btn">View Details</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom padding for tab bar */}
        <div style={{ height: '80px' }}></div>
      </IonContent>
    </IonPage>
  );
};

export default Opportunities;
