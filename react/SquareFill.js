import React from 'react';
export const SquareFill = props => (
  <svg viewBox="0 0 20 20" width="16px" height="16px" {...props} className={`btfont ${props.className ? props.className : ''}`}><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z" fillRule="evenodd" /></svg>
);
