import React from "react";
import { Card, Icon } from "../elements";

export function Post(props) {
  return (
    <Card
      header={
        <>
          <button className="m-2 text-gray-600 text-sm">
            <Icon type="edit" /> Edit
          </button>
          <button
            onClick={() => props.delete()}
            className="m-2 text-gray-400 text-sm"
          >
            <Icon type="trash" />
            Delete
          </button>
        </>
      }
      title={props.title}
      content={props.body}
    />
  );
}
