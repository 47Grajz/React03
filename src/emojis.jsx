import React, { Component } from 'react'
import LikeButton from './LikeButton'

export default class emojis extends Component {


  constructor(props) {
    super(props);
    this.state = {
      count: 10,
    };
  }

  handleLikeChange = (change) => {
    this.setState({ count: this.state.count + change });
  }


  render() {
    return (
      <div className="emojis-cont">
      <div className="emojis">


        <LikeButton onLikeChange={this.handleLikeChange} />
        <span>{this.state.count} Likes</span>
        
      </div>

    <span>{comments} Coments</span>

    </div>
    )
  }
}
