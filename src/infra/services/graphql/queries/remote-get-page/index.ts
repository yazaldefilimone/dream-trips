import { InternalServerError } from '~/domain/errors';
import { Page } from '~/domain/entities';
import { IRemoteGetPage } from '~/data/protocols/graphql/queries';

import { client } from '~/infra/services/graphql/client';
import { PageQuery } from './query';

import { left, right } from '~/shared/error-handler/either';

export class RemoteGetPage implements IRemoteGetPage {
  async query({ slug }: { slug: string }): IRemoteGetPage.output {
    try {
      const { pages } = await client.request<{ pages: Page[] }>(PageQuery, { slug });
      return right(pages[0]);
    } catch (error: any) {
      console.log({ message: error.message, response: error.response });
      return left(new InternalServerError());
    }
  }
}
