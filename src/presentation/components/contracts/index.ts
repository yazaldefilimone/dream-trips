import { ReactNode } from 'react';

export type Place = {
  id: string;
  name: string;
  location: Location;
};
export type MapContracts = {
  places?: Array<Place>;
};

export type LinkAppContracts = {
  href: string;
  children: ReactNode;
};

type Location = {
  latitude: number;
  longitude: number;
};
