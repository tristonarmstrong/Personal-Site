#!/usr/bin/env node
/**
 * Copy robots.txt to dist
 * Vite should copy public/ files automatically, but this ensures it's there
 */

import { copyFileSync, existsSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL("..", import.meta.url));

const source = join(__dirname, "public", "robots.txt");
const dest = join(__dirname, "dist", "client", "robots.txt");

if (existsSync(source)) {
	copyFileSync(source, dest);
	console.log("✅ robots.txt copied to dist");
} else {
	console.warn("⚠️ robots.txt not found in public/");
}
