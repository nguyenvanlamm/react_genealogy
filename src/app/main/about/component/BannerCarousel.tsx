import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./about.css";
const handleDragStart = (e) => e.preventDefault();

const itemsCarousel = [
  <img
    src="assets/images/about-page/banner-carousel/slide-1.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="assets/images/about-page/banner-carousel/slide-2.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="assets/images/about-page/banner-carousel/slide-3.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />
];

const BannerCarousel = () => {
  return (
    <AliceCarousel
      disableButtonsControls={true}
      autoPlay={true}
      infinite={true}
      autoPlayInterval={3000}
      mouseTracking
      items={itemsCarousel}
      // renderDotsItem={() => {
      //   return <div>
      //     <div className=""></div>
      //   </div>;
      // }}
    />
  );
};

export default BannerCarousel;
