import React from "react";
import { Post } from "../blocks";

export function Blog({ blog }) {
  function restorePost(id) {
    blog.restoreBackup(id);
    setPosts(blog.posts);
  }

  async function deletePost(id) {
    const { status } = await blog.deletePost(id);
    if (status === 200) {
      setPosts(posts.filter((post) => post.id !== id));
    }
  }

  async function updatePost(post) {
    await blog.updatePost(post);
    setPosts(blog.posts);
  }

  function handleEditPost(editedPost) {
    blog.makeBackup(editedPost.id);
    blog.editPost(editedPost);
    setPosts(blog.posts);
  }

  const [posts, setPosts] = React.useState([]);

  async function loadPosts() {
    setPosts(await blog.getPosts());
  }

  React.useEffect(function () {
    loadPosts();
  }, []);

  return (
    <div className="container max-w-screen-md mx-auto pt-32">
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          handleEditPost={(post) => handleEditPost(post)}
          updatePost={() => updatePost(post)}
          cancelEdit={() => restorePost(post.id)}
          delete={() => deletePost(post.id)}
        />
      ))}
    </div>
  );
}
