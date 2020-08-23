export class DeletePost {
  async execute(rest_api, id) {
    return await rest_api.deletePost(id);
  }
}
