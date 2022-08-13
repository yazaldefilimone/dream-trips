import { gql } from 'graphql-request';

export const placeQuery = gql`
  query getPlace {
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
