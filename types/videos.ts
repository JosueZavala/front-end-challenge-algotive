export type Video = {
  id: number;
  author: string;
  created_at: string;
  description: string;
  release_date: string;
  title: string;
  updated_at: string;
  url: string;
};

export type ErrorHandle = {
  message: string;
  name: string;
  code: string | number;
};
