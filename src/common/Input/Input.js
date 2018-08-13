import React from 'react';
import classnames from 'classnames';

export var Input = ({ className, ...props }) => (
  <input {...props} className={classnames('Input', className)} />
);
