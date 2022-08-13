import type { GetStaticProps, NextPage } from 'next';
import { Place } from '~/presentation/components/contracts';
import { HomeTemple } from '~/presentation/templates/Home';

const Home: NextPage<{ places: Place[] }> = ({ places }) => {
  return <HomeTemple places={places} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const places: Place[] = [
    {
      id: '1',
      name: 'Meu',
      location: [40, -10]
    },
    {
      id: '2',
      name: 'Meu',
      location: [30, -15]
    },
    {
      id: '3',
      name: 'Meu',
      location: [20, -40]
    }
  ];
  return {
    props: { places }
  };
};

export default Home;
