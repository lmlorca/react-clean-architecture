import { REST_API } from "../blog/rest-api";

export class InMemoryFakeAPI extends REST_API {
  constructor() {
    super();
    this.url = "https://fake.com";
    this.description = "In-memory fake";
  }
  async getPosts() {
    return Promise.resolve([
      {
        body:
          "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        userId: 1,
      },
    ]);
  }
}
