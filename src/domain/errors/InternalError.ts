export class InternalServerError extends Error {
  constructor() {
    super('Internal Error Server, Please Try Again');
    this.name = 'InternalServerError';
  }
}
