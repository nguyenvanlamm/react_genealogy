import { useEffect, useState } from "react";
import { NewModel, TagsModel } from "src/app/models/models";
import { useTags } from "src/app/stores/hooks";

const HashTag = (props: { data: NewModel }) => {
  const [tags, getTags] = useTags();
  const [dataTags, SetDataTags] = useState<TagsModel[]>([]);

  useEffect(() => {
    if (tags.length <= 0) {
      getTags();
    } else {
      UpdateDataTags();
    }
  }, []);

  useEffect(() => {
    if (tags.length > 0) {
      UpdateDataTags();
    }
  }, [tags]);

  const UpdateDataTags = () => {
    const dataTags: TagsModel[] = [];
    console.log(props.data);
    props.data.tagId.map((item) => {
      tags.forEach(element => {
        if (element.id == item) {
          dataTags.push(element);
        }
      });
    });

    SetDataTags(dataTags);
  };

  return (
    <div className="px-[5%]">
      <div className="averta-semibold font-semibold text-[16px] leading-[24px] text-[#444444] pb-[8px]">
        TỪ KHÓA
      </div>
      <svg
        width="80"
        height="6"
        viewBox="0 0 80 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_119_8681)">
          <path
            d="M9.15429 3.30003V5.45703H5.64346V3.00559H7.30255V3.80236H6.44976V4.66025H8.34862V2.10115H5.93194V0.796773H0.804401V5.20261H3.78761V3.16848H2.33033V2.37139H4.59264V6H0V0H6.73792V1.3022H9.15429V2.50264H10.9086V1.8098H10.0552V1.01117H11.7136V3.30003H9.15429Z"
            fill="#9E2B25"
          />
          <path
            d="M20.4068 6V2.37139H22.6688V3.16848H21.2118V5.20261H24.1941V0.796773H19.0672V2.10115H16.6511V4.66025H18.5491V3.80236H17.6963V3.00559H19.355V5.45703H15.8461V3.30003H13.2861V1.01117H14.9443V1.8098H14.0905V2.50264H15.8461V1.3022H18.2618V0H24.9998V6H20.4068Z"
            fill="#9E2B25"
          />
        </g>
        <g clip-path="url(#clip1_119_8681)">
          <path
            d="M36.1543 3.30003V5.45703H32.6435V3.00559H34.3026V3.80236H33.4498V4.66025H35.3486V2.10115H32.9319V0.796773H27.8044V5.20261H30.7876V3.16848H29.3303V2.37139H31.5926V6H27V0H33.7379V1.3022H36.1543V2.50264H37.9086V1.8098H37.0552V1.01117H38.7136V3.30003H36.1543Z"
            fill="#9E2B25"
          />
          <path
            d="M47.4068 6V2.37139H49.6688V3.16848H48.2118V5.20261H51.1941V0.796773H46.0672V2.10115H43.6511V4.66025H45.5491V3.80236H44.6963V3.00559H46.355V5.45703H42.8461V3.30003H40.2861V1.01117H41.9443V1.8098H41.0905V2.50264H42.8461V1.3022H45.2618V0H51.9998V6H47.4068Z"
            fill="#9E2B25"
          />
        </g>
        <g clip-path="url(#clip2_119_8681)">
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
          <clipPath id="clip0_119_8681">
            <rect width="25" height="6" fill="white" />
          </clipPath>
          <clipPath id="clip1_119_8681">
            <rect
              width="25"
              height="6"
              fill="white"
              transform="translate(27)"
            />
          </clipPath>
          <clipPath id="clip2_119_8681">
            <rect
              width="25"
              height="6"
              fill="white"
              transform="translate(55)"
            />
          </clipPath>
        </defs>
      </svg>

      <div className="pt-[24px] gap-[8px] flex flex-wrap">
        {dataTags.map((tag, index) => (
          <div
            className="text-[#333333] cursor-pointer border p-[10px] rounded-[5px] border-[#333333]"
            key={index}
          >
            {tag.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HashTag;
