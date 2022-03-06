import React, { Component } from 'react';
import logo from './7DE7E52A-54B3-40D7-B3BC-1D31C85224EB.jpg';
import './App.css';
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
// import Amplify from 'aws-amplify';
// import aws_exports from './aws-exports';
// Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<AmplifySignOut*/}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <em>"we commit a devious amount of trolling"</em><br/>
            -Alex Dion
          </p>
            <p>LOOOK LOOK ERE IS TEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEST</p>
        </header>
      </div>
    );
  }
}

export default App;
