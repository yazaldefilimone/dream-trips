import { FunctionComponent } from 'react';
import { Gallery, Place } from '~/domain/entities';
import { PlaceTempleteContainer } from './styles';
type PlaceTempleteProps = {
  place: Place;
};
export const PlaceTemple: FunctionComponent<PlaceTempleteProps> = ({ place }) => {
  function PlaceImages(gallery: Gallery) {
    return <img key={`place-${place.id}`} src={gallery.url} alt={place.name} />;
  }
  return (
    <PlaceTempleteContainer>
      <h2>{place.name}</h2>
      <div dangerouslySetInnerHTML={{ __html: place.description.html }} />
      {place.gallery.map(PlaceImages)}
    </PlaceTempleteContainer>
  );
};
