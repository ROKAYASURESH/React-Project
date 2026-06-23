import React from 'react';
import data from '../api/seriesData.json';
import './Loop.css';
import LoopCard from './LoopCard';
import styles from './Loop.module.css';
const Loop = () => {
  return (
    <div className={styles['loop-container']}>
      <h1 className={styles['page-title']}>Loop Component</h1>

      <div className={styles['card-grid']}>
        {data.map((item, index) => (
          <div className={styles['card']} key={index}>
            <LoopCard item={item}>
                <h2 className={styles['card-title']}>This is no prop</h2>
            
                <p>{item.lastModified}</p>
                here we can add any content we want and it will be rendered inside the LoopCard component. This is a powerful feature of React that allows us to create reusable components that can accept any content as children.
            </LoopCard>
          </div>
        ))}
      </div>

      {/* <Dynamic /> */}
    </div>
  );
};

export default Loop;