import React from "react";
import { Card, Icon } from "../elements";

export function Post(props) {
  const [isEditing, setIsEditing] = React.useState(false);

  function handleEditing(editing) {
    setIsEditing(editing);
  }

  return (
    <Card
      header={
        !isEditing && (
          <>
            <button
              onClick={() => handleEditing(true)}
              className="m-2 text-gray-600 text-sm"
            >
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
        )
      }
      title={
        isEditing ? (
          <input
            onChange={(e) =>
              props.handleEditPost({
                title: e.target.value,
                body: props.body,
                id: props.id,
              })
            }
            className="w-full"
            type="text"
            value={props.title}
          />
        ) : (
          props.title
        )
      }
      content={
        isEditing ? (
          <textarea
            onChange={(e) =>
              props.handleEditPost({
                title: props.title,
                body: e.target.value,
                id: props.id,
              })
            }
            className="w-full"
            value={props.body}
          />
        ) : (
          props.body
        )
      }
      footer={
        isEditing && (
          <button onClick={() => props.confirmEdit()}>Confirm</button>
        )
      }
    />
  );
}
