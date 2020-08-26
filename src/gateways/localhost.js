import { REST_API } from "../blog/rest-api";

export class DevServer extends REST_API {
  constructor(port = 3000) {
    super();
    this.key = "localhost";
    this.url = `http://localhost:${port}/posts/`;
    this.description = "localhost";
  }
  async getPosts() {
    return fetch(this.url)
      .then((res) => res.json())
      .then((json) => json);
  }

  async deletePost(id) {
    return fetch(this.url + id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => res);
  }

  async createPost(post) {
    return fetch(this.url, {
      method: "POST",
      body: JSON.stringify({
        title: post.title,
        body: post.body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((json) => json);
  }

  async updatePost(post) {
    return fetch(this.url + post.id, {
      method: "PUT",
      body: JSON.stringify({
        title: post.title,
        body: post.body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((json) => json);
  }
}
