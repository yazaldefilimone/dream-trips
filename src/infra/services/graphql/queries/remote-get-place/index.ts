import { InternalServerError } from '~/domain/errors';
import { Place } from '~/domain/entities';
import { IRemoteGetPlace } from '~/data/protocols/graphql/queries';

import { client } from '~/infra/services/graphql/client';
import { PlaceQuery } from './query';

import { left, right } from '~/shared/error-handler/either';

export class RemoteGetPlace implements IRemoteGetPlace {
  async query({ slug }: { slug: string }): IRemoteGetPlace.output {
    try {
      const { places } = await client.request<{ places: Place[] }>(PlaceQuery, { slug });
      return right(places[0]);
    } catch (error) {
      console.log({ error });
      return left(new InternalServerError());
    }
  }
}
