import "./hotelDetails.css";
import "../searchElements/searchElements.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

const HotelDetails = () => {
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
                  <div className="textHead">deepthi</div>
                  <div className="textBody">mangalore</div>
                  <div className="textTail">ananya</div>
                </div>
                <div className="rating">9.4</div>
              </div>
            </div>
            <div className="hotelInfo">
              <div className="hotelDetails">
                <div className="info">
                  <div className="infoTitle">Info</div>
                  <div className="infoTitleBody">ADDRESS</div>
                  <div className="infoAddress">
                    Near Mandavi Paradise Manipal 576107 Karnataka
                  </div>
                </div>
                <div className="hours"></div>
                <div className="catagory"></div>
              </div>
              <div className="hotelMap">
                <iframe src="https://maps.google.com/maps?q=13.3409,74.7421&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
              </div>
            </div>
            <div className="hotelReviews">4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
