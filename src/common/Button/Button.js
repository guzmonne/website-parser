import React from 'react';
import classnames from 'classnames';

export var Button = ({ className, children, ...props }) => (
  <button {...props} className={classnames('Button', className)}>
    {children}
  </button>
);
