import { Video } from "@/types/videos";
import { GetVideoID } from "@/utils/common";
import dayjs from "dayjs";
import Image from "next/image";

export const TBody = ({
  videos,
  openModal,
}: {
  videos: Video[];
  openModal: (video: Video) => void;
}) => {
  return (
    <tbody className="bg-gray-800">
      {videos.map((video, index) => (
        <TRow key={`table_row_${index}`} video={video} openModal={openModal} />
      ))}
    </tbody>
  );
};

const TRow = ({
  video,
  openModal,
}: {
  video: Video;
  openModal: (video: Video) => void;
}) => {
  /* const values = Object.values(video); */
  const {
    id,
    author,
    created_at,
    description,
    release_date,
    title,
    updated_at,
    url,
  } = video;

  const videoId = GetVideoID(url);
  return (
    <tr
      className="odd:bg-black odd:bg-opacity-20 cursor-pointer"
      onClick={() => openModal(video)}
    >
      <td className="p-4">
        <div className="flex items-center gap-3">
          <Image
            src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
            alt={video.title}
            width={50}
            height={50}
          />
        </div>
      </td>
      <TCell data={id} />
      <TCell data={title} />
      <TCell data={author} />
      <TCell data={dayjs(created_at).format("DD/MM/YY")} />
      <TCell data={description} />
      <TCell data={release_date} />
      <TCell data={dayjs(updated_at).format("DD/MM/YY")} />
    </tr>
  );
};

const TCell = ({ data }: { data: string | number }) => {
  return (
    <td className="p-4">
      <div className="flex items-center gap-3">{data}</div>
    </td>
  );
};
