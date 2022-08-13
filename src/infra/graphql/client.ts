import { GraphQLClient } from 'graphql-request';
import { env } from '~/shared/env';

export const client = new GraphQLClient(env.endpoint, {
  headers: {
    authorization: `Bearer ${env.secret}`
  }
});
