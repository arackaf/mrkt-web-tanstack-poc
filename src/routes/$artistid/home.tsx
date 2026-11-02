import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$artistid/home")({
  component: HomePage,
});

function HomePage() {
  return <h2>Home</h2>;
}
