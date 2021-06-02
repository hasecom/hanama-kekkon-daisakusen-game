//ストーリ
const TriggerConstant  = [
  {//scene:a
    triggerId:'0',
    triggerType:"0",
    nextGameButtonParam:"1",
    nextScreenParam:"1",
    nextMessageBoxParam:"0",
    nextSelectButtonParam:"0"
  },
  {//scene:a
    triggerId:'1',
    triggerType:"button",
    nextGameButtonParam:"0",
    nextScreenParam:"2",
    nextMessageBoxParam:"1",
    nextSelectButtonParam:"0"
  },
  {//scene:b
    triggerId:'1',
    triggerType:"messageBox",
    nextGameButtonParam:"0",
    nextScreenParam:"2",
    nextMessageBoxParam:"2",
    nextSelectButtonParam:"0"
  },
  {//scene:b
    triggerId:'2',
    triggerType:"messageBox",
    nextGameButtonParam:"0",
    nextScreenParam:"2",
    nextMessageBoxParam:"3",
    nextSelectButtonParam:"0"
  },
  {//scene:b
    triggerId:'3',
    triggerType:"messageBox",
    nextGameButtonParam:"0",
    nextScreenParam:"2",
    nextMessageBoxParam:"0",
    nextSelectButtonParam:"1"
  },
  {//scene:b true ====================
    triggerId:'1000',
    triggerType:"selectButton",
    nextGameButtonParam:"0",
    nextScreenParam:"3",
    nextMessageBoxParam:"4",
    nextSelectButtonParam:"0"
  },
  {//scene:b true
    triggerId:'4',
    triggerType:"messageBox",
    nextGameButtonParam:"0",
    nextScreenParam:"3",
    nextMessageBoxParam:"6",
    nextSelectButtonParam:"0"
  },
  {//scene:b true
    triggerId:'6',
    triggerType:"messageBox",
    nextGameButtonParam:"0",
    nextScreenParam:"5",
    nextMessageBoxParam:"8",
    nextSelectButtonParam:"0"
  },
  {//scene:b true
    triggerId:'8',
    triggerType:"messageBox",
    nextGameButtonParam:"0",
    nextScreenParam:"5",
    nextMessageBoxParam:"10",
    nextSelectButtonParam:"0"
  },
  {//scene:b true
    triggerId:'10',
    triggerType:"messageBox",
    nextGameButtonParam:"0",
    nextScreenParam:"7",
    nextMessageBoxParam:"11",
    nextSelectButtonParam:"0"
  },
  {//scene:b true
    triggerId:'11',
    triggerType:"messageBox",
    nextGameButtonParam:"0",
    nextScreenParam:"7",
    nextMessageBoxParam:"0",
    nextSelectButtonParam:"0"
  },
    {//scene:b false==================
      triggerId:'1001',
      triggerType:"selectButton",
      nextGameButtonParam:"0",
      nextScreenParam:"4",
      nextMessageBoxParam:"5",
      nextSelectButtonParam:"0"
    },
    {//scene:b false
      triggerId:'5',
      triggerType:"messageBox",
      nextGameButtonParam:"0",
      nextScreenParam:"4",
      nextMessageBoxParam:"7",
      nextSelectButtonParam:"0"
    },
      {//scene:b false
        triggerId:'7',
        triggerType:"messageBox",
        nextGameButtonParam:"0",
        nextScreenParam:"5",
        nextMessageBoxParam:"9",
        nextSelectButtonParam:"0"
      },
]

export default TriggerConstant