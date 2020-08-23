import React from "react";
import { Card, Icon } from "../elements";

export function Post(props) {
  const [isEditing, setIsEditing] = React.useState(false);

  function postControls() {
    if (!isEditing) {
      return (
        <>
          <button
            onClick={() => setIsEditing(true)}
            className="m-2 text-gray-600 text-sm"
          >
            <Icon type="edit" /> Edit
          </button>
          <button
            onClick={() => props.delete()}
            className="m-2 text-red-400 text-sm"
          >
            <Icon type="trash" /> Delete
          </button>
        </>
      );
    }
  }

  function postTitle() {
    if (isEditing) {
      return (
        <input
          onChange={(e) =>
            props.handleEditPost({
              title: e.target.value,
              body: props.body,
              id: props.id,
            })
          }
          className="w-full p-4 bg-gray-100"
          type="text"
          value={props.title}
        />
      );
    }

    return props.title;
  }

  function postBody() {
    if (isEditing) {
      return (
        <textarea
          onChange={(e) =>
            props.handleEditPost({
              title: props.title,
              body: e.target.value,
              id: props.id,
            })
          }
          rows={6}
          className="w-full p-4 bg-gray-100"
          value={props.body}
        />
      );
    }
    return props.body;
  }

  function postEditControls() {
    if (isEditing) {
      return (
        <>
          <button
            onClick={() => {
              props.cancelEdit();
              setIsEditing(false);
            }}
            className="bg-gray-100 hover:bg-gray-300 text-sm font-bold py-2 px-4 m-1"
          >
            Cancel
          </button>
          <button
            onClick={() => props.confirmEdit().then(() => setIsEditing(false))}
            className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 m-1"
          >
            Confirm
          </button>
        </>
      );
    }
  }

  return (
    <Card
      header={postControls()}
      title={postTitle()}
      content={postBody()}
      footer={postEditControls()}
    />
  );
}
