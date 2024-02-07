import { Video } from "@/types/videos";
import { TableHeader } from "./tableHeader";
import { TBody } from "./tableBody";

type VideoTableProps = {
  videos: Video[];
  openModal: (video: Video) => void;
};

export const VideoTable = ({ videos, openModal }: VideoTableProps) => {
  return (
    <div className="shadow overflow-x-scroll rounded-lg">
      <table className="w-full min-w-max table-auto text-left text-sm text-gray-400 rounded-lg">
        <TableHeader />
        <TBody videos={videos} openModal={openModal} />
      </table>
    </div>
  );
};
