import { REST_API } from "../blog/rest-api";

export class InMemoryFakeAPI extends REST_API {
  constructor() {
    super();
    this.key = "in-memory-fake";
    this.url = "https://fake.com";
    this.description = "In-memory fake";
  }
  async getPosts() {
    return Promise.resolve(posts);
  }

  async deletePost(id) {
    const post = posts.find((post) => post.id === id);
    if (!post) {
      return Promise.resolve({ status: 404 });
    }
    posts = posts.filter((post) => post.id !== id);
    return Promise.resolve({ status: 200 });
  }

  async editPost(post) {
    const exists = posts.find((p) => p.id === post.id);
    if (!exists) {
      return Promise.resolve({ status: 404 });
    }

    posts = posts.map((p) => {
      if (p.id !== post.id) return p;

      return {
        id: post.id,
        title: post.title,
        body: post.body,
      };
    });

    return Promise.resolve(post);
  }
}

let posts = [
  {
    body:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    userId: 1,
  },
];
