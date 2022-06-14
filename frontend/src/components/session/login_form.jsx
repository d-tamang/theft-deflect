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

  UNSAFE_componentWillReceiveProps(nextProps) {
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
    if (!this.state.errors) return;
    return (
      <ul className='session-error-list'>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  demoLogin(e) {
    e.preventDefault();
    if (!this.demoTimer){
      let count = 0;
      let key;
      let demoUser = 'demo@demo.comdemodemo'
      this.demoTimer = setInterval(() => {
        if (count < 13){
            key = 'email';
        } else if (count < 21) {
            key = 'password';
        }
        this.setState({ [key] : this.state[key] + demoUser[count]})
        count++;
        if (count === 21) {
            clearInterval(this.demoTimer);
            this.props.login(this.state).then(this.props.closeModal());
        }
      }, 100)
    }
  }

  render() {
    return (
      <div className="session-form-box">
        <form onSubmit={this.handleSubmit}>
          <div className="session-form">
            <input id="login-email-box" type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
            <br />
            <div><input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            /></div>
            {this.renderErrors()}
            <div><button className="session-btn">LOG IN</button></div>
            <div><button className="session-btn" onClick={(e) => this.demoLogin(e)}>DEMO LOG IN</button></div>
            <div className="session-question">Don't have an account?</div>
            <div>{this.props.otherForm}</div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);