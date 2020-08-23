import React, { useState, useEffect } from "react";
import { Post } from "../blocks";

export function Blog(props) {
  const [posts, setPosts] = useState([]);

  useEffect(function () {
    props.blog.getPosts().then((posts) => setPosts(posts));
  }, []);

  function handleEditPost(editedPost) {
    if (!props.blog.backup.find((post) => post.id === editedPost.id)) {
      props.blog.makeBackup(posts.find((post) => post.id === editedPost.id));
    }
    setPosts(
      posts.map((post) => {
        if (post.id !== editedPost.id) return post;

        return {
          id: editedPost.id,
          title: editedPost.title,
          body: editedPost.body,
        };
      })
    );
  }

  async function doPostEdit(post) {
    const editedPost = await props.blog.editPost(post);

    setPosts(
      posts.map((post) => {
        if (post.id !== editedPost.id) return post;
        return editedPost;
      })
    );
  }

  function restorePost(id) {
    const postBackup = props.blog.backup.find((post) => post.id === id);
    if (postBackup) {
      setPosts(
        posts.map((post) => {
          if (post.id !== postBackup.id) return post;

          return postBackup;
        })
      );
    }
  }

  async function deletePost(id) {
    const { status } = await props.blog.deletePost(id);
    if (status === 200) {
      setPosts(posts.filter((post) => post.id !== id));
    }
  }

  return (
    <div className="container max-w-screen-md mx-auto pt-32">
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          handleEditPost={(post) => handleEditPost(post)}
          confirmEdit={() => doPostEdit(post)}
          cancelEdit={() => restorePost(post.id)}
          delete={() => deletePost(post.id)}
        />
      ))}
    </div>
  );
}
