import React, { Component } from 'react'
const style ={
  position:"absolute",
	top:"0",
	left:"0",
  right:"0",
  bottom:"0",
	width:"100%",
	height: "100%",
	margin: "0",
  objectFit:"cover"
}
class Screen extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    this.screenObj = (this.props.display.filter((obj) => obj.param === this.props.screenParam))[0];
    const isShow = this.props.screenParam < 1;
    return(
      <>
        { !isShow &&
          <div>
            <img src={`${process.env.PUBLIC_URL}/images/screen/${this.screenObj.name}.jpg`} style={style} />
          </div>
        }
      </>
    )
  }
}

export default Screen