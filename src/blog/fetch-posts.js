export class FetchPosts {
  constructor(blog) {
    this.blog = blog;
  }

  async execute(rest_api) {
    return await this.blog.rest_api.getPosts();
  }
}
