import { gql } from 'graphql-request';

export const PageQuery = gql`
  query GetPage($slug: String!) {
    pages(where: { slug: $slug }) {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`;
