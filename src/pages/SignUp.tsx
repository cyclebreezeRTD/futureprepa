import { IonContent, IonPage, IonButton, IonIcon } from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { eyeOffOutline, eyeOutline } from 'ionicons/icons';
import './SignUp.css';
import arrow from "../images/arrow1.png";
import arrow2 from "../images/arrow2.png";
import arrow3 from "../images/arrow3.png";
// Import your character image and social icons
import signupCharacter from "../images/man.png";
import googleIcon from "../images/google.png";
import microsoftIcon from "../images/microsoft.png";
import appleIcon from "../images/slack.png";

const SignUp: React.FC = () => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    country: '',
    coo: '',
    age: '',
    password: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSignUp = () => {
    // Save user data and navigate
    console.log('Sign up data:', formData);
    history.push('/login');
  };

  return (
    <IonPage>
      <IonContent className="signup-content">
        <div className="signup-container">
                 <div className="decorative-elements top">
            <img src={arrow} alt="" className="arrow arrow-top" />
          </div>

          {/* Character Image */}
          <div className="signup-character-section">
            <img src={signupCharacter} alt="Sign Up" className="signup-character" />
          </div>

          {/* Form Section */}
          <div className="signup-form">
            
            {/* Email */}
            <div className="form-group">
              <label className="form-label">Email</label>
              <div className="input-wrapper">
                <span className="input-icon">📧</span>
                <input
                  type="email"
                  placeholder="email@email.com"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
            </div>

            {/* Phone */}
            <div className="form-group">
              <label className="form-label">Phone no</label>
              <div className="input-wrapper">
                <span className="input-icon">📱</span>
                <input
                  type="tel"
                  placeholder="Enter your phone no"
                  className="form-input"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>
            </div>

            {/* Country */}
            <div className="form-group">
              <label className="form-label">Country</label>
              <div className="input-wrapper">
                <span className="input-icon">🌍</span>
                <input
                  type="text"
                  placeholder="Enter your country of Residence"
                  className="form-input"
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                />
              </div>
            </div>

            {/* COO (Country of Origin) */}
            <div className="form-group">
              <label className="form-label">COO</label>
              <div className="input-wrapper">
                <span className="input-icon">🏳️</span>
                <input
                  type="text"
                  placeholder="Enter your Country of Origin"
                  className="form-input"
                  value={formData.coo}
                  onChange={(e) => handleInputChange('coo', e.target.value)}
                />
              </div>
            </div>

            {/* Age */}
            <div className="form-group">
              <label className="form-label">Age</label>
              <div className="input-wrapper">
                <span className="input-icon">🎂</span>
                <input
                  type="number"
                  placeholder="Enter your Age"
                  className="form-input"
                  value={formData.age}
                  onChange={(e) => handleInputChange('age', e.target.value)}
                />
              </div>
            </div>

            {/* Password */}
            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="input-wrapper">
                <span className="input-icon">🔒</span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="form-input"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                />
                <IonIcon
                  icon={showPassword ? eyeOutline : eyeOffOutline}
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
            </div>

            {/* Password Requirements */}
            <div className="password-requirements">
              <div className="requirement-item">• Min. 8 characters</div>
              <div className="requirement-item">• A number</div>
              <div className="requirement-item">• Upper and lowercase letters</div>
              <div className="requirement-item">• A special symbol</div>
            </div>

            {/* Sign Up Button */}
            <IonButton 
              expand="block" 
              className="signup-button"
              onClick={handleSignUp}
            >
              Sign up
            </IonButton>

            {/* Social Sign Up */}
            <div className="social-signup">
              <button className="social-button">
                <img src={appleIcon} alt="Apple" className="social-icon" />
              </button>
              <button className="social-button">
                <img src={microsoftIcon} alt="Microsoft" className="social-icon" />
              </button>
              <button className="social-button">
                <img src={googleIcon} alt="Google" className="social-icon" />
              </button>
            </div>

          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;