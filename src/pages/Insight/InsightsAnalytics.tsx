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
  trophyOutline,
  schoolOutline,
  ribbonOutline,
  chevronDownOutline
} from 'ionicons/icons';
import './InsightsAnalytics.css';

const InsightsAnalytics: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border insights-analytics-header">
        <IonToolbar className="insights-analytics-toolbar">
          <div className="insights-analytics-header-content">
            <IonIcon icon={menu} className="menu-icon" />
            <div className="header-icons">
              <IonIcon icon={searchOutline} className="header-icon" />
              <IonIcon icon={notifications} className="header-icon" />
            </div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="insights-analytics-content">
        {/* Title Section */}
        <div className="insights-analytics-title-section">
          <div className="breadcrumb">
            <IonIcon icon={chevronBack} className="breadcrumb-icon" />
            <span className="breadcrumb-text">Insights</span>
          </div>
          <p className="insights-analytics-subtitle">Understand how you learn and improve faster</p>
        </div>

        {/* Stats Cards */}
        <div className="analytics-stats-cards">
          <div className="analytics-stat-card purple-card">
            <IonIcon icon={trophyOutline} className="analytics-card-icon" />
            <div className="analytics-card-value">142</div>
            <div className="analytics-card-label">learning score</div>
          </div>

          <div className="analytics-stat-card blue-card">
            <IonIcon icon={schoolOutline} className="analytics-card-icon" />
            <div className="analytics-card-value">86</div>
            <div className="analytics-card-label">learning score</div>
          </div>

          <div className="analytics-stat-card pink-card">
            <IonIcon icon={ribbonOutline} className="analytics-card-icon" />
            <div className="analytics-card-value">92</div>
            <div className="analytics-card-label">IQ Score</div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="chart-section">
          <div className="chart-header">
            <h3 className="chart-title">Select Period</h3>
            <div className="period-selector">
              <span className="period-text">All</span>
              <IonIcon icon={chevronDownOutline} className="period-icon" />
            </div>
          </div>

          {/* Chart Container */}
          <div className="chart-container">
            <div className="chart-y-axis">
              <span className="y-label">1,000.00</span>
              <span className="y-label">800.00</span>
              <span className="y-label">600.00</span>
              <span className="y-label">400.00</span>
              <span className="y-label">200.00</span>
            </div>
            <div className="chart-area">
              {/* SVG Chart */}
              <svg className="chart-svg" viewBox="0 0 300 200" preserveAspectRatio="none">
                {/* Grid lines */}
                <line x1="0" y1="0" x2="300" y2="0" stroke="#f0f0f0" strokeWidth="1"/>
                <line x1="0" y1="40" x2="300" y2="40" stroke="#f0f0f0" strokeWidth="1"/>
                <line x1="0" y1="80" x2="300" y2="80" stroke="#f0f0f0" strokeWidth="1"/>
                <line x1="0" y1="120" x2="300" y2="120" stroke="#f0f0f0" strokeWidth="1"/>
                <line x1="0" y1="160" x2="300" y2="160" stroke="#f0f0f0" strokeWidth="1"/>
                <line x1="0" y1="200" x2="300" y2="200" stroke="#f0f0f0" strokeWidth="1"/>
                
                {/* Area fills */}
                <defs>
                  <linearGradient id="areaGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#667eea" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#667eea" stopOpacity="0"/>
                  </linearGradient>
                  <linearGradient id="areaGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#4facfe" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#4facfe" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                
                {/* Area 1 - Purple */}
                <path d="M 0 180 L 25 170 L 50 160 L 75 150 L 100 145 L 125 140 L 150 130 L 175 125 L 200 120 L 225 115 L 250 110 L 275 105 L 300 100 L 300 200 L 0 200 Z" 
                      fill="url(#areaGradient1)"/>
                <path d="M 0 180 L 25 170 L 50 160 L 75 150 L 100 145 L 125 140 L 150 130 L 175 125 L 200 120 L 225 115 L 250 110 L 275 105 L 300 100" 
                      stroke="#667eea" strokeWidth="2" fill="none"/>
                
                {/* Area 2 - Blue */}
                <path d="M 0 190 L 25 185 L 50 175 L 75 165 L 100 160 L 125 155 L 150 145 L 175 140 L 200 135 L 225 130 L 250 125 L 275 120 L 300 115 L 300 200 L 0 200 Z" 
                      fill="url(#areaGradient2)"/>
                <path d="M 0 190 L 25 185 L 50 175 L 75 165 L 100 160 L 125 155 L 150 145 L 175 140 L 200 135 L 225 130 L 250 125 L 275 120 L 300 115" 
                      stroke="#4facfe" strokeWidth="2" fill="none"/>
              </svg>
              
              {/* X-axis labels */}
              <div className="chart-x-axis">
                <span className="x-label">1</span>
                <span className="x-label">2</span>
                <span className="x-label">3</span>
                <span className="x-label">4</span>
                <span className="x-label">5</span>
                <span className="x-label">6</span>
                <span className="x-label">7</span>
                <span className="x-label">8</span>
                <span className="x-label">9</span>
                <span className="x-label">10</span>
                <span className="x-label">11</span>
                <span className="x-label">12</span>
              </div>
            </div>
          </div>
        </div>

        {/* Areas to Improve Section */}
        <div className="improve-section">
          <h3 className="improve-title">Areas to improve</h3>

          <div className="improve-item">
            <div className="improve-label">Mathematics</div>
            <div className="improve-bar-container">
              <div className="improve-bar pink-bar" style={{ width: '95%' }}>
                <span className="improve-percentage">95%</span>
              </div>
            </div>
          </div>

          <div className="improve-item">
            <div className="improve-label">95%</div>
            <div className="improve-bar-container">
              <div className="improve-bar blue-bar" style={{ width: '95%' }}>
                <span className="improve-percentage">95%</span>
              </div>
            </div>
          </div>

          <div className="improve-item">
            <div className="improve-label">Mathematics</div>
            <div className="improve-bar-container">
              <div className="improve-bar pink-bar" style={{ width: '95%' }}>
                <span className="improve-percentage">95%</span>
              </div>
            </div>
          </div>

          <div className="improve-item">
            <div className="improve-label">Mathematics</div>
            <div className="improve-bar-container">
              <div className="improve-bar pink-bar" style={{ width: '95%' }}>
                <span className="improve-percentage">95%</span>
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

export default InsightsAnalytics;
