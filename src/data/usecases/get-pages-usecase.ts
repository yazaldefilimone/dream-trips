import { IGetPagesUseCase } from '~/domain/usecases';
import { IRemoteGetPages } from '~/data/protocols/graphql/queries';
import { left, right } from '~/shared/error-handler/either';
import { InternalServerError } from '~/domain/errors';

export class GetPagesUseCase implements IGetPagesUseCase {
  private readonly remoteGetPages: IRemoteGetPages;
  constructor(remoteGetPages: IRemoteGetPages) {
    this.remoteGetPages = remoteGetPages;
  }
  async handle(): IGetPagesUseCase.output {
    const pages = await this.remoteGetPages.query();
    if (pages.isLeft()) {
      return left(new InternalServerError());
    }
    return right(pages.value);
  }
}
