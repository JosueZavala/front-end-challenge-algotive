"use client";

import { useVideos } from "@/hooks/use-videos";
import { useEffect } from "react";
import { VideoTable } from "./table/videoTable";
import { Show } from "../ui/Show";

export const VideosComponent = () => {
  const { data: { results = {} } = {}, isLoading } = useVideos();

  /* console.log(data); */
  /* console.log(results); */

  /* useEffect() */

  return (
    <section className="flex flex-col w-full overflow-hidden">
      <Show condition={isLoading}>
        <div className="flex items-center justify-center text-4xl text-gray-400 font-medium">
          Loading...
        </div>
      </Show>
      <Show condition={!isLoading && Boolean(results.length)}>
        <div className="flex items-center justify-center py-8 text-4xl text-gray-400 font-medium">
          <h1>Videos</h1>
        </div>
        <VideoTable videos={results} />
      </Show>
    </section>
  );
};
