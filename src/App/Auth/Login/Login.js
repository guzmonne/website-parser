import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../../../common/Input/';

export var Login = ({ state, handleChange, handleSubmit }) => (
  <div className="Login">
    <form className="Login__form" onSubmit={handleSubmit}>
      <legend>Log in</legend>
      <label>Email</label>
      <Input
        placeholder="Email"
        value={state.email}
        onChange={handleChange('email')}
        type="email"
      />
      <label>Password</label>
      <Input
        placeholder="Password"
        value={state.password}
        onChange={handleChange('password')}
        type="password"
      />
      <Link to="/auth/signup">Signup</Link>
    </form>
  </div>
);