export class FetchPosts {
  async execute(rest_api) {
    return await rest_api.getPosts();
  }
}
