import GoogleMapReact from "google-map-react";
import "./maps.css";

const Maps = () => {
  return (
    <div className="mapsDisplay">
      <GoogleMapReact
        defaultZoom={16}
        resetBoundsOnResize={true}
        center={{
          lat: 13.3409,
          lng: 74.7421,
        }}
      >
        <div lat={13.3409} lng={74.7421}>
          <h1>hiiiiii</h1>
        </div>
      </GoogleMapReact>
    </div>
  );
};

export default Maps;
