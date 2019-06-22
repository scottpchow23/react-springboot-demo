import React from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import '../css/App.css';

export class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {ponged: 'Not Ponged'}

    this.ping = this.ping.bind(this);
  }

  ping() {
    axios.get('http://localhost:8080/api/ping')
      .then(response => {
        this.setState({ponged: 'Ponged!'})
      }).catch(err => {
        alert('There was an error');
        console.log(err);
      });
  }

  render() {
    return (
      <div className="Main">
        <header className="App-header">
          <h1 className="App-title">Project Anacapa</h1>
        </header>
        <p className="App-intro">
            <Button onClick={this.ping}>Ping</Button>        
            <div>Ponged: {this.state.ponged}</div>
        </p>
      </div>
    );
  }
}