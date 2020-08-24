export class MakeBackup {
  execute(interactor, id) {
    const backup = interactor.backup.find((post) => post.id === id);

    if (!backup) {
      interactor.backup.push(interactor.posts.find((post) => post.id === id));
    }
  }
}
