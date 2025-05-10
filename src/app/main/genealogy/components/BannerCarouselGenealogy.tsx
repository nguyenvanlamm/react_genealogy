import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../../about/component/about.css";
import slider_1 from "../../home/images/slide-1.jpg";

const handleDragStart = (e) => e.preventDefault();

const itemsCarousel = [
    <img
        src={slider_1}
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
