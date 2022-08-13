import { gql } from 'graphql-request';

export const GetPagesQuery = gql`
  query GetPages($first: Int) {
    pages(first: $first) {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`;
