import { Outlet, createFileRoute } from "@tanstack/react-router";
import { artistLookup } from "../../lib/artist-lookup";

export const Route = createFileRoute("/$artistid")({
  component: ArtistLayout,
});

function ArtistLayout() {
  const { artistid } = Route.useParams();
  const artist = artistLookup[artistid];
  return (
    <div>
      <h1>{artist?.name ?? "Unknown artist"}</h1>
      <Outlet />
    </div>
  );
}
