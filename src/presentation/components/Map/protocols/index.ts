import { LatLngExpression } from 'leaflet';

export type Place = {
  id: string;
  name: string;
  location: LatLngExpression;
};
export type MapProtocols = {
  places?: Array<Place>;
};
