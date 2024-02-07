import { getVideos } from "@/services/videos";
import { useQuery } from "@tanstack/react-query";

export const useVideos = () => {
  return useQuery(["getVideos"], async () => {
    const data = await getVideos();
    return data;
  });
};
