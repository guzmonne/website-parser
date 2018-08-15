import React from 'react';
import isEmpty from 'lodash/isEmpty.js';
import { Input } from '../../../common/Input/';
import { Alert } from '../../../common/Alert/';
import { Spinner } from '../../../common/Spinner/';

export var Body = ({
  handleSubmit,
  handleChange,
  formState,
  error,
  awkError,
  loading,
  results,
  dirty
}) => (
  <div className="Body">
    {error && <Alert message={error} type="danger" onClick={awkError} />}
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
    {loading === false ? (
      isEmpty(results) ? (
        dirty ? (
          <span className="Body__url-label">No results found</span>
        ) : (
          <none />
        )
      ) : (
        <div className="Body__results">
          <span className="Body__url-label">Results</span>
          <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
      )
    ) : (
      <div className="Body__Spinner">
        <Spinner />
      </div>
    )}
  </div>
);
