export class EditPosts {
  constructor(blog) {
    this.blog = blog;
  }
  execute(editedPost) {
    this.blog.posts = this.blog.posts.map((post) => {
      if (post.id !== editedPost.id) return post;
      return editedPost;
    });
  }
}
