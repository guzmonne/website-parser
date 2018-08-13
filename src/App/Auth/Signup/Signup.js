import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../../../common/Input/';
import { Button } from '../../../common/Button/';

export var Signup = ({ state, handleChange, handleSubmit }) => (
  <div className="Signup">
    <form className="Signup__form" onSubmit={handleSubmit}>
      <legend>Signup</legend>
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
      <label>Repeat Password</label>

      <Input
        placeholder="Repeat password"
        value={state.repeatPassword}
        onChange={handleChange('repeatPassword')}
        type="password"
      />
      <Button type="submit">Signup</Button>
      <Link to="/auth">Log in</Link>
    </form>
  </div>
);
