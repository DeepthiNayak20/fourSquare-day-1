import GoogleMapReact from "google-map-react";
import "./maps.css";

const Maps = (props) => {
  console.log(
    "data",
    props &&
      props.nearBy &&
      props.nearBy[0] &&
      props.nearBy[0].restaurant.location.latitude
  );
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
        {props &&
          props.nearBy &&
          props.nearBy.map((place, i) => {
            return (
              <div
                lat={place.restaurant.location.latitude}
                lng={place.restaurant.location.longitude}
              >
                <div className="pin">{i + 1}</div>
              </div>
            );
          })}
      </GoogleMapReact>

      {/* <div>
        <SearchElements />
      </div> */}
    </div>
  );
};

export default Maps;
