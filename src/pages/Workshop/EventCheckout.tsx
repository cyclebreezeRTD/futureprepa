import React, { useState } from 'react';
import { IonContent, IonPage, IonIcon } from '@ionic/react';
import { 
  searchOutline, 
  notifications,
  menu
} from 'ionicons/icons';
import './EventCheckout.css';

const EventCheckout: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    donateAmount: '',
    specialRequest: ''
  });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-no-padding">
        <div className="event-checkout-app">
          {/* Status Bar */}
          <div className="checkout-status-bar">
            <span className="checkout-time">9:41</span>
            <div className="checkout-status-icons">
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
          <header className="checkout-header">
            <button className="checkout-menu-btn">
              <IonIcon icon={menu} className="menu-icon-checkout" />
            </button>
            <div className="checkout-header-title-section">
              <h1 className="checkout-page-title">Event Ticket</h1>
              <p className="checkout-page-subtitle">Live standing</p>
            </div>
            <div className="checkout-header-actions">
              <IonIcon icon={searchOutline} className="checkout-action-icon" />
              <IonIcon icon={notifications} className="checkout-action-icon" />
            </div>
          </header>

          {/* Form Card */}
          <div className="checkout-form-card">
            <h2 className="form-section-title">Event Details</h2>

            {/* First Name */}
            <div className="form-group">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter Your Full Name"
                value={formData.firstName}
                onChange={(e) => handleChange('firstName', e.target.value)}
              />
            </div>

            {/* Last Name */}
            <div className="form-group">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter Your Last Name"
                value={formData.lastName}
                onChange={(e) => handleChange('lastName', e.target.value)}
              />
            </div>

            {/* Email Address */}
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-input"
                placeholder="Enter Your Email Address"
                value={formData.emailAddress}
                onChange={(e) => handleChange('emailAddress', e.target.value)}
              />
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-input"
                placeholder="Enter Your Cell Phone Number"
                value={formData.phoneNumber}
                onChange={(e) => handleChange('phoneNumber', e.target.value)}
              />
            </div>

            {/* Donate on Donation (Optional) */}
            <div className="form-group">
              <label className="form-label">Donate on Donation (Optional)</label>
              <input
                type="text"
                className="form-input"
                placeholder="Optional"
                value={formData.donateAmount}
                onChange={(e) => handleChange('donateAmount', e.target.value)}
              />
            </div>

            {/* Add a Special Request (Optional) */}
            <div className="form-group">
              <label className="form-label">Add a Special Request (Optional)</label>
              <textarea
                className="form-textarea"
                placeholder="Enter your special request"
                value={formData.specialRequest}
                onChange={(e) => handleChange('specialRequest', e.target.value)}
                rows={3}
              />
            </div>

            {/* Terms */}
            <div className="terms-section">
              <p className="terms-text">
                By clicking "Reserve Now" you agree to the <span className="terms-link">Terms of Use</span> and <span className="terms-link">Privacy Policy</span>
              </p>
            </div>

            {/* Submit Button */}
            <button className="reserve-now-btn">Reserve Now</button>
          </div>

          {/* Tab Bar Spacer */}
          <div style={{ height: '80px' }}></div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default EventCheckout;
