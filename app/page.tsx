import { VideosComponent } from "@/components/videos/videosComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8 lg:items-center lg:p-24">
      <VideosComponent />
    </main>
  );
}
