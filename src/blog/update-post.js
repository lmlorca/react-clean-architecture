export class UpdatePost {
  constructor(blog) {
    this.blog = blog;
  }

  async execute(post) {
    const editedPost = await this.blog.rest_api.updatePost(post);

    this.blog.posts = this.blog.posts.map((post) => {
      if (post.id != editedPost.id) return post;
      return editedPost;
    });

    this.blog.backup = this.blog.backup.filter(
      (post) => post.id !== editedPost.id
    );
  }
}
