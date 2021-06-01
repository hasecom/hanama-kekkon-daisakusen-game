import React, { Component } from 'react'
import PropTypes from 'prop-types';
const style ={
  width:"85%",
  margin:"0 auto"
}
class MessageBox extends React.Component {
  constructor(props){
    super(props);
  }
  handleClick() {
    const {triggerName,messageParam} = this.props;
    return this.props.callbackMethod(triggerName,messageParam);
  }
  render(){
    this.messageObj = (this.props.message.filter((obj) => obj.param === this.props.messageParam))[0];
    const isShow = this.props.messageParam < 1;
    return(
      <>
        { !isShow &&
          <div className="nes-container is-dark with-title" style={style} onClick={() => {this.handleClick()}} >
            <p className="title">{this.messageObj.who}</p>
            <p className="messageBoxContext">{this.messageObj.message}</p>
          </div>
        }
      </>
    )
  }
}
MessageBox.propTypes = {
  callbackMethod: PropTypes.func
};
export default MessageBox
