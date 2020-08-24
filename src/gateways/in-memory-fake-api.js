import { REST_API } from "../blog/rest-api";

export class InMemoryFakeAPI extends REST_API {
  constructor() {
    super();
    this.key = "in-memory-fake";
    this.url = "https://fake.com";
    this.description = "In-memory fake";
  }
  async getPosts() {
    const jsonDB = JSON.stringify(db);
    return Promise.resolve(JSON.parse(jsonDB));
  }

  async deletePost(id) {
    const post = db.find((post) => post.id === id);
    if (!post) {
      return Promise.resolve({ status: 404 });
    }
    db = db.filter((post) => post.id !== id);
    return Promise.resolve({ status: 200 });
  }

  async createPost(post) {
    const id = Math.max(db.map((post) => post.id)) + 1;
    const newPost = { ...post, id };

    db.push(newPost);
    return Promise.resolve(newPost);
  }

  async updatePost(post) {
    const exists = db.find((p) => p.id === post.id);
    if (!exists) {
      return Promise.resolve({ status: 404 });
    }

    db = db.map((p) => {
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

const db = [
  {
    body:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    userId: 1,
  },
];
