import React from 'react';
import {
  IonContent,
  IonPage,
  IonIcon,
} from '@ionic/react';
import { searchOutline, notificationsOutline, flameOutline, informationCircleOutline, timeOutline } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage style={{ background: '#5bc8f5' }}>
      <IonContent 
        fullscreen 
        className="home-content" 
        scrollY={true}
        style={{ '--background': '#5bc8f5', '--padding-start': '0', '--padding-end': '0' }}
      >

        {/* ===== HEADER ===== */}
        <div className="home-header">
          <div className="header-top-row">
            <div className="hamburger-menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="header-actions">
              <IonIcon icon={searchOutline} className="header-icon" />
              <IonIcon icon={notificationsOutline} className="header-icon" />
            </div>
          </div>

          <div className="user-greeting">
            <div className="avatar">
              <img src="https://i.pravatar.cc/100?img=11" alt="User avatar" />
            </div>
            <div className="greeting-text">
              <p className="greeting-label">Welcome Back,</p>
              <h2 className="user-name">Lautaro Martinez</h2>
            </div>
          </div>
        </div>

        {/* ===== BODY ===== */}
        <div className="home-body">

          {/* Today's Focus */}
          <div className="section-container">
            <div className="section-header">
              <div className="section-title-row">
                <span className="focus-emoji">🖥️</span>
                <h3 className="section-title2">Today's Focus</h3>
              </div>
              <button className="exam-badge">Exam Readiness : 50%</button>
            </div>

            <div className="focus-card">
              <div className="focus-card-left">
                <div className="focus-number-row">
                  <span className="focus-number">300</span>
                  <span className="focus-points-label">Points</span>
                </div>
                <p className="focus-subtitle">
                  Cross 500 within the week to<br />get a free One on One Class.
                </p>
              </div>
              <button className="take-test-btn">Take test now</button>
            </div>
          </div>

          {/* 4 Pending Tests */}
          <div className="section-container">
            <div className="section-header">
              <div className="section-title-row">
                <h3 className="section-title2">4 Pending tests</h3>
                <IonIcon icon={informationCircleOutline} className="info-icon" style={{color: "red"}} />
              </div>
            </div>

            <div className="tests-grid">
              {[
                { subject: 'Law of Motion', category: 'Physics',   color: '#8b5cf6', time: '1d:10Hr' },
                { subject: 'Law of Motion', category: 'Chemistry', color: '#f97316', time: '1d:10Hr' },
                { subject: 'Law of Motion', category: 'Maths',     color: '#3b82f6', time: '1d:10Hr' },
                { subject: 'Law of Motion', category: 'Physics',   color: '#8b5cf6', time: '1d:10Hr' },
              ].map((test, i) => (
                <div key={i} className="test-card">
                  <p className="test-subject">{test.subject}</p>
                  <div className="test-meta">
                    <span className="test-category" style={{ color: test.color }}>{test.category}</span>
                    <div className="test-time-row">
                      <IonIcon icon={timeOutline} className="time-icon" />
                      <span className="test-time">{test.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* English Language WAEC */}
          <div className="section-container">
            <div className="subject-card">
              <div className="subject-card-inner">
                <div className="subject-img-wrapper">
                  <img src="https://via.placeholder.com/80x60" alt="English" className="subject-img" />
                </div>
                <div className="subject-details">
                  <h4 className="subject-name">English Language WAEC</h4>
                  <p className="subject-lessons">21 of 50 Lessons</p>
                  <div className="progress-bar-wrapper">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="subject-card-footer">
                <span className="continue-label">Continue Lesson</span>
                <span className="completed-label">50% completed</span>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="section-container">
            <h3 className="section-title2" style={{ marginBottom: '14px' }}>Quicks Links</h3>
            <div className="quick-links-grid">
              <button className="quick-link-btn purple">Practice CBT</button>
              <button className="quick-link-btn orange">Physics Lab</button>
              <button className="quick-link-btn pink">Solve Equation</button>
              <button className="quick-link-btn yellow">Career fair</button>
            </div>
          </div>

        </div>

        {/* Bottom padding for tab bar */}
        <div style={{ height: '80px' }}></div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
