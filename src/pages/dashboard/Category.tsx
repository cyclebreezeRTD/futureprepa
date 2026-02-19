// import React, { useState } from 'react';
// import { IonContent, IonPage, IonIcon } from '@ionic/react';
// import { chevronBackOutline } from 'ionicons/icons';
// import './Category.css';

// const Category: React.FC = () => {
//   const [activeFilter, setActiveFilter] = useState('all');

//   const filters = [
//     { id: 'all',          label: 'All',          color: '#4c8dff' },
//     { id: 'unread',       label: 'Unread',       color: '#f4c430' },
//     { id: 'messages',     label: 'Messages',     color: '#ff8c42' },
//     { id: 'announcement', label: 'Announcement', color: '#e91e8c' },
//     { id: 'event',        label: 'Event',        color: '#4caf50' },
//     { id: 'promo',        label: 'Promo',        color: '#9b51e0' },
//   ];

//   const notifications = [
//     {
//       title: 'Resume your learning',
//       desc: 'You stopped at Question 23 of WAEC Maths. Continue where you left off?',
//       time: '2 Hours Ago',
//       action: 'Resume Learning',
//     },
//     {
//       title: 'Resume your learning',
//       desc: 'You stopped at Question 23 of WAEC Maths. Continue where you left off?',
//       time: '2 Hours Ago',
//       action: 'Resume Learning',
//     },
//     {
//       title: 'Resume your learning',
//       desc: 'You stopped at Question 23 of WAEC Maths. Continue where you left off?',
//       time: '2 Hours Ago',
//       action: 'Resume Learning',
//     },
//     {
//       title: 'Resume your learning',
//       desc: 'You stopped at Question 23 of WAEC Maths. Continue where you left off?',
//       time: '2 Hours Ago',
//       action: 'Resume Learning',
//     },
//     {
//       title: 'Resume your learning',
//       desc: 'You stopped at Question 23 of WAEC Maths. Continue where you left off?',
//       time: '2 Hours Ago',
//       action: 'Resume Learning',
//     },
//   ];

//   return (
//     <IonPage>
//       <IonContent fullscreen scrollY={true} className="category-content">

//         {/* ===== HEADER ===== */}
//         <div className="cat-header">
//           <div className="cat-header-top">
//             <IonIcon icon={chevronBackOutline} className="back-icon" />
//             <h1 className="cat-title">Categories</h1>
//           </div>
//           <p className="cat-subtitle">Stay updated with your learning journey</p>

//           {/* Filter Pills - 2 rows */}
//           <div className="filter-pills">
//             {filters.map((f) => (
//               <button
//                 key={f.id}
//                 className={`pill ${activeFilter === f.id ? 'active' : ''}`}
//                 style={{
//                   background: activeFilter === f.id ? f.color : 'transparent',
//                   borderColor: f.color,
//                   color: activeFilter === f.id ? '#fff' : f.color,
//                 }}
//                 onClick={() => setActiveFilter(f.id)}
//               >
//                 {f.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* ===== NOTIFICATION LIST ===== */}
//         <div className="notif-list">
//           {notifications.map((n, i) => (
//             <div key={i} className="notif-card">
//               {/* Icon */}
//               <div className="notif-icon-box">
//                 <img
//                   src="https://via.placeholder.com/36"
//                   alt="icon"
//                   className="notif-icon-img"
//                 />
//               </div>

//               {/* Text */}
//               <div className="notif-body">
//                 <h4 className="notif-title">{n.title}</h4>
//                 <p className="notif-desc">{n.desc}</p>
//                 <div className="notif-footer">
//                   <span className="notif-time">{n.time}</span>
//                   <span className="notif-action">{n.action}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div style={{ height: '80px' }} />
//       </IonContent>
//     </IonPage>
//   );
// };

// export default Category;
import React, { useState } from 'react';
import { IonContent, IonPage, IonIcon } from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';
import './Category.css';

const Category: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all',          label: 'All',          bg: '#4CAF8F' },
    { id: 'unread',       label: 'Unread',       bg: 'linear-gradient(135deg, #e91e8c, #c2185b)' },
    { id: 'messages',     label: 'Messages',     bg: 'linear-gradient(135deg, #f4c430, #e6a800)' },
    { id: 'announcement', label: 'Announcement', bg: 'linear-gradient(135deg, #4c8dff, #6a5acd)' },
    { id: 'event',        label: 'Event',        bg: 'linear-gradient(135deg, #ff6b4a, #e91e8c)' },
    { id: 'promo',        label: 'Promo',        bg: 'linear-gradient(135deg, #9b51e0, #6a1b9a)' },
  ];

  const notifications = [
    {
      title: 'Resume your learning',
      desc: 'You stopped at Question 23 of WAEC Maths. Continue where you left off?',
      time: '2 Hours Ago',
      action: 'Resume Learning',
    },
    {
      title: 'Resume your learning',
      desc: 'You stopped at Question 23 of WAEC Maths. Continue where you left off?',
      time: '2 Hours Ago',
      action: 'Resume Learning',
    },
    {
      title: 'Resume your learning',
      desc: 'You stopped at Question 23 of WAEC Maths. Continue where you left off?',
      time: '2 Hours Ago',
      action: 'Resume Learning',
    },
  ];

  return (
    <IonPage>
      <IonContent fullscreen scrollY={true} className="category-content">

        {/* HEADER */}
        <div className="cat-header">
          <div className="cat-header-top">
            <IonIcon icon={chevronBackOutline} className="back-icon" />
            <h1 className="cat-title">Categories</h1>
          </div>
          <p className="cat-subtitle">Stay updated with your learning journey</p>

          {/* Filter Pills */}
          <div className="filter-pills">
            {filters.map((f) => (
              <button
                key={f.id}
                className={`pill ${activeFilter === f.id ? 'active' : ''}`}
                style={{ background: f.bg } as React.CSSProperties}
                onClick={() => setActiveFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* NOTIFICATION LIST */}
        <div className="notif-list">
          {notifications.map((n, i) => (
            <div key={i} className="notif-card">
              <div className="notif-icon-box">
                <span className="notif-emoji">🖥️</span>
                <span className="notif-emoji-badge">🔖</span>
              </div>
              <div className="notif-body">
                <h4 className="notif-title">{n.title}</h4>
                <p className="notif-desc">{n.desc}</p>
                <div className="notif-footer">
                  <span className="notif-time">{n.time}</span>
                  <span className="notif-action">{n.action}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ height: '80px' }} />
      </IonContent>
    </IonPage>
  );
};

export default Category;