import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

const config = defineConfig({
  resolve: {
    tsconfigPaths: true,
    alias: [
      // Mock npm modules: exact-match the import specifier and point it at a local stub.
      {
        find: /^cookies-next\/server$/,
        replacement: fileURLToPath(new URL("./src/mocks/cookies-next-server.ts", import.meta.url)),
      },
    ],
  },
  plugins: [devtools(), nitro({ rollupConfig: { external: [/^@sentry\//] } }), tailwindcss(), tanstackStart(), viteReact()],
});

export default config;
