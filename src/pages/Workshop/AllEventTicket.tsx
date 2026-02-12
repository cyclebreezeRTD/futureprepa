import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonIcon,
} from '@ionic/react';
import {
  menu,
  searchOutline,
  notificationsOutline,
  homeOutline,
  receiptOutline,
  addCircle,
  personOutline,
  statsChartOutline,
} from 'ionicons/icons';
import './AllEventTicket.css';

const AllEventTicket: React.FC = () => {
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
            <button className="ticket-menu-btn">
              <IonIcon icon={menu} className="ticket-menu-icon" />
            </button>
            <div className="ticket-header-title-section">
              <h1 className="ticket-page-title">Event Ticket</h1>
              <p className="ticket-page-subtitle">Live standing</p>
            </div>
            <div className="ticket-header-actions">
              <IonIcon icon={searchOutline} className="ticket-action-icon" />
              <IonIcon icon={notificationsOutline} className="ticket-action-icon" />
            </div>
          </header>

          {/* Ticket Card */}
          <div className="ticket-card">
            {/* Concert Banner */}
            <div className="concert-banner">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='180'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23667eea;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%23764ba2;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23f093fb;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='180' fill='url(%23grad)'/%3E%3C/svg%3E" 
                alt="Concert background"
                className="banner-bg"
              />
              <div className="banner-overlay">
                <div className="coldplay-logo">
                  <h2 className="coldplay-text">COLDPLAY</h2>
                  <p className="album-text">Music of the Spheres</p>
                </div>
                <div className="qr-code">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="white">
                    <rect x="0" y="0" width="15" height="15"/>
                    <rect x="20" y="0" width="5" height="5"/>
                    <rect x="30" y="0" width="5" height="5"/>
                    <rect x="40" y="0" width="5" height="5"/>
                    <rect x="50" y="0" width="5" height="5"/>
                    <rect x="65" y="0" width="15" height="15"/>
                    <rect x="0" y="20" width="5" height="5"/>
                    <rect x="10" y="20" width="5" height="5"/>
                    <rect x="20" y="20" width="15" height="15"/>
                    <rect x="40" y="20" width="5" height="5"/>
                    <rect x="50" y="20" width="5" height="5"/>
                    <rect x="65" y="20" width="5" height="5"/>
                    <rect x="75" y="20" width="5" height="5"/>
                    <rect x="0" y="30" width="5" height="5"/>
                    <rect x="10" y="30" width="5" height="5"/>
                    <rect x="40" y="30" width="10" height="10"/>
                    <rect x="65" y="30" width="5" height="5"/>
                    <rect x="75" y="30" width="5" height="5"/>
                    <rect x="0" y="40" width="5" height="5"/>
                    <rect x="10" y="40" width="5" height="5"/>
                    <rect x="20" y="40" width="5" height="5"/>
                    <rect x="30" y="40" width="5" height="5"/>
                    <rect x="55" y="40" width="10" height="10"/>
                    <rect x="65" y="40" width="5" height="5"/>
                    <rect x="75" y="40" width="5" height="5"/>
                    <rect x="0" y="50" width="5" height="5"/>
                    <rect x="10" y="50" width="5" height="5"/>
                    <rect x="20" y="50" width="15" height="15"/>
                    <rect x="40" y="50" width="5" height="5"/>
                    <rect x="0" y="65" width="15" height="15"/>
                    <rect x="20" y="65" width="5" height="5"/>
                    <rect x="30" y="65" width="5" height="5"/>
                    <rect x="40" y="65" width="10" height="10"/>
                    <rect x="55" y="65" width="5" height="5"/>
                    <rect x="65" y="65" width="15" height="15"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Ticket Info */}
            <div className="ticket-info">
              <h3 className="concert-title">Coldplay - Music of the Spheres</h3>
              
              {/* Details Grid */}
              <div className="ticket-details-grid">
                <div className="detail-item">
                  <span className="detail-label">Name</span>
                  <span className="detail-value">Johnson Wick</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Guest</span>
                  <span className="detail-value">02 Guests</span>
                </div>
              </div>

              <div className="ticket-details-grid">
                <div className="detail-item">
                  <span className="detail-label">Ticket People</span>
                  <span className="detail-value">Johnson People</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Class</span>
                  <span className="detail-value">VIP</span>
                </div>
              </div>

              <div className="ticket-details-grid">
                <div className="detail-item">
                  <span className="detail-label">Date</span>
                  <span className="detail-value">Nov 10 2020</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Time</span>
                  <span className="detail-value">8.00 PM</span>
                </div>
              </div>

              <div className="ticket-details-grid">
                <div className="detail-item">
                  <span className="detail-label">Location</span>
                  <span className="detail-value">New Jersey, USA</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Seat</span>
                  <span className="detail-value">C04-05</span>
                </div>
              </div>

              {/* Barcode */}
              <div className="barcode-section">
                <svg width="100%" height="80" viewBox="0 0 300 80" preserveAspectRatio="none">
                  <rect x="0" y="0" width="6" height="80" fill="#000"/>
                  <rect x="8" y="0" width="3" height="80" fill="#000"/>
                  <rect x="13" y="0" width="6" height="80" fill="#000"/>
                  <rect x="21" y="0" width="3" height="80" fill="#000"/>
                  <rect x="26" y="0" width="8" height="80" fill="#000"/>
                  <rect x="36" y="0" width="3" height="80" fill="#000"/>
                  <rect x="41" y="0" width="6" height="80" fill="#000"/>
                  <rect x="49" y="0" width="3" height="80" fill="#000"/>
                  <rect x="54" y="0" width="8" height="80" fill="#000"/>
                  <rect x="64" y="0" width="3" height="80" fill="#000"/>
                  <rect x="69" y="0" width="6" height="80" fill="#000"/>
                  <rect x="77" y="0" width="8" height="80" fill="#000"/>
                  <rect x="87" y="0" width="3" height="80" fill="#000"/>
                  <rect x="92" y="0" width="6" height="80" fill="#000"/>
                  <rect x="100" y="0" width="3" height="80" fill="#000"/>
                  <rect x="105" y="0" width="8" height="80" fill="#000"/>
                  <rect x="115" y="0" width="3" height="80" fill="#000"/>
                  <rect x="120" y="0" width="6" height="80" fill="#000"/>
                  <rect x="128" y="0" width="3" height="80" fill="#000"/>
                  <rect x="133" y="0" width="8" height="80" fill="#000"/>
                  <rect x="143" y="0" width="6" height="80" fill="#000"/>
                  <rect x="151" y="0" width="3" height="80" fill="#000"/>
                  <rect x="156" y="0" width="6" height="80" fill="#000"/>
                  <rect x="164" y="0" width="8" height="80" fill="#000"/>
                  <rect x="174" y="0" width="3" height="80" fill="#000"/>
                  <rect x="179" y="0" width="6" height="80" fill="#000"/>
                  <rect x="187" y="0" width="3" height="80" fill="#000"/>
                  <rect x="192" y="0" width="8" height="80" fill="#000"/>
                  <rect x="202" y="0" width="3" height="80" fill="#000"/>
                  <rect x="207" y="0" width="6" height="80" fill="#000"/>
                  <rect x="215" y="0" width="8" height="80" fill="#000"/>
                  <rect x="225" y="0" width="3" height="80" fill="#000"/>
                  <rect x="230" y="0" width="6" height="80" fill="#000"/>
                  <rect x="238" y="0" width="3" height="80" fill="#000"/>
                  <rect x="243" y="0" width="8" height="80" fill="#000"/>
                  <rect x="253" y="0" width="6" height="80" fill="#000"/>
                  <rect x="261" y="0" width="3" height="80" fill="#000"/>
                  <rect x="266" y="0" width="6" height="80" fill="#000"/>
                  <rect x="274" y="0" width="8" height="80" fill="#000"/>
                  <rect x="284" y="0" width="3" height="80" fill="#000"/>
                  <rect x="289" y="0" width="6" height="80" fill="#000"/>
                  <rect x="297" y="0" width="3" height="80" fill="#000"/>
                </svg>
                <p className="barcode-number">12334 24244 54353 63534 75343</p>
              </div>
            </div>
          </div>

      
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AllEventTicket;
