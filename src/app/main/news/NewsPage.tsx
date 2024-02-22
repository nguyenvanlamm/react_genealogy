import BannerCarousel from "../about/component/BannerCarousel";
import Category from "./component/Category";
import ListNews from "./component/ListNews";
import LatestNews from "./component/LatestNews";
import { Breadcrumbs, Link } from "@mui/material";

const NewsPage = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("assets/images/about-page/BG.jpg")',
      }}
      className="flex relative sm:pt-[130px] maxsm:pt-[70px] flex-col w-full bg-cover bg-no-repeat justify-center items-center pb-[105px] pt-[30px]"
    >
      <div className="md:w-[72.65%] w-[96%]">
        <BannerCarousel />
      </div>
      <div className="flex w-[90%] md:w-[68%] flex-row place-content-start pt-[48px] pb-[31px]">
        <Breadcrumbs aria-label="breadcrumb" separator="›">
          <Link>Tin tức</Link>
          <div className="text-[#9E2B25] font-semibold text-[14px] averta-semibold">
            Tất cả
          </div>
        </Breadcrumbs>
      </div>

      <div className="flex flex-row xl:px-0 px-[4%] gap-[2%] w-full justify-center">
        <div className="sm:flex hidden flex-col w-[45%] xl:w-[20.5%] gap-[28px]">
          <Category></Category>
          <LatestNews></LatestNews>
        </div>
        <div className="w-[94%] xl:w-[47%]">
          <ListNews></ListNews>
        </div>
      </div>
      <div className="absolute z-[0] right-0 w-[17%] mt-[-75%] mix-blend-multiply">
        <img
          className="w-full"
          src="assets/images/image-bg/imageBgHomeOne.png"
          alt=""
        />
      </div>
      <div className="absolute z-[0] left-0 w-[17%] mt-[-26%] mix-blend-multiply">
        <img
          className="w-full"
          src="assets/images/image-bg/imageBgHomeTwo.png"
          alt=""
        />
      </div>
      <div className="absolute z-[0] right-0 w-[17%] mt-[35%] mix-blend-multiply">
        <img
          className="w-full"
          src="assets/images/image-bg/imageBgHomeThree.png"
          alt=""
        />
      </div>
      <div className="absolute z-[0] left-0 w-[17%] mt-[93%] mix-blend-multiply">
        <img
          className="w-full"
          src="assets/images/image-bg/imageBgHomeFour.png"
          alt=""
        />
      </div>
      <div className="absolute z-[0] right-0 w-[17%] mt-[110%] mix-blend-multiply">
        <img
          className="w-full"
          src="assets/images/image-bg/imageBgHomeFive2.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default NewsPage;
