import { copyFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const serverDirectory = resolve(root, "dist", "server");

await mkdir(serverDirectory, { recursive: true });
await copyFile(
  resolve(root, "worker", "index.js"),
  resolve(serverDirectory, "index.js"),
);
