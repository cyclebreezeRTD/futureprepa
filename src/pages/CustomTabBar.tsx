// import React from 'react';
// import { IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
// import { home, book, add, flask, trendingUp } from 'ionicons/icons';
// import './CustomTabBar.css';

// const CustomTabBar: React.FC = () => {
//   return (
//     <IonTabBar slot="bottom" className="custom-tab-bar">
//       <IonTabButton tab="home" href="/tabs/home" className="tab-button">
//         <IonIcon icon={home} className="tab-icon" />
//         <IonLabel className="tab-label">Home</IonLabel>
//       </IonTabButton>
      
//       <IonTabButton tab="learn" href="/tabs/learn" className="tab-button">
//         <IonIcon icon={book} className="tab-icon" />
//         <IonLabel className="tab-label">Learn</IonLabel>
//       </IonTabButton>
      
//       <IonTabButton tab="add" href="/tabs/add" className="tab-button center-tab">
//         <div className="center-icon-wrapper">
//           <IonIcon icon={add} className="center-icon" />
//         </div>
//       </IonTabButton>
      
//       <IonTabButton tab="lab" href="/tabs/lab" className="tab-button">
//         <IonIcon icon={flask} className="tab-icon" />
//         <IonLabel className="tab-label">Lab</IonLabel>
//       </IonTabButton>
      
//       <IonTabButton tab="insights" href="/tabs/insights" className="tab-button">
//         <IonIcon icon={trendingUp} className="tab-icon" />
//         <IonLabel className="tab-label">Insights</IonLabel>
//       </IonTabButton>
//     </IonTabBar>
//   );
// };

// export default CustomTabBar;
import React from 'react';
import { IonTabBar, IonTabButton, IonLabel } from '@ionic/react';
import './CustomTabBar.css';

// Import your custom images
import homeIcon from '../images/homes.png';
import learnIcon from '../images/learns.png';
import middleIcon from '../images/middle.png';
import labIcon from '../images/labs.png';
import insightsIcon from '../images/insights.png';

const CustomTabBar: React.FC = () => {
  return (
    <IonTabBar slot="bottom" className="custom-tab-bar">
      <IonTabButton tab="home" href="/tabs/home" className="tab-button">
        <img src={homeIcon} alt="Home" className="tab-img-icon" />
        <IonLabel className="tab-label">Home</IonLabel>
      </IonTabButton>

      <IonTabButton tab="learn" href="/tabs/learn" className="tab-button">
        <img src={learnIcon} alt="Learn" className="tab-img-icon" />
        <IonLabel className="tab-label">Learn</IonLabel>
      </IonTabButton>

      <IonTabButton tab="add" href="/tabs/add" className="tab-button center-tab">
        <div className="center-icon-wrapper">
          <img src={middleIcon} alt="Community" className="center-img-icon" />
        </div>
      </IonTabButton>

      <IonTabButton tab="lab" href="/tabs/lab" className="tab-button">
        <img src={labIcon} alt="Lab" className="tab-img-icon" />
        <IonLabel className="tab-label">Lab</IonLabel>
      </IonTabButton>

      <IonTabButton tab="insights" href="/tabs/insights" className="tab-button">
        <img src={insightsIcon} alt="Insights" className="tab-img-icon" />
        <IonLabel className="tab-label">Insights</IonLabel>
      </IonTabButton>
    </IonTabBar>
  );
};

export default CustomTabBar;
