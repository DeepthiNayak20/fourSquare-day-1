import Api from "../../utils/api";
import { useEffect, useState } from "react";
import "./searchElements.css";
import Coordinates from "../../utils/coordinates";
import { useNavigate } from "react-router-dom";

const SearchElements = (props: any) => {
  const [first, setfirst] = useState<any>([]);
  const restaurant = Api();

  useEffect(() => {
    setfirst(restaurant);
  }, [restaurant]);

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
  console.log(nearBy);

  let search = props.search;
  console.log(Coordinates(search));

  return (
    <div className="searchItem">
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
                return (
                  <div key={i}>
                    <div className="searchContainer" onClick={hotelView}>
                      <div className="searchImg">
                        <img
                          src={user.restaurant.thumb}
                          alt="deepthi"
                          className="searchPic"
                        />
                      </div>
                      <div className="textContainer">
                        <div className="text">
                          <div className="textHead">
                            {i + 1}.&nbsp;{user.restaurant.name}
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
  );
};

export default SearchElements;
