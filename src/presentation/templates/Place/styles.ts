import styled from 'styled-components';

export const PlaceTempleteContainer = styled.div`
  padding: var(--large) var(--medium);
`;
export const PlaceTempleteContent = styled.div`
  max-width: var(--container);
  margin: 0 auto;
`;

export const PlaceTempleTitle = styled.h2`
  font-size: var(--large);
  margin-bottom: var(--medium);
`;
export const PlaceTempleBody = styled.div`
  margin-bottom: var(--large);
  p {
    margin-bottom: var(--medium);
  }
`;
export const PlaceTempleGallery = styled.div`
  display: grid;
  grid-gap: var(--medium);
`;
