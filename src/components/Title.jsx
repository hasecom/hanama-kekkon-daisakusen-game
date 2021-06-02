import React, { Component } from 'react'
const style ={
  right:0,
  left:0,
  fontSize:"23px",
  fontWeight:"bold"
}
class Title extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    this.titleActive = (this.props.constant.filter((obj) => obj.triggerId === this.props.state.triggerId && obj.triggerType === this.props.state.triggerType))[0] || null;
    return(
      <>
        { this.titleActive != null &&
        <h2 id="topText" style={style}>{this.titleActive.title}</h2>
        }
      </>
    )
  }
}

export default Title
