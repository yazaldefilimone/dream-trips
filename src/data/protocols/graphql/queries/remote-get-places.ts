import { Place } from '~/domain/entities';
import { InternalServerError } from '~/domain/errors';
import { Either } from '~/shared/error-handler/either';

export interface IRemoteGetPlaces {
  query: () => IRemoteGetPlaces.output;
}

export namespace IRemoteGetPlaces {
  export type output = Promise<Either<InternalServerError, Place[]>>;
}
