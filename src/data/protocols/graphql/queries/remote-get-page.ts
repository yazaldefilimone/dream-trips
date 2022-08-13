import { Page } from '~/domain/entities';
import { InternalServerError } from '~/domain/errors';
import { Either } from '~/shared/error-handler/either';

export interface IRemoteGetPages {
  query: () => IRemoteGetPages.output;
}

export namespace IRemoteGetPages {
  export type output = Promise<Either<InternalServerError, Page[]>>;
}
