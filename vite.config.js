import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const root = path.dirname(fileURLToPath(import.meta.url));
const media = /\.(gif|webp|png|jpe?g)$/i;

function workoutData() {
  return {
    name: "workout-data",
    resolveId(id) {
      if (id === "virtual:workout-data" || id === "virtual:meal-data") return `\0${id}`;
    },
    load(id) {
      if (id === "\0virtual:workout-data") {
        this.addWatchFile(path.join(root, "workout-data.js"));
        const source = fs
          .readFileSync(path.join(root, "workout-data.js"), "utf8")
          .replace(/\/\/ Export all data[\s\S]*$/, "");
        return `${source}
export {
  TRAINING_PRINCIPLES,
  UNIVERSAL_WARMUP,
  WORKOUT_DAYS,
  POST_WORKOUT_PUMPS,
  OPTIONAL_CARDIO,
  NUTRITION_GUIDELINES,
  WEEKLY_SCHEDULE,
};
`;
      }
      if (id === "\0virtual:meal-data") {
        this.addWatchFile(path.join(root, "meal-data.js"));
        const source = fs.readFileSync(path.join(root, "meal-data.js"), "utf8");
        return `${source}\nexport { MEAL_PLAN };\n`;
      }
    },
  };
}

function workoutMedia() {
  const types = {
    ".gif": "image/gif",
    ".webp": "image/webp",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
  };

  return {
    name: "workout-media",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const pathname = decodeURIComponent((req.url || "").split("?")[0]);
        if (!media.test(pathname) || pathname.includes("..")) return next();
        const file = path.join(root, pathname);
        if (!file.startsWith(root) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
          return next();
        }
        res.setHeader("Content-Type", types[path.extname(file).toLowerCase()] || "application/octet-stream");
        fs.createReadStream(file).pipe(res);
      });
    },
    closeBundle() {
      const out = path.join(root, "dist");
      fs.mkdirSync(out, { recursive: true });
      for (const name of fs.readdirSync(root)) {
        if (!media.test(name)) continue;
        fs.copyFileSync(path.join(root, name), path.join(out, name));
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), workoutData(), workoutMedia()],
  server: { host: "127.0.0.1", port: 5173 },
});
