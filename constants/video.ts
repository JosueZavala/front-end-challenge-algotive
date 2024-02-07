import { Video } from "@/types/videos";

export const VIDEO_TABLE_HEADERS = [
  "Video",
  "ID",
  "Title",
  "Author",
  "Created At",
  "Description",
  "Release Date",
  "Updated At",
];

export const DEFAULT_VIDEO: Video = {
  id: 1,
  title: "Never Gonna Give You Up",
  author: "Rick Astley",
  description: "N/A",
  release_date: "2009-10-25",
  url: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=V6boHUcSECVY-q9J",
  created_at: "2022-08-03T16:32:40.623000Z",
  updated_at: "2022-08-03T16:32:40.623000Z",
};

export const TOTAL_PAGES = 2;
