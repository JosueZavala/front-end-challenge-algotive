import { VIDEO_TABLE_HEADERS } from "@/constants/video";

export const TableHeader = () => {
  return (
    <thead className="bg-gray-800 text-base uppercase font-extrabold">
      <tr>
        {VIDEO_TABLE_HEADERS.map((header, index) => (
          <Thead key={`table_header_${index}`} header={header} />
        ))}
      </tr>
    </thead>
  );
};

const Thead = ({ header }: { header: string }) => {
  return (
    <th className="bg-gray-800 p-4">
      <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
        {header}
      </p>
    </th>
  );
};
