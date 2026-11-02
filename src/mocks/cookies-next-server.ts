// Stub for "cookies-next/server", swapped in via resolve.alias in vite.config.ts.
// TypeScript still type-checks against the real package; only the runtime module is replaced.

export async function getCookie(_key: string, _options?: unknown): Promise<string | undefined> {
  return "Value for " + _key;
}

export async function setCookie(_key: string, _data: unknown, _options?: unknown): Promise<void> {}
