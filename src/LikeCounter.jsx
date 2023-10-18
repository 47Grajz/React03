// import React, { Component } from 'react'

// export default class LikeCounter extends Component {
//   render() {
//     return (
//       <div>LikeCounter</div>
//     )
//   }
// }


import React from 'react';
import LikeButton from './LikeButton';

class LikeCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleLikeChange = (change) => {
    this.setState({ count: this.state.count + change });
  }

  render() {
    return (

        <div className="Likes-cont">
      <div className='Likes'>
        <p>{this.state.count} Likes</p>
        <LikeButton onLikeChange={this.handleLikeChange} />
      </div>

      <p>100  Comments</p>
        </div>
        

    );
  }
}

export default LikeCounter;
