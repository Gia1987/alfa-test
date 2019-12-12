import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    VALID_EMAIL,
    VALID_PASSWORD,
    NOTIFICATION,
    LINK_TASKS_INDEX
} from '../../constants';
import Login from './Login';

export class LoginContainer extends PureComponent {
    constructor(props){
        super(props);
        this.state ={
            email:'',
            password:'',
            isAuthorised: true
        };

    }

  updateEmail = e => {
      this.setState({
          email: e.target.value
      });
  }

  updatePassword = e => {
      this.setState({
          password: e.target.value
      });
  }

  checkAuth = () => {
      const {email,password} = this.state;
      const {history} = this.props;

      if (email === VALID_EMAIL && password === VALID_PASSWORD) {
          history.push(LINK_TASKS_INDEX);
      }
      else{
          this.setState({
              isAuthorised: false
          });
          setTimeout(() =>
              this.setState({
                  isAuthorised: true
              }), 2000);
      }

  }

  render() {
      const {
          email,
          password,
          isAuthorised
      } = this.state;
      return (
          <Login
              data-cy="login"
              email={email}
              password={password}
              updateEmail={this.updateEmail}
              updatePassword={this.updatePassword}
              checkAuth={this.checkAuth}
              isAuthorised={isAuthorised}
              notification={NOTIFICATION}
          />
      );
  }
}

LoginContainer.propTypes = {
    history: PropTypes.shape({push: PropTypes.func}).isRequired,
};

export default LoginContainer;
