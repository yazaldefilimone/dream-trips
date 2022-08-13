import { FunctionComponent } from 'react';

import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { MapContracts, Place } from '~/presentation/components';
import { useRouter } from 'next/router';

const Map: FunctionComponent<MapContracts> = ({ places }) => {
  const router = useRouter();
  const position: LatLngExpression = [0, 0];
  function handlerMarker(slug: string) {
    return () => router.push(`/place/${slug}`);
  }

  function PlaceMap(place: Place) {
    const { latitude, longitude } = place.location;
    return (
      <Marker
        key={`place-${place.id}`}
        title={place.name}
        position={[latitude, longitude]}
        eventHandlers={{
          click: handlerMarker(place.slug)
        }}
      ></Marker>
    );
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
