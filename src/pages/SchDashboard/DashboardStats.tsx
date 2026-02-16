import React from 'react';
import { IonContent, IonPage, IonIcon } from '@ionic/react';
import { menuOutline, searchOutline, notifications } from 'ionicons/icons';
import './DashboardStats.css';

const DashboardStats: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-no-padding">
        <div className="simple-dashboard">
          {/* Header */}
          <div className="simple-header">
            <IonIcon icon={menuOutline} className="simple-menu" />
            <div className="simple-header-right">
              <IonIcon icon={searchOutline} className="simple-icon" />
              <IonIcon icon={notifications} className="simple-icon" />
            </div>
          </div>

          {/* Welcome Section */}
          <div className="simple-welcome">
            <img 
              src="https://i.pravatar.cc/80?img=12" 
              alt="User"
              className="simple-avatar"
            />
            <div className="simple-welcome-text">
              <p className="simple-welcome-back">Welcome Back,</p>
              <h2 className="simple-school-name">Unity Secondary school</h2>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="simple-cards">
            {/* Active Learners - Pink */}
            <div className="simple-card pink-card">
              <div className="simple-card-icon pink-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="#ff6b9d">
                  <path d="M20 8l-8 6v10l8 6 8-6V14l-8-6z"/>
                </svg>
              </div>
              <div className="simple-card-text">
                <p className="simple-card-label">Actibe<br/>Learners</p>
                <h3 className="simple-card-value">6000</h3>
              </div>
            </div>

            {/* Total Students - Purple */}
            <div className="simple-card purple-card">
              <div className="simple-card-icon purple-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="#667eea">
                  <path d="M20 10c-3 0-5 2-5 5v3h10v-3c0-3-2-5-5-5zm-6 10v8h12v-8H14z"/>
                </svg>
              </div>
              <div className="simple-card-text">
                <p className="simple-card-label">Total<br/>Students</p>
                <h3 className="simple-card-value">25000</h3>
              </div>
            </div>

            {/* Total Teachers - Yellow */}
            <div className="simple-card yellow-card">
              <div className="simple-card-icon yellow-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="#fbbf24">
                  <path d="M10 14h20v16H10V14zm2-6h16v4H12V8z"/>
                </svg>
              </div>
              <div className="simple-card-text">
                <p className="simple-card-label">Total<br/>Teachers</p>
                <h3 className="simple-card-value">3500</h3>
              </div>
            </div>

            {/* Parents - Red */}
            <div className="simple-card red-card">
              <div className="simple-card-icon red-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="#ff6b6b">
                  <circle cx="15" cy="18" r="3"/>
                  <circle cx="25" cy="18" r="3"/>
                  <path d="M15 23c-2 0-4 1-4 3v2h8v-2c0-2-2-3-4-3zM25 23c-2 0-4 1-4 3v2h8v-2c0-2-2-3-4-3z"/>
                </svg>
              </div>
              <div className="simple-card-text">
                <p className="simple-card-label">Parents</p>
                <h3 className="simple-card-value">11020</h3>
              </div>
            </div>
          </div>

          {/* Class Performance Section - No extra margin */}
          <div className="class-performance-section">
            <h2 className="performance-title">Class Performance</h2>
            
            <p className="performance-subtitle">All the data in percentage (%)</p>
            
            <div className="performance-legend">
              <div className="legend-item">
                <span className="legend-dot purple-dot"></span>
                <span className="legend-label">SSS 1</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot green-dot"></span>
                <span className="legend-label">SSS 2</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot yellow-dot"></span>
                <span className="legend-label">SSS 3</span>
              </div>
            </div>
            
            <div className="performance-chart">
              <div className="chart-column">
                <span className="bar-value">100</span>
                <div className="bar-container">
                  <div className="bar purple-bar" style={{ height: '100%' }}></div>
                </div>
                <span className="bar-label">Performance</span>
              </div>
              
              <div className="chart-column">
                <span className="bar-value">75</span>
                <div className="bar-container">
                  <div className="bar green-bar" style={{ height: '75%' }}></div>
                </div>
                <span className="bar-label">Performance</span>
              </div>
              
              <div className="chart-column">
                <span className="bar-value">23</span>
                <div className="bar-container">
                  <div className="bar yellow-bar" style={{ height: '23%' }}></div>
                </div>
                <span className="bar-label">Performance</span>
              </div>
            </div>
          </div>

          {/* Top Performers Section */}
          <div className="top-performers-section">
            <div className="performers-header">
              <h2 className="section-heading">Top Performers</h2>
              <button className="view-all-btn">
                2024 - 2025
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M4 9l3-3-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <div className="performers-cards">
              {/* 1st - Green - Jesse Cooper */}
              <div className="performer-card green-performer">
                <img 
                  src="https://i.pravatar.cc/80?img=1" 
                  alt="Student"
                  className="performer-avatar"
                />
                <h3 className="performer-name">Jesse Cooper</h3>
                <p className="performer-score">99.99%</p>
                <span className="performer-rank">1st</span>
              </div>

              {/* 2nd - Purple - Eleanor Pena */}
              <div className="performer-card purple-performer">
                <img 
                  src="https://i.pravatar.cc/80?img=5" 
                  alt="Student"
                  className="performer-avatar"
                />
                <h3 className="performer-name">Eleanor Pena</h3>
                <p className="performer-score">99.76%</p>
                <span className="performer-rank">2nd</span>
              </div>

              {/* 3rd - Orange/Yellow */}
              <div className="performer-card orange-performer">
                <img 
                  src="https://i.pravatar.cc/80?img=8" 
                  alt="Student"
                  className="performer-avatar"
                />
                <h3 className="performer-name">Student 3</h3>
                <p className="performer-score">98.50%</p>
                <span className="performer-rank">3rd</span>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="quick-links-section">
            <h2 className="section-heading">Quick Links</h2>

            <div className="quick-links-grid">
              <button className="quick-link-btn purple-btn">Manage Student</button>
              <button className="quick-link-btn orange-btn">Manage Teachers</button>
              <button className="quick-link-btn blue-btn">View Parent</button>
              <button className="quick-link-btn red-btn">Add student</button>
            </div>
          </div>

          {/* Bottom spacing for tab bar */}
          <div style={{ height: '100px' }}></div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default DashboardStats;
