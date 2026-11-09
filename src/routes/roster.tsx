import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/roster")({
  ssr: false,
  component: RosterPage,
});

type Artist = { id: string; name: string };

function RosterPage() {
  const { data, isPending, error } = useQuery({
    queryKey: ["roster"],
    queryFn: async (): Promise<Artist[]> => {
      const res = await fetch(`c/api/roster`);
      if (!res.ok) {
        throw new Error(`Failed to load roster: ${res.status}`);
      }
      return res.json();
    },
  });

  return (
    <div>
      <h1>Roster</h1>
      {isPending && <p>Loading…</p>}
      {error && <p>{error.message}</p>}
      {data && (
        <ul>
          {data.map((artist) => (
            <li key={artist.id}>{artist.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
