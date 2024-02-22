import React from "react";

const GeneralIntroduction = () => {
  const imageIntroduction = [
    "assets/images/about-page/general-introduction/general-img1.jpg",
    "assets/images/about-page/general-introduction/general-img2.jpg",
    "assets/images/about-page/general-introduction/general-img3.jpg",
  ];

  return (
    <div className="flex flex-col md:flex-row">
      <div className="text-center h-full w-full md:w-[70%] xl:w-1/2 bg-[#75060C] flex flex-col gap-[25px] p-[4%]">
        <div className="utm text-white text-[48px] leading-[48px] text-center font-normal">
          GIỚI THIỆU CHUNG
        </div>
        <div className="averta-regular text-white text-[16px] leading-[24px] text-center font-normal">
          Di tích lịch sử đền thờ Trạng nguyên Kiều còn gọi là Nhà thờ
          các vị Đại khoa họ Kiều thuộc CẦN KIỆM – THẠCH THẤT – HÀ NỘI.
          <br />
          <br />
          Dòng họ Kiều ở CẦN KIỆM – THẠCH THẤT – HÀ NỘI là họ trước đây luôn có
          những người học hành đỗ đạt cao, có công lớn, được triều đình phong
          thưởng, giao giữ chức vụ quan trọng.
        </div>
        <div className="flex justify-center items-center">
          <svg
            width="97"
            height="23"
            viewBox="0 0 97 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_91_17165)">
              <path
                d="M27.2914 0V13.9102H35.9687V10.8504H30.3802V3.05976H41.8138V19.9449H22.1591V14.9458H12.8972V5.13569H20.1774V8.42141H16.9032V11.4812H23.2663V2.08064H9.8131V10.3467H0V19.1212H6.35357V16.0661H3.08412V13.4065H9.8131V18.0055H19.0702V23H44.9027V0H27.2914Z"
                fill="white"
              />
              <path
                d="M69.7039 0V13.9102H61.0313V10.8504H66.6197V3.05976H55.1862V19.9449H74.8409V14.9458H84.098V5.13569H76.8225V8.42141H80.092V11.4812H73.7384V2.08064H87.1821V10.3467H97V19.1212H90.6416V16.0661H93.9158V13.4065H87.1821V18.0055H77.925V23H52.1021V0H69.7039Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_91_17165">
                <rect width="97" height="23" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className="md:w-1/2 flex h-full xl:mt-[-3%] xl:mx-0 mt-[8%] mx-[-3.5%]">
        <div className="bg-[#9F2F29] flex flex-row gap-[3%]">
          {imageIntroduction.map((index) => (
            <div key={index}>
              <img className="my-[-10%]" src={index} alt="introduction" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneralIntroduction;
