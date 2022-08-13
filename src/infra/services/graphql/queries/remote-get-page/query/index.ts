import { gql } from 'graphql-request';

export const PageQuery = gql`
  query GetPage($slug: String!) {
    page(where: { slug: $slug }) {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`;
