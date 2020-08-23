export class RestoreBackup {
  execute(interactor, id) {
    const postBackup = interactor.backup.find((post) => post.id === id);

    if (postBackup) {
      interactor.backup = interactor.backup.filter(
        (post) => post.id !== postBackup.id
      );
      return postBackup;
    }
  }
}
