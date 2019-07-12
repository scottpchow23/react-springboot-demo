import React from 'react';
import axios from 'axios';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Table } from 'reactstrap';
import '../css/App.css';

class Store {
  @observable students = [];
}
@observer
class Main extends React.Component {

  constructor(props) {
    super(props);
    this.store = new Store();
  }

  // ping() {
  //   axios.get('http://localhost:8080/api/ping')
  //     .then(response => {
  //       this.setState({ ponged: 'Ponged!' })
  //     }).catch(err => {
  //       alert('There was an error');
  //       console.log(err);
  //     });
  // }

  render() {
    return (
      <div className="Main">
        <header className="App-header">
          <h1 className="App-title">Project Anacapa</h1>
        </header>
        <h2>Students Table</h2>
        <p>This is where you can see a list of students and their information</p>
        <Table>
          <thead>
            <tr>
              <th>id</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>4302667</td>
              <td>Scott</td>
              <td>Chow</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export { Main };