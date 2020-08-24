export class ChangeAPI {
  constructor(blog) {
    this.blog = blog;
  }

  execute(key) {
    this.blog.rest_api = this.blog.registeredAPIs.find(
      (api) => api.key === key
    );
  }
}
