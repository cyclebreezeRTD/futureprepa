// import { IonContent, IonPage, IonButton } from '@ionic/react';
// import { useHistory } from 'react-router-dom';
// import './FinalWelcome.css';

// import launchIcon from "../images/not3.png"; // Rocket/launch icon

// const FinalWelcome: React.FC = () => {
//   const history = useHistory();

//   const handleGoToDashboard = () => {
//     history.push('/tabs/home');
//   };

//   return (
//     <IonPage>
//       <IonContent className="final-welcome-content">
//         <div className="final-welcome-container">
          
//           {/* Welcome Text */}
//           <div className="final-welcome-text">
//             <h1 className="final-welcome-title">
//               Welcome to<br />FUTUREPREPA!
//             </h1>
//             <p className="final-welcome-subtitle">
//               Your journey to success starts now. Your 1-month free trial is active.
//             </p>
//           </div>

//           {/* Launch Icon - Now side by side with text */}
//           <div className="launch-section">
//             <div className="launch-card">
//               <div className="launch-icon-container">
//                 <img src={launchIcon} alt="Start Learning Now!" className="launch-icon" />
//               </div>
//               <p className="launch-text">Start Learning Now!</p>
//             </div>
//           </div>

//           {/* Go to Dashboard Button */}
//           <div className="final-welcome-button-container">
//             <IonButton 
//               expand="block" 
//               className="dashboard-button"
//               onClick={handleGoToDashboard}
//             >
//               Go to Dashboard
//             </IonButton>
//           </div>

//           {/* Bottom decorative element */}
//           <div className="decorative-bottom-final">
//             <div className="decorative-shape-final"></div>
//           </div>

//         </div>
//       </IonContent>
//     </IonPage>
//   );
// };

// export default FinalWelcome;
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
    history.push('/tabs/home');
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
            <h1 className="notification-title">WELCOME TO FUTURE PREPA</h1>
            <p className="notification-subtitle">
             Your journey to success starts now. Your 1-month free trial is active.
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
              style={{color: "white"}}
            >
            Go to dashboard
            </IonButton>
            
    
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

export default FinalWelcome;