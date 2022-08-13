import { IGetPageUseCase } from '~/domain/usecases';
import { IRemoteGetPage } from '~/data/protocols/graphql/queries';
import { left, right } from '~/shared/error-handler/either';
import { InternalServerError } from '~/domain/errors';

export class GetPageUseCase implements IGetPageUseCase {
  private readonly remoteGetPage: IRemoteGetPage;
  constructor(remoteGetPage: IRemoteGetPage) {
    this.remoteGetPage = remoteGetPage;
  }
  async handle(data: IGetPageUseCase.Input): IGetPageUseCase.output {
    const pages = await this.remoteGetPage.query(data);
    if (pages.isLeft()) {
      return left(new InternalServerError());
    }
    return right(pages.value);
  }
}
