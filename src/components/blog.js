import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api/fetch-posts";
import { Post } from "./post";

export function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(function () {
    fetchPosts().then((posts) => setPosts(posts));
  }, []);

  return (
    <div className="container max-w-screen-md mx-auto">
      {posts.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}
