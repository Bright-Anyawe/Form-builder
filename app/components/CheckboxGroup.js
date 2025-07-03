import React from "react";

export default function CheckboxGroup({ checked, onChange }) {
  return (
    <input
      type="checkbox"
      className="form-checkbox h-5 w-5 text-black"
      checked={checked}
      onChange={onChange}
    />
  );
} 