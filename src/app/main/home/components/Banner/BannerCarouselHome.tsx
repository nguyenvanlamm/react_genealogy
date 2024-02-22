import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import imageBanner from "../../images/banner_home.jpg";
import image1 from "../../images/slide-1.jpg";
import image2 from "../../images/slide-2.jpg";
import image3 from "../../images/slide-3.jpg";
import arrowLeft from "../../images/arrow_left.png";
import arrowRight from "../../images/arrow_right.png";
import "./Banner.css"

const handleDragStart = (e) => e.preventDefault();

const itemsCarousel = [
    <img
        src={image1}
        onDragStart={handleDragStart}
        role="presentation"
    />,
    <img
        src={image2}
        onDragStart={handleDragStart}
        role="presentation"
    />,
    <img
        src={image3}
        onDragStart={handleDragStart}
        role="presentation"
    />,
];

const PrevButton = () => {
    return <p className="p-4 sm:w-[56px] maxsm:w-[26px] sm:h-[56px] maxsm:h-[26px] absolute xl:left-[-7%] xl:top-[45%] sm:left-[-9%] maxsm:left-[-10%] sm:top-[40%] maxsm:top-[30%]">
        <img src={arrowLeft} ></img>
    </p>
}

const NextButton = () => {
    return <p className="p-4 sm:w-[56px] maxsm:w-[26px] sm:h-[56px] maxsm:h-[26px] absolute xl:right-[-7%] xl:top-[45%] sm:right-[-9%] maxsm:right-[-10%] sm:top-[40%] maxsm:top-[30%]">
        <img src={arrowRight}></img>
    </p>
}

const BannerCarouselHome = () => {
    return (
        <div className="relative">
            <AliceCarousel
                mouseTracking
                keyboardNavigation={false}
                items={itemsCarousel}
                keyboardNavigation={true}
                renderPrevButton={() => PrevButton()}
                renderNextButton={() => NextButton()}
            />
        </div>
    );
};

export default BannerCarouselHome;
