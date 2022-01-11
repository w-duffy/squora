import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";


function Login() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
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
      <label>
        Username
        <div>
        <input
          type="text"
          placeholder="Your username"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
          />
          </div>
      </label>
      <label>
        Password
        <div>

        <input
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
          </div>
      </label>
      <button type="submit">Log In</button>
    </form>
  );
}

export default Login;
