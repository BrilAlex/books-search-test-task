import {instance} from "../../../main/dal/instance";
import {VolumeType} from "../../../main/dal/types";

export const searchAPI = {
  getSearchResults(params: GetSearchResultsParamsType) {
    const {title, category, orderBy, startIndex, maxResults} = params;
    const qParam = `${title}${category !== "all" ? `+subject:${category}` : ""}`;
    const queryParams = {q: qParam, orderBy, startIndex, maxResults};

    return instance.get<GetSearchResultsResponseType>(
      "volumes",
      {params: {...queryParams, key: "AIzaSyD-2JphujQms2y-fIfaSeuMybXP4ahaCuQ"}},
    );
  },
};

export type GetSearchResultsParamsType = {
  title: string
  category: string
  orderBy: string
  startIndex: number
  maxResults: number
};

export type GetSearchResultsResponseType = {
  kind: string
  items: VolumeType[]
  totalItems: number
};
