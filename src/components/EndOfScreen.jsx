import React, { Component } from 'react'
import PropTypes from 'prop-types';
const style ={
  fontSize:"22px",
  color:"red",
  fontWeight:"bold"
}

class EndOfScreen extends React.Component {
  constructor(props){
    super(props);
  }
  handleClick() {
    return this.props.callbackMethod("0","0");
  }
  render(){
    this.endOfScreen = (this.props.constant.filter((obj) => obj.triggerId === this.props.state.triggerId && obj.triggerType === this.props.state.triggerType))[0] || null;
    return(
      <>
        { this.endOfScreen != null &&
        <div id="front">
          <h2 className="_title">END</h2>
          <div className="nes-container is-rounded is-dark" style={style}>
            <p>{this.endOfScreen.message}</p>
          </div>
          <div className="text-center endBtnWrap">
            <button type="button" className="nes-btn is-warning"  onClick={() => {this.handleClick()}}>トップに戻る</button>
          </div>
        </div>
        }
      </>
    )
  }
}
EndOfScreen.propTypes = {
  callbackMethod: PropTypes.func
};

export default EndOfScreen
