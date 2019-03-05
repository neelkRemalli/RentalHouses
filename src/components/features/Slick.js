import React from "react";
import Slider from "react-slick";
import Img1 from "../../images/img1.jpg";
import Img2 from "../../images/img2.jpg";
import Img3 from "../../images/img3.jpg";

const Slick = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div
      className="wrapper_images"
      style={{ height: "70rem", overflow: "hidden" }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="item_img"
            style={{
              background: `url(${Img1})`,
              height: "70rem",
              backgroundPosition: "bottom",
              position: "relative"
            }}
          >
            <p className="header_main header_main-1">
              Find your way
              <span>Get help from a specialists</span>
            </p>
          </div>
        </div>

        <div>
          <div
            className="item_img"
            style={{
              background: `url(${Img2})`,
              height: "70rem",
              backgroundPosition: "bottom",
              position: "relative"
            }}
          >
            <p className="header_main header_main-2">
              Thinking of selling?
              <span>Our guide is a great place to start</span>
            </p>
          </div>
        </div>
        <div>
          <div
            className="item_img"
            style={{
              background: `url(${Img3})`,
              height: "70rem",
              backgroundPosition: "center center",
              backgroundRepeat: "no repeat",
              position: "relative"
            }}
          >
            <p className="header_main header_main-3">
              Don't miss Out
              <span>
                {" "}
                New homes are getting added all time
                <span />
              </span>
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Slick;
