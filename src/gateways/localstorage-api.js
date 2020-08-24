import { REST_API } from "../blog/rest-api";

export class LocalStorageAPI extends REST_API {
  constructor() {
    super();
    this.key = "local-storage";
    this.url = "local";
    this.description = "Local Storage";

    if (!localStorage.getItem("db"))
      localStorage.setItem("db", JSON.stringify([]));
  }

  async getPosts() {
    const db = localStorage.getItem("db");
    return Promise.resolve(JSON.parse(db));
  }

  async deletePost(id) {
    let db = JSON.parse(localStorage.getItem("db"));
    const post = db.find((post) => post.id === id);
    if (!post) {
      return Promise.resolve({ status: 404 });
    }

    db = db.filter((post) => post.id !== id);
    localStorage.setItem("db", JSON.stringify(db));
    return Promise.resolve({ status: 200 });
  }

  async createPost(post) {
    const json = localStorage.getItem("db");
    const db = JSON.parse(json);
    const id = Math.max(db.map((post) => post.id)) + 1;
    const newPost = { ...post, id };
    db.push(newPost);
    localStorage.setItem("db", JSON.stringify(db));
    return Promise.resolve(newPost);
  }

  async updatePost(post) {
    let db = JSON.parse(localStorage.getItem("db"));
    const exists = db.find((p) => p.id === post.id);

    if (!exists) {
      return Promise.resolve({ status: 404 });
    }

    db = db.map((p) => {
      if (p.id !== post.id) return p;
      return post;
    });

    localStorage.setItem("db", JSON.stringify(db));
    return Promise.resolve(post);
  }
}
