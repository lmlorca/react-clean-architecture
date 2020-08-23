export class REST_API {
  constructor() {
    this.error = "Method not implemented.";
  }
  async getPosts() {
    throw new Error(this.error);
  }
  async deletePost(id) {
    throw new Error(this.error);
  }
  async editPost(post) {
    throw new Error(this.error);
  }
}
