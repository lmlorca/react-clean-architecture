import React, { useState, useEffect } from "react";
import { Post } from "../blocks";

export function Blog(props) {
  const [posts, setPosts] = useState([]);

  useEffect(function () {
    props.blog.getPosts().then((posts) => setPosts(posts));
  }, []);

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
          title={post.title}
          body={post.body}
          delete={() => deletePost(post.id)}
        />
      ))}
    </div>
  );
}
