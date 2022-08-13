import { ReactNode } from 'react';
import { Place as PlaceS } from '~/domain/entities';
export type Place = {
  id: string;
  slug: string;
  name: string;
  location: Location;
};
export type MapContracts = {
  places?: Array<PlaceS>;
};

export type LinkAppContracts = {
  href: string;
  children: ReactNode;
};

type Location = {
  latitude: number;
  longitude: number;
};
