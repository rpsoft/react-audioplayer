import React, { PropTypes } from 'react';

const progressBarHandler = ({
  length,
  translate,
  onMouseDown
}, { color }) => (
  <g
    transform={translate}
    onMouseDown={onMouseDown}
  >
    <rect x="0" y="0" width={length} height={length} fill={color} rx="10" ry="10" />
    <rect x={length/8} y={length/8} width={length*3/4} height={length*3/4} fill="#fff" rx="10" ry="10" />
  </g>
);
progressBarHandler.propTypes = {
  length: PropTypes.number.isRequired,
  translate: PropTypes.string.isRequired,
  onMouseDown: PropTypes.func
};
progressBarHandler.contextTypes = {
  color: PropTypes.string
};

export default progressBarHandler;