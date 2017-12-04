import React from 'react';
import PropTypes from 'prop-types';

const TextInput = props => (
  <div className="form-group">
    <input
      className="form-input"
      name={props.name}
      type={props.inputType}
      value={props.content}
      onChange={props.onChange}
      onBlur={props.onBlur}
      placeholder={props.placeholder}
    />
  </div>
);

TextInput.propTypes = {
  inputType: PropTypes.oneOf(["text", "number"]).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  placeholder: PropTypes.string
};

export default TextInput;
