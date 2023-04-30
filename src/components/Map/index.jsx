import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const LocationMap = () => {

    
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY,
  });

  const Map = () => {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMap zoom={10} center={{ lat: 44, lng: -80 }} mapContainerClassName="map-container"></GoogleMap>
      </div>
    );
  };
  console.log("isLoaded + ", isLoaded);
  if (!isLoaded) return <div>Loading......</div>;
  return <Map></Map>;
};

export default LocationMap;
