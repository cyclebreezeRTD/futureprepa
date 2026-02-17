import { IonContent, IonPage, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Onboarding.css';
import onboardingImage from "../images/man.png"; // Your 3D character image
import arrow from "../images/arrow1.png";
import arrow2 from "../images/arrow2.png";
import arrow3 from "../images/arrow3.png";
const Onboarding: React.FC = () => {
  const history = useHistory();

  const handleContinue = () => {
    history.push('/language'); // Navigate to main app
  };

  return (
    <IonPage>
      <IonContent className="onboarding-content">
        <div className="onboarding-container">
                <div className="decorative-elements top">
                      <img src={arrow} alt="" className="arrow arrow-top" />
                    </div>
          {/* Character Image with border */}
          <div className="image-container">
            <img src={onboardingImage} alt="Welcome" className="onboarding-image" />
            <div className="image-dimensions">250 × 245</div>
          </div>

          {/* Welcome Text */}
          <div className="text-container">
            <h1 className="welcome-title">Welcome To FuturePrepa</h1>
            <p className="welcome-subtitle">
              Learning Management Systems for Everyone, scientifically designed to bridge the digital skills gap.
            </p>
          </div>

          {/* Continue Button */}
          <div className="button-container">
            <IonButton 
              expand="block" 
              className="continue-button"
              onClick={handleContinue}
            >
              Continue
            </IonButton>
            <p className="skip-text">Select Language</p>
          </div>

          {/* Bottom decorative elements */}
             <div className="decorative-elements bottom">
            <img src={arrow2} alt="" className="arrow arrow-bottom-left" />
         
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Onboarding;