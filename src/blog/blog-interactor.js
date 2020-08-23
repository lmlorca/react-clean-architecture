import { REST_API } from "./rest-api";
import { FetchPosts } from "./fetch-posts";
import { EditPost } from "./edit-post";
import { DeletePost } from "./delete-post";
import { BackupPost } from "./backup-post";
import { RegisterAPI } from "./register-api";

export class BlogInteractor {
  constructor() {
    this.cases = {
      fetchPosts: new FetchPosts(),
      editPost: new EditPost(),
      deletePost: new DeletePost(),
      backupPost: new BackupPost(),
      registerAPI: new RegisterAPI(),
    };
    this.backup = [];
    this.registeredAPIs = [];
  }

  registerAPI(rest_api) {
    if (!(rest_api instanceof REST_API)) {
      throw new Error("A REST API object must be provided.");
    }

    if (!this.rest_api) this.rest_api = rest_api;

    this.cases.registerAPI.execute(this, rest_api);
  }

  changeAPI(key) {
    this.rest_api = this.registeredAPIs.find((api) => api.key === key);
    return this.rest_api.key;
  }

  makeBackup(post) {
    this.cases.backupPost.execute(this, post);
  }

  restoreBackup(id) {
    return this.backup.find((post) => post.id === id);
  }

  async getPosts() {
    return await this.cases.fetchPosts.execute(this.rest_api);
  }

  async editPost(editedPost) {
    this.backup = this.backup.filter((post) => post.id !== editedPost.id);
    return await this.cases.editPost.execute(this.rest_api, editedPost);
  }

  async deletePost(id) {
    return await this.cases.deletePost.execute(this.rest_api, id);
  }
}
