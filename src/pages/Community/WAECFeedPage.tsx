import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './WAECFeedPage.css';

const WAECFeedPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-no-padding">
        <div className="waec-feed-app">

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
              <h1 className="header-title">WAEC/JAMB Students</h1>
              <p className="header-subtitle">Professional certification study groups for accounting and project management.</p>
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

          {/* Member Avatars Row */}
          <div className="members-row">
            <div className="member-avatars">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" alt="member" className="member-thumb"/>
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" alt="member" className="member-thumb"/>
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" alt="member" className="member-thumb"/>
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" alt="member" className="member-thumb"/>
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80" alt="member" className="member-thumb"/>
            </div>
            <div className="members-info">
              <span className="members-names">Bolu, Titilayo, Dav...</span>
              <span className="members-count">See all</span>
            </div>
          </div>

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
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" alt="Benjamin" className="mentor-avatar"/>
                <p className="mentor-name">Benjamin</p>
                <p className="mentor-role">Financial Analyst</p>
                <button className="follow-btn">Follow</button>
              </div>

              <div className="mentor-card">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" alt="Krissy Joseph" className="mentor-avatar"/>
                <p className="mentor-name">Krissy Joseph</p>
                <p className="mentor-role">Tax Consultant</p>
                <button className="follow-btn">Follow</button>
              </div>

              <div className="mentor-card">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80" alt="Samuel Emi..." className="mentor-avatar"/>
                <p className="mentor-name">Samuel Emi...</p>
                <p className="mentor-role">ICAN Fellow</p>
                <button className="follow-btn">Follow</button>
              </div>

              <div className="mentor-card suggested-tag">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80" alt="Suggested" className="mentor-avatar"/>
                <p className="mentor-name">Amina Bello</p>
                <p className="mentor-role">Suggested</p>
                <button className="follow-btn">Follow</button>
              </div>

            </div>
          </div>

          {/* Divider */}
          <div className="section-divider"/>

          {/* Feed Posts */}
          <div className="feed-list">

            {/* Post 1 — Tarique Iyer with image */}
            <div className="post-card">
              <div className="post-header">
                <div className="post-avatar-wrap">
                  <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80" alt="Tarique Iyer" className="post-avatar"/>
                  <div className="online-dot"/>
                </div>
                <div className="post-author-info">
                  <p className="post-author-name">Tarique Iyer</p>
                  <p className="post-time">April 17</p>
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
                Hey guys,
              </p>
              <p className="post-text">
                I'll be attending the upcoming <span className="hashtag">#WomenInTech</span> conference in dubai next fall <span className="emoji">🙌🙌🙌</span>
              </p>
              <p className="post-text post-question">
                Will you be coming?
              </p>

              {/* Post Image */}
              <div className="post-image-container">
                <img
                  src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80"
                  alt="Conference"
                  className="post-image"
                />
                {/* Floating + button on image */}
                <button className="img-add-btn">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2v12M2 8h12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Reaction pills */}
              <div className="reaction-pills">
                <button className="reaction-pill active-reaction">
                  <span>😍</span> <span className="reaction-label">Interested</span>
                </button>
                <button className="reaction-pill">
                  <span>😂</span> <span className="reaction-label">Not Interested</span>
                </button>
                <button className="reaction-pill">
                  <span>🔥</span> <span className="reaction-label">Going</span>
                </button>
              </div>

              {/* Post Actions */}
              <div className="post-actions">
                <div className="action-group">
                  <button className="action-btn">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                      <path d="M8.5 14.5L7.2 13.4C2.8 9.8 0 7.5 0 4.8 0 2.6 1.8 1 4 1c1.2 0 2.4.6 3.2 1.5C8 1.6 9.2 1 10.4 1c2.2 0 4 1.6 4 3.8 0 2.7-2.8 5-7.2 8.5L8.5 14.5z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"/>
                    </svg>
                    <span>121</span>
                  </button>
                  <button className="action-btn">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                      <path d="M15 1H2C1.4 1 1 1.4 1 2v8c0 .6.4 1 1 1h3v3l3-3h7c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"/>
                    </svg>
                    <span>11</span>
                  </button>
                  <button className="action-btn">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                      <path d="M1 8l4.5-6.5v3.5C11 5 14.5 7.5 15.5 13c-1.5-2.5-4-4-9.5-4V12.5L1 8z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"/>
                    </svg>
                    <span>63</span>
                  </button>
                </div>
                <button className="bookmark-btn">
                  <svg width="14" height="17" viewBox="0 0 14 17" fill="none">
                    <path d="M1 1h12v15l-6-3.5L1 16V1z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Post 2 — Diane J. text only */}
            <div className="post-card">
              <div className="post-header">
                <div className="post-avatar-wrap">
                  <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&q=80" alt="Diane J." className="post-avatar"/>
                </div>
                <div className="post-author-info">
                  <p className="post-author-name">Diane J.</p>
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
                Far conseem olodatom utem amet ullas nisi sed. Et at Pellentesque ulter arcu in gua in sapien.
              </p>

              <div className="post-actions">
                <div className="action-group">
                  <button className="action-btn">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                      <path d="M8.5 14.5L7.2 13.4C2.8 9.8 0 7.5 0 4.8 0 2.6 1.8 1 4 1c1.2 0 2.4.6 3.2 1.5C8 1.6 9.2 1 10.4 1c2.2 0 4 1.6 4 3.8 0 2.7-2.8 5-7.2 8.5L8.5 14.5z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"/>
                    </svg>
                    <span>121</span>
                  </button>
                  <button className="action-btn">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                      <path d="M15 1H2C1.4 1 1 1.4 1 2v8c0 .6.4 1 1 1h3v3l3-3h7c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"/>
                    </svg>
                    <span>11</span>
                  </button>
                  <button className="action-btn">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                      <path d="M1 8l4.5-6.5v3.5C11 5 14.5 7.5 15.5 13c-1.5-2.5-4-4-9.5-4V12.5L1 8z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"/>
                    </svg>
                    <span>63</span>
                  </button>
                </div>
                <button className="bookmark-btn">
                  <svg width="14" height="17" viewBox="0 0 14 17" fill="none">
                    <path d="M1 1h12v15l-6-3.5L1 16V1z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2"/>
                  </svg>
                </button>
              </div>
            </div>

          </div>

          {/* Reply to message bar */}
          <div className="reply-bar">
            <button className="reply-btn">Reply to this message</button>
          </div>

          {/* FAB */}
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

export default WAECFeedPage;
