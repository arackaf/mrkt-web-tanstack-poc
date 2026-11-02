import type { IncomingMessage } from "node:http";
import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { getCookie } from "cookies-next/server";

const getTestVal = createServerFn().handler(async () => {
  const request = getRequest();
  // cookies-next expects a Node-style req; adapt the web Request's cookie header.
  const req = {
    headers: { cookie: request.headers.get("cookie") ?? undefined },
  } as IncomingMessage;
  const value = await getCookie("test-val", { req });
  return { testVal: value ?? null };
});

export const Route = createFileRoute("/cookies-next")({
  loader: () => getTestVal(),
  component: CookiesNextPage,
});

function CookiesNextPage() {
  const { testVal } = Route.useLoaderData();
  return (
    <div>
      <h1>Cookies Next</h1>
      <p>test-val: {testVal ?? "(not set)"}</p>
    </div>
  );
}
