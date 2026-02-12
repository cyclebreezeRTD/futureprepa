import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './EventDetails.css';

const EventDetails: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-no-padding">
        <div className="event-detail-app">
          {/* Status Bar */}
          <div className="event-status-bar">
            <span className="event-time">9:41</span>
            <div className="event-status-icons">
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

          {/* Header */}
          <header className="event-detail-header">
            <button className="event-back-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 16l-6-6 6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </button>
          </header>

          {/* Hero Image */}
          <div className="event-hero-image">
            <img 
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop" 
              alt="Event"
              className="event-hero-img"
            />
          </div>

          {/* Event Details Card */}
          <div className="event-details-card">
            {/* Event Title */}
            <div className="event-title-section">
              <h1 className="event-main-title">Gershay - Music of the Gershwin Brothers</h1>
              <p className="event-venue">Davies Symphony Hall, San Francisco, California</p>
              <p className="event-date">Wednesday March 19, 2025</p>
            </div>

            {/* Event Meta */}
            <div className="event-meta-row">
              <div className="event-meta-item">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="meta-icon">
                  <rect x="3" y="4" width="14" height="13" rx="2" stroke="#666666" strokeWidth="1.5"/>
                  <path d="M3 8h14M7 2v4M13 2v4" stroke="#666666" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span className="meta-text">19 - Mar - Wednesday</span>
              </div>
              <div className="event-meta-item">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="meta-icon">
                  <circle cx="10" cy="10" r="7" stroke="#666666" strokeWidth="1.5"/>
                  <path d="M10 6v4l3 2" stroke="#666666" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span className="meta-text">18:00 - 21:00 Particulaire</span>
              </div>
            </div>

            {/* Description */}
            <div className="event-description-section">
              <h2 className="event-section-heading">Description</h2>
              <p className="event-description-text">
                Get ready for a night you won't forget! Join us for an evening of live music, food, dance, and fun. Our concert features the best of Africa, fusion music in San Francisco! Come dressed in your finest African attire or just come as you are and be ready to dance the night away. This is a 21 and over event. Tickets are available at
              </p>
              <button className="event-read-more">Read more</button>
            </div>

            {/* Location Map */}
            <div className="event-location-section">
              <h2 className="event-section-heading">Location</h2>
              <div className="event-map-container">
                <div className="event-map-placeholder">
                  <div className="map-marker">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="18" fill="#FF6B6B" opacity="0.2"/>
                      <circle cx="20" cy="20" r="12" fill="#FF6B6B" opacity="0.5"/>
                      <circle cx="20" cy="20" r="6" fill="#FF6B6B"/>
                    </svg>
                  </div>
                  <span className="map-location-text">San Francisco</span>
                </div>
              </div>
            </div>

            {/* Price Section */}
            <div className="event-price-section">
              <div className="event-price-info">
                <p className="price-label">Price</p>
                <p className="price-amount">$120.00</p>
              </div>
              <button className="event-buy-ticket-btn">Buy Ticket</button>
            </div>
          </div>

          {/* Tab Bar Spacer */}
          <div style={{ height: '80px' }}></div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default EventDetails;
