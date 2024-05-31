import React from 'react';

function Track({ track }) {
  return (
    <div className="Track">
      <p>{track.title}</p>
      {/* Additional track information and actions can be added here */}
    </div>
  );
}

export default Track;
