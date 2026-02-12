import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButton,
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import { searchOutline, notificationsOutline, flameOutline, informationCircleOutline } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border home-page-header">
        <IonToolbar className="home-header">
          <div className="header-wrapper">
            {/* Top row with icons */}
            <div className="header-top-row">
              <div className="menu-icon">
                <div className="hamburger-menu">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="header-actions">
                <IonIcon icon={searchOutline} className="header-icon" />
                <IonIcon icon={notificationsOutline} className="header-icon" />
              </div>
            </div>
            
            {/* Bottom row with profile greeting */}
            <div className="user-greeting">
              <div className="avatar">
                <img src="https://via.placeholder.com/50" alt="User avatar" />
              </div>
              <div className="greeting-text">
                <p className="greeting-label">Welcome Back</p>
                <h2 className="user-name">Lourens Martinez</h2>
              </div>
            </div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="home-content" scrollEvents={true}>
        {/* Today's Focus Section */}
        <div className="section-container">
          <div className="section-header">
            <div className="section-title-row">
              <IonIcon icon={flameOutline} className="section-icon flame" />
              <h3 className="section-title">Today's Focus</h3>
            </div>
            <button className="view-link">Start Revision 10m</button>
          </div>

          <IonCard className="focus-card">
            <IonCardContent className="focus-card-content">
              <div className="focus-stat">
                <h1 className="focus-number">300</h1>
                <p className="focus-subtitle">
                  Cards left to study for WAEC
                  <br />
                  Let's dive on into One Card.
                </p>
              </div>
              <IonButton className="start-btn" expand="block">
                Start with card
              </IonButton>
            </IonCardContent>
          </IonCard>
        </div>

        {/* 4 Trending Tests Section */}
        <div className="section-container">
          <div className="section-header">
            <div className="section-title-row">
              <h3 className="section-title">4 Trending Tests</h3>
              <IonIcon icon={informationCircleOutline} className="info-icon" />
            </div>
          </div>

          <IonGrid className="tests-grid">
            <IonRow>
              <IonCol size="6">
                <IonCard className="test-card pink">
                  <IonCardContent>
                    <p className="test-subject">Law of Motion</p>
                    <div className="test-info">
                      <IonIcon icon={flameOutline} className="test-icon" />
                      <span className="test-time">1d 18s</span>
                    </div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="6">
                <IonCard className="test-card orange">
                  <IonCardContent>
                    <p className="test-subject">Law of Motion</p>
                    <div className="test-info">
                      <IonIcon icon={flameOutline} className="test-icon" />
                      <span className="test-time">1d 10s</span>
                    </div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <IonCard className="test-card blue">
                  <IonCardContent>
                    <p className="test-subject">Law of Motion</p>
                    <div className="test-info">
                      <IonIcon icon={flameOutline} className="test-icon" />
                      <span className="test-time">1d 18s</span>
                    </div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="6">
                <IonCard className="test-card green">
                  <IonCardContent>
                    <p className="test-subject">Law of Motion</p>
                    <div className="test-info">
                      <IonIcon icon={flameOutline} className="test-icon" />
                      <span className="test-time">1d 10s</span>
                    </div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>

        {/* English Language WAEC Section */}
        <div className="section-container">
          <IonCard className="subject-card">
            <IonCardContent className="subject-card-content">
              <div className="subject-info">
                <div className="subject-icon-wrapper">
                  <img src="https://via.placeholder.com/50" alt="Subject" />
                </div>
                <div className="subject-details">
                  <h4 className="subject-name">English Language WAEC</h4>
                  <p className="subject-progress">21 of 60 Lessons</p>
                </div>
              </div>
              <div className="subject-action">
                <IonButton className="continue-btn">Continue</IonButton>
              </div>
            </IonCardContent>
          </IonCard>
        </div>

        {/* Quick Links Section */}
        <div className="section-container">
          <h3 className="section-title">Quick Links</h3>
          <IonGrid className="quick-links-grid">
            <IonRow>
              <IonCol size="6">
                <IonButton expand="block" className="quick-link-btn purple">
                  Practice CBT
                </IonButton>
              </IonCol>
              <IonCol size="6">
                <IonButton expand="block" className="quick-link-btn orange">
                  Physics Lab
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <IonButton expand="block" className="quick-link-btn pink">
                  Solve Equation
                </IonButton>
              </IonCol>
              <IonCol size="6">
                <IonButton expand="block" className="quick-link-btn yellow">
                  Tutor AI
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>

        {/* Bottom padding for tab bar */}
        <div style={{ height: '80px' }}></div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
