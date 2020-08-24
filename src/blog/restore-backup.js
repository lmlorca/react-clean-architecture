export class RestoreBackup {
  constructor(blog) {
    this.blog = blog;
  }

  execute(id) {
    const backup = this.blog.backup.find((post) => post.id === id);

    if (backup) {
      this.blog.posts = this.blog.posts.map((post) => {
        if (post.id !== id) return post;
        return backup;
      });
      this.blog.backup = this.blog.backup.filter((post) => post.id !== id);
    }
  }
}
