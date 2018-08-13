import React from 'react';
import classnames from 'classnames';
import { Button } from '../Button.js';

export var ButtonOutline = ({ className, children, ...props }) => (
  <Button className={classnames('ButtonOutline', className)} {...props}>
    {children}
  </Button>
);
