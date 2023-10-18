// Reactions.js
import React from 'react';

function Reactions({ likes, comments, shares }) {



  return (
    <div className="reactions">
      <span> Like</span>
      <span> Comment</span>
      <span> Share</span>
    </div>
  );
}

export default Reactions;
