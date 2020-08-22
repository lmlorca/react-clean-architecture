export class ApplicationSetup {
  constructor() {
    this.API_list = [];
    this.API_current = null;
  }

  registerAPI(rest_api) {
    this.API_list.push(rest_api);
    this.API_current = rest_api;
  }
}
