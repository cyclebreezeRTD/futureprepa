import React from 'react';
import { IonModal, IonButton, IonIcon } from '@ionic/react';
import { close } from 'ionicons/icons';
import './LearnerAcceptedModal.css';

interface LearnerAcceptedModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoToDashboard: () => void;
}

const LearnerAcceptedModal: React.FC<LearnerAcceptedModalProps> = ({
  isOpen,
  onClose,
  onGoToDashboard,
}) => {
  return (
    <IonModal
      isOpen={isOpen}
      onDidDismiss={onClose}
      className="learner-accepted-modal"
      backdropDismiss={true}
    >
      <div className="modal-content">
        <div className="modal-card">
          <h2 className="modal-title">Learner Accepted</h2>
          <p className="modal-description">
            You can now view their dashboard to review their performance
          </p>
          
          <div className="modal-buttons">
            <IonButton
              fill="clear"
              className="cancel-button"
              onClick={onClose}
            >
              Cancel
            </IonButton>
            <IonButton
              className="dashboard-button"
              onClick={onGoToDashboard}
            >
              Go to Dashboard
            </IonButton>
          </div>
        </div>
      </div>
    </IonModal>
  );
};

export default LearnerAcceptedModal;
