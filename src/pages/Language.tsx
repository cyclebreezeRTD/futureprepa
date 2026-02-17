import { IonContent, IonPage, IonButton } from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Language.css';
import arrow from "../images/arrow1.png";
import arrow2 from "../images/arrow2.png";
import arrow3 from "../images/arrow3.png";
const Language: React.FC = () => {
  const history = useHistory();
  const [selectedLanguage, setSelectedLanguage] = useState<string>('English');

  const languages = ['English', 'French', 'Arabic', 'Yoruba', 'Swahili', 'Hausa'];

  const handleContinue = () => {
    // Save selected language (you can use localStorage or context)
    localStorage.setItem('selectedLanguage', selectedLanguage);
    history.push('/role'); // Navigate to main app
  };

  return (
    <IonPage>
      <IonContent className="language-content">
        <div className="language-container">
          
          {/* Header Section */}
          <div className="language-header">
            <h1 className="language-title">Select Language</h1>
            <p className="language-subtitle">
              Tell us more about your role, so we can personalize your experience.
            </p>
          </div>

          {/* Language Options */}
          <div className="language-options">
            {languages.map((language) => (
              <div
                key={language}
                className={`language-option ${selectedLanguage === language ? 'selected' : ''}`}
                onClick={() => setSelectedLanguage(language)}
              >
                <span className="language-name">{language}</span>
                {selectedLanguage === language && (
                  <div className="checkmark">✓</div>
                )}
              </div>
            ))}
          </div>

          {/* Continue Button */}
          <div className="language-button-container">
            <IonButton 
              expand="block" 
              className="language-continue-button"
              onClick={handleContinue}
                       style={{color: "white"}}
            >
              Continue
            </IonButton>
          </div>

          {/* Bottom decorative elements */}
          <div className="decorative-bottom-lang">
            <div className="decorative-shape-lang decorative-left-lang"></div>
          </div>
                  <div className="decorative-elements bottom">
            <img src={arrow2} alt="" className="arrow arrow-bottom-left" />
         
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Language;