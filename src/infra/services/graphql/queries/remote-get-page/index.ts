import { InternalServerError } from '~/domain/errors';
import { Page } from '~/domain/entities';
import { IRemoteGetPage } from '~/data/protocols/graphql/queries';

import { client } from '~/infra/services/graphql/client';
import { PageQuery } from './query';

import { left, right } from '~/shared/error-handler/either';

export class RemoteGetPage implements IRemoteGetPage {
  async query({ slug }: { slug: string }): IRemoteGetPage.output {
    try {
      const { page } = await client.request<{ page: Page }>(PageQuery, { slug });
      return right(page);
    } catch (error) {
      return left(new InternalServerError());
    }
  }
}
