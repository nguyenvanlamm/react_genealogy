const ItemCategory = (props) => {
  const { category, indexLastItem, isSelected } = props;

  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className={`cursor-pointer averta-semibold font-semibold xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[12px] maxsm:text-[10px] leading-[24px] ${
          isSelected ? "text-[#E51A2A]" : "text-[#9E2B25]"
        } hover:text-[#E51A2A]`}
      >
        {category.name}
      </div>
      <div className={`w-[70%] ${isSelected ? "visible" : "invisible"}`}>
        <img
          className="w-full"
          src="assets/images/news-page/bg-item-category.png"
          alt=""
        />
      </div>
      <div className={`w-[50%] pt-[5px] ${indexLastItem ? "invisible" : "visible"}`}>
       <img className="w-full" src="assets/images/news-page/divide-category.png" alt="" />
      </div>
    </div>
  );
};

export default ItemCategory;
