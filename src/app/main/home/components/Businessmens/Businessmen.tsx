import titleIntroduce from "../../images/title_introduce.png";
import iconTitleIntroduce from "../../images/icon_title_introduce.png";
import imageBgHomeTwo from "../../images/imageBgHomeTwo.png";
import ItemBusinessmen from "./ItemBusinessmen";
import { useNews } from "src/app/stores/hooks";
import { useEffect, useState } from "react";
import { NewModel } from "src/app/models/models";

const Businessmen = () => {
  const [news, getNews] = useNews();

  const [dataBusinessmens, SetDataBusinessmens] = useState<NewModel[]>([
    {
      id: 1,
      newsCategoryId: 1,
      title: "Gia phả họ Kiều",
      content: "<div>Hello</div>",
      description: "Hello",
      imageUrl: iconTitleIntroduce,
      date: "20-02-2024",
      comments: 1,
    },
  ]);

  useEffect(() => {
    if (news.length > 0) {
      const data: NewModel[] = [];
      news.forEach((item) => {
        if (item.newsCategoryId == 2) {
          data.push(item);
        }
      });
      SetDataBusinessmens(data);
    }
  }, [news]);

  return (
    <div className="relative xl:w-[63%] sm:w-[73%] maxsm:w-[83%] flex w-full justify-center">
      <div className="flex mt-[4%] w-full sm:rounded-[20px] maxsm:rounded-[10px] bg-[#922620] sm:p-[2%] maxsm:p-[5%] flex-col items-center">
        <div className="relative sm:mt-[2%] maxsm:mt-0 bg-cover flex justify-center items-center utm w-[30%]">
          <div className="text-white xl:text-[48px] lg:text-[42px] md:text-[36px] sm:text-[30px] maxsm:text-[22px]">
            Danh nhân họ Kiều
          </div>
          <img
            className="absolute sm:w-full maxsm:w-[140%] max-w-[140%] xl:h-[95px] sm:h-[70px] maxsm:h-[30px]"
            src={titleIntroduce}
          ></img>
          <img
            className="absolute left-[-10%] h-[150%]"
            src={iconTitleIntroduce}
          ></img>
        </div>
        <div className="flex mt-[4%] w-[90%] justify-around flex-row">
          {dataBusinessmens.map((item) => (
            <ItemBusinessmen
              id={item.id}
              name={item.title}
              image={item.imageUrl}
              years={item.date}
              description={item.description}
            ></ItemBusinessmen>
          ))}
        </div>
      </div>
      <img
        src={imageBgHomeTwo}
        className="absolute z-[0] right-0 w-[17%] mt-[18%] mix-blend-multiply"
      ></img>
    </div>
  );
};

export default Businessmen;
