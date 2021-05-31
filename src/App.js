import React, { Component } from 'react'
import GameButton from "./components/GameButton"
import Screen from "./components/Screen"
import ImageConstant from "./constants/ImageConstant"
import ButtonConstant from "./constants/ButtonConstant"
import Neo from "./assets/css/neo.min.css"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value1: 'foo',
      value2: [ 'bar', 'baz' ],
    }; 
  }
  updateState(state){
    console.log(state)
    this.setState(state);
    console.log(state)
  }
  render(){
    return(
    <div id="app">
      <Screen display={ImageConstant} screenParam="1" />
      <div id="controller">
        <GameButton message={ButtonConstant} buttonParam="1" />
      </div>
    </div>
    )
  }
}
export default App