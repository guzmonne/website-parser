import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../../../common/Input/';
import { Alert } from '../../../common/Alert/';
import { ButtonLoading as Button } from '../../../common/Button/';

export var Login = ({
  formState,
  handleChange,
  handleSubmit,
  loading,
  setLoading,
  error,
  awkError
}) => (
  <div className="Login">
    <form className="Login__form" onSubmit={handleSubmit}>
      <legend onClick={setLoading}>Log in</legend>
      {error && <Alert message={error} type="danger" onClick={awkError} />}
      <label>Username</label>
      <Input
        placeholder="Username"
        value={formState.username}
        onChange={handleChange('username')}
        type="text"
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
