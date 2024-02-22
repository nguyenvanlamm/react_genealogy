import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ItemNews from "./common-item/ItemNews.";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";
import "./news.css";
import { NewModel } from "../../models/NewModel";
import { useCurrentCategory, useNews } from "src/app/stores/hooks";
import { data } from "autoprefixer";

const useStyles = makeStyles(() => ({
  paginationRoot: {
    "& .MuiPaginationItem-root": {
      "&.Mui-selected": {
        background: "rgba(244, 244, 244, 0.5)",
        "border-width": "1px",
        "border-color": "rgba(158, 43, 37, 1)",
      },
      background: "rgba(255, 255, 255, 1)",
      "border-width": "1px",
      "border-color": "rgba(190, 190, 190, 1)",
    },
  },
}));

const ListNews = () => {
  const classes = useStyles();
  const [news, getNews] = useNews();
  const [indexCategory, setCategory] = useCurrentCategory();
  const [itemsNewsActive, setItemsNewsActive] = useState([]);
  const [page, setPage] = useState(0);
  const [dataNews, SetdataNews] = useState<NewModel[]>([
    {
      id: 1,
      newsCategoryId: 1,
      title: "Gia phả họ Kiều",
      content: "<div>Hello</div>",
      description: "Hello",
      imageUrl: "https://tse1.mm.bing.net/th?id=OIP.OJ3iV3cYlhgtq3xy3gRpuAHaHa&pid=Api&P=0&h=180",
      date: "20-02-2024",
      comments: 1,
    }
  ]);

  useEffect(() => {
    if (news.length <= 0) {
      getNews();
    } else {
      UpdateDataNews();
    }
  }, [])

  useEffect(() => {
    if (news.length > 0) {

      const datas: NewModel[] = [];
      news.forEach(item => {
        if (item.newsCategoryId == indexCategory) {
          datas.push(item);
        }
      });

      SetdataNews(datas);
      setItemsNewsActive(datas.slice(0, 10));
    }
  }, [indexCategory]);

  useEffect(() => {
    if (news.length > 1) {
      UpdateDataNews();
    }
  }, [news]);

  const UpdateDataNews = () => {
    SetdataNews(news);
    setItemsNewsActive(news.slice(0, 10));
  };

  useEffect(() => {
    console.log("Page: " + page);
    setItemsNewsActive(news.slice((page * 10), ((page * 10) + 10)));
  }, [page])
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-[#9E2B25] border border-white flex flex-col pt-[35px] pb-[60px] maxsm:py-[15px] maxsm:gap-[15px] gap-[24px]">
        {itemsNewsActive.map((item, index) => (
          <div onClick={() => {
            navigate(`/news/${item.id}`)
          }} className="maxsm:px-[16px] px-[24px]" key={index}>
            <ItemNews imageUrl={item.imageUrl} title={item.title} date={item.date} description={item.description} timeSize="text-[50px] text-red"></ItemNews>
          </div>
        ))}
        <div
          className={`${classes.paginationRoot} flex pr-[24px] place-content-end`}
        >
          <Stack spacing={2}>
            <Pagination
              count={Math.ceil(dataNews.length / 10)}
              siblingCount={0}
              variant="outlined"
              shape="rounded"
              onChange={(event, page) => {
                setPage(page - 1);
              }}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default ListNews;
