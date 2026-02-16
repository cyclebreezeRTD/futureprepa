import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './ClassPerformance.css';

const ClassPerformance: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-no-padding">
        <div className="class-performance-container">
          <div className="class-performance-card">
            {/* Title */}
            <h2 className="performance-title">Class Performance</h2>
            
            {/* Subtitle */}
            <p className="performance-subtitle">All the data in percentage (%)</p>
            
            {/* Legend */}
            <div className="performance-legend">
              <div className="legend-item">
                <span className="legend-dot purple-dot"></span>
                <span className="legend-label">SSS 1</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot green-dot"></span>
                <span className="legend-label">SSS 2</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot yellow-dot"></span>
                <span className="legend-label">SSS 3</span>
              </div>
            </div>
            
            {/* Chart */}
            <div className="performance-chart">
              {/* Bar 1 - Purple - 100 */}
              <div className="chart-column">
                <span className="bar-value">100</span>
                <div className="bar-container">
                  <div className="bar purple-bar" style={{ height: '100%' }}></div>
                </div>
                <span className="bar-label">Performance</span>
              </div>
              
              {/* Bar 2 - Green - 75 */}
              <div className="chart-column">
                <span className="bar-value">75</span>
                <div className="bar-container">
                  <div className="bar green-bar" style={{ height: '75%' }}></div>
                </div>
                <span className="bar-label">Performance</span>
              </div>
              
              {/* Bar 3 - Yellow - 23 */}
              <div className="chart-column">
                <span className="bar-value">23</span>
                <div className="bar-container">
                  <div className="bar yellow-bar" style={{ height: '23%' }}></div>
                </div>
                <span className="bar-label">Performance</span>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ClassPerformance;
