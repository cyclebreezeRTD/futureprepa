import {
  IonPage,
  IonContent,
  IonSearchbar,
} from '@ionic/react';
import './Explore.css';

const Explore: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="explore-content">
        {/* Search */}
        <div className="search-wrapper">
          <IonSearchbar
            value="WAEC"
            showClearButton="always"
            className="searchbar"
          />
        </div>

        {/* Result label */}
        <div className="search-result">
          <span className="icon">🔍</span>
          <div>
            <div className="title">WAEC</div>
            <div className="subtitle">CBT</div>
          </div>
        </div>

        {/* Cards */}
        <div className="cards">
          <div className="subject-card math">
            <h2>Mathematics</h2>
          </div>

          <div className="subject-card physics">
            <h2>Physics</h2>
          </div>

          <div className="subject-card chemistry">
            <h2>Chemistry</h2>
          </div>

          <div className="subject-card reasoning">
            <h2>Reasoning</h2>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Explore;
