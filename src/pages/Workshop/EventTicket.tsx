import React, { useState } from 'react';
import { IonContent, IonPage, IonIcon } from '@ionic/react';
import { 
  searchOutline, 
  notifications,
  chevronBack,
  remove,
  add
} from 'ionicons/icons';
import './EventTicket.css';

const EventTicket: React.FC = () => {
  const [earlyBirdQty, setEarlyBirdQty] = useState(0);
  const [secondReleaseQty, setSecondReleaseQty] = useState(0);
  const [generalQty, setGeneralQty] = useState(1);

  return (
    <IonPage>
      <IonContent fullscreen className="ion-no-padding">
        <div className="event-ticket-app">
          {/* Status Bar */}
          <div className="ticket-status-bar">
            <span className="ticket-time">9:41</span>
            <div className="ticket-status-icons">
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
          <header className="ticket-header">
            <button className="ticket-back-btn">
              <IonIcon icon={chevronBack} className="back-icon-ticket" />
            </button>
            <div className="header-title-section">
              <h1 className="ticket-page-title">Event Ticket</h1>
              <p className="ticket-page-subtitle">One standing</p>
            </div>
            <div className="header-actions-ticket">
              <IonIcon icon={searchOutline} className="header-action-icon" />
              <IonIcon icon={notifications} className="header-action-icon" />
            </div>
          </header>

          {/* Event Info Card */}
          <div className="ticket-event-card">
            <h2 className="ticket-event-name">La Rosalia</h2>
            <p className="ticket-event-datetime">Mon, Jun 18 - 7:00 Pm</p>
            <p className="ticket-event-location">Aviva Park, New Jersey</p>
          </div>

          {/* Ticket Options */}
          <div className="ticket-options-section">
            {/* Early Bird */}
            <div className="ticket-option-item">
              <div className="ticket-option-info">
                <h3 className="ticket-type-name">Early Bird</h3>
                <div className="ticket-price-row">
                  <span className="ticket-price">$45.00</span>
                  <span className="ticket-per-text">• 2 Pax</span>
                </div>
                <p className="ticket-sold-out">Sold Out</p>
              </div>
            </div>

            {/* Second Release */}
            <div className="ticket-option-item">
              <div className="ticket-option-info">
                <h3 className="ticket-type-name">Second Release</h3>
                <div className="ticket-price-row">
                  <span className="ticket-price">$55.00</span>
                  <span className="ticket-per-text">• 2 Pax</span>
                </div>
              </div>
              <div className="ticket-quantity-control">
                <button 
                  className="qty-btn"
                  onClick={() => setSecondReleaseQty(Math.max(0, secondReleaseQty - 1))}
                  disabled={secondReleaseQty === 0}
                >
                  <IonIcon icon={remove} />
                </button>
                <span className="qty-value">{secondReleaseQty}</span>
                <button 
                  className="qty-btn"
                  onClick={() => setSecondReleaseQty(secondReleaseQty + 1)}
                >
                  <IonIcon icon={add} />
                </button>
              </div>
            </div>

            {/* General */}
            <div className="ticket-option-item">
              <div className="ticket-option-info">
                <h3 className="ticket-type-name">General</h3>
                <div className="ticket-price-row">
                  <span className="ticket-price">$65.00</span>
                  <span className="ticket-per-text">• 2 Pax</span>
                </div>
                <p className="ticket-sales-date">Sales start on 18, 2025</p>
              </div>
              <div className="ticket-quantity-control">
                <button 
                  className="qty-btn"
                  onClick={() => setGeneralQty(Math.max(0, generalQty - 1))}
                  disabled={generalQty === 0}
                >
                  <IonIcon icon={remove} />
                </button>
                <span className="qty-value">{generalQty}</span>
                <button 
                  className="qty-btn"
                  onClick={() => setGeneralQty(generalQty + 1)}
                >
                  <IonIcon icon={add} />
                </button>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="ticket-footer">
            <button className="calendar-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="5" width="16" height="16" rx="2" stroke="white" strokeWidth="1.5"/>
                <path d="M4 9h16M8 3v4M16 3v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="buy-tickets-btn-main">Buy Tickets</button>
          </div>

          {/* Tab Bar Spacer */}
          <div style={{ height: '80px' }}></div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default EventTicket;
