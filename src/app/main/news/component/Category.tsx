import React, { useEffect, useState } from "react";
import ItemCategory from "./common-item/ItemCategory";
import { useCurrentCategory, useNewCategories } from "src/app/stores/hooks";
import { NewCategoryModel } from "src/app/models/models";

const Category = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [newCategories, getNewCategories] = useNewCategories();
  const [indexCategory, setCategory] = useCurrentCategory();
  const [dataCategories, SetDataCategories] = useState<NewCategoryModel[]>([
    {
      id: 1,
      name: "Danh nhan",
      description: "Mota ngan gon",
      avatar: "https://tse1.mm.bing.net/th?id=OIP.OJ3iV3cYlhgtq3xy3gRpuAHaHa&pid=Api&P=0&h=180",
    }
  ]);
  useEffect(() => {
    if (newCategories.length <= 0) {
      getNewCategories();
    } else {
      UpdateDataNewCategories();
    }
  }, []);

  useEffect(() => {
    if (newCategories.length > 0) {
      UpdateDataNewCategories();
    }
  }, [newCategories]);

  const UpdateDataNewCategories = () => {
    SetDataCategories(newCategories);
  }

  const handleItemClick = (category, index) => {
    setSelectedItem(index);
    setCategory(category.id);
  }

  return (
    <div className="relative items-center justify-center flex">
      <img
        className="absolute h-full w-[90%] min-w-[300px]"
        src="assets/images/news-page/category.png"
        alt=""
      />
      <div className="top-0 py-[25%] z-[1] left-0 flex w-[90%] h-full flex-col justify-center items-center">
        <div className="utm font-normal xl:text-[48px] lg:text-[42px] md:text-[36px] sm:text-[30px] maxsm:text-[24px] leading-[48px] text-[#9E2B25]">
          DANH MỤC
        </div>
        <div className="flex flex-col gap-[15px] pt-[10%]">
          {dataCategories.map((category, index) => (
            <div className="w-full" key={index}
              onClick={() => handleItemClick(category, index)}
            >
              <ItemCategory
                category={category}
                indexLastItem={index === newCategories.length - 1}
                isSelected={index === selectedItem}
              ></ItemCategory>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
