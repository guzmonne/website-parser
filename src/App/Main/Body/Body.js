import React from 'react';
import { Input } from '../../../common/Input/';

export var Body = ({ handleSubmit, formState }) => (
  <div className="Body">
    <form onSubmit={handleSubmit}>
      <label>Add the URL you would like to parse</label>
      <Input
        className="Body__url"
        value={formState.url}
        type="text"
        placeholder="URL"
      />
    </form>
  </div>
);
