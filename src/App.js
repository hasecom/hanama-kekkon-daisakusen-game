import React, { Component } from 'react'
import GameButton from "./components/GameButton"
import Screen from "./components/Screen"
import MessageBox from "./components/MessageBox"
import SelectButton from "./components/SelectButton"
import EndOfScreen from "./components/EndOfScreen"
import Title from "./components/Title"
import ImageConstant from "./constants/ImageConstant"
import ButtonConstant from "./constants/ButtonConstant"
import MessageBoxConstant from "./constants/MessageBoxConstant"
import SelectButtonConstant from "./constants/SelectButtonConstant"
import EndOfScreenConstant from "./constants/EndOfScreen"
import triggerConstant from "./constants/TriggerConstant"
import TitleConstant from "./constants/TitleConstant"
import Neo from "./assets/css/neo.min.css"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {//初期画面
      triggerId:'0',
      triggerType:"0",
      nextGameButtonParam:"1",
      nextScreenParam:"1",
      nextMessageBoxParam:"0",
      nextSelectButtonParam:"0"
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
        nextMessageBoxParam:updateData.nextMessageBoxParam,
        nextSelectButtonParam:updateData.nextSelectButtonParam
    });
  }
  render(){
    return(
    <div id="app">
      <Screen display={ImageConstant} screenParam={this.state.nextScreenParam} triggerName="screen" />
      <EndOfScreen constant={EndOfScreenConstant} callbackMethod={this.updateState}  state={this.state} />
      <Title constant={TitleConstant} state={this.state} />
      <div id="controller">
        <GameButton message={ButtonConstant} buttonParam={this.state.nextGameButtonParam} callbackMethod={this.updateState} triggerName="button"  />
        <MessageBox message={MessageBoxConstant} messageParam={this.state.nextMessageBoxParam} callbackMethod={this.updateState} triggerName="messageBox" />
        <SelectButton message={SelectButtonConstant} selectButtonParam={this.state.nextSelectButtonParam} callbackMethod={this.updateState} triggerName="selectButton"  />
      </div>
    </div>
    )
  }
}
export default App