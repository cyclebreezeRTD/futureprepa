import { IonContent, IonPage, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './FinalWelcome.css';

import launchIcon from "../images/not3.png"; // Rocket/launch icon

const FinalWelcome: React.FC = () => {
  const history = useHistory();

  const handleGoToDashboard = () => {
    history.push('/tabs/tab1');
  };

  return (
    <IonPage>
      <IonContent className="final-welcome-content">
        <div className="final-welcome-container">
          
          {/* Welcome Text */}
          <div className="final-welcome-text">
            <h1 className="final-welcome-title">
              Welcome to<br />FUTUREPREPA!
            </h1>
            <p className="final-welcome-subtitle">
              Your journey to success starts now. Your 1-month free trial is active.
            </p>
          </div>

          {/* Launch Icon */}
          <div className="launch-section">
            <div className="launch-icon-container">
              <img src={launchIcon} alt="Next Learning Now!" className="launch-icon" />
            </div>
            <p className="launch-text">Next Learning Now!</p>
          </div>

          {/* Go to Dashboard Button */}
          <div className="final-welcome-button-container">
            <IonButton 
              expand="block" 
              className="dashboard-button"
              onClick={handleGoToDashboard}
            >
              Go to Dashboard
            </IonButton>
          </div>

          {/* Bottom decorative element */}
          <div className="decorative-bottom-final">
            <div className="decorative-shape-final"></div>
          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default FinalWelcome;