import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonIcon,
} from '@ionic/react';
import { searchOutline, notificationsOutline } from 'ionicons/icons';
import './Learn.css';

const Learn: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="learn-header ion-no-border">
        <IonToolbar>
          <IonTitle className="learn-title">
            <div className="title-small">What would you like to learn?</div>
            <div className="title-big">Learn</div>
          </IonTitle>

          <div slot="end" className="header-icons">
            <IonIcon icon={searchOutline} />
            <IonIcon icon={notificationsOutline} />
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="learn-content">
        {/* Segment */}
        <IonSegment value="stem" className="learn-segment">
          <IonSegmentButton value="exams">
            <IonLabel>Exams</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="stem">
            <IonLabel>STEM</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="skills">
            <IonLabel>Skills</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/* Section */}
        <h3 className="section-title">
          Secondary School Exams <span>ⓘ</span>
        </h3>

        {/* Cards */}
        <div className="course-card orange">
          <h4>WAEC PREPARATION</h4>
          <p>Complete preparation West African Senior School Leaving Certificate</p>

          <div className="card-footer">
            <span>120 Lessons</span>
            <span>40 Mins</span>
          </div>

          <div className="progress">
            <div className="progress-bar" style={{ width: '50%' }} />
          </div>

          <div className="progress-text">50 of 50</div>
        </div>

        <div className="course-card pink">
          <h4>WAEC PREPARATION</h4>
          <p>Complete preparation West African Senior School Leaving Certificate</p>

          <div className="card-footer">
            <span>120 Lessons</span>
            <span>40 Mins</span>
          </div>

          <div className="progress">
            <div className="progress-bar" style={{ width: '80%' }} />
          </div>

          <div className="progress-text">80%</div>
        </div>

        <div className="course-card green">
          <h4>WAEC PREPARATION</h4>
          <p>Complete preparation West African Senior School Leaving Certificate</p>

          <div className="card-footer">
            <span>120 Lessons</span>
            <span>40 Mins</span>
          </div>

          <div className="progress">
            <div className="progress-bar" style={{ width: '50%' }} />
          </div>

          <div className="progress-text">50%</div>
        </div>

        {/* Next Section */}
        <h3 className="section-title">
          Professional Certificate <span>ⓘ</span>
        </h3>

        <div className="course-card purple">
          <h4>ICAN FINANCIAL ACCOUNTING</h4>
          <p>Institute of Chartered Accountants of Nigeria</p>

          <div className="card-footer">
            <span>120 Lessons</span>
            <span>40 Mins</span>
          </div>

          <div className="progress">
            <div className="progress-bar" style={{ width: '80%' }} />
          </div>

          <div className="progress-text">80%</div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Learn;
