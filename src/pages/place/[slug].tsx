import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { Place } from '~/domain/entities';
import { getPlacesFactory } from '~/infra/factories';
import { getPlaceFactory } from '~/infra/factories/get-place-factory';
import { PlaceTemple } from '~/presentation/templates/Place';

type placeProps = {
  place: Place;
};

const PlacePage: FunctionComponent<placeProps> = ({ place }) => {
  const router = useRouter();
  if (router.isFallback) return null;
  return <PlaceTemple place={place} />;
};

export default PlacePage;

export async function getStaticPaths() {
  const placesOrError = await getPlacesFactory().handle();
  if (placesOrError.isLeft()) {
    console.log({
      placesOrError: placesOrError.value
    });
    return { notFound: true };
  }
  const places = placesOrError.value;

  const paths = places.map(({ slug }) => ({ params: { slug } }));
  return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug ? (params?.slug as string) : '';
  const placeOrError = await getPlaceFactory().handle({ slug });
  if (placeOrError.isLeft()) {
    return { notFound: true };
  }

  const place = placeOrError.value;

  if (!place) return { notFound: true };
  return {
    props: { place }
  };
};
