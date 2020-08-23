import React from "react";
import { Select } from "../elements";

export function Header(props) {
  return (
    <header className="fixed w-full flex items-center justify-between px-4 py-3 bg-gray-600">
      <div className="font-bold text-xl text-white">Simple and Clean React</div>
      <div className="inline-block relative w-64">
        <Select
          onChange={(e) => props.changeApi(e.target.value)}
          value={props.selected}
        >
          {props.options.map((option) => (
            <option
              key={option.key}
              value={option.key}
              style={{
                display: option.key === props.selected ? "none" : "block",
              }}
            >
              {option.description}
            </option>
          ))}
        </Select>
      </div>
    </header>
  );
}
