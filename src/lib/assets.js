// Auto-resolve any image dropped into src/assets/** by filename.
// Asli file na ho to null return hota hai -> <Img> branded placeholder dikhata hai.
const images = import.meta.glob("../assets/**/*.{png,jpg,jpeg,svg,webp,avif}", {
  eager: true,
  import: "default",
});

const byName = {};
for (const [path, url] of Object.entries(images)) {
  const name = path.split("/").pop();
  byName[name] = url;
}

export function asset(filename) {
  if (!filename) return null;
  return byName[filename] ?? null;
}

// Videos live in public/assets/videos and are served by URL directly.
export function video(filename) {
  return filename ? `/assets/videos/${filename}` : null;
}
