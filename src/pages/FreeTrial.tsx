import { IonContent, IonPage, IonButton } from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './FreeTrial.css';

interface PricingPlan {
  id: string;
  duration: string;
  originalPrice: string;
  discountedPrice: string;
  period: string;
  badge?: string;
}

const FreeTrial: React.FC = () => {
  const history = useHistory();
  const [selectedPlan, setSelectedPlan] = useState<string>('3month');

  const benefits = [
    'Positive Habits & track them',
    'Prioritized access to co-curricular opportunities',
    'AI-powered learning assistance',
    'Personalized web optimization',
    'Progress tracking & analytics'
  ];

  const plans: PricingPlan[] = [
    {
      id: '1month',
      duration: 'After your Free Trial',
      originalPrice: '₦2000',
      discountedPrice: '₦18,000',
      period: '/ Month',
      badge: undefined
    },
    {
      id: '3month',
      duration: 'After your Free Trial',
      originalPrice: '₦6000',
      discountedPrice: '₦10,000',
      period: '/ 3 Month',
      badge: 'BEST VALUE'
    },
    {
      id: '6month',
      duration: 'After your Free Trial',
      originalPrice: '₦12000',
      discountedPrice: '₦18,000',
      period: '/ 6 Month',
      badge: undefined
    }
  ];

  const handleStartTrial = () => {
    console.log('Selected plan:', selectedPlan);
    history.push('/tabs/tab1');
  };

  const handleNoCharge = () => {
    history.push('/tabs/tab1');
  };

  return (
    <IonPage>
      <IonContent className="trial-content">
        <div className="trial-container">
          
          {/* Header Badge */}
          <div className="trial-badge">SPECIAL OFFER</div>

          {/* Header Section */}
          <div className="trial-header">
            <h1 className="trial-title">Your Free Trial Starts Now</h1>
            <p className="trial-duration">3 Month Free</p>
          </div>

          {/* Benefits Section */}
          <div className="trial-benefits">
            <h3 className="benefits-title">Premium benefits included</h3>
            <div className="benefits-list">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <span className="benefit-checkmark">✓</span>
                  <span className="benefit-text">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Plans */}
          <div className="pricing-section">
            <h3 className="pricing-title">After your Free Trial</h3>
            <div className="pricing-plans">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`pricing-card ${selectedPlan === plan.id ? 'selected' : ''}`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.badge && (
                    <div className="plan-badge">{plan.badge}</div>
                  )}
                  <div className="plan-price">
                    <span className="original-price">{plan.originalPrice}</span>
                    <span className="discounted-price">{plan.discountedPrice}</span>
                  </div>
                  <p className="plan-period">{plan.period}</p>
                  {selectedPlan === plan.id && (
                    <div className="plan-checkmark">✓</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* No Charge Info */}
          <div className="no-charge-info" onClick={handleNoCharge}>
            <span className="crown-icon">👑</span>
            <span className="no-charge-text">You won't be charged Now</span>
          </div>

          {/* Start Trial Button */}
          <div className="trial-button-container">
            <IonButton 
              expand="block" 
              className="start-trial-button"
              onClick={handleStartTrial}
            >
              Start Free trial Now
            </IonButton>
          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default FreeTrial;