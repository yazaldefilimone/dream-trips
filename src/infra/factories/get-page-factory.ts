import { GetPageUseCase } from '~/data/usecases';
import { IGetPageUseCase } from '~/domain/usecases';
import { RemoteGetPage } from '~/infra/services/graphql/queries';

export const getPagesFactory = function (): IGetPageUseCase {
  const remoteGetPage = new RemoteGetPage();
  const getPageUseCase = new GetPageUseCase(remoteGetPage);
  return getPageUseCase;
};
