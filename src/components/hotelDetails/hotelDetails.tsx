import "./hotelDetails.css";
import "../searchElements/searchElements.css";
import ReactSimplyCarousel from "react-simply-carousel";
import { useState } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

const HotelDetails = (props: any) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const detailedData = props.current;
  console.log("detailedData", detailedData);

  return (
    <div>
      <div className="hotelContainer">
        <div className="detailsMargin">
          <div className="hotelImages">
            {/* <Carousel> 
            <div className="images">
              <img src={detailedData.restaurant.thumb} alt="img" />
            </div>
            {/* </Carousel> */}

            <ReactSimplyCarousel
              activeSlideIndex={activeSlideIndex}
              onRequestChange={setActiveSlideIndex}
              itemsToShow={1}
              itemsToScroll={1}
              forwardBtnProps={{
                //here you can also pass className, or any other button element attributes
                style: {
                  background: "#00000063",
                  border: "none",
                  borderRadius: "50%",
                  height: 30,
                  width: 30,
                  color: "white",
                  cursor: "pointer",
                  fontSize: "20px",
                  position: "absolute",
                  top: "12rem",
                  right: "13%",

                  textAlign: "center",
                },
                children: <span>{`>`}</span>,
              }}
              backwardBtnProps={{
                //here you can also pass className, or any other button element attributes
                style: {
                  background: "#00000063",
                  border: "none",
                  borderRadius: "50%",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "20px",
                  position: "absolute",
                  top: "12rem",
                  left: "13%",
                  height: 30,
                  lineHeight: 1,
                  textAlign: "center",
                  width: 30,
                  zIndex: 3,
                },
                children: <span>{`<`}</span>,
              }}
              responsiveProps={[
                {
                  itemsToShow: 5,
                  itemsToScroll: 1,
                  minWidth: 768,
                },
              ]}
              speed={400}
              easing="linear"
            >
              {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
              <div style={{ width: "100%", height: "100%" }}>
                <div className="images">
                  <img
                    src={
                      detailedData &&
                      detailedData.restaurant &&
                      detailedData.restaurant.thumb
                    }
                    alt="img"
                  />
                </div>
              </div>
              <div style={{ width: "100%", height: "100%" }}>
                <div className="images">
                  <img
                    src={
                      detailedData &&
                      detailedData.restaurant &&
                      detailedData.restaurant.thumb
                    }
                    alt="img"
                  />
                </div>
              </div>
              <div style={{ width: "100%", height: "100%" }}>
                <div className="images">
                  <img
                    src={
                      detailedData &&
                      detailedData.restaurant &&
                      detailedData.restaurant.thumb
                    }
                    alt="img"
                  />
                </div>
              </div>
              <div style={{ width: "100%", height: "100%" }}>
                <div className="images">
                  <img
                    src={
                      detailedData &&
                      detailedData.restaurant &&
                      detailedData.restaurant.thumb
                    }
                    alt="img"
                  />
                </div>
              </div>
              <div style={{ width: "100%", height: "100%" }}>
                <div className="images">
                  <img
                    src={
                      detailedData &&
                      detailedData.restaurant &&
                      detailedData.restaurant.thumb
                    }
                    alt="img"
                  />
                </div>
              </div>
              <div style={{ width: "100%", height: "100%" }}>
                <div className="images">
                  <img
                    src={
                      detailedData &&
                      detailedData.restaurant &&
                      detailedData.restaurant.thumb
                    }
                    alt="img"
                  />
                </div>
              </div>
            </ReactSimplyCarousel>
          </div>

          <div className="hotelCompleteInfo">
            <div className="hotelName">
              <div className="textContainer">
                <div className="text">
                  <div className="textHead">
                    {detailedData &&
                      detailedData.restaurant &&
                      detailedData.restaurant.name}
                  </div>
                  <div className="textBody">
                    {detailedData &&
                      detailedData.restaurant &&
                      detailedData.restaurant.cuisines}
                  </div>
                  <div className="textTail">
                    {" "}
                    {detailedData &&
                      detailedData.restaurant &&
                      detailedData.restaurant.location.locality_verbose}
                  </div>
                </div>
                <div className="rating">
                  {detailedData &&
                    detailedData.restaurant &&
                    detailedData.restaurant.user_rating.aggregate_rating}
                </div>
              </div>
            </div>
            <div className="hotelInfo">
              <div className="hotelDetails">
                <div className="info">
                  <div className="infoTitle">Info</div>
                  <div className="infoTitleBody">ADDRESS</div>
                  <div className="infoAddress">
                    {detailedData &&
                      detailedData.restaurant &&
                      detailedData.restaurant.location.address}
                  </div>
                </div>
                <div className="hours">
                  <div className="hoursBold">HOURS</div>
                  <div className="timing">09.00 AM to 10.00PM</div>
                </div>
                <div className="catagory">
                  <div className="categoryHead">CATEGORY</div>
                  <div className="categoryTail">
                    {detailedData &&
                      detailedData.restaurant &&
                      detailedData.restaurant.cuisines}
                  </div>
                </div>
              </div>
              <div className="hotelMap">
                <iframe
                  src={`https://maps.google.com/maps?q=${
                    detailedData &&
                    detailedData.restaurant &&
                    detailedData.restaurant.location.latitude
                  },${
                    detailedData &&
                    detailedData.restaurant &&
                    detailedData.restaurant.location.longitude
                  }&t=&z=13&ie=UTF8&iwloc=&output=embed`}
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
