import {instance} from "../../../main/dal/instance";

export const searchAPI = {
  getSearchResults(params: GetSearchResultsParamsType) {
    const qParam = `${params.title}${params.category !== "all" ? `+subject:${params.category}` : ""}`;
    const queryParams = {
      q: qParam,
      orderBy: params.orderBy,
    };
    return instance.get<GetSearchResultsResponseType>(
      "volumes",
      {params: {...queryParams, key: "AIzaSyD-2JphujQms2y-fIfaSeuMybXP4ahaCuQ"}},
    );
  },
};

export const categories = ["all", "art", "biography", "computers", "history", "medical", "poetry"];
export const orderBy = ["relevance" , "newest"];

export type VolumeType = {
  kind: string
  id: string
  volumeInfo: {
    title: string
    authors: string[]
    description: string
    categories: string[]
    imageLinks: {
      smallThumbnail: string
      thumbnail: string
      small: string
      medium: string
      large: string
    }
  }
};

export type GetSearchResultsParamsType = {
  title: string
  category: string
  orderBy: string
};

type GetSearchResultsResponseType = {
  kind: string
  items: VolumeType[]
  totalItems: number
};
