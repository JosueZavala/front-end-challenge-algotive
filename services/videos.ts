import { httpClient } from "@/utils/http";

export const getVideos = async () => {
  const { data } = await httpClient.get(`/api/v1/videos/`);
  return data;
};
