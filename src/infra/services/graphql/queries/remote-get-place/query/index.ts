import { gql } from 'graphql-request';

export const PlaceQuery = gql`
  query GetPlace($slug: String) {
    places(where: { slug: $slug }) {
      id
      slug
      name
      location {
        latitude
        longitude
      }
      description {
        html
      }
      gallery {
        url
        height
        width
      }
    }
  }
`;
