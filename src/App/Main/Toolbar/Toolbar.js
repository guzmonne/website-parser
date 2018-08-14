import React from 'react';
import { ButtonOutline } from '../../../common/Button/';

export var Toolbar = ({ onSignOut, toggleLabel, label }) => (
  <div className="Toolbar">
    <h1>Website-Parser</h1>
    <ButtonOutline
      onClick={onSignOut}
      onMouseEnter={toggleLabel}
      onMouseLeave={toggleLabel}
    >
      {label}
    </ButtonOutline>
  </div>
);
