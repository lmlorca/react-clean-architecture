export class MakeBackup {
  constructor(blog) {
    this.blog = blog;
  }

  execute(id) {
    const backup = this.blog.backup.find((post) => post.id === id);

    if (!backup) {
      this.blog.backup.push(this.blog.posts.find((post) => post.id === id));
    }
  }
}
