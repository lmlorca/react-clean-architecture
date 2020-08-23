export class MakeBackup {
  execute(interactor, post) {
    const backupExists = interactor.backup.find(
      (backupPost) => backupPost.id === post.id
    );

    if (!backupExists) {
      interactor.backup.push(post);
    }
  }
}
