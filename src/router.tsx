import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
import { getContext } from "./integrations/tanstack-query/root-provider";

export function getRouter() {
  const context = getContext();

  const router = createTanStackRouter({
    routeTree,
    context,
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
    rewrite: {
      input: (input) => {
        console.log("input", input.url.pathname);
        const segments = input.url.pathname.split("/");
        debugger;
        if (segments[1] === "xxx") {
          segments.splice(1, 1);
        }
        return new URL(input.url.origin + `/${segments.join("/")}${input.url.search}`);
      },
      output: (output) => {
        console.log("output", output.url.pathname);
        debugger;
        const segments = output.url.pathname.split("/");
        if (segments[1] !== "xxx") {
          segments.splice(1, 0, "xxx");
        }
        return new URL(output.url.origin + `/${segments.join("/")}${output.url.search}`);
      },
    },
  });

  setupRouterSsrQueryIntegration({ router, queryClient: context.queryClient });

  return router;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
