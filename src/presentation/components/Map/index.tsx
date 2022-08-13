import { FunctionComponent } from 'react';

import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { MapContracts, Place } from '~/presentation/components/contracts';

const Map: FunctionComponent<MapContracts> = ({ places }) => {
  const position: LatLngExpression = [51.505, -0.09];

  function PlaceMap(place: Place) {
    return <Marker key={`place-${place.id}`} title={place.name} position={place.location}></Marker>;
  }

  return (
    <MapContainer center={position} zoom={3} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places?.map(PlaceMap)}
    </MapContainer>
  );
};

export default Map;
