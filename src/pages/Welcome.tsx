import { IonContent, IonPage } from '@ionic/react';
import './Welcome.css';
import arrow from "../images/arrow1.png"
import arrow2 from "../images/arrow2.png"
import arrow3 from "../images/arrow3.png"
import logo from "../images/logo.png"
const Welcome: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="welcome-content">
        <div className="welcome-container">
          {/* Top decorative elements */}
          <div className="decorative-elements top">
            <img src={arrow} alt="" className="arrow arrow-top" />
          </div>

          {/* Logo section */}
          <div className="logo-section">
            <img src={logo} alt="Futureprepa" className="logo" />
          </div>

          {/* Bottom decorative elements */}
          <div className="decorative-elements bottom">
            <img src={arrow2} alt="" className="arrow arrow-bottom-left" />
            <img src={arrow3} alt="" className="arrow arrow-bottom-right" />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;