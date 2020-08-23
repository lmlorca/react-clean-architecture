import { REST_API } from "./rest-api";
import { FetchPosts } from "./fetch-posts";
import { DeletePost } from "./delete-post";
import { RegisterAPI } from "./register-api";

export class BlogInteractor {
  constructor() {
    this.cases = {
      fetchPosts: new FetchPosts(),
      deletePost: new DeletePost(),
      registerAPI: new RegisterAPI(),
    };
    this.registeredAPIs = [];
  }

  async getPosts() {
    return await this.cases.fetchPosts.execute(this.rest_api);
  }

  async deletePost(id) {
    return await this.cases.deletePost.execute(this.rest_api, id);
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
}
