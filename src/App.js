import React, { Component } from 'react';
import logo from './Trollface_non-free.png';
import './App.css';
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
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
        </header>
      </div>
    );
  }
}

export default App;
