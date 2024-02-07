import { getVideos } from "@/services/videos";
import { useQuery } from "@tanstack/react-query";

export const useVideos = (pageSelected: number) => {
  return useQuery(["getVideos", pageSelected], async () => {
    const data = await getVideos(pageSelected);
    return data;
  });
};
