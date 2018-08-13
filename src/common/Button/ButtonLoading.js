import React from 'react';
import { Button } from './Button.js';
import { Spinner } from '../Spinner/';

export var ButtonLoading = ({ loading, children, ...props }) => (
  <Button className="ButtonLoading" {...props} disabled={loading}>
    {loading === true ? <Spinner /> : children}
  </Button>
);
