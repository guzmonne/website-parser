import React from 'react';
import { Input } from '../../../common/Input/';

export var Body = ({ handleSubmit, handleChange, formState }) => (
  <div className="Body">
    <form onSubmit={handleSubmit}>
      <label className="Body__url-label">
        Add the URL you would like to parse
      </label>
      <Input
        className="Body__url"
        value={formState.url}
        type="text"
        placeholder="URL"
        onChange={handleChange('url')}
      />
    </form>
  </div>
);
