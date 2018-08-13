import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../../../common/Input/';
import { ButtonLoading as Button } from '../../../common/Button/';

export var Signup = ({ formState, handleChange, handleSubmit, loading }) => (
  <div className="Signup">
    <form className="Signup__form" onSubmit={handleSubmit}>
      <legend>Signup</legend>
      <label>Username</label>
      <Input
        placeholder="Username"
        value={formState.username}
        onChange={handleChange('username')}
        type="text"
      />
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
      <label>Repeat Password</label>
      <Input
        placeholder="Repeat password"
        value={formState.repeatPassword}
        onChange={handleChange('repeatPassword')}
        type="password"
      />
      <Button type="submit" loading={loading}>
        Signup
      </Button>
      <Link to="/auth">Log in</Link>
    </form>
  </div>
);
