import React from 'react';
import classnames from 'classnames';

export default ({children, onClick, className}) => (
  <button
    type="button" onClick={() => onClick()}
    className={classnames('toastr-button', className)}
  >
    {children}
  </button>
);
