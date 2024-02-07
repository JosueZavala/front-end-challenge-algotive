"use client";

import { useVideos } from "@/hooks/use-videos";
import { useEffect, useState } from "react";
import { VideoTable } from "./table/videoTable";
import { Show } from "../ui/Show";
import { Video } from "@/types/videos";
import { TableModal } from "./table/tableModal";
import { DEFAULT_VIDEO } from "@/constants/video";
import { toast } from "sonner";

export const VideosComponent = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [video, setVideo] = useState<Video>(DEFAULT_VIDEO);
  const [pageSelected, setPageSelected] = useState<number>(1);

  const {
    data: { results = {} } = {},
    isLoading,
    isFetching,
    error,
  } = useVideos(pageSelected);

  const handleOpenModal = (video: Video) => {
    setShowModal(true);
    setVideo(video);
  };

  useEffect(() => {
    if (error instanceof Error) {
      console.log(error);
      toast.error(error.message);
    }
  }, [error]);

  return (
    <section className="flex flex-col w-full overflow-hidden">
      <Show condition={Boolean(video)}>
        <TableModal
          showModal={showModal}
          setShowModal={setShowModal}
          video={video}
        />
      </Show>
      <Show condition={isLoading || isFetching}>
        <div className="flex items-center justify-center text-4xl text-gray-400 font-medium">
          Loading...
        </div>
      </Show>
      <Show condition={!isLoading && Boolean(results.length)}>
        <div className="flex items-center justify-center py-8 text-4xl text-gray-400 font-medium">
          <h1>Videos</h1>
        </div>
        <VideoTable
          videos={results}
          openModal={handleOpenModal}
          pageSelected={pageSelected}
          setPageSelected={setPageSelected}
        />
      </Show>
      <Show condition={Boolean(error)}>
        <div className="flex items-center justify-center py-8 text-4xl text-gray-400 font-medium">
          <button
            onClick={() => window.location.reload()}
            className="grid justify-items-center content-center p-4 border text-gray-400 bg-black bg-opacity-20 rounded border-inherit cursor-pointer select-none"
          >
            Reload
          </button>
        </div>
      </Show>
    </section>
  );
};
