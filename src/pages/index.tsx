import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Fragment } from 'react';
import { Place } from '~/presentation/components/contracts';
import { LinkApp } from '~/presentation/components/LinkApp';
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';
const Map = dynamic(() => import('~/presentation/components/Map'), { ssr: false });
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
const Home: NextPage = () => {
  return (
    <Fragment>
      <LinkApp href="/about">
        <InfoOutline size={32} aria-label="about" />
      </LinkApp>
      <Map places={places} />
    </Fragment>
  );
};

export default Home;
