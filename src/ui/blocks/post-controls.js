import React from "react";

export function PostControls(props) {
  const [isNewPost, setIsNewPost] = props.toggleNewPost;

  function render() {
    if (isNewPost) {
      return (
        <>
          <button
            onClick={() => {
              setIsNewPost(false);
            }}
            className="bg-gray-100 hover:bg-gray-300 text-sm font-bold py-2 mb-6 px-4 rounded"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              props.createPost(props.post).then(() => setIsNewPost(false));
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 mb-6 mx-2 rounded"
          >
            Confirm
          </button>
        </>
      );
    }
    return (
      <button
        onClick={() => {
          setIsNewPost(true);
        }}
        className="bg-gray-100 hover:bg-gray-300 text-sm font-bold py-2 mb-6 px-4 rounded"
      >
        New Post
      </button>
    );
  }

  return <>{render()}</>;
}
