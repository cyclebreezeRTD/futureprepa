import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './AllEventsPage.css';

const AllEventsPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-no-padding">
        <div className="events-app">
          {/* Status Bar */}
          <div className="status-bar">
            <span className="time">9:41</span>
            <div className="status-icons">
              <svg width="18" height="12" viewBox="0 0 18 12" fill="white">
                <path d="M0 0h4v12H0V0zm7 0h4v12H7V0zm7 0h4v12h-4V0z" opacity="0.4"/>
                <path d="M0 0h4v12H0V0z"/>
              </svg>
              <svg width="16" height="11" viewBox="0 0 16 11" fill="white">
                <path d="M8 0C3.6 0 0 2.5 0 5.5S3.6 11 8 11s8-2.5 8-5.5S12.4 0 8 0z" opacity="0.4"/>
                <path d="M8 2c2.8 0 5 1.6 5 3.5S10.8 9 8 9 3 7.4 3 5.5 5.2 2 8 2z"/>
              </svg>
              <svg width="25" height="12" viewBox="0 0 25 12" fill="white">
                <rect width="18" height="12" rx="2" opacity="0.4"/>
                <rect x="20" y="4" width="2" height="4" rx="1" opacity="0.4"/>
                <rect x="23" y="2" width="2" height="8" rx="1" opacity="0.4"/>
                <rect x="2" y="2" width="14" height="8" rx="1"/>
              </svg>
            </div>
          </div>

          {/* Main Header */}
          <header className="main-header">
            <button className="menu-btn">
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                <path d="M0 1h20M0 7h20M0 13h20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="header-actions">
              <button className="icon-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="2"/>
                  <path d="M14 14l4 4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <button className="icon-btn">
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
                  <path d="M10 2c-1.1 0-2 .5-2 2v1c-2.2 0-4 1.8-4 4v5c0 1.1-.9 2-2 2h16c-1.1 0-2-.9-2-2V9c0-2.2-1.8-4-4-4V4c0-1.5-.9-2-2-2zm-3 18c0 1.7 1.3 3 3 3s3-1.3 3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </header>

          {/* Back Button and Title */}
          <div className="page-header">
            <button className="back-btn-inline">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 16l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="title-section">
              <h1 className="page-title">Opportunities</h1>
              <p className="page-subtitle">Turn learning into real income</p>
            </div>
          </div>

          {/* Category Pills */}
          <div className="category-pills">
            <button className="category-pill pill-pink">Events</button>
            <button className="category-pill pill-blue">Scholarships</button>
            <button className="category-pill pill-purple">CRO</button>
          </div>

          {/* Search Bar */}
          <div className="search-section">
            <div className="search-bar">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="1.5" opacity="0.5"/>
                <path d="M12.5 12.5l3.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
              </svg>
              <input type="text" placeholder="Search now" />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="filter-tabs-section">
            <div className="filter-tabs">
              <button className="filter-tab filter-active">Events</button>
              <button className="filter-tab">Workshops</button>
              <button className="filter-tab">Calendar</button>
              <button className="filter-tab">Program</button>
            </div>
          </div>

          {/* Location Selector */}
          <div className="location-section">
            <span className="section-label">Find events in</span>
            <div className="location-selector">
              <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
                <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S5.62 4.5 7 4.5 9.5 5.62 9.5 7 8.38 9.5 7 9.5z" fill="#FF4D8F"/>
              </svg>
              <span className="location-text">Lagos</span>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1l5 5 5-5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* Events List */}
          <div className="events-content">
            <h2 className="events-section-title">Popular in Lagos</h2>

            <div className="events-list">
              {/* Featured Event */}
              <div className="event-card featured-event">
                <div className="event-image">
                  <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80" alt="La Rosalia concert" />
                </div>
                <div className="event-info">
                  <p className="event-date">Mon, Apr 19 · 21:00 PM</p>
                  <h3 className="event-title">La Rosalia</h3>
                  <p className="event-venue">
                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                      <path d="M5 0C2.24 0 0 2.24 0 5c0 3.75 5 7 5 7s5-3.25 5-7c0-2.76-2.24-5-5-5zm0 6.5c-.83 0-1.5-.67-1.5-1.5S4.17 3.5 5 3.5 6.5 4.17 6.5 5 5.83 6.5 5 6.5z" fill="#FF4D8F"/>
                    </svg>
                    Rialto Sant Joan, Barcelona
                  </p>
                </div>
                <div className="event-actions">
                  <button className="action-btn favorite-btn">
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
                      <path d="M10 17l-1.3-1.2C3.4 11.36 0 8.28 0 5.5 0 2.42 2.42 0 5.5 0c1.74 0 3.41.81 4.5 2.09C11.09.81 12.76 0 14.5 0 17.58 0 20 2.42 20 5.5c0 2.78-3.4 5.86-8.7 10.3L10 17z" stroke="white" strokeWidth="1.5"/>
                    </svg>
                  </button>
                  <button className="action-btn share-btn">
                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                      <circle cx="2.5" cy="9" r="2" stroke="white" strokeWidth="1.5"/>
                      <circle cx="13.5" cy="3.5" r="2" stroke="white" strokeWidth="1.5"/>
                      <circle cx="13.5" cy="14.5" r="2" stroke="white" strokeWidth="1.5"/>
                      <path d="M4.5 8.5l7-2.5M4.5 9.5l7 2.5" stroke="white" strokeWidth="1.5"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Regular Events */}
              <div className="event-card-small">
                <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80" alt="The Kooks" className="event-thumbnail" />
                <div className="event-small-info">
                  <p className="event-small-date">Thu, Apr 12 · 23:00 PM</p>
                  <h4 className="event-small-title">The Kooks</h4>
                  <p className="event-small-venue">
                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                      <path d="M5 0C2.24 0 0 2.24 0 5c0 3.75 5 7 5 7s5-3.25 5-7c0-2.76-2.24-5-5-5zm0 6.5c-.83 0-1.5-.67-1.5-1.5S4.17 3.5 5 3.5 6.5 4.17 6.5 5 5.83 6.5 5 6.5z" fill="#FF4D8F"/>
                    </svg>
                    Recoletos Club
                  </p>
                </div>
                <div className="event-small-actions">
                  <button className="small-action-btn">
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
                      <path d="M10 17l-1.3-1.2C3.4 11.36 0 8.28 0 5.5 0 2.42 2.42 0 5.5 0c1.74 0 3.41.81 4.5 2.09C11.09.81 12.76 0 14.5 0 17.58 0 20 2.42 20 5.5c0 2.78-3.4 5.86-8.7 10.3L10 17z" stroke="white" strokeWidth="1.5"/>
                    </svg>
                  </button>
                  <button className="small-action-btn">
                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                      <circle cx="2.5" cy="9" r="2" stroke="white" strokeWidth="1.5"/>
                      <circle cx="13.5" cy="3.5" r="2" stroke="white" strokeWidth="1.5"/>
                      <circle cx="13.5" cy="14.5" r="2" stroke="white" strokeWidth="1.5"/>
                      <path d="M4.5 8.5l7-2.5M4.5 9.5l7 2.5" stroke="white" strokeWidth="1.5"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="event-card-small">
                <img src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=400&q=80" alt="The Wombats" className="event-thumbnail" />
                <div className="event-small-info">
                  <p className="event-small-date">Sun, Jul 17 · 23:00 PM</p>
                  <h4 className="event-small-title">The Wombats</h4>
                  <p className="event-small-venue">
                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                      <path d="M5 0C2.24 0 0 2.24 0 5c0 3.75 5 7 5 7s5-3.25 5-7c0-2.76-2.24-5-5-5zm0 6.5c-.83 0-1.5-.67-1.5-1.5S4.17 3.5 5 3.5 6.5 4.17 6.5 5 5.83 6.5 5 6.5z" fill="#FF4D8F"/>
                    </svg>
                    Sala Apolo
                  </p>
                </div>
                <div className="event-small-actions">
                  <button className="small-action-btn">
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
                      <path d="M10 17l-1.3-1.2C3.4 11.36 0 8.28 0 5.5 0 2.42 2.42 0 5.5 0c1.74 0 3.41.81 4.5 2.09C11.09.81 12.76 0 14.5 0 17.58 0 20 2.42 20 5.5c0 2.78-3.4 5.86-8.7 10.3L10 17z" stroke="white" strokeWidth="1.5"/>
                    </svg>
                  </button>
                  <button className="small-action-btn">
                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                      <circle cx="2.5" cy="9" r="2" stroke="white" strokeWidth="1.5"/>
                      <circle cx="13.5" cy="3.5" r="2" stroke="white" strokeWidth="1.5"/>
                      <circle cx="13.5" cy="14.5" r="2" stroke="white" strokeWidth="1.5"/>
                      <path d="M4.5 8.5l7-2.5M4.5 9.5l7 2.5" stroke="white" strokeWidth="1.5"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="event-card-small">
                <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80" alt="Foster The People" className="event-thumbnail" />
                <div className="event-small-info">
                  <p className="event-small-date">Mon, Apr 23 · 19:25</p>
                  <h4 className="event-small-title">Foster The People</h4>
                  <p className="event-small-venue">
                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                      <path d="M5 0C2.24 0 0 2.24 0 5c0 3.75 5 7 5 7s5-3.25 5-7c0-2.76-2.24-5-5-5zm0 6.5c-.83 0-1.5-.67-1.5-1.5S4.17 3.5 5 3.5 6.5 4.17 6.5 5 5.83 6.5 5 6.5z" fill="#FF4D8F"/>
                    </svg>
                    La Mirrarrella
                  </p>
                </div>
                <div className="event-small-actions">
                  <button className="small-action-btn">
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
                      <path d="M10 17l-1.3-1.2C3.4 11.36 0 8.28 0 5.5 0 2.42 2.42 0 5.5 0c1.74 0 3.41.81 4.5 2.09C11.09.81 12.76 0 14.5 0 17.58 0 20 2.42 20 5.5c0 2.78-3.4 5.86-8.7 10.3L10 17z" stroke="white" strokeWidth="1.5"/>
                    </svg>
                  </button>
                  <button className="small-action-btn">
                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                      <circle cx="2.5" cy="9" r="2" stroke="white" strokeWidth="1.5"/>
                      <circle cx="13.5" cy="3.5" r="2" stroke="white" strokeWidth="1.5"/>
                      <circle cx="13.5" cy="14.5" r="2" stroke="white" strokeWidth="1.5"/>
                      <path d="M4.5 8.5l7-2.5M4.5 9.5l7 2.5" stroke="white" strokeWidth="1.5"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Events Near You Section */}
            <div className="events-near-section">
              <h2 className="events-section-title">Events Near you</h2>
              <div className="horizontal-scroll">
                <div className="near-event-card">
                  <img src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&q=80" alt="Night 5 At the Dogos" />
                  <div className="near-event-info">
                    <h4 className="near-event-title">Night 5 At the Dogos</h4>
                    <p className="near-event-date">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <rect x="2" y="3" width="10" height="9" rx="1" stroke="white" strokeWidth="1.2"/>
                        <path d="M4 1v3M10 1v3M2 6h10" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                      Apr 12 2023
                    </p>
                    <p className="near-event-location">
                      <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                        <path d="M5 0C2.24 0 0 2.24 0 5c0 3.75 5 7 5 7s5-3.25 5-7c0-2.76-2.24-5-5-5zm0 6.5c-.83 0-1.5-.67-1.5-1.5S4.17 3.5 5 3.5 6.5 4.17 6.5 5 5.83 6.5 5 6.5z" fill="#FF4D8F"/>
                      </svg>
                      $45 | DGBC
                    </p>
                  </div>
                </div>

                <div className="near-event-card">
                  <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80" alt="Wizkid Live" />
                  <div className="near-event-info">
                    <h4 className="near-event-title">Wizkid Live</h4>
                    <p className="near-event-date">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <rect x="2" y="3" width="10" height="9" rx="1" stroke="white" strokeWidth="1.2"/>
                        <path d="M4 1v3M10 1v3M2 6h10" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                      Oct 28 2023
                    </p>
                    <p className="near-event-location">
                      <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                        <path d="M5 0C2.24 0 0 2.24 0 5c0 3.75 5 7 5 7s5-3.25 5-7c0-2.76-2.24-5-5-5zm0 6.5c-.83 0-1.5-.67-1.5-1.5S4.17 3.5 5 3.5 6.5 4.17 6.5 5 5.83 6.5 5 6.5z" fill="#FF4D8F"/>
                      </svg>
                      $65 | Eko Hotel
                    </p>
                  </div>
                </div>

                <div className="near-event-card">
                  <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80" alt="Concert Event" />
                  <div className="near-event-info">
                    <h4 className="near-event-title">Summer Fest 2023</h4>
                    <p className="near-event-date">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <rect x="2" y="3" width="10" height="9" rx="1" stroke="white" strokeWidth="1.2"/>
                        <path d="M4 1v3M10 1v3M2 6h10" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                      Jun 15 2023
                    </p>
                    <p className="near-event-location">
                      <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                        <path d="M5 0C2.24 0 0 2.24 0 5c0 3.75 5 7 5 7s5-3.25 5-7c0-2.76-2.24-5-5-5zm0 6.5c-.83 0-1.5-.67-1.5-1.5S4.17 3.5 5 3.5 6.5 4.17 6.5 5 5.83 6.5 5 6.5z" fill="#FF4D8F"/>
                      </svg>
                      $30 | VI Lagos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </IonContent>
    </IonPage>
  );
};

export default AllEventsPage;
