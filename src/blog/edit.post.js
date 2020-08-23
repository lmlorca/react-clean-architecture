export class EditPost {
  async execute(rest_api, post) {
    return await rest_api.editPost(post);
  }
}
