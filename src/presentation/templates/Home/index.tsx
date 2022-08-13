import { InfoOutline } from '@styled-icons/evaicons-outline';
import dynamic from 'next/dynamic';
import { Fragment, FunctionComponent } from 'react';
import { Place } from '~/presentation/components/contracts';
import { LinkApp } from '~/presentation/components/LinkApp';

const Map = dynamic(() => import('~/presentation/components/Map'), { ssr: false });

export const HomeTemple: FunctionComponent<{ places: Place[] }> = ({ places }) => {
  return (
    <Fragment>
      <LinkApp href="/about">
        <InfoOutline size={32} aria-label="about" />
      </LinkApp>
      <Map places={places} />
    </Fragment>
  );
};
