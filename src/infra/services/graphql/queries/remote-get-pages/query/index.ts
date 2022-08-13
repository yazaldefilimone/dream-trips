import { gql } from 'graphql-request';

export const PagesQuery = gql`
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
