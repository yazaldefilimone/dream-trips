import { Either } from '~/shared/error-handler/either';
import { Page } from '~/domain/entities';

export interface IGetPagesUseCase {
  handle: () => IGetPagesUseCase.output;
}
export namespace IGetPagesUseCase {
  export type output = Promise<Either<Error, Page[]>>;
}
