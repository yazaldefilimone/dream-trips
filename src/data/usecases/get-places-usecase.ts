import { IGetPlacesUseCase } from '~/domain/usecases';
import { IRemoteGetPlaces } from '~/data/protocols/graphql/queries';
import { left, right } from '~/shared/error-handler/either';
import { InternalServerError } from '~/domain/errors';

export class GetPlacesUseCase implements IGetPlacesUseCase {
  private readonly remoteGetPlaces: IRemoteGetPlaces;
  constructor(remoteGetPlaces: IRemoteGetPlaces) {
    this.remoteGetPlaces = remoteGetPlaces;
  }
  async handle(): IGetPlacesUseCase.output {
    const pages = await this.remoteGetPlaces.query();
    if (pages.isLeft()) {
      return left(new InternalServerError());
    }
    return right(pages.value);
  }
}
