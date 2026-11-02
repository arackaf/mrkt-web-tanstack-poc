import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/roster")({
  component: RosterPage,
});

function RosterPage() {
  return <h1>Roster</h1>;
}
