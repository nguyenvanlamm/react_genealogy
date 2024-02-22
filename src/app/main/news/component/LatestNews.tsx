import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NewModel } from "src/app/models/models";
import { useNews } from "src/app/stores/hooks";

const LatestNews = () => {
  const [news, getNews] = useNews();
  const navigate = useNavigate();
  const [dataNewLasted, SetDataNewLasted] = useState<NewModel[]>([
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
    SetDataNewLasted(news);
  }

  const ClickNews = (id:number) => {
    navigate(`/news/${id}`)
  }
  return (
    <div className="relative">
      <img
        className="w-full pointer-events-none absolute h-full top-0 left-0"
        src="assets/images/news-page/latest-news/latest-news-bg.png"
        alt=""
      />
      <div className="h-full flex w-full flex-col p-[5%]">
        <div className="text-[#444444] averta-semibold  font-semibold text-[16px] leading-[24px]">
          BÀI VIẾT MỚI NHẤT
        </div>
        <div className="py-[8px]">
          <svg
            width="80"
            height="6"
            viewBox="0 0 80 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_119_8806)">
              <path
                d="M9.15429 3.30003V5.45703H5.64346V3.00559H7.30255V3.80236H6.44976V4.66025H8.34862V2.10115H5.93194V0.796773H0.804401V5.20261H3.78761V3.16848H2.33033V2.37139H4.59264V6H0V0H6.73792V1.3022H9.15429V2.50264H10.9086V1.8098H10.0552V1.01117H11.7136V3.30003H9.15429Z"
                fill="#9E2B25"
              />
              <path
                d="M20.4068 6V2.37139H22.6688V3.16848H21.2118V5.20261H24.1941V0.796773H19.0672V2.10115H16.6511V4.66025H18.5491V3.80236H17.6963V3.00559H19.355V5.45703H15.8461V3.30003H13.2861V1.01117H14.9443V1.8098H14.0905V2.50264H15.8461V1.3022H18.2618V0H24.9998V6H20.4068Z"
                fill="#9E2B25"
              />
            </g>
            <g clip-path="url(#clip1_119_8806)">
              <path
                d="M36.1543 3.30003V5.45703H32.6435V3.00559H34.3026V3.80236H33.4498V4.66025H35.3486V2.10115H32.9319V0.796773H27.8044V5.20261H30.7876V3.16848H29.3303V2.37139H31.5926V6H27V0H33.7379V1.3022H36.1543V2.50264H37.9086V1.8098H37.0552V1.01117H38.7136V3.30003H36.1543Z"
                fill="#9E2B25"
              />
              <path
                d="M47.4068 6V2.37139H49.6688V3.16848H48.2118V5.20261H51.1941V0.796773H46.0672V2.10115H43.6511V4.66025H45.5491V3.80236H44.6963V3.00559H46.355V5.45703H42.8461V3.30003H40.2861V1.01117H41.9443V1.8098H41.0905V2.50264H42.8461V1.3022H45.2618V0H51.9998V6H47.4068Z"
                fill="#9E2B25"
              />
            </g>
            <g clip-path="url(#clip2_119_8806)">
              <path
                d="M64.1543 3.30003V5.45703H60.6435V3.00559H62.3026V3.80236H61.4498V4.66025H63.3486V2.10115H60.9319V0.796773H55.8044V5.20261H58.7876V3.16848H57.3303V2.37139H59.5926V6H55V0H61.7379V1.3022H64.1543V2.50264H65.9086V1.8098H65.0552V1.01117H66.7136V3.30003H64.1543Z"
                fill="#9E2B25"
              />
              <path
                d="M75.4068 6V2.37139H77.6688V3.16848H76.2118V5.20261H79.1941V0.796773H74.0672V2.10115H71.6511V4.66025H73.5491V3.80236H72.6963V3.00559H74.355V5.45703H70.8461V3.30003H68.2861V1.01117H69.9443V1.8098H69.0905V2.50264H70.8461V1.3022H73.2618V0H79.9998V6H75.4068Z"
                fill="#9E2B25"
              />
            </g>
            <defs>
              <clipPath id="clip0_119_8806">
                <rect width="25" height="6" fill="white" />
              </clipPath>
              <clipPath id="clip1_119_8806">
                <rect
                  width="25"
                  height="6"
                  fill="white"
                  transform="translate(27)"
                />
              </clipPath>
              <clipPath id="clip2_119_8806">
                <rect
                  width="25"
                  height="6"
                  fill="white"
                  transform="translate(55)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="justify-center items-center flex flex-col divide-y-1 divide-[#9E2B25] divide-opacity-20">
          {dataNewLasted.slice(0, 5).map((item, index) => (
            <div onClick={() => ClickNews(item.id)} key={index} className="cursor-pointer py-[5%] flex flex-row gap-[7.5px]">
              <div className="w-[33%]">
                <img src={item.imageUrl} alt="" className="min-h-[55px] max-h-[55px] min-w-[77px] max-w-[77px]" />
              </div>
              <div className="w-full flex justify-center items-center">
                <div className="font-normal text-[16px] leading-[22px] text-[#000000] line-clamp-2">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
