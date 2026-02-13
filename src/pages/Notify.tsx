import { IonContent, IonPage, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Notify.css';

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

const Notify: React.FC = () => {
  const history = useHistory();

  const reasons: NotificationReason[] = [
    {
      id: 'reminder',
      icon: notifIcon1,
      title: 'Remind me where I stop',
      color: '#4CAF50'
    },
    {
      id: 'learning',
      icon: notifIcon2,
      title: 'Alert you about lapking, Edu & workshops',
      color: '#2196F3'
    },
    {
      id: 'opportunities',
      icon: notifIcon3,
      title: 'Share opportunities & discounts',
      color: '#E91E63'
    }
  ];

  const handleAllow = () => {
    // Request notification permission
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        console.log('Notification permission:', permission);
      });
    }
    history.push('/free-trial');
  };

  const handleNotNow = () => {
    history.push('/free-trial');
  };

  return (
    <IonPage>
      <IonContent className="notification-content">
        <div className="notification-container">
          
          {/* Header Section */}
          <div className="notification-header">
            <h1 className="notification-title">Stay On Track</h1>
            <p className="notification-subtitle">
              Turn on notifications to never miss important updates
            </p>
          </div>

          {/* Notification Reasons */}
          <div className="notification-reasons">
            {reasons.map((reason) => (
              <div key={reason.id} className="notification-reason">
                <div 
                  className="reason-icon-container"
                  style={{ backgroundColor: reason.color }}
                >
                  <img src={reason.icon} alt="" className="reason-icon" />
                </div>
                <p className="reason-text">{reason.title}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="notification-buttons">
            <IonButton 
              expand="block" 
              className="allow-button"
              onClick={handleAllow}
            >
              Allow Notification
            </IonButton>
            
            <button className="not-now-button" onClick={handleNotNow}>
              Not Now
            </button>
          </div>

          {/* Bottom decorative element */}
          <div className="decorative-bottom-notif">
            <div className="decorative-shape-notif"></div>
          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Notify;