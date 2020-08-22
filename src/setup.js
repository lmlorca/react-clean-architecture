import { REST_API } from "./blog/rest-api";

export class ApplicationSetup {
  constructor() {
    this.registeredAPIs = [];
    this.currentAPI = null;
  }

  registerAPI(rest_api) {
    if (!(rest_api instanceof REST_API)) {
      throw new Error("A REST API object must be provided.");
    }

    this.registeredAPIs.push(rest_api);
    this.currentAPI = rest_api;
  }
}
