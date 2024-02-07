"use client";

import { useVideos } from "@/hooks/use-videos";
import { Fragment, useEffect, useState } from "react";
import { VideoTable } from "./table/videoTable";
import { Show } from "../ui/Show";
import Modal from "../ui/Modal";
import { Video } from "@/types/videos";
import { TableModal } from "./table/tableModal";
import { DEFAULT_VIDEO } from "@/constants/video";

export const VideosComponent = () => {
  const { data: { results = {} } = {}, isLoading } = useVideos();

  /* console.log(data); */
  /* console.log(results); */

  /* useEffect() */

  const [showModal, setShowModal] = useState<boolean>(false);
  const [video, setVideo] = useState<Video>(DEFAULT_VIDEO);

  const handleOpenModal = (video: Video) => {
    setShowModal(true);
    setVideo(video);
  };
  return (
    <section className="flex flex-col w-full overflow-hidden">
      <Show condition={Boolean(video)}>
        <TableModal
          showModal={showModal}
          setShowModal={setShowModal}
          video={video}
        />
      </Show>
      <Show condition={isLoading}>
        <div className="flex items-center justify-center text-4xl text-gray-400 font-medium">
          Loading...
        </div>
      </Show>
      <Show condition={!isLoading && Boolean(results.length)}>
        <div className="flex items-center justify-center py-8 text-4xl text-gray-400 font-medium">
          <h1>Videos</h1>
        </div>
        <VideoTable videos={results} openModal={handleOpenModal} />
      </Show>
    </section>
  );
};
