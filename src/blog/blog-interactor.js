import { REST_API } from "./rest-api";
import { FetchPosts } from "./fetch-posts";
import { UpdatePost } from "./update-post";
import { DeletePost } from "./delete-post";
import { MakeBackup } from "./make-backup";
import { RestoreBackup } from "./restore-backup";
import { RegisterAPI } from "./register-api";

export class BlogInteractor {
  constructor() {
    this.cases = {
      fetchPosts: new FetchPosts(),
      updatePost: new UpdatePost(),
      deletePost: new DeletePost(),
      makeBackup: new MakeBackup(),
      restoreBackup: new RestoreBackup(),
      registerAPI: new RegisterAPI(),
    };
    this.posts = [];
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

  makeBackup(id) {
    this.cases.makeBackup.execute(this, id);
  }

  restoreBackup(id) {
    this.cases.restoreBackup.execute(this, id);
  }

  async getPosts() {
    this.posts = await this.cases.fetchPosts.execute(this.rest_api);
    return this.posts;
  }

  editPost(editedPost) {
    this.posts = this.posts.map((post) => {
      if (post.id !== editedPost.id) return post;
      return editedPost;
    });
  }

  async updatePost(editedPost) {
    await this.cases.updatePost.execute(this, editedPost);
  }

  async deletePost(id) {
    return await this.cases.deletePost.execute(this.rest_api, id);
  }
}
