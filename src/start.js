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

// Last registered will be initially used
application.registerAPI(inMemoryFakeApi);
application.registerAPI(jsonPlaceholderApi);

function Start() {
  const [inStateAPI, setInStateAPI] = React.useState(application.API_current);

  blog.setAPI(inStateAPI);

  function APISwitch(APIKey) {
    const selectedAPI = application.API_list.find((api) => api.url === APIKey);
    setInStateAPI(selectedAPI);
    blog.setAPI(inStateAPI);
  }

  return (
    <>
      <Header
        APISwitch={APISwitch}
        APIOptions={application.API_list.reverse().map((api) => ({
          url: api.url,
          description: api.description,
        }))}
        APISelected={blog.rest_api.url}
      />
      <Blog blog={blog} key={blog.rest_api.url} />
    </>
  );
}

render(<Start />, document.getElementById("root"));
