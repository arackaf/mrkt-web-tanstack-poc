import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$artistid/music")({
  component: MusicPage,
});

function MusicPage() {
  return <h2>Music</h2>;
}
