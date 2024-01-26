import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

type Props = {
  positions: [number, number][];
};

export function Map({ positions }: Props) {
  return (
    <div id="map-wrapper">
      <MapContainer
        id="map"
        center={positions[0]}
        zoom={8}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {positions.map((position) => (
          <Marker key={position.toString()} position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
