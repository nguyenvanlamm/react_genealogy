import React, { useEffect, useState } from "react";
import BannerCarousel from "../about/component/BannerCarousel";
import LatestNews from "../news/component/LatestNews";
import Comment from "./component/comment";
import NewsRelated from "./component/NewsRelated";
import NewsDetail from "./component/NewsDetail";
import HashTag from "./component/HashTag";
import FeedBack from "./component/FeedBack";
import { Breadcrumbs, Link } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASEURL } from "../baseUrl/BASEURL";
import { useComments } from "src/app/stores/hooks";
import { CommentModel, NewModel } from "src/app/models/models";
import { news1, news2, news3, news4, news5} from "src/app/stores/dataMock";

const NewsPostPage = () => {
  const { newId } = useParams<{ newId: string }>();
  const [comments, getComments] = useComments();
  const [listComments, SetListComments] = useState<CommentModel[]>(
    [
      {
        id: 1,
        newsId: 1,
        phone: "097365282",
        name: "Hồng Quân",
        comment: "Nhưng thông tin cần lưu giữ lại",
        imageUrl: "https://png.pngtree.com/png-vector/20191101/ourlarge/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
      }
    ]);
  const [dataCurrentNew, SetDataCurrentNew] = useState<NewModel>({
    id: 1,
    newsCategoryId: 1,
    title: "KẾ HOẠCH RƯỚC BẰNG DI TÍCH QUỐC TẾ LINH TỪ",
    content: "<div>Hello</div>",
    description: "Mô tả bài viết",
    imageUrl: "https://vnuf.edu.vn/wp-content/uploads/2020/11/nhung-buc-anh-chao-mung-ngay-nha-giao-vn-20-11-2.jpg",
    date: 1000,
    comments: 2,
    tagId: [1],
  });

  useEffect(() => {
    UpdateDataNew();
    UpdateDataComment();
  }, [newId]);

  const UpdateDataComment = () => {
    if (comments.length <= 0) {
      getComments();
    } else {
      UpdateComments();
    }
  }

  useEffect(() => {
    if (comments.length > 0) {
      UpdateComments();
    }
  }, [comments]);

  const UpdateComments = () => {
    const dataComments: CommentModel[] = [];
    comments.forEach(item => {
      if (item.newsId == newId) {
        dataComments.push(item);
      }
    });

    SetListComments(dataComments);
  }

  const UpdateDataNew = () => {
    const dataNew = localStorage.getItem("new" + newId);
    const data = JSON.parse(dataNew);
    if (dataNew == null) {
      updateDataNewDetail()
    } else {
      SetDataCurrentNew(data);
    }
  }

  async function updateDataNewDetail() {
    try {
      // const response = await axios.get(`${BASEURL + "/news/" + newId}`, {});
      // if (!response) {
      //   throw new Error("Network response was not ok");
      // }
      // var dataNew = response.data.data.news as NewModel;

      // Fake data
      var dataNew: NewModel = news1 as NewModel;
      switch (newId) {
        case "1":
          {
            dataNew = news1 as NewModel;
            break;
          }
        case "2":
          {
            dataNew = news2 as NewModel;
            break;
          }
        case "3":
          {
            dataNew = news3 as NewModel;
            break;
          }
        case "4":
          {
            dataNew = news4 as NewModel;
            break;
          }
        case "5":
          {
            dataNew = news5 as NewModel;
            break;
          }
        default: {
          dataNew = news1 as NewModel;
        }
      }

      SetDataCurrentNew(dataNew);

      // Fake data
      // localStorage.setItem(("new" + newId), JSON.stringify(response.data.data.news));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url("assets/images/about-page/BG.jpg")',
      }}
      className="flex relative flex-col sm:pt-[130px] maxsm:pt-[70px] w-full bg-cover bg-no-repeat justify-center items-center pb-[105px] pt-[30px]"
    >
      <div className="md:w-[72.65%] w-[96%]">
        <BannerCarousel />
      </div>
      <div className="flex w-[90%] md:w-[68%] flex-row place-content-start py-[26px] md:py-[48px]">
        <Breadcrumbs aria-label="breadcrumb" separator="›">
          <Link>Tin tức</Link>
          <div className="text-[#9E2B25] font-semibold text-[14px] averta-semibold">
            Lịch sử họ Kiều
          </div>
        </Breadcrumbs>
      </div>
      <div className="flex flex-row divide-news gap-[30px] w-full justify-center">
        <div className="md:w-[47%] w-[94%] flex flex-col gap-[26px] md:gap-[72px]">
          <NewsDetail
            ail data={dataCurrentNew}></NewsDetail>
          {
            listComments.map((item) => <FeedBack name={item.name} comment={item.comment} imageUrl={item.imageUrl}></FeedBack>)
          }
          <Comment></Comment>
          <NewsRelated data={dataCurrentNew}></NewsRelated>
        </div>
        <div className="md:flex hidden flex-col w-[20.5%] gap-[44px]">
          <LatestNews></LatestNews>
          <HashTag data={dataCurrentNew}></HashTag>
        </div>
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
      <div className="absolute z-[0] right-0 w-[27%] mt-[110%] mix-blend-multiply">
        <img className="w-full" src="assets/images/image-bg/imageBgHomeFive.png" alt="" />
      </div>
    </div>
  );
};

export default NewsPostPage;
