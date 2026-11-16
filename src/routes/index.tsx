import { createFileRoute } from "@tanstack/react-router";
import { add } from "../../features/src/some-util";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Spotify for Artists</h1>
      <h3>2 + 1 = {add(1, 2)}</h3>
    </div>
  );
}
