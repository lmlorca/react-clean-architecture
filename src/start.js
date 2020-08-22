import { BlogInteractor } from "./blog/blog-interactor";
import { JSONPaceholderREST_API } from "./gateways/json-placeholder-rest-api";
import { InMemoryFakeAPI } from "./gateways/in-memory-fake-api";
import { ApplicationSetup } from "./setup";
import React from "react";
import { render } from "react-dom";
import { Header } from "./ui/layout";
import { Blog } from "./ui/blog";

const blog = new BlogInteractor();
const application = new ApplicationSetup();
const jsonPlaceholderApi = new JSONPaceholderREST_API();
const inMemoryFakeApi = new InMemoryFakeAPI();

// First registered will be the initial value
application.registerAPI(jsonPlaceholderApi);
application.registerAPI(inMemoryFakeApi);

function Start() {
  const [inStateAPI, setInStateAPI] = React.useState(application.currentAPI);

  blog.setAPI(inStateAPI);

  function handleChangeApi(api_key) {
    const selectedAPI = application.registeredAPIs.find(
      (api) => api.url === api_key
    );
    setInStateAPI(selectedAPI);
    blog.setAPI(inStateAPI);
  }

  return (
    <>
      <Header
        changeApi={handleChangeApi}
        options={application.registeredAPIs.reverse().map((api) => ({
          url: api.url,
          description: api.description,
        }))}
        selected={blog.rest_api.url}
      />
      <Blog blog={blog} key={blog.rest_api.url} />
    </>
  );
}

render(<Start />, document.getElementById("root"));
