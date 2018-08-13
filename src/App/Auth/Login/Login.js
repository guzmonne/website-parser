import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../../../common/Input/';
import { ButtonLoading as Button } from '../../../common/Button/';

export var Login = ({
  formState,
  handleChange,
  handleSubmit,
  loading,
  setLoading
}) => (
  <div className="Login">
    <form className="Login__form" onSubmit={handleSubmit}>
      <legend onClick={setLoading}>Log in</legend>
      <label>Email</label>
      <Input
        placeholder="Email"
        value={formState.email}
        onChange={handleChange('email')}
        type="email"
      />
      <label>Password</label>
      <Input
        placeholder="Password"
        value={formState.password}
        onChange={handleChange('password')}
        type="password"
      />
      <Button loading={loading} type="submit">
        Log in
      </Button>
      <Link to="/auth/signup">Signup</Link>
    </form>
  </div>
);
