import React from 'react';
import { ButtonOutline } from '../../../common/Button/';

export var Toolbar = ({ onSignOut }) => (
  <div className="Toolbar">
    <h1>Website-Parser</h1>
    <ButtonOutline onClick={onSignOut}>Cerrar sesión</ButtonOutline>
  </div>
);
