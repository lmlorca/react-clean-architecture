export class RestoreBackup {
  execute(interactor, id) {
    const backup = interactor.backup.find((post) => post.id === id);

    if (backup) {
      interactor.posts = interactor.posts.map((post) => {
        if (post.id !== id) return post;
        return backup;
      });
      interactor.backup = interactor.backup.filter((post) => post.id !== id);
    }
  }
}
