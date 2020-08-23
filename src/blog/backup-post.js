export class BackupPost {
  execute(interactor, post) {
    interactor.backup.push(post);
  }
}
