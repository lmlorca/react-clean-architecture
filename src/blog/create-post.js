export class CreatePost {
  constructor(blog) {
    this.blog = blog;
  }
  async execute(post) {
    const newPost = await this.blog.rest_api.createPost(post);
    this.blog.posts = [newPost, ...this.blog.posts];
  }
}
