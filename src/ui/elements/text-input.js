import React from "react";

export function TextInput({ value, ...restPropts }) {
  return (
    <input
      {...restPropts}
      className="w-full p-4 bg-gray-100"
      type="text"
      value={value}
    />
  );
}
