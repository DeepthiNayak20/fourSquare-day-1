import GoogleMapReact from "google-map-react";
import "./maps.css";
import { useEffect, useState } from "react";

const Maps = (props) => {
  const [index, setIndex] = useState(0);
  // console.log(
  //   "data",
  //   props &&
  //     props.nearBy &&
  //     props.nearBy[0] &&
  //     props.nearBy[0].restaurant.location.latitude
  // );

  const center = {
    lat:
      props.nearBy &&
      props.nearBy[0] &&
      props.nearBy[0].restaurant.location.latitude,
    lng:
      props.nearBy &&
      props.nearBy[0] &&
      props.nearBy[0].restaurant.location.longitude,
  };
  props.index(index);
  // useEffect(() => {
  //   console.log(
  //     "place",
  //     props.place && props.place.results && props.place.results[0].location
  //   );
  // });

  // console.log("place", props.place);
  return (
    <div className="mapsDisplay">
      <GoogleMapReact
        defaultZoom={14}
        resetBoundsOnResize={true}
        center={
          props.place && props.place.results && props.place.results[0].location
        }
      >
        {props &&
          props.nearBy &&
          props.nearBy.map((place, i) => {
            return (
              <div
                lat={place.restaurant.location.latitude}
                lng={place.restaurant.location.longitude}
              >
                <div
                  className="pin"
                  onClick={() => {
                    setIndex(i);
                  }}
                >
                  {i + 1}
                </div>
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
