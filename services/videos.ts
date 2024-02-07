import { httpClient } from "@/utils/http";

export const getVideos = async (pageSelected: number) => {
  let url = `/api/v1/videos/`;
  if (pageSelected > 1) url += `?page=${pageSelected}`;

  const { data } = await httpClient.get(url);
  return data;
};
