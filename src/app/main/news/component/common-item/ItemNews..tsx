import { useEffect } from "react";
import { useComments } from "src/app/stores/hooks";

const ItemNews = (props) => {
  const { imageUrl, title, date, description} = props;

  return (
    <div className="cursor-pointer bg-white w-[100%] flex flex-row justify-center items-center">
      <img
        onDragStart={(e) => e.preventDefault()}
        src={imageUrl}
        alt="Image carousel"
        className="pl-[5px] sm:pl-[0] w-[40%] sm:w-[50%] sm:min-h-[167.86px] sm:max-h-[167.86px] max-w-[215px]"
      />

      <div className="flex-grow content p-[5px] sm:p-[13px] flex gap-[10px] flex-col sm:min-h-[167.86px] sm:max-h-[167.86px]">
        <div
          className={`line-clamp-1 sm:line-clamp-2 font-semibold xl:text-[24px] lg:text-[20px] md:text-[16px] sm:text-[14px] maxsm:text-[14px] leading-[20px] xl:leading-[30px] text-[#000000]`}
        >
          {title}
        </div>
        <div
          className={`font-normal xl:text-[12px] lg:text-[10px] md:text-[10px] sm:text-[10px] maxsm:text-[8px] leading-[14.52px] text-[#9D9EA3]`}
        >
          {date}
        </div>
        <div
          className={`line-clamp-2 font-medium xl:text-[14px] lg:text-[12px] md:text-[12px] sm:text-[12px] maxsm:text-[12px] leading-[16.94px] text-[#000000]`}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default ItemNews;
