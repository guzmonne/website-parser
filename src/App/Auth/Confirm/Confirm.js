import React from 'react';
import { Link } from 'react-router-dom';
import { Alert } from '../../../common/Alert/';
import { Input } from '../../../common/Input/';
import { ButtonLoading as Button } from '../../../common/Button/';

export var Confirm = ({
  formState,
  handleChange,
  handleSubmit,
  loading,
  setLoading,
  error,
  awkError
}) => (
  <div className="Confirm">
    <form className="Confirm__form" onSubmit={handleSubmit}>
      <legend onClick={setLoading}>Confirm</legend>
      {error && <Alert message={error} type="danger" onClick={awkError} />}
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
