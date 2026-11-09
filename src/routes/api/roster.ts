import { createFileRoute } from "@tanstack/react-router";

const roster = [
  { id: "01a1c202-9ac5-77a4-887f-ef180f758409", name: "Taylor Swift" },
  { id: "01a1c202-9ac7-7f24-a0d4-425b5a6845ae", name: "Beyoncé" },
  { id: "01a1c202-9ac8-74a2-9fe4-b574ee3bae1f", name: "Kendrick Lamar" },
  { id: "01a1c202-9ac9-7f04-bd7a-80de55848f2b", name: "Billie Eilish" },
  { id: "01a1c202-9aca-787e-8790-3bb0138a2113", name: "The Weeknd" },
  { id: "01a1c202-9acb-7231-82c3-bfde32fcbec1", name: "Bad Bunny" },
  { id: "01a1c202-9acc-70e2-acda-ee266ad76488", name: "Dua Lipa" },
  { id: "01a1c202-9acd-798e-bf78-bbf1e5aff6e7", name: "Drake" },
  { id: "01a1c202-9ace-7e39-908e-d63571b8d2b7", name: "Olivia Rodrigo" },
  { id: "01a1c202-9acf-7667-aec5-ee8d943edef1", name: "SZA" },
];

export const Route = createFileRoute("/api/roster")({
  server: {
    handlers: {
      GET: () => Response.json(roster),
    },
  },
});
