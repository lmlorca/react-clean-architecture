export function fetchPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts/")
    .then((res) => res.json())
    .then((json) => json);
}
