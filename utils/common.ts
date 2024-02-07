export const GetVideoID = (url: string) => {
  const urlVideo = url.replace("https://www.youtube.com/embed/", "");
  const videoId = urlVideo.split("?")[0];
  return videoId;
};
