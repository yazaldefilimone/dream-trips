import { LatLngExpression } from 'leaflet';
import { ReactNode } from 'react';

export type Place = {
  id: string;
  name: string;
  location: LatLngExpression;
};
export type MapContracts = {
  places?: Array<Place>;
};

export type LinkAppContracts = {
  href: string;
  children: ReactNode;
};
