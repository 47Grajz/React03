// Post.js
import React from 'react';
import UserInfo from './UserInfo';
import Content from './Content';
import Reactions from './Reactions';
import OptionsButton from './Options';
import LikeCounter from './LikeCounter';

// import Emojis from './emojis';


function Post({ userName, userAvatar, postContent, likes, comments, shares }) {
    return (
      <div className="Post">
        <div className="options"><OptionsButton /></div>
        <div className="UserInfoCont">
        <UserInfo userName={userName} userAvatar={userAvatar} />
        </div>
        <div className="Content">
        <Content postContent={postContent} />
        </div>
        <LikeCounter />
        <div className="">
        <Reactions likes={likes} comments={comments} shares={shares} />
        </div>


      </div>
    );
  }

export default Post;
