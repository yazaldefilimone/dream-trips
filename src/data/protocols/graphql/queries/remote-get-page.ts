import { Page } from '~/domain/entities';
import { InternalServerError } from '~/domain/errors';
import { Either } from '~/shared/error-handler/either';

export interface IRemoteGetPage {
  query: ({ slug }: { slug: string }) => IRemoteGetPage.output;
}

export namespace IRemoteGetPage {
  export type output = Promise<Either<InternalServerError, Page>>;
}
