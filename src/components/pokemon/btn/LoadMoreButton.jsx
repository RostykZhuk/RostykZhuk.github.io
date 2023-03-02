import React from 'react';
import './LoadMoreButton.css';
function LoadMoreButton({ loadMore }) {
  return (
    <div className='btn-container'>
      <button className='btn' onClick={loadMore}>
        Load More
      </button>
    </div>
  );
}

export default LoadMoreButton;
