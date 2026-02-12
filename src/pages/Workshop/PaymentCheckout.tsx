import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonIcon,
  IonButton,
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
import './PaymentCheckout.css';

const PaymentCheckout: React.FC = () => {
  const [selectedPayment, setSelectedPayment] = useState('mastercard');

  return (
    <IonPage>
      <IonContent fullscreen className="ion-no-padding">
        <div className="payment-checkout-app">
          {/* Status Bar */}
          <div className="payment-status-bar">
            <span className="payment-time">9:41</span>
            <div className="payment-status-icons">
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
          <header className="payment-header">
            <button className="payment-menu-btn">
              <IonIcon icon={menu} className="payment-menu-icon" />
            </button>
            <div className="payment-header-title-section">
              <h1 className="payment-page-title">Event Ticket</h1>
              <p className="payment-page-subtitle">Live standing</p>
            </div>
            <div className="payment-header-actions">
              <IonIcon icon={searchOutline} className="payment-action-icon" />
              <IonIcon icon={notificationsOutline} className="payment-action-icon" />
            </div>
          </header>

          {/* Main Content Card */}
          <div className="payment-card">
            {/* Event Info */}
            <div className="event-info-section">
              <h2 className="event-name">La Russia</h2>
              <p className="event-date">Feb/June 10th 2020</p>
            </div>

            {/* Contact Information */}
            <div className="contact-section">
              <h3 className="section-title">Contact information</h3>
              <div className="contact-row">
                <div className="contact-item">
                  <label className="contact-label">Name</label>
                  <p className="contact-value">Johnson</p>
                </div>
                <div className="contact-item">
                  <label className="contact-label">Surname</label>
                  <p className="contact-value">Wick</p>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="payment-methods-section">
              <h3 className="section-title">Payment methods</h3>
              
              {/* Mastercard */}
              <div 
                className={`payment-option ${selectedPayment === 'mastercard' ? 'selected' : ''}`}
                onClick={() => setSelectedPayment('mastercard')}
              >
                <div className="payment-option-content">
                  <span className="payment-option-label">Mastercard</span>
                  <div className="mastercard-logo">
                    <div className="mastercard-circle mastercard-red"></div>
                    <div className="mastercard-circle mastercard-orange"></div>
                  </div>
                </div>
                <div className={`radio-button ${selectedPayment === 'mastercard' ? 'checked' : ''}`}>
                  {selectedPayment === 'mastercard' && <div className="radio-dot"></div>}
                </div>
              </div>

              {/* Credit Card */}
              <div 
                className={`payment-option ${selectedPayment === 'creditcard' ? 'selected' : ''}`}
                onClick={() => setSelectedPayment('creditcard')}
              >
                <div className="payment-option-content">
                  <span className="payment-option-label">Credit Card</span>
                  <div className="visa-logo">
                    <span className="visa-text">VISA</span>
                    <div className="mastercard-small">
                      <div className="mc-small-circle mc-small-red"></div>
                      <div className="mc-small-circle mc-small-orange"></div>
                    </div>
                  </div>
                </div>
                <div className={`radio-button ${selectedPayment === 'creditcard' ? 'checked' : ''}`}>
                  {selectedPayment === 'creditcard' && <div className="radio-dot"></div>}
                </div>
              </div>

              {/* Other */}
              <div 
                className={`payment-option ${selectedPayment === 'other' ? 'selected' : ''}`}
                onClick={() => setSelectedPayment('other')}
              >
                <div className="payment-option-content">
                  <span className="payment-option-label">Other</span>
                  <div className="amazon-logo">
                    <span className="amazon-text">Amazon</span>
                  </div>
                </div>
                <div className={`radio-button ${selectedPayment === 'other' ? 'checked' : ''}`}>
                  {selectedPayment === 'other' && <div className="radio-dot"></div>}
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="payment-terms">
              <p className="payment-terms-text">
                By clicking "Continue" you agree to terms & conditions of La Russia and Noktua. 
                Noktua's refund policy does not apply to event tickets purchased on the platform.
              </p>
            </div>
          </div>

          {/* Total and Continue Button */}
          <div className="payment-footer">
            <div className="total-section">
              <span className="total-label">Total</span>
              <span className="total-amount">€97.00</span>
            </div>
            <button className="continue-btn">Continue</button>
          </div>

   
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PaymentCheckout;
