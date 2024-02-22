import { createTypedHooks } from "easy-peasy";
import { CommentModel } from "../models/models";
import { useCallback } from "react";
import { serviceApi } from "./service";
import { StoreModel } from "./store";

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreState = typedHooks.useStoreState;

export const useNews = (): [any, any] => {
  const news = useStoreState(state => state.news);
  const setNews = useStoreActions(actions => actions.setNews);
  const getNews = useCallback(async () => {
    { }
    const data = await serviceApi.getNews();
    setNews(data);
  }, [setNews]);
  return [news, getNews];
}

export const usePositionData = (): [any, any] => {
  const positionData = useStoreState(state => state.positionData);
  const setPositionData = useStoreActions(actions => actions.setPositionData);
  return [positionData, setPositionData];
}

export const useVideos = (): [any, any] => {
  const videos = useStoreState(state => state.videos);
  const setVideos = useStoreActions(actions => actions.setVideos);
  const getVideos = useCallback(async () => {
    { }
    const data = await serviceApi.getVideos();
    setVideos(data);
  }, [setVideos]);
  return [videos, getVideos];
}

export const useNewCategories = (): [any, any] => {
  const newCategories = useStoreState(state => state.newCategories);
  const setNewCategories = useStoreActions(actions => actions.setNewCategories);
  const getNewCategories = useCallback(async () => {
    { }
    const data = await serviceApi.getNewCategories();
    setNewCategories(data);
  }, [setNewCategories]);
  return [newCategories, getNewCategories];
}

export const useComments = (): [any, any, any] => {
  const comments = useStoreState(state => state.comments);
  const setComments = useStoreActions(actions => actions.setComments);
  const getComments = useCallback(async () => {
    { }
    const data = await serviceApi.getComments();
    setComments(data);
  }, [setComments]);
  const createComment = useCallback(async (dataComment: CommentModel) => {
    { }
    const data = await serviceApi.createComments(dataComment);
    getComments();
  }, [getComments]);
  return [comments, getComments, createComment];
}

export const useTags = (): [any, any] => {
  const tags = useStoreState(state => state.tags);
  const setTags = useStoreActions(actions => actions.setTags);
  const getTags = useCallback(async () => {
    { }
    const data = await serviceApi.getTags();
    setTags(data);
  }, [setTags]);
  return [tags, getTags];
}

export const useCurrentCategory = (): [any, any] => {
  const indexCategory = useStoreState(state => state.indexCategory);
  const setInndexCategory = useStoreActions(actions => actions.setInndexCategory);
  const setCategory = useCallback(async (index: number) => {
    { }
    setInndexCategory(index);
  }, [setInndexCategory]);
  return [indexCategory, setCategory];
}

