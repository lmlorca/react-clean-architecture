import React from "react";

export function TextArea({ value, ...restProps }) {
  return (
    <textarea
      {...restProps}
      rows={6}
      className="w-full p-4 bg-gray-100"
      value={value}
    />
  );
}
