import { cp, copyFile, mkdir, readdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const buildDirectory = resolve(root, "dist");
const clientDirectory = resolve(buildDirectory, "client");
const serverDirectory = resolve(root, "dist", "server");

await rm(clientDirectory, { recursive: true, force: true });
await mkdir(clientDirectory, { recursive: true });

const entries = await readdir(buildDirectory, { withFileTypes: true });
for (const entry of entries) {
  if (["client", "server", ".openai"].includes(entry.name)) {
    continue;
  }

  await cp(
    resolve(buildDirectory, entry.name),
    resolve(clientDirectory, entry.name),
    { recursive: true },
  );
}

await mkdir(serverDirectory, { recursive: true });
await copyFile(
  resolve(root, "worker", "index.js"),
  resolve(serverDirectory, "index.js"),
);
