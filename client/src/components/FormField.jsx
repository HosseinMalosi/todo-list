import React from "react";

const FormField = ({ id, name, placeholder, value, label }) => {
  return (
    <div className="flex flex-col mb-2 gap-2">
      <label className="text-lg" htmlFor={id}>{label} :</label>
      <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        className="p-1 border border-gray-400 focus:outline-none focus:border-gray-700 rounded-md"
      />
    </div>
  );
};

export default FormField;
