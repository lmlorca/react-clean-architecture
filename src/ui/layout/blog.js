import React, { useState, useEffect } from "react";
import { Post } from "../blocks";

export function Blog(props) {
  const [posts, setPosts] = useState([]);

  useEffect(function () {
    props.blog.getPosts().then((posts) => setPosts(posts));
  }, []);

  function handleEditPost(post) {
    setPosts(
      posts.map((p) => {
        if (p.id !== post.id) return p;

        return {
          id: post.id,
          title: post.title,
          body: post.body,
        };
      })
    );
  }

  async function editPost(post) {
    const newPost = await props.blog.editPost(post);

    setPosts(
      posts.map((post) => {
        if (post.id !== newPost.id) return post;
        return newPost;
      })
    );
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
          confirmEdit={() => editPost(post)}
          delete={() => deletePost(post.id)}
        />
      ))}
    </div>
  );
}
