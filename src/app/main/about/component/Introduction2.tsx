import React, { useState } from "react";

const Introduction2 = () => {
  const content = `
    HNVN xin tổng hợp giới thiệu các họ, chi họ Ngô tại các địa phương trong cả nước. Thông tin được tổng hợp từ Phả hệ Họ Ngô Việt Nam, phả riêng của một số họ và các nguồn liên quan khác, cập nhật đến hết tháng 5/2022. Tên các họ được ghi theo địa danh thôn ấp, xã phường, quận huyện, tỉnh thành, xếp theo vần chữ cái abc… Các họ có ký hiệu sao (*) là họ có thế thứ trong Phả hệ Họ Ngô Việt Nam. &nbsp;&nbsp;
    HNVN xin tổng hợp giới thiệu các họ, chi họ Ngô tại các địa phương trong cả nước. Thông tin được tổng hợp từ Phả hệ Họ Ngô Việt Nam, phả riêng của một số họ và các nguồn liên quan khác, cập nhật đến hết tháng 5/2022. Tên các họ được ghi theo địa danh thôn ấp, xã phường, quận huyện, tỉnh thành, xếp theo vần chữ cái abc… Các họ có ký hiệu sao (*) là họ có thế thứ trong Phả hệ Họ Ngô Việt Nam.
    `;
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div>
      <div className="utm text-[#9F302A] pb-[60px] text-[48px] leading-[48px] font-normal flex justify-center text-center items-center">
        HỌ KIỀU TRÊN KHẮP MỌI MIỀN ĐẤI NƯỚC
      </div>
      <div className="w-full z-[1] items-center hidden sm:flex justify-center">
          <img
            className="w-[83%] z-[1]"
            src="assets/images/about-page/general-introduction/mask_group.jpg"
            alt=""
          />
        </div>
      <div className="bg-[#75060C] mt-[-6%] z-[0] relative flex flex-col justify-center items-center pb-[56px]">
        <div className="averta-regular text-white text-[16px] leading-[24px] pt-[100px] p-[20px] font-normal">
          {showFullText ? content : `${content.slice(0, 500)}...`}
          {!showFullText && (
            <button onClick={toggleShowFullText} className="font-bold">Xem thêm</button>
          )}
        </div>
        <div className="absolute top-[10px] left-[10px]">
          <svg
            width="58"
            height="58"
            viewBox="0 0 58 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_93_17277)">
              <path
                d="M1.77254 45.3148L9.02508 45.3148L9.02508 30.803L16.2844 30.803L16.2844 23.5437L21.7711 23.5437L21.7711 30.7962L30.7962 30.7962L30.7962 21.7711L23.5437 21.7711L23.5437 16.2911L30.7962 16.2911L30.7962 9.02508L45.3148 9.02508L45.3148 1.77254L58 1.77254L58 0L45.3148 -5.54487e-07L44.4286 -5.93227e-07L30.803 -1.18882e-06L21.7779 -1.58332e-06L16.2911 -1.82315e-06L14.5186 -1.90063e-06L0.00677109 -2.53496e-06L0.00677045 14.5118L0.00677038 16.2844L0.00677014 21.7644L0.00676974 30.7962L0.00676915 44.4218L0.00676911 45.3081L0.00676855 57.9932L1.77931 57.9932L1.77931 45.3148L1.77254 45.3148ZM29.0237 23.5437L29.0237 29.0237L23.5437 29.0237L23.5437 23.5437L29.0237 23.5437ZM14.5118 23.5437L14.5118 29.0304L9.02508 29.0304L9.02508 23.5437L14.5118 23.5437ZM21.7711 21.7711L9.02508 21.7711L9.02508 16.2911L16.2844 16.2911L16.2844 9.02508L21.7711 9.02508L21.7711 21.7711ZM9.02508 14.5118L9.02508 9.02508L14.5118 9.02508L14.5118 14.5118L9.02508 14.5118ZM29.0237 14.5118L23.5437 14.5118L23.5437 9.02508L29.0237 9.02508L29.0237 14.5118ZM43.5423 1.77254L43.5423 7.25254L30.803 7.25254L30.803 1.77254L43.5423 1.77254ZM29.0237 7.25254L23.5437 7.25254L23.5437 1.77254L29.0237 1.77254L29.0237 7.25254ZM21.7711 1.77254L21.7711 7.2593L16.2844 7.2593L16.2844 1.77254L21.7711 1.77254ZM1.77254 14.5118L1.77254 1.77254L14.5118 1.77254L14.5118 7.2593L7.25931 7.2593L7.25931 14.5118L1.77254 14.5118ZM1.77254 16.2844L7.25931 16.2844L7.25931 21.7644L1.77254 21.7644L1.77254 16.2844ZM1.77254 23.5437L7.25931 23.5437L7.25931 29.0304L1.77254 29.0304L1.77254 23.5437ZM1.77254 43.5423L1.77254 30.803L7.25931 30.803L7.25931 43.5423L1.77254 43.5423Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_93_17277">
                <rect
                  width="58"
                  height="58"
                  fill="white"
                  transform="translate(58) rotate(90)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-[10px] right-[10px]">
          <svg
            width="58"
            height="58"
            viewBox="0 0 58 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_93_17279)">
              <path
                d="M56.2275 12.6852L48.9749 12.6852L48.9749 27.197L41.7156 27.197L41.7156 34.4563L36.2289 34.4563L36.2289 27.2038L27.2038 27.2038L27.2038 36.2289L34.4563 36.2289L34.4563 41.7089L27.2038 41.7089L27.2038 48.9749L12.6852 48.9749L12.6852 56.2275L7.74803e-08 56.2275L0 58L12.6852 58L13.5714 58L27.197 58L36.2221 58L41.7089 58L43.4814 58L57.9932 58L57.9932 43.4882L57.9932 41.7156L57.9932 36.2356L57.9932 27.2038L57.9932 13.5782L57.9932 12.6919L57.9932 0.00676599L56.2207 0.00676592L56.2207 12.6852L56.2275 12.6852ZM28.9763 34.4563L28.9763 28.9763L34.4563 28.9763L34.4563 34.4563L28.9763 34.4563ZM43.4882 34.4563L43.4882 28.9696L48.9749 28.9696L48.9749 34.4563L43.4882 34.4563ZM36.2289 36.2289L48.9749 36.2289L48.9749 41.7089L41.7156 41.7089L41.7156 48.9749L36.2289 48.9749L36.2289 36.2289ZM48.9749 43.4882L48.9749 48.9749L43.4882 48.9749L43.4882 43.4882L48.9749 43.4882ZM28.9763 43.4882L34.4563 43.4882L34.4563 48.9749L28.9763 48.9749L28.9763 43.4882ZM14.4577 56.2275L14.4577 50.7475L27.197 50.7475L27.197 56.2275L14.4577 56.2275ZM28.9763 50.7475L34.4563 50.7475L34.4563 56.2275L28.9763 56.2275L28.9763 50.7475ZM36.2289 56.2275L36.2289 50.7407L41.7156 50.7407L41.7156 56.2275L36.2289 56.2275ZM56.2275 43.4882L56.2275 56.2275L43.4882 56.2275L43.4882 50.7407L50.7407 50.7407L50.7407 43.4882L56.2275 43.4882ZM56.2275 41.7156L50.7407 41.7156L50.7407 36.2356L56.2275 36.2356L56.2275 41.7156ZM56.2275 34.4563L50.7407 34.4563L50.7407 28.9696L56.2275 28.9696L56.2275 34.4563ZM56.2275 14.4577L56.2275 27.197L50.7407 27.197L50.7407 14.4577L56.2275 14.4577Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_93_17279">
                <rect
                  width="58"
                  height="58"
                  fill="white"
                  transform="translate(0 58) rotate(-90)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Introduction2;
