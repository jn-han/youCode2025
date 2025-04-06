"use client";

import React from "react";
import AsyncSelect from "react-select/async";

const ClientSelect = ({ value, onChange, loadOptions, topThreeOptions }) => {
  return (
    <AsyncSelect
      isMulti
      cacheOptions
      loadOptions={loadOptions}
      value={value}
      onChange={onChange}
      placeholder="Search and select..."
      defaultOptions={topThreeOptions}
    />
  );
};

export default ClientSelect;
