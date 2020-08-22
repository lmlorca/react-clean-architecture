import { REST_API } from "../blog/rest-api";

export class JSONPaceholderREST_API extends REST_API {
  constructor() {
    super();
    this.url = "https://jsonplaceholder.typicode.com/posts/";
    this.description = "JSON Placeholder";
  }
  async getPosts() {
    return fetch(this.url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        return json;
      });
  }
}
