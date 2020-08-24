export class RegisterAPI {
  constructor(blog) {
    this.blog = blog;
  }
  execute(rest_api) {
    if (!this.blog.rest_api) this.blog.rest_api = rest_api;
    this.blog.registeredAPIs.push(rest_api);
  }
}
