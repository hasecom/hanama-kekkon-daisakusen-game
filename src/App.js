import React, { Component } from 'react'
import Header from "./components/header"
import Footer from "./components/footer"
import GameButton from "./components/GameButton"
import Screen from "./components/Screen"
import Image from "./constants/Image"
const App = () => (
    <div id="app">
      <Screen display={Image} screenId="1" />
      <GameButton message="aa" />
    </div>
)


export default App