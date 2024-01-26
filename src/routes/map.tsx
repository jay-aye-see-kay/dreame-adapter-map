import "leaflet/dist/leaflet.css";

import { Map } from "../components/Map";
import { useState } from "react";

const initialPositions: [number, number][] = [
  [51.505, -0.09],
  [51.505, -1.09],
  [51.505, 1.09],
  [50.505, -0.09],
];

export function MapPage() {
  const [positions, setPositions] = useState(initialPositions);

  return (
    <>
      <Map positions={positions} />
    </>
  );
}
