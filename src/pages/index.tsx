import type { GetStaticProps, NextPage } from 'next';
import { getPlacesFactory } from '~/infra/factories';
import { Place } from '~/domain/entities';
import { HomeTemple } from '~/presentation/templates/Home';

const Home: NextPage<{ places: Place[] }> = ({ places }) => {
  return <HomeTemple places={places} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const placesOrError = await getPlacesFactory().handle();

  if (placesOrError.isLeft()) {
    return { notFound: true };
  }
  const places = placesOrError.value;
  console.log({ places });
  return {
    props: { places }
  };
};

export default Home;
