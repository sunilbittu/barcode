
import React from "react";
import { Select } from "antd";
import PropTypes from "prop-types";

const SelectComponent = ({ onTripTypeChange, type }) => {
  

  const handleChange = (value) => {
    onTripTypeChange(value);
  };
  return (
    <Select
      defaultValue={type[0]}
      onChange={handleChange}
      options={type}
      style={{ width: 100 }}
    />
  );
};

SelectComponent.propTypes = {
  type: PropTypes.array,
};

export default SelectComponent;
