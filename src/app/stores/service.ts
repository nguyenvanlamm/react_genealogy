import axios from "axios";
import { BASEURL } from "../main/baseUrl/BASEURL";
import { news, videos, categorys, comments, tags } from "./dataMock"
import { CommentModel, NewCategoryModel, NewModel, TagsModel, VideoModel } from "../models/models";

export const serviceApi = {

  getNews: async () => {
    // const resp = await axios.get(`${BASEURL + "/news"}`)
    // if (!resp) {
    //   throw new Error('Network response was not ok');
    // }
    // var datas = Object.values(resp.data.data.news);
    // console.log("asdasdasd: " + datas);
    // Fake Data
    var datas = Object.values(news);

    const newDatas: NewModel[] = [];
    datas.map((item) => {
      var itemNews = item as NewModel;
      newDatas.push(itemNews);
    });

    return newDatas as NewModel[];
  },

  getVideos: async () => {
    // const resp = await axios.get(`${BASEURL + "/videos"}`)
    // if (!resp) {
    //   throw new Error('Network response was not ok');
    // }

    // var datas = Object.values(resp.data.data.video);

    // Fake videos
    var datas = Object.values(videos);

    const videDatas: VideoModel[] = [];
    datas.map((item) => {
      var itemVideo = item as VideoModel;
      videDatas.push(itemVideo);
    });
    return videDatas as VideoModel[];
  },

  getNewCategories: async () => {
    // const resp = await axios.get(`${BASEURL + "/newsCategories"}`)
    // if (!resp) {
    //   throw new Error('Network response was not ok');
    // }

    // var datas = Object.values(resp.data.data.newsCategory);

    // Fake videos
    var datas = Object.values(categorys);
    const dataNewCategories: NewCategoryModel[] = [];
    datas.map((item) => {
      var category = item as NewCategoryModel;
      dataNewCategories.push(category);
    });
    return dataNewCategories as NewCategoryModel[];
  },

  getComments: async () => {
    // const resp = await axios.get(`${BASEURL + "/comments"}`)
    // if (!resp) {
    //   throw new Error('Network response was not ok');
    // }
    // var datas = Object.values(resp.data.data.comment);

    // Fake videos
    var datas = Object.values(comments);

    const dataComments: CommentModel[] = [];
    datas.map((item) => {
      var comment = item as CommentModel;
      dataComments.push(comment);
    });
    return dataComments as CommentModel[];
  },

  createComments: async (dataComment: CommentModel) => {
    // Fake data
    // const resp = await axios.post(`${BASEURL + "/comments"}`,
    //   {
    //     "comment": {
    //       "id": dataComment.id,
    //       "name": dataComment.name,
    //       "phone": dataComment.phone,
    //       "comment": dataComment.comment
    //     },
    //   })
    // if (!resp) {
    //   throw new Error('Network response was not ok');
    // }

    // console.log("Resp: " + JSON.stringify(resp));

    // var datas = Object.values(resp.data.data.comment);
    // return datas as unknown as CommentModel;
  },

  getTags: async () => {
    // const resp = await axios.get(`${BASEURL + "/tags"}`)
    // if (!resp) {
    //   throw new Error('Network response was not ok');
    // }

    // var datas = Object.values(resp.data.data.tag);

    // Fake videos
     var datas = Object.values(tags);

    const dataTags: TagsModel[] = [];
    datas.map((item) => {
      var tag = item as TagsModel;
      dataTags.push(tag);
    });

    return dataTags as TagsModel[];
  }
}


