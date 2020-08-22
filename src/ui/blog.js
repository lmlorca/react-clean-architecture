import React, { useState, useEffect } from "react";
import { Post } from "./post";

export function Blog(props) {
  const [posts, setPosts] = useState([]);

  useEffect(function () {
    props.blog.getPosts().then((posts) => setPosts(posts));
  }, []);

  return (
    <div className="container max-w-screen-md mx-auto pt-32">
      {posts.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}
