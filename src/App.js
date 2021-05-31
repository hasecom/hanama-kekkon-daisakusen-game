import React, { Component } from 'react'
import GameButton from "./components/GameButton"
import Screen from "./components/Screen"
import ImageConstant from "./constants/ImageConstant"
import ButtonConstant from "./constants/ButtonConstant"
import triggerConstant from "./constants/TriggerConstant"
import Neo from "./assets/css/neo.min.css"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      triggerId:'1',
      triggerType:"button",
      nextGameButtonParam:"1",
      nextScreenParam:"1"
    };
    this.updateState = this.updateState.bind(this);
  }
  updateState(triggerName,Param){
    
    var updateData =  (triggerConstant.filter((obj) => obj.triggerId === Param && obj.triggerType === triggerName))[0];

    this.setState({
        triggerId:updateData.triggerId,
        triggerType:updateData.triggerType,
        nextGameButtonParam:updateData.nextGameButtonParam,
        nextScreenParam:updateData.nextScreenParam,
    });
  }
  render(){
    return(
    <div id="app">
      <Screen display={ImageConstant} screenParam={this.state.nextScreenParam} triggerName="screen" />
      <div id="controller">
        <GameButton message={ButtonConstant} buttonParam={this.state.nextGameButtonParam} callbackMethod={this.updateState} triggerName="button" />
      </div>
    </div>
    )
  }
}
export default App