import { IGetPlaceUseCase } from '~/domain/usecases';
import { IRemoteGetPlace } from '~/data/protocols/graphql/queries';
import { left, right } from '~/shared/error-handler/either';
import { InternalServerError } from '~/domain/errors';

export class GetPlaceUseCase implements IGetPlaceUseCase {
  private readonly remoteGetPlace: IRemoteGetPlace;
  constructor(remoteGetPlace: IRemoteGetPlace) {
    this.remoteGetPlace = remoteGetPlace;
  }
  async handle(data: IGetPlaceUseCase.Input): IGetPlaceUseCase.output {
    const pages = await this.remoteGetPlace.query(data);
    if (pages.isLeft()) {
      return left(new InternalServerError());
    }
    return right(pages.value);
  }
}
