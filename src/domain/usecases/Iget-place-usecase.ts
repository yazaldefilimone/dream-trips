import { Either } from '~/shared/error-handler/either';
import { Page } from '~/domain/entities';
import { InternalServerError } from '~/domain/errors';

export interface IGetPlaceUseCase {
  handle: (data: IGetPlaceUseCase.Input) => IGetPlaceUseCase.output;
}
export namespace IGetPlaceUseCase {
  export type output = Promise<Either<InternalServerError, Page>>;
  export type Input = { slug: string };
}
