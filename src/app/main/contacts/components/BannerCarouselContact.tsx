import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../../about/component/about.css";
import slider_1 from "../../home/images/slide-1.jpg";
import slider_2 from "../../home/images/slide-2.jpg";
import slider_3 from "../../home/images/slide-3.jpg";

const handleDragStart = (e) => e.preventDefault();

const itemsCarousel = [
    <img
        src={slider_1}
        onDragStart={handleDragStart}
        role="presentation"
    />,
    <img
        src={slider_2}
        onDragStart={handleDragStart}
        role="presentation"
    />,
    <img
        src={slider_3}
        onDragStart={handleDragStart}
        role="presentation"
    />,
];

const BannerCarouselContact = () => {
    return (
        <AliceCarousel
            disableButtonsControls={true}
            autoPlay={true}
            infinite={true}
            autoPlayInterval={3000}
            mouseTracking
            items={itemsCarousel}
        />
    );
};

export default BannerCarouselContact;
