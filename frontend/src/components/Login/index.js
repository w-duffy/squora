import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const demoUserLogin = async (e) => {
    e.preventDefault();

     await dispatch(
      sessionActions.login({ credential: "Mr_Money", password: "password1" })
    ).catch((res) => {
      if (res.data && res.data.errors) setErrors(res.data.errors);
    });
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <div className="splash-login">
        <p>Login</p>
      </div>

      <label>
        <p className="user-pass">Username</p>
        <div>
          <input
            className="input-box"
            type="text"
            placeholder="Your username"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </div>
      </label>
      <label>
        <p className="user-pass">Password</p>
        <div>
          <input
            className="input-box"
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </label>
      <div className="button-div">
        <button className="login-button" onClick={demoUserLogin}>
          Demo User
        </button>
        <button className="login-button" type="submit">
          Log In
        </button>
      </div>
    </form>
  );
}

export default Login;
