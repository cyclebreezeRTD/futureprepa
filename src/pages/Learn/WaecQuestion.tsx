import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonRadioGroup,
  IonRadio,
  IonButton,
} from '@ionic/react';
import './WaecQuestion.css';

const WaecQuestion: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="question-header ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/waec/practice" />
          </IonButtons>

          <IonTitle className="question-title">
            <div className="title-main">WAEC</div>
            <div className="title-sub">
              West African Examination Council
            </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="question-content">
        {/* Tabs */}
        <IonSegment value="practice" className="question-segment">
          <IonSegmentButton value="overview">
            <IonLabel>Overview</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="practice">
            <IonLabel>Practice</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="pq">
            <IonLabel>PQ</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="analytics">
            <IonLabel>Analytics</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {/* Subject header */}
        <div className="subject-row">
          <h3>English Language</h3>
          <span>50 questions</span>
        </div>

        {/* Question meta */}
        <div className="question-meta">
          <span>Q1. What elements are basic in the program?</span>
          <span className="time">Time: 02:44</span>
        </div>

        {/* Question body */}
        <div className="question-body">
          <p className="question-text">
            1. What elements are basic in the program?
          </p>

          <p className="section-title">Continue</p>

          <IonRadioGroup value="a">
            <label className="option">
              <IonRadio slot="start" value="a" />
              Die Block
            </label>

            <label className="option">
              <IonRadio slot="start" value="b" />
              Film Edits
            </label>

            <label className="option">
              <IonRadio slot="start" value="c" />
              Links
            </label>
          </IonRadioGroup>

          {/* Explanation */}
          <div className="explanation error">
            These options make it possible to create
            various construction works for different
            building construction projects.
          </div>

          <p className="question-text">
            2. Choose the correct option
          </p>

          <IonRadioGroup>
            <label className="option">
              <IonRadio slot="start" />
              Start building your site with the Starter Site
            </label>

            <label className="option">
              <IonRadio slot="start" />
              In the Style panel, you can define the spacing
              (margin and padding) for each element
            </label>
          </IonRadioGroup>

          <div className="explanation error">
            These options make it possible to create
            various construction works for different
            building construction projects.
          </div>

          <p className="question-text">
            3. Choose the correct option
          </p>

          <IonRadioGroup>
            <label className="option">
              <IonRadio slot="start" />
              The main focus of building your website
              should be creating a frictionless experience
            </label>
          </IonRadioGroup>
        </div>

        {/* Pagination */}
        <div className="pagination">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <span key={i} className={i === 1 ? 'dot active' : 'dot'}>
              {i}
            </span>
          ))}
        </div>

        {/* Bottom Nav */}
        <div className="bottom-nav">
          <IonButton fill="clear">Previous</IonButton>
          <IonButton className="next-btn">Next</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default WaecQuestion;
