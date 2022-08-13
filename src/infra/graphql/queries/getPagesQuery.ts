import { gql } from 'graphql-request';

export const GetPagesQuery = gql`
  query GetPages {
    pages {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`;
