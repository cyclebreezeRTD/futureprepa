import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './ICANFeedPage.css';

const ICANFeedPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-no-padding">
        <div className="feed-app">

          {/* Status Bar */}
          <div className="status-bar">
            <span className="time">9:41</span>
            <div className="status-icons">
              <svg width="18" height="12" viewBox="0 0 18 12" fill="white">
                <path d="M0 0h4v12H0V0zm7 0h4v12H7V0zm7 0h4v12h-4V0z" opacity="0.4"/>
                <path d="M0 0h4v12H0V0z"/>
              </svg>
              <svg width="16" height="11" viewBox="0 0 16 11" fill="white">
                <path d="M8 0C3.6 0 0 2.5 0 5.5S3.6 11 8 11s8-2.5 8-5.5S12.4 0 8 0z" opacity="0.4"/>
                <path d="M8 2c2.8 0 5 1.6 5 3.5S10.8 9 8 9 3 7.4 3 5.5 5.2 2 8 2z"/>
              </svg>
              <svg width="25" height="12" viewBox="0 0 25 12" fill="white">
                <rect width="18" height="12" rx="2" opacity="0.4"/>
                <rect x="2" y="2" width="14" height="8" rx="1"/>
              </svg>
            </div>
          </div>

          {/* Top Header */}
          <header className="top-header">
            <button className="back-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 16l-5-5 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="header-center">
              <h1 className="header-title">ICAN Professionals</h1>
              <p className="header-subtitle">Professional certification study groups for accounting and other professions</p>
            </div>
            <div className="header-actions">
              <button className="icon-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="1.8"/>
                  <path d="M14 14l4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </button>
              <button className="icon-btn">
                <svg width="5" height="20" viewBox="0 0 5 20" fill="white">
                  <circle cx="2.5" cy="2.5" r="2.5"/>
                  <circle cx="2.5" cy="10" r="2.5"/>
                  <circle cx="2.5" cy="17.5" r="2.5"/>
                </svg>
              </button>
            </div>
          </header>

          {/* Filter Tabs */}
          <div className="filter-tabs">
            <button className="filter-tab active-tab">New Post</button>
            <button className="filter-tab">Resources</button>
            <button className="filter-tab">Members</button>
            <button className="filter-tab">Admins</button>
            <button className="filter-tab">Scholarships</button>
          </div>

          {/* Suggested Mentors */}
          <div className="mentors-section">
            <h2 className="mentors-title">Suggested Mentors to follow</h2>
            <div className="mentors-scroll">

              <div className="mentor-card">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
                  alt="Ola Oyeleke"
                  className="mentor-avatar"
                />
                <p className="mentor-name">Ola Oyeleke</p>
                <p className="mentor-role">Financial Analyst</p>
                <button className="follow-btn">Follow</button>
              </div>

              <div className="mentor-card">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
                  alt="Krissy Joseph"
                  className="mentor-avatar"
                />
                <p className="mentor-name">Krissy Joseph</p>
                <p className="mentor-role">Tax Consultant</p>
                <button className="follow-btn">Follow</button>
              </div>

              <div className="mentor-card">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"
                  alt="Samuel Emeka"
                  className="mentor-avatar"
                />
                <p className="mentor-name">Samuel Emeka</p>
                <p className="mentor-role">ICAN Fellow</p>
                <button className="follow-btn">Follow</button>
              </div>

              <div className="mentor-card">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
                  alt="Amina Bello"
                  className="mentor-avatar"
                />
                <p className="mentor-name">Amina Bello</p>
                <p className="mentor-role">Audit Manager</p>
                <button className="follow-btn">Follow</button>
              </div>

            </div>
          </div>

          {/* Feed Posts */}
          <div className="feed-list">

            {/* Post 1 — Text only */}
            <div className="post-card">
              <div className="post-header">
                <img
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80"
                  alt="Adebayo Olu"
                  className="post-avatar"
                />
                <div className="post-author-info">
                  <p className="post-author-name">Adebayo Olu</p>
                  <p className="post-author-role">The beauty of Nigeria</p>
                </div>
                <button className="more-btn">
                  <svg width="4" height="16" viewBox="0 0 4 16" fill="rgba(255,255,255,0.6)">
                    <circle cx="2" cy="2" r="2"/>
                    <circle cx="2" cy="8" r="2"/>
                    <circle cx="2" cy="14" r="2"/>
                  </svg>
                </button>
              </div>
              <p className="post-text">
                Jincit ullamum equotur rem am. Vitae auctor nunc odis raucalis, disginlim nisi nimeticum peusemat lith alilium, culpam et retentor praeten vitem equa anglia.
              </p>
              <p className="post-text post-text-more">
                Tran ov me ligula commodo avan ad niopi turba. profus equo niler at Marcium liquis acti armo eu feros. Dignissim diam ex laborit et elit ultuer em in onam ex orro dolisce pifer sena. Iblentor vulputfree quaelfree vulputate turpin et vel lit Mecca.
              </p>
              <div className="post-actions">
                <div className="action-group">
                  <button className="action-btn">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9 16L7.5 14.8C2.7 10.9 0 8.4 0 5.4 0 2.9 2 1 4.5 1c1.4 0 2.7.7 3.5 1.7C8.8 1.7 10.1 1 11.5 1 14 1 16 2.9 16 5.4c0 3-2.7 5.5-7.5 9.4L9 16z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3"/>
                    </svg>
                    <span>121</span>
                  </button>
                  <button className="action-btn">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M16 2H2C1.4 2 1 2.4 1 3v9c0 .6.4 1 1 1h3v3l3-3h8c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3"/>
                    </svg>
                    <span>11</span>
                  </button>
                  <button className="action-btn">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M1 9l5-7v4c6 0 10 3 11 9-2-3-5-5-11-5v4L1 9z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3"/>
                    </svg>
                    <span>63</span>
                  </button>
                </div>
                <button className="bookmark-btn">
                  <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                    <path d="M1 1h14v16l-7-4-7 4V1z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Post 2 — With image */}
            <div className="post-card">
              <div className="post-header">
                <img
                  src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&q=80"
                  alt="User"
                  className="post-avatar"
                />
                <div className="post-author-info">
                  <p className="post-author-name">Diane J.</p>
                  <p className="post-time">April 17 • 12:41</p>
                </div>
                <button className="more-btn">
                  <svg width="4" height="16" viewBox="0 0 4 16" fill="rgba(255,255,255,0.6)">
                    <circle cx="2" cy="2" r="2"/>
                    <circle cx="2" cy="8" r="2"/>
                    <circle cx="2" cy="14" r="2"/>
                  </svg>
                </button>
              </div>
              <div className="post-image-container">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
                  alt="Post"
                  className="post-image"
                />
              </div>
              <div className="post-actions">
                <div className="action-group">
                  <button className="action-btn">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9 16L7.5 14.8C2.7 10.9 0 8.4 0 5.4 0 2.9 2 1 4.5 1c1.4 0 2.7.7 3.5 1.7C8.8 1.7 10.1 1 11.5 1 14 1 16 2.9 16 5.4c0 3-2.7 5.5-7.5 9.4L9 16z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3"/>
                    </svg>
                    <span>121</span>
                  </button>
                  <button className="action-btn">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M16 2H2C1.4 2 1 2.4 1 3v9c0 .6.4 1 1 1h3v3l3-3h8c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3"/>
                    </svg>
                    <span>11</span>
                  </button>
                  <button className="action-btn">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M1 9l5-7v4c6 0 10 3 11 9-2-3-5-5-11-5v4L1 9z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3"/>
                    </svg>
                    <span>63</span>
                  </button>
                </div>
                <button className="bookmark-btn">
                  <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                    <path d="M1 1h14v16l-7-4-7 4V1z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Post 3 — Text only */}
            <div className="post-card">
              <div className="post-header">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80"
                  alt="Emre J."
                  className="post-avatar"
                />
                <div className="post-author-info">
                  <p className="post-author-name">Emre J.</p>
                  <p className="post-time">April 17 • 10:52</p>
                </div>
                <button className="more-btn">
                  <svg width="4" height="16" viewBox="0 0 4 16" fill="rgba(255,255,255,0.6)">
                    <circle cx="2" cy="2" r="2"/>
                    <circle cx="2" cy="8" r="2"/>
                    <circle cx="2" cy="14" r="2"/>
                  </svg>
                </button>
              </div>
              <p className="post-text">
                Est ut proident amet ulter ulter nisi sed ut at Pellentesque ulter arcu in gua sapien.
              </p>
              <div className="post-actions">
                <div className="action-group">
                  <button className="action-btn">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9 16L7.5 14.8C2.7 10.9 0 8.4 0 5.4 0 2.9 2 1 4.5 1c1.4 0 2.7.7 3.5 1.7C8.8 1.7 10.1 1 11.5 1 14 1 16 2.9 16 5.4c0 3-2.7 5.5-7.5 9.4L9 16z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3"/>
                    </svg>
                    <span>121</span>
                  </button>
                  <button className="action-btn">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M16 2H2C1.4 2 1 2.4 1 3v9c0 .6.4 1 1 1h3v3l3-3h8c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3"/>
                    </svg>
                    <span>11</span>
                  </button>
                  <button className="action-btn">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M1 9l5-7v4c6 0 10 3 11 9-2-3-5-5-11-5v4L1 9z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3"/>
                    </svg>
                    <span>63</span>
                  </button>
                </div>
                <button className="bookmark-btn">
                  <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                    <path d="M1 1h14v16l-7-4-7 4V1z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3"/>
                  </svg>
                </button>
              </div>
            </div>

          </div>

          {/* Floating Action Button */}
          <button className="fab">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M11 2v18M2 11h18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </button>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default ICANFeedPage;
