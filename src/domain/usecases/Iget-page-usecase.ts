import { Either } from '~/shared/error-handler/either';
import { Page } from '~/domain/entities';
import { InternalServerError } from '~/domain/errors';

export interface IGetPageUseCase {
  handle: (data: IGetPageUseCase.Input) => IGetPageUseCase.output;
}
export namespace IGetPageUseCase {
  export type output = Promise<Either<InternalServerError, Page>>;
  export type Input = { slug: string };
}
