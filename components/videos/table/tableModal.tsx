import Modal from "@/components/ui/Modal";
import { Video } from "@/types/videos";
import { GetVideoID } from "@/utils/common";

type TableModalProps = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  video: Video;
};

export const TableModal = ({
  showModal,
  setShowModal,
  video,
}: TableModalProps) => {
  const { url, title, author } = video;
  const videoId = GetVideoID(url);

  return (
    <Modal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      size="md"
      title={title}
      description={author}
    >
      <div className="h-96">
        <iframe
          width="100%"
          height={"100%"}
          src={`https://www.youtube.com/embed/${videoId}?controls=0&amp;rel=0&amp;loop=1&amp;modestbranding=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </Modal>
  );
};
