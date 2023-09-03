export const DENO_ENV = (Deno.env.get("DENO_ENV") || "development") as "development" | "production";

export const MEILI_HOST = Deno.env.get("MEILI_HOST")!;
export const MEILI_MASTER_KEY = Deno.env.get("MEILI_MASTER_KEY")!;
