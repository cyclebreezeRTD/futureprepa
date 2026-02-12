import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonCard,
  IonCardContent,
  IonButton,
  IonIcon
} from '@ionic/react';
import { bookmarkOutline } from 'ionicons/icons';
import './Category.css';

const Category: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="category-header">
        <IonToolbar>
          <IonTitle>Categories</IonTitle>
        </IonToolbar>

        <div className="subtitle">
          Stay updated with your learning journey
        </div>

        <IonSegment value="unread" className="segment">
          <IonSegmentButton value="unread">
            <IonLabel>Unread</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="messages">
            <IonLabel>Messages</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        <div className="chips">
          <span className="chip blue">Announcement</span>
          <span className="chip red">Event</span>
          <span className="chip purple">Promo</span>
        </div>
      </IonHeader>

      <IonContent fullscreen className="category-content">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <IonCard key={index} className="resume-card">
            <IonCardContent className="card-content">
              <div className="icon-box">
                <IonIcon icon={bookmarkOutline} />
              </div>

              <div className="card-text">
                <h3>Resume your learning</h3>
                <p>
                  You stopped at Question 23 of WAEC Maths.
                  Continue where you left off?
                </p>
                <span className="time">2 Hours Ago</span>
              </div>

              <IonButton fill="clear" className="resume-btn">
                Resume Learning
              </IonButton>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Category;
