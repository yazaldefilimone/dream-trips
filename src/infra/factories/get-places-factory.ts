import { GetPlacesUseCase } from '~/data/usecases';
import { IGetPlacesUseCase } from '~/domain/usecases';
import { RemoteGetPlaces } from '~/infra/services/graphql/queries';

export const getPlacesFactory = function (): IGetPlacesUseCase {
  const remoteGetPlaces = new RemoteGetPlaces();
  const getPlacesUseCase = new GetPlacesUseCase(remoteGetPlaces);
  return getPlacesUseCase;
};
