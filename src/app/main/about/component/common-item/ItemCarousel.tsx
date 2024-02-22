import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const ItemCarousel = (props) => {
  const navigate = useNavigate();
  const { imageUrl, title, id, description } = props;
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };
  const handleDragStart = (e) => e.preventDefault();

  const ClickNews = (id: number) => {
    navigate(`/news/${id}`)
  }

  return (
    <div className="cursor-pointer w-full h-full flex flex-col justify-center items-center">
      <div className="h-[292.45px]">
        <img onClick={() => ClickNews(id)} onDragStart={handleDragStart} src={imageUrl} alt="Image carousel" className="h-full w-full mx-auto" />
      </div>
      <div className="p-[10px] w-full bg-white flex flex-col gap-[10px]">
        <div onClick={() => ClickNews(id)} className="line-clamp-1 averta-semibold font-semibold text-[24px] leading-[24px] text-[#000000]">
          {title}
        </div>
        <div onClick={() => ClickNews(id)} className="everta-light font-light text-[14px] leading-[24px] text-[#000000]">
          {title}
        </div>
        <div className="everta-black font-normal text-[16px] leading-[24px] text-[#000000]">
          {" "}
          {showFullText ? description : `${description.slice(0, 300)}...`}
          {!showFullText && (
            <button onClick={toggleShowFullText} className="font-bold">Xem thêm</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCarousel;
