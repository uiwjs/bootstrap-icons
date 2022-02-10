import React from 'react';
export const ChevronExpand = props => (
  <svg viewBox="0 0 20 20" width="16px" height="16px" {...props} className={`btfont ${props.className ? props.className : ''}`}><path d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z" fillRule="evenodd" /></svg>
);
