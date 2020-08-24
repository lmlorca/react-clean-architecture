import { REST_API } from "./rest-api";
import { FetchPosts } from "./fetch-posts";
import { UpdatePost } from "./update-post";
import { CreatePost } from "./create-post";
import { EditPosts } from "./edit-post";
import { DeletePost } from "./delete-post";
import { MakeBackup } from "./make-backup";
import { RestoreBackup } from "./restore-backup";
import { RegisterAPI } from "./register-api";
import { ChangeAPI } from "./change-api";

export class BlogInteractor {
  constructor() {
    this.cases = {
      fetchPosts: new FetchPosts(this),
      updatePost: new UpdatePost(this),
      createPost: new CreatePost(this),
      editPost: new EditPosts(this),
      deletePost: new DeletePost(this),
      makeBackup: new MakeBackup(this),
      restoreBackup: new RestoreBackup(this),
      registerAPI: new RegisterAPI(this),
      changeAPI: new ChangeAPI(this),
    };
    this.posts = [];
    this.backup = [];
    this.registeredAPIs = [];
  }

  registerAPI(rest_api) {
    if (!(rest_api instanceof REST_API)) {
      throw new Error("A REST API object must be provided.");
    }
    this.cases.registerAPI.execute(rest_api);
  }

  changeAPI(key) {
    this.cases.changeAPI.execute(key);
    return this.rest_api.key;
  }

  makeBackup(id) {
    this.cases.makeBackup.execute(id);
  }

  restoreBackup(id) {
    this.cases.restoreBackup.execute(id);
  }

  async getPosts() {
    this.posts = await this.cases.fetchPosts.execute();
    return this.posts;
  }

  editPost(editedPost) {
    this.cases.editPost.execute(editedPost);
  }

  async createPost(newPost) {
    return await this.cases.createPost.execute(newPost);
  }

  async updatePost(editedPost) {
    await this.cases.updatePost.execute(editedPost);
  }

  async deletePost(id) {
    return await this.cases.deletePost.execute(id);
  }
}
