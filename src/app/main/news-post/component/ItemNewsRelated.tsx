import { useNavigate } from "react-router-dom";

const ItemNewsRelated = (props) => {
  const { listNews } = props;
  const navigate = useNavigate();
  const ClickNews = (id: number) => {
    navigate(`/news/${id}`)
  }
  return (
    <div className="flex w-full flex-col divide-y-1 divide-[#9E2B25] divide-opacity-20">
      {listNews.map((item, index) => (
        <div
          onClick={() => ClickNews(item.id)}
          key={index}
          className="item py-[2%] cursor-pointer w-full flex flex-row gap-[8px] sm:gap-[10px]"
        >
          <img
            className="w-[16%] maxsm:w-[70px] h-[55px]"
            src={item.imageUrl}
            alt=""
          />

          <div className="flex grow flex-col gap-[10px]">
            <div className="flex w-full flex-row place-content-between">
              <div className="des text-[16px] sm:text-[20px] leading-[24.2px] font-medium">
                {item.description}
              </div>
              <div>
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
                    d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z"
                    fill="#9E2B25"
                  />
                </svg>
              </div>

            </div>
            <div className="flex flex-row gap-[5px] items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_119_8631)">
                  <path
                    d="M8.00016 8.00004H7.50016C7.50016 8.21526 7.63788 8.40633 7.84205 8.47438L8.00016 8.00004ZM8.50016 4.66671C8.50016 4.39057 8.27631 4.16671 8.00016 4.16671C7.72402 4.16671 7.50016 4.39057 7.50016 4.66671H8.50016ZM9.84205 9.14105C10.104 9.22837 10.3872 9.08679 10.4745 8.82482C10.5618 8.56285 10.4202 8.27969 10.1583 8.19237L9.84205 9.14105ZM8.50016 8.00004V4.66671H7.50016V8.00004H8.50016ZM7.84205 8.47438L9.84205 9.14105L10.1583 8.19237L8.15828 7.5257L7.84205 8.47438ZM14.1668 8.00004C14.1668 11.4058 11.4059 14.1667 8.00016 14.1667V15.1667C11.9582 15.1667 15.1668 11.9581 15.1668 8.00004H14.1668ZM8.00016 14.1667C4.59441 14.1667 1.8335 11.4058 1.8335 8.00004H0.833496C0.833496 11.9581 4.04212 15.1667 8.00016 15.1667V14.1667ZM1.8335 8.00004C1.8335 4.59428 4.59441 1.83337 8.00016 1.83337V0.833374C4.04212 0.833374 0.833496 4.042 0.833496 8.00004H1.8335ZM8.00016 1.83337C11.4059 1.83337 14.1668 4.59428 14.1668 8.00004H15.1668C15.1668 4.042 11.9582 0.833374 8.00016 0.833374V1.83337Z"
                    fill="#9E2B25"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_119_8631">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="font-normal text-[10px] sm:text-[12px] text-[#9E2B25] leading-[12px]">
                {item.date}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemNewsRelated;
