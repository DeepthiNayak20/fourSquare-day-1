import Api from "../../utils/api";
import { useEffect, useState } from "react";
import "./searchElements.css";
import Coordinates from "../../utils/coordinates";
import { useNavigate } from "react-router-dom";
import HotelDetails from "../hotelDetails/hotelDetails";

const SearchElements = (props: any) => {
  const [currentPath, setCurrentPath] = useState<any>({});
  let search = props.search;
  const [first, setfirst] = useState<any>([]);
  const [display, setDisplay] = useState<any>(false);
  const [mark, setmark] = useState<any>({});
  //console.log(Coordinates(search));
  const coords = Coordinates(search);
  const restaurant = Api(coords);
  console.log("mark", props.data);

  useEffect(() => {
    setfirst(restaurant);
  }, [restaurant]);

  props.location(coords);
  props.path(currentPath);
  const navigate = useNavigate();

  //   console.log(
  //     "data",
  //     first &&
  //       first.nearby_restaurants &&
  //       first.nearby_restaurants[1].restaurant.name
  //   );

  const hotelView = () => {
    navigate("/hotel");
  };
  const nearBy = first && first.nearby_restaurants;
  //console.log(nearBy);

  Coordinates(search);
  props.restData(nearBy);
  useEffect(() => {
    props && props.data && setmark(props.data);
  }, [props.data]);
  useEffect(() => {
    pinData();
  }, [mark]);

  const pinData = () => {
    if (JSON.stringify(mark) === "undefined" || "{}") {
      setDisplay(true);
    }
  };

  return (
    <div className="searchItem">
      {display ? (
        <div>
          {" "}
          {props.focus && (
            <div>
              {nearBy &&
                nearBy
                  // .filter((ele: any) => {
                  //   return props.search.toLowerCase() === ""
                  //     ? ele
                  //     : ele.restaurant.name
                  //         .toLowerCase()
                  //         .includes(props.search.toLowerCase());
                  // })
                  .map((user: any, i: any) => {
                    console.log("FRGFG", user);

                    return (
                      <div key={i}>
                        <div
                          className="searchContainer"
                          onClick={() => {
                            setCurrentPath(user);
                            setDisplay(!display);
                          }}
                        >
                          <div className="searchImg">
                            <img
                              src={
                                user && user.restaurant && user.restaurant.thumb
                              }
                              alt="deepthi"
                              className="searchPic"
                            />
                          </div>
                          <div className="textContainer">
                            <div className="text">
                              <div className="textHead">
                                {i + 1}.&nbsp;
                                {user.restaurant && user.restaurant.name}
                              </div>
                              <div className="textBody">
                                {user.restaurant.cuisines}
                              </div>
                              <div className="textTail">
                                {user.restaurant.location.locality_verbose}
                              </div>
                            </div>
                            <div className="rating">
                              {user.restaurant.user_rating.aggregate_rating}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
            </div>
          )}
        </div>
      ) : (
        <HotelDetails current={currentPath} />
      )}
    </div>
  );
};

export default SearchElements;
