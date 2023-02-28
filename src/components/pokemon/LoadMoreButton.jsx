import React from 'react';

function LoadMoreButton({ loadMore }) {
  return (
    <div>
      <button onClick={loadMore}>Load More</button>
    </div>
  );
}

export default LoadMoreButton;
