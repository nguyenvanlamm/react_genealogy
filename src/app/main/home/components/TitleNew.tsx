import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const TitleNew = (props: {
  id: number;
  title: string;
  description: string;
  date: number;
  imageUrl: string;
}) => {
  const [isShowFullText, SetIsShowFullText] = useState<boolean>(false);
  const navigate = useNavigate();
  const ConvertTimeStempToDate = (timeStemps: number) => {
    const date = new Date(timeStemps);
    const dayOfTheWeek = GetDay(date.getDay());
    const dateString = formatStringDate(date.getDate().toString());
    const monthString = formatStringDate((date.getMonth() + 1).toString());
    const yearsString = date.getFullYear().toString();
    const hourString = formatStringDate(date.getHours().toString());
    const minuteString = date.getMinutes().toString();
    return `${dayOfTheWeek} - ${dateString}/${monthString}/${yearsString} ${hourString}:${minuteString}`;
  };

  const formatStringDate = (text: string) => {
    return text.length > 1 ? text : `0${text}`;
  };

  const GetDay = (day: number) => {
    var dayOfWeek = "";
    switch (day) {
      case 0:
        dayOfWeek = "Chủ nhật";
        break;
      case 1:
        dayOfWeek = "Thứ 2";
        break;
      case 2:
        dayOfWeek = "Thứ 3";
        break;
      case 3:
        dayOfWeek = "Thứ 4";
        break;
      case 4:
        dayOfWeek = "Thứ 5";
        break;
      case 5:
        dayOfWeek = "Thứ 6";
        break;
      case 6:
        dayOfWeek = "Thứ 7";
        break;
      default:
        dayOfWeek = "Thứ 2";
        break;
    }
    return dayOfWeek;
  };

  const ClickNews = (id: number) => {
    navigate(`/news/${id}`)
  }

  return (
    <div className="cursor-pointer flex mt-[2%] flex-row bg-white p-[2%]">
      <div className="maxsm:min-w-[100px] maxsm:max-w-[100px] maxsm:min-h-[60px] maxsm:max-h-[60px] sm:min-w-[175px] sm:max-w-[175px] sm:min-h-[111px] sm:max-h-[111px]">
        <img onClick={() => ClickNews(props.id)} src={props.imageUrl} className="w-full h-full" />
      </div>
      <div className="flex ml-[2%] flex-col">
        <div onClick={() => ClickNews(props.id)} className="font-bold text-black xl:text-[24px] lg:text-[20px] md:text-[16px] sm:text-[14px] maxsm:text-[12px]">
          {props.title}
        </div>
        <div className="font-light xl:text-[14px] lg:text-[12px] md:text-[12px] sm:text-[12px] maxsm:text-[10px]">
          {ConvertTimeStempToDate(props.date)}
        </div>
        <div className="xl:text-[16px] maxsm:hidden sm:flex lg:text-[14px] md:text-[12px] sm:text-[12px] maxsm:text-[10px]">
          {isShowFullText
            ? props.description
            : `${props.description.slice(0, 200)}...`}
          {!isShowFullText && (
            <button
              onClick={() => SetIsShowFullText(true)}
              className="font-bold"
            >
              Xem thêm
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TitleNew;
