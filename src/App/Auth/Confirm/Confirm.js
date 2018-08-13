import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../../../common/Input/';
import { ButtonLoading as Button } from '../../../common/Button/';

export var Confirm = ({
  formState,
  handleChange,
  handleSubmit,
  loading,
  setLoading
}) => (
  <div className="Confirm">
    <form className="Confirm__form" onSubmit={handleSubmit}>
      <legend onClick={setLoading}>Confirm</legend>
      <label>Username</label>
      <Input
        placeholder="Username"
        value={formState.username}
        onChange={handleChange('username')}
        type="text"
      />
      <label>Code</label>
      <Input
        placeholder="Code"
        value={formState.password}
        onChange={handleChange('code')}
        type="text"
      />
      <Button loading={loading} type="submit">
        Confirm account
      </Button>
      <Link to="/auth">Log in</Link>
    </form>
  </div>
);
