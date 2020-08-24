export class UpdatePost {
  async execute(interactor, post) {
    const editedPost = await interactor.rest_api.updatePost(post);

    interactor.posts = interactor.posts.map((post) => {
      if (post.id != editedPost.id) return post;
      return editedPost;
    });

    interactor.backup = interactor.backup.filter(
      (post) => post.id !== editedPost.id
    );
  }
}
