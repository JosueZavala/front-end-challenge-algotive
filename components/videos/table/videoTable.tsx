import { Video } from "@/types/videos";
import { TableHeader } from "./tableHeader";
import { TBody } from "./tableBody";

type VideoTableProps = {
  videos: Video[];
};

export const VideoTable = ({ videos }: VideoTableProps) => {
  return (
    <div className="shadow overflow-x-scroll rounded-lg">
      <table className="w-full min-w-max table-auto text-left text-sm text-gray-400 rounded-lg">
        <TableHeader />
        <TBody videos={videos} />
      </table>
    </div>
  );
};
