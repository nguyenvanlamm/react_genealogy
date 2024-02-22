import { createStore, action, Thunk, Action, thunk, createTypedHooks } from 'easy-peasy';
import { NewModel } from '../main/models/NewModel';
import { CommentModel, NewCategoryModel, TagsModel, VideoModel } from '../models/models';


export interface StoreModel {
  news: NewModel[] | [];
  setNews: Action<StoreModel, NewModel[]>;
  videos: VideoModel[];
  setVideos: Action<StoreModel, VideoModel[]>;
  newCategories: NewCategoryModel[];
  setNewCategories: Action<StoreModel, NewCategoryModel[]>;
  comments: CommentModel[]
  setComments: Action<StoreModel, CommentModel[]>;
  createComment: Action<StoreModel, CommentModel>;
  tags: TagsModel[];
  setTags: Action<StoreModel, TagsModel[]>;
  positionData: any;
  setPositionData: Action<StoreModel, any>;
  indexCategory: number;
  setInndexCategory: Action<StoreModel, number>;
}

const store = createStore<StoreModel>({
  news: [],
  setNews: action((state, payload) => {
    state.news = payload;
  }),
  videos: [],
  setVideos: action((state, payload) => {
    state.videos = payload;
  }),
  newCategories: [],
  setNewCategories: action((state, payload) => {
    state.newCategories = payload;
  }),
  comments: [],
  setComments: action((state, payload) => {
    state.comments = payload;
  }),
  createComment: action((setComments, payload) => {
    setComments;
  }),
  tags: [],
  setTags: action((state, payload) => {
    state.tags = payload;
  }),
  positionData: {},
  setPositionData: action((state, payload) => {
    state.positionData = payload;
  }),
  indexCategory: 0,
  setInndexCategory: action((state, payload) => {
    state.indexCategory = payload;
  }),
});

export default store;
