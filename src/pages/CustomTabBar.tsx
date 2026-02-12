import React from 'react';
import { IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { home, book, add, flask, trendingUp } from 'ionicons/icons';
import './CustomTabBar.css';

const CustomTabBar: React.FC = () => {
  return (
    <IonTabBar slot="bottom" className="custom-tab-bar">
      <IonTabButton tab="home" href="/tabs/home" className="tab-button">
        <IonIcon icon={home} className="tab-icon" />
        <IonLabel className="tab-label">Home</IonLabel>
      </IonTabButton>
      
      <IonTabButton tab="learn" href="/tabs/learn" className="tab-button">
        <IonIcon icon={book} className="tab-icon" />
        <IonLabel className="tab-label">Learn</IonLabel>
      </IonTabButton>
      
      <IonTabButton tab="add" href="/tabs/add" className="tab-button center-tab">
        <div className="center-icon-wrapper">
          <IonIcon icon={add} className="center-icon" />
        </div>
      </IonTabButton>
      
      <IonTabButton tab="lab" href="/tabs/lab" className="tab-button">
        <IonIcon icon={flask} className="tab-icon" />
        <IonLabel className="tab-label">Lab</IonLabel>
      </IonTabButton>
      
      <IonTabButton tab="insights" href="/tabs/insights" className="tab-button">
        <IonIcon icon={trendingUp} className="tab-icon" />
        <IonLabel className="tab-label">Insights</IonLabel>
      </IonTabButton>
    </IonTabBar>
  );
};

export default CustomTabBar;
