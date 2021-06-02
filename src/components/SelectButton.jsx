import React, { Component } from 'react'
import PropTypes from 'prop-types';

const style ={
  position:"relative",
  textAlign:"center",
}
const selectButtonWrapStyle = {
  display:"flex",
  justifyContent:"space-evenly",
}

class SelectButton extends React.Component {
  constructor(props){
    super(props);
    
  }
  handleClick(selectButtonParam) {
    const {triggerName} = this.props;
    return this.props.callbackMethod(triggerName,selectButtonParam);
  }
  render(){
    this.selectButtonObj = (this.props.message.filter((obj) => obj.param === this.props.selectButtonParam))[0];
    const isShow = this.props.selectButtonParam < 1;
    return(
      <>
        { !isShow &&
          <div style={style}>
            <div className="nes-container is-rounded is-dark">
              <p>{this.selectButtonObj.question}</p>
            </div>
            <div style={selectButtonWrapStyle}>
              <button type="button" className="nes-btn" onClick={() => {this.handleClick(this.selectButtonObj.nextParam01)}} >
                {this.selectButtonObj.selectMessage01}
              </button>
              <button type="button" className="nes-btn" onClick={() => {this.handleClick(this.selectButtonObj.nextParam02)}} >
                {this.selectButtonObj.selectMessage02}
              </button>
            </div>
          </div>
        }
      </>
    )
  }
}
SelectButton.propTypes = {
  callbackMethod: PropTypes.func
};
export default SelectButton
