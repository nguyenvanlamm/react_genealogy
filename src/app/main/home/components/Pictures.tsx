import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import titleIntroduce from '../images/title_introduce.png';
import diVieng from '../../home/images/di-vieng-1.jpg';
import dockinh1 from '../../home/images/dockinh1.jpg';
import slider_1 from '../../home/images/slide-1.jpg';
import slider_2 from '../../home/images/slide-2.jpg';
import slider_3 from '../../home/images/slide-3.jpg';
import imageHomeOne from '../images/imageHomeOne.png';
import imageHomeTwo from '../images/imageHomeTwo.png';
import imageHomeThree from '../images/imageHomeThree.png';
import imageHomeFour from '../images/imageHomeFour.png';
import iconTitleIntroduce from '../images/icon_title_introduce.png';
import imageRoof from '../images/imageRoof.png';
import imageBgHomeSix from '../images/imageBgHomeSix.png';
import ItemImage from "./ItemImage";

const eventItems = [
    {
        image: diVieng,
        content: {
            title: "1 Khu di tích đền thờ Tướng quân Kiều Quang Bích",
            time: "Thứ tư - 14/01/2015 09:10",
            des: "Để trả ơn người đã cứu mình được toàn mạng, Hoàng Phúc chọn cho, Để trả ơn người đã cứu mình được toàn mạng, Hoàng Phúc chọn cho",
        },
    },
    {
        image: dockinh1,
        content: {
            title: "2 Khu di tích đền thờ Tướng quân Kiều Quang Bích",
            time: "Thứ tư - 14/01/2015 09:10",
            des: "Để trả ơn người đã cứu mình được toàn mạng, Hoàng Phúc chọn cho, Để trả ơn người đã cứu mình được toàn mạng, Hoàng Phúc chọn cho",
        },
    },
    {
        image: slider_1,
        content: {
            title: "3 Khu di tích đền thờ Tướng quân Kiều Quang Bích",
            time: "Thứ tư - 14/01/2015 09:10",
            des: "Để trả ơn người đã cứu mình được toàn mạng, Hoàng Phúc chọn cho, Để trả ơn người đã cứu mình được toàn mạng, Hoàng Phúc chọn cho",
        },
    },
    {
        image: slider_2,
        content: {
            title: "4 Khu di tích đền thờ Tướng quân Kiều Quang Bích",
            time: "Thứ tư - 14/01/2015 09:10",
            des: "Để trả ơn người đã cứu mình được toàn mạng, Hoàng Phúc chọn cho, Để trả ơn người đã cứu mình được toàn mạng, Hoàng Phúc chọn cho",
        },
    },
    {
        image: slider_3,
        content: {
            title: "1 Khu di tích đền thờ Tướng quân Kiều Quang Bích",
            time: "Thứ tư - 14/01/2015 09:10",
            des: "Để trả ơn người đã cứu mình được toàn mạng, Hoàng Phúc chọn cho, Để trả ơn người đã cứu mình được toàn mạng, Hoàng Phúc chọn cho",
        },
    }, {
        image: diVieng,
        content: {
            title: "1 Khu di tích đền thờ Tướng quân Kiều Quang Bích",
            time: "Thứ tư - 14/01/2015 09:10",
            des: "Để trả ơn người đã cứu mình được toàn mạng, Hoàng Phúc chọn cho, Để trả ơn người đã cứu mình được toàn mạng, Hoàng Phúc chọn cho",
        },
    },
    {
        image: dockinh1,
        content: {
            title: "2 Khu di tích đền thờ Tướng quân Kiều Quang Bích",
            time: "Thứ tư - 14/01/2015 09:10",
            des: "Để trả ơn người đã cứu mình được toàn mạng, Hoàng Phúc chọn cho, Để trả ơn người đã cứu mình được toàn mạng, Hoàng Phúc chọn cho",
        },
    },
    {
        image: slider_1,
        content: {
            title: "3 Khu di tích đền thờ Tướng quân Kiều Quang Bích",
            time: "Thứ tư - 14/01/2015 09:10",
            des: "Để trả ơn người đã cứu mình được toàn mạng, Hoàng Phúc chọn cho, Để trả ơn người đã cứu mình được toàn mạng, Hoàng Phúc chọn cho",
        },
    },
    {
        image: slider_2,
        content: {
            title: "4 Khu di tích đền thờ Tướng quân Kiều Quang Bích",
            time: "Thứ tư - 14/01/2015 09:10",
            des: "Để trả ơn người đã cứu mình được toàn mạng, Hoàng Phúc chọn cho, Để trả ơn người đã cứu mình được toàn mạng, Hoàng Phúc chọn cho",
        },
    },
    {
        image: slider_3,
        content: {
            title: "1 Khu di tích đền thờ Tướng quân Kiều Quang Bích",
            time: "Thứ tư - 14/01/2015 09:10",
            des: "Để trả ơn người đã cứu mình được toàn mạng, Hoàng Phúc chọn cho, Để trả ơn người đã cứu mình được toàn mạng, Hoàng Phúc chọn cho",
        },
    },
];

const responsive = {
    0: { items: 4 },
    600: { items: 4 },
};

const Pictues = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const handleSlideChanged = ({ item }) => {
        setActiveSlideIndex(item);
    };
    const isLastSet = activeSlideIndex >= eventItems.length - responsive[600].items;


    return (
        <div className="relative xl:w-[63%] sm:w-[73%] maxsm:w-[83%] flex w-full flex-col mb-[4%] mt-[4%] items-center justify-center">
            <img src={imageRoof} className='z-[5] w-full pointer-events-none'></img>
            <div className='flex mt-[-1.5%] w-full justify-center sm:rounded-[20px] maxsm:rounded-[10px] bg-[#922620] sm:p-[2%] maxsm:p-[5%]'>
                <div className="flex flex-col w-full items-center justify-center">
                    <div className='relative sm:mt-[4%] maxsm:mt-0 bg-cover flex justify-center items-center utm w-[30%]'>
                        <div className='text-white xl:text-[48px] lg:text-[42px] md:text-[36px] sm:text-[30px] maxsm:text-[24px]'>
                            Ảnh
                        </div>
                        <img className='absolute sm:w-full maxsm:w-[140%] max-w-[140%] xl:h-[95px] sm:h-[70px] maxsm:h-[30px]' src={titleIntroduce}></img>
                        <img className='absolute left-[-10%] h-[150%]' src={iconTitleIntroduce}></img>
                    </div>
                    <div className="mt-[5%] w-[90%]">
                        <AliceCarousel
                            responsive={responsive}
                            disableDotsControls={true}
                            mouseTracking
                            onSlideChanged={handleSlideChanged}
                            items={eventItems.map((items, index) => (
                                <div key={index} className="sm:px-[15px] maxsm:px-[3px]">
                                    <ItemImage image={items.image} index={index}></ItemImage>
                                </div>
                            ))}
                            renderPrevButton={() => {
                                return (
                                    <div
                                        className={`alice-carousel__prev-btn-item ${activeSlideIndex === 0
                                            ? "border-2 border-white rounded-full"
                                            : "border-2 border-transparent rounded-full"
                                            }`}
                                    >
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M9.90906 7.26521C9.50324 6.8906 8.87058 6.9159 8.49597 7.32172L5.2652 10.8217C4.9116 11.2047 4.9116 11.7952 5.26519 12.1782L8.49597 15.6783C8.87057 16.0841 9.50323 16.1094 9.90905 15.7348C10.3149 15.3602 10.3402 14.7276 9.96558 14.3217L8.28397 12.5L18 12.5C18.5523 12.5 19 12.0523 19 11.5C19 10.9477 18.5523 10.5 18 10.5L8.284 10.5L9.96557 8.67829C10.3402 8.27247 10.3149 7.63981 9.90906 7.26521Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                );
                            }}
                            renderNextButton={() => {
                                return (
                                    <div
                                        className={`alice-carousel__prev-btn-item ${isLastSet
                                            ? "border-2 border-white rounded-full"
                                            : "border-2 border-transparent rounded-full"
                                            }`}
                                    >
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M14.0909 7.26521C14.4968 6.8906 15.1294 6.9159 15.504 7.32172L18.7348 10.8217C19.0884 11.2047 19.0884 11.7952 18.7348 12.1782L15.504 15.6783C15.1294 16.0841 14.4968 16.1094 14.091 15.7348C13.6851 15.3602 13.6598 14.7276 14.0344 14.3217L15.716 12.5L6 12.5C5.44771 12.5 5 12.0523 5 11.5C5 10.9477 5.44771 10.5 6 10.5L15.716 10.5L14.0344 8.67829C13.6598 8.27247 13.6851 7.63981 14.0909 7.26521Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                );
                            }}
                        />
                    </div>

                </div>
            </div>
            <img src={imageBgHomeSix} className='absolute z-[0] right-0 w-[18%] mt-[-18%] mix-blend-multiply'></img>
        </div>
    );
};

export default Pictues;

