import { REST_API } from "./rest-api";
import { FetchPosts } from "./fetch-posts";

export class BlogInteractor {
  constructor() {
    this.cases = {
      fetchPosts: new FetchPosts(),
    };
  }

  async getPosts() {
    return await this.cases.fetchPosts.execute(this.rest_api);
  }

  // Allow changing web api in runtime
  setAPI(rest_api) {
    if (!(rest_api instanceof REST_API)) {
      throw new Error("A REST API object must be provided.");
    }
    this.rest_api = rest_api;
  }
}
