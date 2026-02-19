import React from 'react';
import { IonTabBar, IonTabButton, IonLabel } from '@ionic/react';
import './WhiteTab.css';

const WhiteTab: React.FC = () => {
  return (
    <IonTabBar slot="bottom" className="custom-tab-bar">

      <IonTabButton tab="home" href="/tabs/home" className="tab-button">
        <span className="tab-icon">🏠</span>
        <IonLabel className="tab-label">Home</IonLabel>
      </IonTabButton>

      <IonTabButton tab="learn" href="/tabs/learn" className="tab-button">
        <span className="tab-icon">🎓</span>
        <IonLabel className="tab-label">Learn</IonLabel>
      </IonTabButton>

      <IonTabButton tab="add" href="/tabs/add" className="tab-button center-tab">
        <div className="center-icon-wrapper">
          <span style={{ fontSize: '26px' }}>👥</span>
        </div>
      </IonTabButton>

      <IonTabButton tab="lab" href="/tabs/lab" className="tab-button">
        <span className="tab-icon">🧪</span>
        <IonLabel className="tab-label">Lab</IonLabel>
      </IonTabButton>

      <IonTabButton tab="insights" href="/tabs/insights" className="tab-button">
        <span className="tab-icon">📈</span>
        <IonLabel className="tab-label">Insights</IonLabel>
      </IonTabButton>

    </IonTabBar>
  );
};

export default WhiteTab;