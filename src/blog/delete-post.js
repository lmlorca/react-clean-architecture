export class DeletePost {
  constructor(blog) {
    this.blog = blog;
  }
  async execute(id) {
    const { status } = await this.blog.rest_api.deletePost(id);
    if (status === 200) {
      this.blog.posts = this.blog.posts.filter((post) => post.id !== id);
    }
  }
}
