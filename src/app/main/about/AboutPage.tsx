import BannerCarousel from "./component/BannerCarousel";
import Facilities from "./component/Facilities";
import Event from "./component/Event";
import GeneralIntroduction from "./component/GeneralIntroduction";
import Introduction2 from "./component/Introduction2";

const AboutPage = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url("assets/images/about-page/BG.jpg")',
      }}
      className="flex relative sm:pt-[130px] maxsm:pt-[70px] flex-col w-full bg-cover bg-no-repeat justify-center items-center pt-[30px]">
      <div className="md:w-[72.65%] w-[96%] pb-[50px] md:pb-[160px]">
        <BannerCarousel />
      </div>
      <div className="md:w-[62.12%] w-[94%] pb-[50px] md:pb-[160px]">
        <GeneralIntroduction />
      </div>
      <div className="md:w-[62.12%] w-[94%] pb-[50px] md:pb-[80px]">
        <Introduction2></Introduction2>
      </div>
      <div className="md:w-[63.67%] w-[96%] pb-[50px] md:pb-[70px]">
        <Event></Event>
      </div>
      <div className="md:w-[63.67%] w-[96%] pb-[50px] md:pb-[105px]">
        <Facilities></Facilities>
      </div>
      <div className="absolute z-[0] right-0 w-[17%] mt-[-75%] mix-blend-multiply">
        <img className="w-full" src="assets/images/image-bg/imageBgHomeOne.png" alt="" />
      </div>
      <div className="absolute z-[0] left-0 w-[17%] mt-[-26%] mix-blend-multiply">
        <img className="w-full" src="assets/images/image-bg/imageBgHomeTwo.png" alt="" />
      </div>
      <div className="absolute z-[0] right-0 w-[17%] mt-[35%] mix-blend-multiply">
        <img className="w-full" src="assets/images/image-bg/imageBgHomeThree.png" alt="" />
      </div>
      <div className="absolute z-[0] left-0 w-[17%] mt-[93%] mix-blend-multiply">
        <img className="w-full" src="assets/images/image-bg/imageBgHomeFour.png" alt="" />
      </div>
      <div className="absolute z-[0] right-[1.9%] w-[17%] mt-[110%] mix-blend-multiply">
        <img className="w-full" src="assets/images/image-bg/imageBgHomeFive2.png" alt="" />
      </div>
    </div>
  );
};

export default AboutPage;
