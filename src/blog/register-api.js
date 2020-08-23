export class RegisterAPI {
  execute(interactor, rest_api) {
    interactor.registeredAPIs.push(rest_api);
  }
}
