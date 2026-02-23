
import { IonContent, IonPage, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './FinalWelcome.css';

// Import notification icons
import notifIcon1 from "../images/not1.png"; // Bell/reminder icon
import notifIcon2 from "../images/not2.png"; // Alert/learning icon
import notifIcon3 from "../images/not3.png"; // Discount/opportunities icon

interface NotificationReason {
  id: string;
  icon: string;
  title: string;
  color: string;
}

const FinalWelcome: React.FC = () => {
  const history = useHistory();

  const reasons: NotificationReason[] = [

    {
      id: 'opportunities',
      icon: notifIcon3,
      title: 'Start Learning Now',
      color: '#E91E63'
    }
  ];

  const handleAllow = () => {
    history.push('/tabs/home-two');
  };

  const handleNotNow = () => {
    history.push('/free-trial');
  };

return (
    <IonPage>
      <IonContent className="fw-content">
        <div className="fw-container">
          
          <div className="fw-header">
            <h1 className="fw-title">WELCOME TO FUTURE PREPA</h1>
            <p className="fw-subtitle">
              Your journey to success starts now. Your 1-month free trial is active.
            </p>
          </div>

          <div className="fw-card">
            <div className="fw-card-icon" style={{ backgroundColor: '#E91E63' }}>
              <img src={notifIcon3} alt="" className="fw-icon" />
            </div>
            <p className="fw-card-text">Start Learning Now</p>
          </div>

          <div className="fw-buttons">
            <IonButton 
              expand="block" 
              className="fw-button"
              onClick={handleAllow}
              style={{ color: "white" }}
            >
              Go to dashboard
            </IonButton>
          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default FinalWelcome;