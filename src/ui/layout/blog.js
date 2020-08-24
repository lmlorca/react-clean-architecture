import React from "react";
import { Post, PostControls, NewPost } from "../blocks";

export function Blog(props) {
  const { blog, toggleNewPost } = props;
  const [isNewPost] = toggleNewPost;

  function restorePost(id) {
    blog.restoreBackup(id);
    setPosts(blog.posts);
  }

  async function deletePost(id) {
    await blog.deletePost(id);
    setPosts(blog.posts);
  }

  async function createPost(newPost) {
    await blog.createPost(newPost);
    setNewPost({ title: "", body: "" });
    setPosts(blog.posts);
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
    const posts = await blog.getPosts();
    setPosts(posts.reverse());
  }

  React.useEffect(function () {
    loadPosts();
  }, []);

  const [newPost, setNewPost] = React.useState({ title: "", body: "" });

  return (
    <div className="container max-w-screen-md mx-auto pt-32">
      <PostControls
        toggleNewPost={toggleNewPost}
        createPost={(newPost) => createPost(newPost)}
        post={newPost}
      />
      {isNewPost ? (
        <NewPost post={newPost} setPost={setNewPost} />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}
