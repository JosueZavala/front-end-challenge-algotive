"use client";

import { useVideos } from "@/hooks/use-videos";
import { httpClient } from "@/utils/http";
import { useEffect } from "react";

export const VideosComponent = () => {
  const { data } = useVideos();

  /* const getVideosFromApi = async (): Promise<number> => {
    //const res = await fetch("http://localhost:8000/api/v1/videos");
    const res = await httpClient.get(`/api/v1/videos`);

    console.log(res);
    return 2;
  }; */

  /* useEffect(() => {
    getVideosFromApi();
  }, []); */

  return <div>Test</div>;
};
