import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Fragment } from "react";

const HomeCarousel = () => {
  return (
    <Fragment>
      <div className="homeCarouselMargin"></div>
      <div style={{ padding: "0px 5px 0px 5px" }}>
        <Carousel infiniteLoop autoPlay>
          <div>
            <img src="/5.jpg" />
            <p className="legend">Ceremony Makeup</p>
          </div>
          <div>
            <img src="/2.jpg" />
            <p className="legend">Anniversary Makeup</p>
          </div>
          <div>
            <img src="/3.jpg" />
            <p className="legend">Party Makeup</p>
          </div>
          <div>
            <img src="/1.jpg" />
            <p className="legend">Bridal Makeup</p>
          </div>

          <div>
            <img src="/4.jpg" />
            <p className="legend">Regular Makeup</p>
          </div>
        </Carousel>
      </div>
    </Fragment>
  );
};

export default HomeCarousel;
