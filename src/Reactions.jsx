// Reactions.js
import React from 'react';

function Reactions({ likes, comments, shares }) {

   var likes = 50; 
   var comments = 10; 
   var shares = 50; 

  return (
    <div className="reactions">
      <span>{likes} Likes</span>
      <span>{comments} Comments</span>
      <span>{shares} Shares</span>
    </div>
  );
}

export default Reactions;
