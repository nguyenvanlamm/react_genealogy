import BannerCarouselContact from "./components/BannerCarouselContact";
import bgContact from "./images/bgContact.jpg";
import global from "./images/global.png";
import phoneCalling from "./images/phoneCalling.png";
import imageDecorations from "./images/imageDecorations.png";
import imageBgContact from "./images/imageBgContact.png";
import imageBgContactTwo from "./images/imageBgContactTwo.png";
import imageBgContactOne from "./images/imageBgContactOne.png";
import imageBgContactThree from "./images/imageBgContactThree.png";
import TextField from "@mui/material/TextField";
import { showMessage } from "app/store/fuse/messageSlice";
import { useAppDispatch } from "app/store";

const Contact = () => {
  const dispatch = useAppDispatch();

  return (
    <div
      style={{
        backgroundImage: `url(${bgContact})`,
      }}
      className="flex flex-col sm:pt-[130px] maxsm:pt-[70px] h-full w-full bg-cover bg-no-repeat justify-center items-center"
    >
      <div className="xl:w-[72.65%] sm:w-[82.65%] maxsm:w-[92.65%]">
        <BannerCarouselContact />
      </div>
      <div className="z-[1] relative pt-[2%] mb-[4%] flex-col items-center px-[1.5%] xl:text-[48px] lg:text-[42px] md:text-[36px] sm:text-[30px] maxsm:text-[24px] font-normal leading-[48px] text-white mt-[4%] flex justify-center bg-[#922620] maxsm:w-[93%] xl:w-[63%] sm:w-[73%] maxsm:w-[83%]">
        <div className="utm">Gửi góp ý</div>
        <div className="mt-[4%] flex w-full maxsm:flex-col sm:flex-row justify-between">
          <div className="h-full sm:w-[48%] maxsm:w-[100%] flex flex-col">
            <TextField
              className="mt-0 text-black"
              id=""
              label="Họ và tên"
              type="text"
              multiline
              rows={1}
              variant="outlined"
              fullWidth
              InputProps={{
                style: { backgroundColor: "white" },
              }}
            />
            <TextField
              className="mt-[2%]"
              id=""
              label="SĐT"
              type="text"
              multiline
              rows={1}
              variant="outlined"
              fullWidth
              InputProps={{
                style: { backgroundColor: "white" },
              }}
            />
            <div>
              <TextField
                className="mt-[2%]"
                id=""
                label="Tin nhắn"
                type="text"
                multiline
                rows={6}
                variant="outlined"
                fullWidth
                InputProps={{
                  style: { backgroundColor: "white" },
                }}
              />
            </div>
            <div className="flex w-full flex-row-reverse">
              <div className="flex justify-center mt-[4%] py-[3%] w-[28%] rounded text-center cursor-pointer hover-button-contact bg-[#F4CFA5] flex items-center xl:text-[24px] lg:text-[20px] md:text-[16px] sm:text-[14px] maxsm:text-[14px] leading-[21px] text-white">
                <div
                  onClick={() => {
                    dispatch(
                      showMessage({
                        message: "Gửi góp ý thành công", //text or html
                        autoHideDuration: 3000, //ms
                        anchorOrigin: {
                          vertical: "bottom", //top bottom
                          horizontal: "center", //left center right
                        },
                        variant: "success", //success error info warning null
                      })
                    );
                  }}
                >
                  GỬI
                </div>
              </div>
            </div>
          </div>
          <div className="utm flex leading-8 maxsm:w-[100%] flex-col sm:w-[48%]">
            <div className="xl:text-[48px] lg:text-[42px] md:text-[36px] sm:text-[30px] maxsm:text-[24px]">
              Thông tin liên hệ
            </div>
            <div className="flex sm:mt-[6%] maxsm:mt-[0%] flex-row items-center xl:text-[24px] lg:text-[20px] md:text-[16px] sm:text-[14px] maxsm:text-[14px]">
              <img
                src={phoneCalling}
                className="sm:w-[24px] sm:h-[24px] maxsm:w-[15px] maxsm:h-[15px]"
              ></img>
              <div className="ml-[1%] ">Điện thoại: 0979679207</div>
            </div>
            <div className="flex flex-row items-center xl:text-[24px] lg:text-[20px] md:text-[16px] sm:text-[14px] maxsm:text-[14px]">
              <img
                src={global}
                className="sm:w-[24px] sm:h-[24px] maxsm:w-[15px] maxsm:h-[15px]"
              ></img>
              <div className="ml-[1%]">Email: vuongkm01526@gmail.com</div>
            </div>
            <img src={imageDecorations} className="w-full mt-[6%]"></img>
          </div>
        </div>
        <img src={imageBgContact}></img>
        <img
          className="absolute sm:top-[10%] maxsm:top-[5%] w-[6%] right-[10%]"
          src={imageBgContactTwo}
        ></img>
      </div>
      <img
        className="z-[0] absolute top-[35%] mix-blend-multiply left-0 w-[18%]"
        src={imageBgContactOne}
      ></img>
      <img
        className="z-[0] absolute top-[55%] mix-blend-multiply right-0 w-[15%]"
        src={imageBgContactOne}
      ></img>
      <img
        className="z-[0] absolute mix-blend-multiply bottom-0 right-0 w-[25%]"
        src={imageBgContactThree}
      ></img>
    </div>
  );
};

export default Contact;
