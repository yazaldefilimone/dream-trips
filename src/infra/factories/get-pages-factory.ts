import { GetPagesUseCase } from '~/data/usecases';
import { IGetPagesUseCase } from '~/domain/usecases';
import { RemoteGetPages } from '~/infra/services/graphql/queries';

export const GetPagesFactory = function (): IGetPagesUseCase {
  const remoteGetPages = new RemoteGetPages();
  const getPagesUseCase = new GetPagesUseCase(remoteGetPages);
  return getPagesUseCase;
};
