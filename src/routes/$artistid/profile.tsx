import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$artistid/profile")({
  component: ProfilePage,
});

function ProfilePage() {
  return <h2>Profile</h2>;
}
