import { IonContent, IonPage, IonButton } from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Role.css';

// Import your role icons
import studentIcon from "../images/student.png";
import parentIcon from "../images/book.png";
import teacherIcon from "../images/cap.png";
import professionalIcon from "../images/cpd.png";
import arrow from "../images/arrow1.png";
import arrow2 from "../images/arrow2.png";
import arrow3 from "../images/arrow3.png";
interface Role {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
}

const Role: React.FC = () => {
  const history = useHistory();
  const [selectedRole, setSelectedRole] = useState<string>('student');

  const roles: Role[] = [
    {
      id: 'student',
      title: 'Student',
      subtitle: 'WAEC, NECO, skills, opportunities',
      icon: studentIcon,
      color: '#229CE9'
    },
    {
      id: 'parent',
      title: 'Parents/Guardians',
      subtitle: 'Connect to and support a student',
      icon: parentIcon,
      color: '#FFC107'
    },
    {
      id: 'teacher',
      title: 'School/ Teacher',
      subtitle: 'Class & school-level oversight',
      icon: teacherIcon,
      color: '#E91E63'
    },
    {
      id: 'professional',
      title: 'Professional',
      subtitle: 'ICAN, CIPM, ACCA, PMP',
      icon: professionalIcon,
      color: '#229CE9'
    }
  ];

  const handleContinue = () => {
    // Save selected role
    localStorage.setItem('selectedRole', selectedRole);
    history.push('/preparing'); // Navigate to main app
  };

  return (
    <IonPage>
      <IonContent className="role-content">
        <div className="role-container">
                   <div className="decorative-elements top">
            <img src={arrow} alt="" className="arrow arrow-top" />
          </div>
          {/* Header Section */}
          <div className="role-header">
            <h1 className="role-title">What is your Role?</h1>
            <p className="role-subtitle">
              Tell us more about your role, so we can personalise your experience.
            </p>
          </div>

          {/* Role Options */}
          <div className="role-options">
            {roles.map((role) => (
              <div
                key={role.id}
                className={`role-option ${selectedRole === role.id ? 'selected' : ''}`}
                onClick={() => setSelectedRole(role.id)}
                style={{
                  borderColor: selectedRole === role.id ? role.color : 'rgba(255, 255, 255, 0.2)'
                }}
              >
                <div 
                  className="role-icon-container"
                  style={{ backgroundColor: role.color }}
                >
                  <img src={role.icon} alt={role.title} className="role-icon" />
                </div>
                <div className="role-text">
                  <h3 className="role-name">{role.title}</h3>
                  <p className="role-description">{role.subtitle}</p>
                </div>
                {selectedRole === role.id && (
                  <div className="role-checkmark">✓</div>
                )}
              </div>
            ))}
          </div>

          {/* Continue Button */}
          <div className="role-button-container">
            <IonButton 
              expand="block" 
              className="role-continue-button"
              onClick={handleContinue}
                       style={{color: "white"}}
            >
              Continue
            </IonButton>
          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Role;