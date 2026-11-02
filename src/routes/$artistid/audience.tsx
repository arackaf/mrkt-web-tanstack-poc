import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$artistid/audience")({
  component: AudiencePage,
});

function AudiencePage() {
  return <h2>Audience</h2>;
}
