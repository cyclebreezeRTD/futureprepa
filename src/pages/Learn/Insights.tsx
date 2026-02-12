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
  statsChart,
  book,
  school,
  calculator
} from 'ionicons/icons';
import './Insights.css';

const Insights: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border insights-header">
        <IonToolbar className="insights-toolbar">
          <div className="insights-header-content">
            <IonIcon icon={menu} className="menu-icon" />
            <div className="header-icons">
              <IonIcon icon={searchOutline} className="header-icon" />
              <IonIcon icon={notifications} className="header-icon" />
            </div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="insights-content">
        {/* Title Section */}
        <div className="insights-title-section">
          <h1 className="insights-title">Analytics</h1>
          <p className="insights-subtitle">West African Examination Council</p>
        </div>

        {/* Category Pills */}
        <div className="insights-category-pills">
          <div className="insights-pill purple">Overview</div>
          <div className="insights-pill orange">Practice</div>
          <div className="insights-pill magenta">Ai</div>
          <div className="insights-pill blue">Learn</div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card-small purple">
            <IonIcon icon={statsChart} className="stat-card-icon" />
            <div className="stat-card-info">
              <div className="stat-card-value">1H</div>
              <div className="stat-card-label">Screen Time</div>
            </div>
          </div>

          <div className="stat-card-small pink">
            <IonIcon icon={book} className="stat-card-icon" />
            <div className="stat-card-info">
              <div className="stat-card-value">02</div>
              <div className="stat-card-label">Lessons</div>
            </div>
          </div>
        </div>

        {/* Performance Section */}
        <div className="performance-section">
          <h3 className="section-heading">Performance by Subject</h3>

          <div className="subject-performance-card purple-gradient">
            <div className="subject-header">
              <IonIcon icon={school} className="subject-icon" />
              <span className="subject-name">English language</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '65%' }}></div>
            </div>
            <div className="percentage">65%</div>
          </div>

          <div className="subject-performance-card blue-gradient">
            <div className="subject-header">
              <IonIcon icon={calculator} className="subject-icon" />
              <span className="subject-name">MATHEMATICS</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '89%' }}></div>
            </div>
            <div className="percentage">89%</div>
          </div>

          <div className="subject-performance-card pink-gradient">
            <div className="subject-header">
              <IonIcon icon={school} className="subject-icon" />
              <span className="subject-name">Geography</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '86%' }}></div>
            </div>
            <div className="percentage">86%</div>
          </div>
        </div>

        {/* Bottom padding for tab bar */}
        <div style={{ height: '80px' }}></div>
      </IonContent>
    </IonPage>
  );
};

export default Insights;
