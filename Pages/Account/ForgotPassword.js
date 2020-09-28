import React, { Component } from "react";
import * as ROUTES from "../../routes";
import { withFirebase } from "../../Firebase";
import { Link } from "react-router-dom";

const PasswordForgotPage = () => {
  return (
    <div>
      <h1>Forgot Password</h1>
      <PasswordForgotForm />
    </div>
  );
};

const INITIAL_STATE = {
  email: "",
  error: null,
};

class PasswordForgotFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;
    this.props.firebase // Provided by withFirebase HOC
      .doPasswordReset(email)
      .then((authUser) => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch((error) => this.setState({ error }));

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value, // Computed property name to make this method reusable for multiple onChange events
    });
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === "";

    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="email"
          value={email}
          onChange={this.onChange}
          placeholder="Email Address"
        />
        <button type="submit" disabled={isInvalid}>
          Reset My Password
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const PasswordForgotLink = () => (
  <p>
    <Link to={ROUTES.FORGOT_PASSWORD}>Forgot Password?</Link>
  </p>
);

const PasswordForgotForm = withFirebase(PasswordForgotFormBase); // provide firebase

export default PasswordForgotPage;

export { PasswordForgotForm, PasswordForgotLink };
