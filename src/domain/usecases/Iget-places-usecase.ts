import { Either } from '~/shared/error-handler/either';
import { Place } from '~/domain/entities';
import { InternalServerError } from '~/domain/errors';

export interface IGetPlacesUseCase {
  handle: () => IGetPlacesUseCase.output;
}
export namespace IGetPlacesUseCase {
  export type output = Promise<Either<InternalServerError, Place[]>>;
}
