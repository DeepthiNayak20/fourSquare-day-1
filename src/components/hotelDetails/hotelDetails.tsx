import "./hotelDetails.css";
import "../searchElements/searchElements.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

const HotelDetails = (props: any) => {
  const detailedData = props.current;
  console.log("detailedData", detailedData);

  return (
    <div>
      <div className="hotelContainer">
        <div className="detailsMargin">
          <div className="hotelImages">
            {/* <Carousel> */}{" "}
            <div className="images">
              <img src={require("../../assets/images/sand.png")} alt="img" />
            </div>
            <div className="images">
              <img src={require("../../assets/images/sand.png")} alt="img" />
            </div>
            <div className="images">
              <img src={require("../../assets/images/sand.png")} alt="img" />
            </div>
            <div className="images">
              <img src={require("../../assets/images/sand.png")} alt="img" />
            </div>
            <div className="images">
              <img src={require("../../assets/images/sand.png")} alt="img" />
            </div>
            {/* </Carousel> */}
          </div>

          <div className="hotelCompleteInfo">
            <div className="hotelName">
              <div className="textContainer">
                <div className="text">
                  <div className="textHead">{detailedData.restaurant.name}</div>
                  <div className="textBody">
                    {detailedData.restaurant.cuisines}
                  </div>
                  <div className="textTail">
                    {" "}
                    {detailedData.restaurant.location.locality_verbose}
                  </div>
                </div>
                <div className="rating">
                  {detailedData.restaurant.user_rating.aggregate_rating}
                </div>
              </div>
            </div>
            <div className="hotelInfo">
              <div className="hotelDetails">
                <div className="info">
                  <div className="infoTitle">Info</div>
                  <div className="infoTitleBody">ADDRESS</div>
                  <div className="infoAddress">
                    {detailedData.restaurant.location.address}
                  </div>
                </div>
                <div className="hours">
                  <div className="hoursBold">HOURS</div>
                  <div className="timing">09.00 AM to 10.00PM</div>
                </div>
                <div className="catagory">
                  <div className="categoryHead">CATEGORY</div>
                  <div className="categoryTail">
                    {detailedData.restaurant.cuisines}
                  </div>
                </div>
              </div>
              <div className="hotelMap">
                <iframe
                  src={`https://maps.google.com/maps?q=${detailedData.restaurant.location.latitude},${detailedData.restaurant.location.longitude}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                ></iframe>
              </div>
            </div>
            <div className="hotelReviews">Reviews</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
