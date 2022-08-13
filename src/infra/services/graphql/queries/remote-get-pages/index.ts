import { InternalServerError } from '~/domain/errors';
import { Page } from '~/domain/entities';
import { IRemoteGetPages } from '~/data/protocols/graphql/queries';

import { client } from '~/infra/services/graphql/client';
import { PagesQuery } from './query';

import { left, right } from '~/shared/error-handler/either';

export class RemoteGetPages implements IRemoteGetPages {
  async query(): IRemoteGetPages.output {
    try {
      const { pages } = await client.request<{ pages: Page[] }>(PagesQuery, { first: 3 });
      return right(pages);
    } catch (error) {
      return left(new InternalServerError());
    }
  }
}
