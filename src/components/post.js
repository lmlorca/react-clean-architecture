import React from "react";

export function Post(props) {
  return (
    <>
      <div className="rounded overflow-hidden shadow-lg my-6">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">{props.body}</p>
        </div>
      </div>
    </>
  );
}
