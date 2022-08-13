import { IRemoteGetPlaces } from '~/data/protocols/graphql/queries';
import { Place } from '~/domain/entities';
import { InternalServerError } from '~/domain/errors';
import { client } from '~/infra/services/graphql/client';

import { left, right } from '~/shared/error-handler/either';
import { placeQuery } from './query';

export class RemoteGetPlaces implements IRemoteGetPlaces {
  async query(): IRemoteGetPlaces.output {
    try {
      const { places } = await client.request<{ places: Place[] }>(placeQuery, { first: 3 });

      return right(places);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log({ message: error.message });
      return left(new InternalServerError());
    }
  }
}
