import React from 'react';
import auth from './auth';
import { withRouter } from 'react-router';

class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: "admin",
      password: "password123",
      logged_in: false
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.loggedIn){
      document.loginform.user.value="admin";
      document.loginform.pass.value="password123";

      this.setState({
        username:"admin",
        password: "password123",
        logged_in: true
      });

      setTimeout(function(){ }, 30);
      this.props.router.push('/');
      auth.login();
    }
  }

  update(prop){
    return e => this.setState({
      [prop]: e.currentTarget.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} name="loginform" className="login-form">
        <div className="login-box">
          <label className="login-info">Username:
            <input id="user" type="text"
              placeholder=" Guest"
              ref="username"
              onChange={this.update('username')} />
          </label>
          <br />
          <label className="login-info">Password:
            <input id="pass" type="password"
              placeholder=" *********"
              ref="pass"
              onChange={this.update('password')} />
          </label>
          <br />
          <input className="login-submit" type="submit" value="DEMO"/>
        </div>
      </form>
    );
  }
}

export default withRouter(Login);
