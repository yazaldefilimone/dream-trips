import { Place } from '~/domain/entities';
import { InternalServerError } from '~/domain/errors';
import { Either } from '~/shared/error-handler/either';

export interface IRemoteGetPlace {
  query: ({ slug }: { slug: string }) => IRemoteGetPlace.output;
}

export namespace IRemoteGetPlace {
  export type output = Promise<Either<InternalServerError, Place>>;
}
