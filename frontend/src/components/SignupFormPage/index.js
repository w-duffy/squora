import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';
import "../Login/Login.css";
import "../Questions/Questions.css"

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => <li className="error-li" key={idx}>{error}</li>)}
      </ul>


      <div className="splash-login">
        <p>New users please sign up below</p>
      </div>
      <label>
      <p className="user-pass">Email</p>
        <input
        className="input-box"
        placeholder="Enter your email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        />
      </label>
      <label>
      <p className="user-pass">Username</p>
        <input
        className="input-box"
        placeholder="Select a username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        />
      </label>
      <label>
      <p className="user-pass">Password</p>
        <input
        className="input-box"
        placeholder="Enter a password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        />
      </label>
      <label>
      <p className="user-pass">Confirm Password</p>
        <input
        placeholder="Confirm your password"
        className="input-box"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        />
      </label>
      <div className="signup-button">

      <button className="login-button" type="submit">Sign Up</button>
      </div>

    </form>
  );
}

export default SignupFormPage;
