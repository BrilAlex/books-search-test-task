import {instance} from "../../../main/dal/instance";
import {VolumeType} from "../../../main/dal/types";

export const bookAPI = {
  getBook(id: string) {
    return instance.get<VolumeType>(
      `volumes/${id}`,
      {params: {key: "AIzaSyD-2JphujQms2y-fIfaSeuMybXP4ahaCuQ"}},
    );
  },
};
