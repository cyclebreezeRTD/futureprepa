import React, { useState } from 'react';
import {
  IonPage,
  IonContent,
  IonIcon,
} from '@ionic/react';
import {
  searchOutline,
  notificationsOutline,
  menuOutline,
  chevronBackOutline,
  timeOutline,
  starOutline,
  peopleOutline,
  wifiOutline,
  libraryOutline,
  barChartOutline,
  chatbubbleEllipsesOutline,
} from 'ionicons/icons';
import './CourseDetails.css';

const subjectProgress = [
  { subject: 'Mathematics', sub: 'Continue lesson', pct: 50, color: 'prog-purple' },
  { subject: 'Mathematics', sub: 'Continue lesson', pct: 62, color: 'prog-pink' },
  { subject: 'Mathematics', sub: 'Continue lesson', pct: 50, color: 'prog-blue' },
];

const CourseDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <IonPage>
      <IonContent fullscreen scrollY className="cd-content">

        {/* Top nav bar */}
        <div className="cd-topbar">
          <IonIcon icon={menuOutline} className="cd-menu-icon" />
          <div className="cd-topbar-right">
            <IonIcon icon={searchOutline} className="cd-nav-icon" />
            <IonIcon icon={notificationsOutline} className="cd-nav-icon" />
          </div>
        </div>

        {/* Title row */}
        <div className="cd-title-row">
          <IonIcon icon={chevronBackOutline} className="cd-back-icon" />
          <div>
            <h1 className="cd-main-title">WAEC</h1>
            <p className="cd-main-subtitle">West African Examination Council</p>
          </div>
        </div>

        {/* Exam Readiness Card */}
        <div className="cd-readiness-card">
          <div className="cd-readiness-bar-wrap">
            <div className="cd-readiness-label-row">
              <span className="cd-readiness-label">Exam Readiness : 50%</span>
            </div>
            <div className="cd-readiness-track">
              <div className="cd-readiness-fill" style={{ width: '50%' }} />
            </div>
          </div>
          <div className="cd-readiness-footer">
            <span className="cd-continue-link">Continue lesson</span>
            <span className="cd-readiness-pct">50% completed</span>
          </div>
        </div>

        {/* Action Pills */}
        <div className="cd-pills-row">
          {['overview', 'practice', 'pq', 'analytics'].map((tab) => (
            <button
              key={tab}
              className={`cd-pill ${tab} ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'pq' ? 'PQ' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Stats Row */}
        <div className="cd-stats-row">
          <div className="cd-stat-item">
            <IonIcon icon={timeOutline} className="cd-stat-icon" />
            <span className="cd-stat-text">40 Minutes</span>
          </div>
          <div className="cd-stat-item">
            <IonIcon icon={starOutline} className="cd-stat-icon yellow" />
            <span className="cd-stat-text">5/5 (22)</span>
          </div>
          <div className="cd-stat-item">
            <IonIcon icon={peopleOutline} className="cd-stat-icon" />
            <span className="cd-stat-text">800 students</span>
          </div>
        </div>

        {/* Features */}
        <div className="cd-section">
          <h3 className="cd-section-title">Features</h3>

          <div className="cd-feature-item">
            <div className="cd-feat-icon-wrap pink-border">
              <IonIcon icon={wifiOutline} className="cd-feat-icon pink" />
            </div>
            <div>
              <p className="cd-feat-title">100% Online</p>
              <p className="cd-feat-desc">Start instantly and learn to you own schedule</p>
            </div>
          </div>

          <div className="cd-feature-item">
            <div className="cd-feat-icon-wrap yellow-border">
              <IonIcon icon={libraryOutline} className="cd-feat-icon yellow" />
            </div>
            <div>
              <p className="cd-feat-title">CBT Past Questions</p>
              <p className="cd-feat-desc">Explore & answer questions from the past exams</p>
            </div>
          </div>

          <div className="cd-feature-item">
            <div className="cd-feat-icon-wrap blue-border">
              <IonIcon icon={barChartOutline} className="cd-feat-icon blue" />
            </div>
            <div>
              <p className="cd-feat-title">Beginner Level</p>
              <p className="cd-feat-desc">You will learn from the beginning</p>
            </div>
          </div>

          <div className="cd-feature-item">
            <div className="cd-feat-icon-wrap gray-border">
              <IonIcon icon={chatbubbleEllipsesOutline} className="cd-feat-icon gray" />
            </div>
            <div>
              <p className="cd-feat-title">Chat with AI</p>
              <p className="cd-feat-desc">Ask questions and communicate with AI</p>
            </div>
          </div>
        </div>

        {/* Subject Progress */}
        <div className="cd-section">
          <h3 className="cd-section-title">Subject Progress</h3>

          {subjectProgress.map((item, i) => (
            <div key={i} className={`cd-prog-card ${item.color}`}>
              <div className="cd-prog-top">
                <span className="cd-prog-name">{item.subject}</span>
                <span className="cd-prog-pct">{item.pct}% completed</span>
              </div>
              <p className="cd-prog-sub">{item.sub}</p>
              <div className="cd-prog-track">
                <div className="cd-prog-fill" style={{ width: `${item.pct}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ height: 80 }} />
      </IonContent>
    </IonPage>
  );
};

export default CourseDetails;
