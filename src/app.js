import React from 'react'
import ReactDOM from 'react-dom'
//import FacebookLoginComponent from './components/Facebook.js'
//import ChatComponent from './components/Chat.js'
//import GoogleAuth from './components/Google.js'
//import GoogleMapComponent from './components/GoogleMap.js'
import ImmutableComponent from './components/Immutable.js'

class App extends React.Component{
  render(){
    return(
      <div>
        <ImmutableComponent />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
)
