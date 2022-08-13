import { Either } from '~/shared/error-handler/either';
import { Page } from '~/domain/entities';
import { InternalServerError } from '~/domain/errors';

export interface IGetPagesUseCase {
  handle: () => IGetPagesUseCase.output;
}
export namespace IGetPagesUseCase {
  export type output = Promise<Either<InternalServerError, Page[]>>;
}
