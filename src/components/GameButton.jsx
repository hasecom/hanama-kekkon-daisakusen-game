import React, { Component } from 'react'

const style ={
  position:"relative",
  textAlign:"center"
}
class GameButton extends React.Component {

  constructor(props){
    super(props);
    this.buttonObj = (props.message.filter((obj) => obj.param === props.buttonParam))[0];
  }
  render(){
    return(
      <div style={style}>
        <button  type="button" className="nes-btn">
          {this.buttonObj.message}
        </button>
      </div>
    )
  }
}
export default GameButton