import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      password2: '',
      errors: {}
    };
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.closeModal();
    }
    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.signup(user).then(this.props.login({ email: this.state.email, password: this.state.password }));
  }

  renderErrors() {
    return (
      <div>
        {Object.keys(this.state.errors).map((error, i) => (
          <div key={`error-${i}`}>
            {this.state.errors[error]}
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="login-form">
            <br />
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="Username"
            />
            <br />
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
            <br />
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
            <br />
            <input type="password"
              value={this.state.password2}
              onChange={this.update('password2')}
              placeholder="Confirm Password"
            />
            <br />
            {this.renderErrors()}
            <button>REGISTER</button>
            <div>Already have an account?</div>
            <div>{this.props.otherForm}</div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);