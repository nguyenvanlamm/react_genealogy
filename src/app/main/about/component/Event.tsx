import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ItemCarousel from "./common-item/ItemCarousel";
import { useNews } from "src/app/stores/hooks";
import { NewModel } from "src/app/models/models";

const responsive = {
  0: { items: 1 },
  600: { items: 2 },
  1200: { items: 3 },
};
const Event = () => {
  const [news, getNews] = useNews();
  const [dataEvent, SetDataEvent] = useState<NewModel[]>([
    {
      id: 1,
      newsCategoryId: 1,
      title: "Gia phả họ Kiều",
      content: "<div>Hello</div>",
      description: "Hello",
      imageUrl: "https://tse1.mm.bing.net/th?id=OIP.OJ3iV3cYlhgtq3xy3gRpuAHaHa&pid=Api&P=0&h=180",
      date: "20-02-2024",
      comments: 1,
    }
  ]);

  useEffect(() => {
    if (news.length <= 0) {
      getNews();
    } else {
      UpdateDataNews();
    }
  }, [])

  useEffect(() => {
    if (news.length > 0) {
      UpdateDataNews();
    }
  }, [news]);

  const UpdateDataNews = () => {
    const data: NewModel[] = [];
    news.forEach(item => {
      if (item.newsCategoryId == 3) {
        data.push(item);
      }
    });

    SetDataEvent(data);
  }

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const isLastSet =
    activeSlideIndex >= dataEvent.length - responsive[600].items;

  return (
    <div>
      <div className="utm text-[#9F302A] text-[48px] leading-[48px] text-center font-normal pb-[60px]">
        SỰ KIỆN VÀ NHÂN VẬT HỌ KIỀU
      </div>
      <AliceCarousel
        responsive={responsive}
        disableDotsControls={true}
        mouseTracking
        onSlideChanged={(event) => {
          setActiveSlideIndex(event.item);
        }}
        items={dataEvent.map((item, index) => (
          <div key={index} className="px-[15px]">
            <ItemCarousel
              id={item.id}
              imageUrl={item.imageUrl} content={item.content} title={item.title} />
          </div>
        ))}
        renderPrevButton={() => {
          return (
            <div className="alice-carousel__prev-btn">
              <div
                className={`alice-carousel__prev-btn-item ${activeSlideIndex === 0
                  ? "border-2 border-[#A0312B] rounded-full"
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
                    fill="#A0312B"
                  />
                </svg>
              </div>
            </div>
          );
        }}
        renderNextButton={() => {
          return (
            <div className="alice-carousel__next-btn">
              <div
                className={`alice-carousel__next-btn-item ${isLastSet
                  ? "border-2 border-[#A0312B] rounded-full"
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
                    fill="#A0312B"
                  />
                </svg>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};

export default Event;
