import { Video } from "@/types/videos";
import { TableHeader } from "./tableHeader";
import { TBody } from "./tableBody";
import Pagination from "@/components/ui/Pagination";
import { TOTAL_PAGES } from "@/constants/video";
import { useState } from "react";

type VideoTableProps = {
  videos: Video[];
  openModal: (video: Video) => void;
  pageSelected: number;
  setPageSelected: (page: number) => void;
};

export const VideoTable = ({
  videos,
  openModal,
  pageSelected,
  setPageSelected,
}: VideoTableProps) => {
  return (
    <div className="shadow overflow-x-scroll rounded-lg">
      <table className="w-full min-w-max table-auto text-left text-sm text-gray-400 rounded-lg">
        <TableHeader />
        <TBody videos={videos} openModal={openModal} />
      </table>
      <div className="grid justify-items-center content-center">
        <Pagination
          totalPages={TOTAL_PAGES}
          pageSelected={pageSelected}
          setPageSelected={setPageSelected}
        />
      </div>
    </div>
  );
};
