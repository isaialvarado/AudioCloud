import React from 'react';
import auth from './auth';
import { withRouter } from 'react-router';

class Login extends React.Component {
  constructor (props) {
      super(props);
      this.state = { username: "", password: "", logged_in: false};

  }
    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.loggedIn){
          document.loginform.user.value="admin";
          document.loginform.pass.value="password123";
          this.setState({username:"admin",password: "password123", logged_in: true});
          this.props.router.push('/');
          auth.login();
          // console.log('inside submit');
        }

    }

    update(prop){
      return e => this.setState({
        [prop]: e.currentTarget.value
      });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} name="loginform">
              <div>
                <label>
                  <input id="user" type="text"
                    placeholder="username"
                    ref="username"
                    onChange={this.update('username')} />
                </label>
                <label>
                  <input id="pass" type="password"
                    placeholder="password"
                    ref="pass"
                    onChange={this.update('password')} />
                </label>
                <input type="submit" value="DEMO"/>
              </div>
            </form>
        );
    }
}

export default withRouter(Login);
