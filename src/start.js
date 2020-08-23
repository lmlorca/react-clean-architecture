import { BlogInteractor } from "./blog/blog-interactor";
import { JSONPaceholderREST_API } from "./gateways/json-placeholder-rest-api";
import { InMemoryFakeAPI } from "./gateways/in-memory-fake-api";
import React from "react";
import { render } from "react-dom";
import { Blog, Header } from "./ui/layout";

const blog = new BlogInteractor();
blog.registerAPI(new JSONPaceholderREST_API());
blog.registerAPI(new InMemoryFakeAPI());

function Start() {
  const [apiKey, setApiKey] = React.useState(blog.rest_api.key);

  function handleChangeApi(key) {
    setApiKey(blog.changeAPI(key));
  }

  return (
    <>
      <Header
        changeApi={handleChangeApi}
        options={blog.registeredAPIs.reverse().map((api) => ({
          key: api.key,
          description: api.description,
        }))}
        selected={apiKey}
      />
      <Blog blog={blog} key={apiKey} />
    </>
  );
}

render(<Start />, document.getElementById("root"));
