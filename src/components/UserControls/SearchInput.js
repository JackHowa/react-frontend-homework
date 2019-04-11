import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({
  value,
  onChangeFunction,
  placeholder,
  labelText,
  id
}) => (
  <div className="filter-element-content">
    <label htmlFor={id} id={id}>
      {labelText}
      <input
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChangeFunction}
        type="text"
        style={{ border: '1px solid #CCCCCC', padding: 15 }}
      />
    </label>
  </div>
);

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFunction: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default SearchInput;
