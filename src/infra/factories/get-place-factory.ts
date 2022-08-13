import { GetPlaceUseCase } from '~/data/usecases';
import { IGetPlaceUseCase } from '~/domain/usecases';
import { RemoteGetPlace } from '~/infra/services/graphql/queries';

export const getPlaceFactory = function (): IGetPlaceUseCase {
  const remoteGetPlace = new RemoteGetPlace();
  const getPlaceUseCase = new GetPlaceUseCase(remoteGetPlace);
  return getPlaceUseCase;
};
