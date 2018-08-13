import React from 'react';
import classnames from 'classnames';

var TYPES = ['danger'];

export var Alert = ({ message, type, ...props }) => (
  <div
    {...props}
    className={classnames('Alert', {
      [`Alert__${type}`]: TYPES.indexOf(type) > -1
    })}
  >
    {message}
  </div>
);
