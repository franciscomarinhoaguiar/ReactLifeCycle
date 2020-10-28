import React, { Component } from 'react';
import Users from './components/Users';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      user: [],
      showUsers: false,
    };
  }
  async componentDidMount() {
    console.log('componentDidMount');
    const res = await fetch(
      'https://randomuser.me/api/?page=3&results=10&seed=abc'
    );

    const json = await res.json();

    this.setState({ user: json.results });
  }
  componentDidUpdate() {
    console.log('App - componentDidUpdate');
  }
  componentDidWillUnMount() {
    console.log('App - componentDidWillUnMount');
  }

  handleShowUsers = (event) => {
    console.log(event.target.checked);

    this.setState({ showUsers: event.target.checked });
  };

  render() {
    const { user, showUsers } = this.state;

    return (
      <div>
        <div className="switch">
          <label>
            Mostrar Usuarios
            <input type="checkbox" onChange={this.handleShowUsers} />
            <span className="lever"></span>
          </label>
        </div>
        <hr />
        {showUsers && <Users users={user} />}
        {/* ou showUsers ? <div>Users</div> : <div>No Users</div> */}
      </div>
    );
  }
}
