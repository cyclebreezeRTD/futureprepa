import React from 'react';
import './OpportunitiesPage.css';
import { IonContent, IonPage } from '@ionic/react';
const OpportunitiesPage: React.FC = () => {
  return (
     <IonPage>
          <IonContent fullscreen className="ion-no-padding">

 
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <button className="menu-btn">
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
            <path d="M0 0h20v2H0V0zm0 6h20v2H0V6zm0 6h20v2H0v-2z" fill="currentColor"/>
          </svg>
        </button>
        <div className="header-actions">
          <button className="icon-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="M14 14l4 4" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
          <button className="icon-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2c-1 0-2 .5-2 2v1c-2 0-3.5 1-3.5 3v6c0 1.5 1 2.5 2.5 2.5h6c1.5 0 2.5-1 2.5-2.5V8c0-2-1.5-3-3.5-3V4c0-1.5-1-2-2-2zm0 1.5c.5 0 .5.5.5 1v1h-1V4.5c0-.5 0-1 .5-1z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Page Title */}
        <div className="page-title">
          <h1>Opportunities</h1>
          <p className="subtitle">Turn learning into real income</p>
        </div>

        {/* Filter Pills */}
        <div className="filter-pills">
          <button className="pill pill-active">CRO</button>
          <button className="pill">Workshops</button>
        </div>

        {/* Partner Programs Section */}
        <section className="section">
          <h2 className="section-title">Partner Programs</h2>
          
          <div className="program-cards">
            <div className="program-card">
              <div className="card-content">
                <h3 className="card-title">LAUTECH MASTERS PROGRAMME</h3>
                <p className="card-discount">50% Tuition Discount</p>
                <p className="card-description">Exclusive discounts for Multiverse Learners</p>
              </div>
            </div>

            <div className="program-card">
              <div className="card-content">
                <h3 className="card-title">UNILAG PG PROGRAMMES</h3>
                <p className="card-discount">30% Tuition Discount</p>
                <p className="card-description">Exclusive discount for Multiverse Learners</p>
              </div>
            </div>

            <div className="program-card">
              <div className="card-content">
                <h3 className="card-title">LAUTECH MASTERS PROGRAMME</h3>
                <p className="card-discount">50% Tuition Discount</p>
                <p className="card-description">Exclusive discounts for Multiverse Learners</p>
              </div>
            </div>

            <div className="program-card">
              <div className="card-content">
                <h3 className="card-title">LAUTECH MASTERS PROGRAMME</h3>
                <p className="card-discount">50% Tuition Discount</p>
                <p className="card-description">Exclusive discounts for Multiverse Learners</p>
              </div>
            </div>

            <div className="program-card">
              <div className="card-content">
                <h3 className="card-title">LAUTECH MASTERS PROGRAMME</h3>
                <p className="card-discount">50% Tuition Discount</p>
                <p className="card-description">Exclusive discounts for Multiverse Learners</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recently Added Section */}
        <section className="section">
          <div className="section-header">
            <div className="section-header-left">
              <h2 className="section-title">Recently Added</h2>
              <span className="fire-emoji">🔥</span>
            </div>
            <button className="see-all-btn">See all</button>
          </div>

          <div className="job-cards">
            <div className="job-card">
              <div className="job-avatar blue-avatar">
                <span>a</span>
              </div>
              <div className="job-info">
                <h3 className="job-title">Visual Designer - UI Designer</h3>
                <p className="job-meta">Andela • Full-time • Fully remote</p>
              </div>
              <button className="favorite-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 17.5l-6.5-6.5c-2-2-2-5 0-7 2-2 5-2 7 0l.5.5.5-.5c2-2 5-2 7 0 2 2 2 5 0 7l-6.5 6.5c-.5.5-1.5.5-2 0z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </button>
            </div>

            <div className="job-card">
              <div className="job-avatar teal-avatar">
                <span>c</span>
              </div>
              <div className="job-info">
                <h3 className="job-title">UX Designer, Sopact</h3>
                <p className="job-meta">Bangalore, Karnataka • Full Time</p>
              </div>
              <button className="favorite-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 17.5l-6.5-6.5c-2-2-2-5 0-7 2-2 5-2 7 0l.5.5.5-.5c2-2 5-2 7 0 2 2 2 5 0 7l-6.5 6.5c-.5.5-1.5.5-2 0z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </button>
            </div>

            <div className="job-card">
              <div className="job-avatar yellow-avatar">
                <span>i</span>
              </div>
              <div className="job-info">
                <h3 className="job-title">Senior UX Designer</h3>
                <p className="job-meta">Bangalore, Karnataka • Full Time</p>
              </div>
              <button className="favorite-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 17.5l-6.5-6.5c-2-2-2-5 0-7 2-2 5-2 7 0l.5.5.5-.5c2-2 5-2 7 0 2 2 2 5 0 7l-6.5 6.5c-.5.5-1.5.5-2 0z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
    </IonContent>
    </IonPage>
  );
};

export default OpportunitiesPage;
