import React from 'react';
import './LoadMoreButton.css';
function LoadMoreButton({ loadMore }) {
  return (
    <div className='container'>
      <button className='load-more-btn' onClick={loadMore}>
        Load More
      </button>
    </div>
  );
}

export default LoadMoreButton;
