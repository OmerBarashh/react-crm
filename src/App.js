import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import axios from 'axios'
export class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  async componentDidMount() {
    this.updateClients()
  }

  getOwners = () => {
    const owners = []
    for (let i of this.state.data) {
      if (!owners.includes(i.owner)) {
        owners.push(i.owner)
      }
    }
    return owners
  }

  updateClients = async () => {
    const data = await axios.get('http://localhost:4000/clients')
    this.setState({
      data: data.data
    })
  }

  render() {
    return (
      <div>
        <Navbar data={this.state.data} updateClients={this.updateClients} dataOwners={this.getOwners()} />
      </div>
    );
  }
}
export default App;