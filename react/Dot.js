import React from 'react';
export const Dot = props => (
  <svg viewBox="0 0 20 20" width="16px" height="16px" {...props} className={`btfont ${props.className ? props.className : ''}`}><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fillRule="evenodd" /></svg>
);
