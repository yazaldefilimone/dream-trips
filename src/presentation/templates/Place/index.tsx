import { CloseOutline } from '@styled-icons/evaicons-outline';
import { Fragment, FunctionComponent } from 'react';
import { Gallery, Place } from '~/domain/entities';
import { LinkApp } from '~/presentation/components';
import Image from 'next/image';
import {
  PlaceTempleteContainer,
  PlaceTempleteContent,
  PlaceTempleTitle,
  PlaceTempleBody,
  PlaceTempleGallery
} from './styles';

type PlaceTempleteProps = {
  place: Place;
};
export const PlaceTemple: FunctionComponent<PlaceTempleteProps> = ({ place }) => {
  function PlaceImages(gallery: Gallery) {
    return <Image key={`place-${place.id}`} src={gallery.url} width={500} height={400} alt={place.name} />;
  }
  return (
    <Fragment>
      <LinkApp href="/">
        <CloseOutline size={32} aria-label="Go back to Map" />
      </LinkApp>
      <PlaceTempleteContainer>
        <PlaceTempleteContent>
          <PlaceTempleTitle>{place.name}</PlaceTempleTitle>
          <PlaceTempleBody>
            <div dangerouslySetInnerHTML={{ __html: place.description.html }} />
          </PlaceTempleBody>
          <PlaceTempleGallery>{place.gallery.map(PlaceImages)}</PlaceTempleGallery>
        </PlaceTempleteContent>
      </PlaceTempleteContainer>
    </Fragment>
  );
};
