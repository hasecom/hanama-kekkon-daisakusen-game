import React, { Component } from 'react'
import PropTypes from 'prop-types';

const style ={
  position:"relative",
  textAlign:"center",
}
class GameButton extends React.Component {
  constructor(props){
    super(props);

  }
  handleClick() {
    const {triggerName,buttonParam} = this.props;
    return this.props.callbackMethod(triggerName,buttonParam);
  }
  render(){
    this.buttonObj = (this.props.message.filter((obj) => obj.param === this.props.buttonParam))[0];
    const isShow = this.props.buttonParam < 1;
    return(
      <>
        { !isShow &&
          <div style={style}>
            <button type="button" className="nes-btn" onClick={() => {this.handleClick()}}>
              {this.buttonObj.message}
            </button>
          </div>
        }
      </>
    )
  }
}
GameButton.propTypes = {
  callbackMethod: PropTypes.func
};
export default GameButton
