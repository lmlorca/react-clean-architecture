import React from "react";
import { Select } from "../elements";

export function Header(props) {
  return (
    <header className="fixed w-full flex items-center justify-between px-4 py-3 bg-gray-400">
      <div>Simple and Clean React</div>
      <div className="inline-block relative w-64">
        <Select
          onChange={(e) => props.changeApi(e.target.value)}
          value={props.selected}
        >
          {props.options.map((option) => (
            <option
              key={option.url}
              value={option.url}
              style={{
                display: option.url === props.selected ? "none" : "block",
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
