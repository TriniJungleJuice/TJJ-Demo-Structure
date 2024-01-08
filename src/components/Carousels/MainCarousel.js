import React, { useEffect, useState } from "react";
import Slider from "react-slick";

export default function MainCarousel() {
  const [width, setWidth] = useState(window.innerWidth);

  const slickSliderSettings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 3000,
    cssEase:"linear",
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Slider {...slickSliderSettings}>
        <div>
          <div
            style={{
              display: "flex",
              minHeight: width<420?"40vh":"100vh",
              alignItems: "center",
            }}
            className="slick-bg bg-1"
          >
            <div
              className="carousel-slider-box"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: width<420?"40vh":"100vh",
                width: "100%",
              }}
            >
              <div style={{ width: "50%", marginLeft: "5%" }}>
                <h3>
                  <span className="badge bg-warning text-dark">New</span>
                </h3>
                <h1 className="head">
                  Soca Brainwash 'The AfterParty Smile'
                </h1>
                <div
                  className="slide-info"
                >
                  <span>2024</span><span>|</span><span className="radius">+18</span>{" "}
                  <span>|</span><span>07:00 PM - 12:00 AM</span>
                </div>
                <p
                  className="slide-info"
                >
                  The official after party for Soca Brainwash 'The Western,' catered to those who want a little more party time.This event is walking distance from the festival and will feature some of the best djs and artistes.
                </p>
                <div
                  className="slider-buttons"
                >
                  <div className="btns">
                    Buy Tickets
                  </div>{" "}
                  <div
                    className="btns"
                    style={{ marginLeft: 10 }}
                  >Event Details
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              minHeight:  width<420?"40vh":"100vh",
              alignItems: "center",
            }}
            className="slick-bg bg-2"
          >
            <div
              className="carousel-slider-box"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height:  width<420?"40vh":"100vh",
                width: "100%",
              }}
            >
              <div style={{ width: "50%", marginLeft: "5%" }}>
                <h3>
                  <span className="badge bg-warning text-dark">New</span>
                </h3>
                <h1 className="head">
                IMAGINE - THE JOUVERT EXPERIENCE
                </h1>
                <div
                  className="slide-info"
                >
                  <span>2024</span><span>|</span><span className="radius">+18</span>{" "}
                  <span>|</span><span>03:00 PM - 10:00 PM</span>
                </div>
                <p
                  className="slide-info"
                >
                  Imagine a J'ouvert festival experience that incorporates all elements into one cultural festival party experience.Imagine being able to experience J'ouvert before going on the road later in the morning.
                </p>
                <div
                  className="slider-buttons"
                >
                  <div className="btns">
                    Buy Tickets
                  </div>{" "}
                  <div
                    className="btns"
                    style={{ marginLeft: 10 }}
                  >Event Details
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              minHeight:  width<420?"40vh":"100vh",
              alignItems: "center",
            }}
            className="slick-bg bg-3"
          >
            <div
              className="carousel-slider-box"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height:  width<420?"40vh":"100vh",
                width: "100%",
              }}
            >
              <div style={{ width: "50%", marginLeft: "5%" }}>
                <h3>
                  <span className="badge bg-warning text-dark">New</span>
                </h3>
                <h1 className="head">
                Soca Baby
                </h1>
                <div
                  className="slide-info"
                >
                  <span>2024</span><span>|</span><span className="radius">+18</span>{" "}
                  <span>|</span><span>01:00 PM - 04:00 PM</span>
                </div>
                <p
                  className="slide-info"
                >
                  The inaugural boatride hosted by Dj Private Ryan that is dedicated to hardcore Soca Lovers.This boatride will feature soca from the 90's 2000's and the present.Get ready to hear music that you haven't heard in years and also music of the present year of soca.
                </p>
                <div
                  className="slider-buttons"
                >
                  <div className="btns">
                    Buy Tickets
                  </div>{" "}
                  <div
                    className="btns"
                    style={{ marginLeft: 10 }}
                  >Event Details
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}
