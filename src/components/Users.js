import React, { Component } from 'react';

export default class Users extends Component {
  constructor() {
    super();

    this.state = {
      secondsVisible: 0,
    };

    this.inverval = null;
  }
  componentDidMount() {
    console.log('users- componentDidMount');
    this.inverval = setInterval(() => {
      const { secondsVisible } = this.state;
      this.setState({
        secondsVisible: secondsVisible + 1,
      });
    }, 1000);
  }

  componentDidUpdate() {
    console.log('users- componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('users- componentWillUnmount');
    clearInterval(this.inverval);
  }
  render() {
    const { users } = this.props;
    const { secondsVisible } = this.state;

    return (
      <div>
        <div>
          <p>Visivel por {secondsVisible} segundos</p>
        </div>
        {users.map((user) => {
          const { login, name, picture } = user;
          return <p key={login.uuid}>{name.first}</p>;
        })}
      </div>
    );
  }
}
