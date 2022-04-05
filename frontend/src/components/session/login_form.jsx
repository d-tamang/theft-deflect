import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.closeModal();
    }

    this.setState({ errors: nextProps.errors })
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
      password: this.state.password
    };
    this.props.login(user);
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
      <div className="login-form-box">
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
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
            {this.renderErrors()}
            <div><button className="login-btn">LOG IN</button></div>
            <div><button className="login-btn">DEMO LOG IN</button></div>
            <div>Don't have an account?</div>
            <div>{this.props.otherForm}</div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);