import { gql } from 'graphql-request';

export const placeQuery = gql`
  query GetPlace {
    places {
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
