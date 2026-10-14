import fs from "fs";
import path from "path";

const dataPath = path.join(process.cwd(), "data", "portfolio-data.json");
const uploadDir = path.join(process.cwd(), "public", "uploads");

const extensions = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
};

function readData() {
  return JSON.parse(fs.readFileSync(dataPath, "utf8"));
}

export function readAvatarPath() {
  return readData().personal?.avatar || "";
}

function writeAvatarPath(publicPath) {
  const raw = fs.readFileSync(dataPath, "utf8");
  if (!/"avatar"\s*:/.test(raw)) {
    throw new Error("avatar field is missing");
  }

  const next = raw.replace(
    /"avatar"\s*:\s*"(?:\\.|[^"\\])*"/,
    `"avatar": ${JSON.stringify(publicPath)}`
  );
  fs.writeFileSync(dataPath, next);
}

export async function saveAvatarFile(file) {
  const extension = extensions[file.type];
  if (!extension) {
    throw new Error("Use a JPG, PNG, or WebP image.");
  }

  const bytes = Buffer.from(await file.arrayBuffer());
  if (bytes.length > 5 * 1024 * 1024) {
    throw new Error("Image must be under 5 MB.");
  }
  if (bytes.length < 32) {
    throw new Error("That file looks empty.");
  }

  fs.mkdirSync(uploadDir, { recursive: true });
  const filename = `avatar-${Date.now()}.${extension}`;
  fs.writeFileSync(path.join(uploadDir, filename), bytes);

  const previous = readAvatarPath();
  const publicPath = `/uploads/${filename}`;
  writeAvatarPath(publicPath);

  if (previous.startsWith("/uploads/")) {
    const oldFile = path.resolve(process.cwd(), "public", previous.slice(1));
    const uploadsRoot = path.resolve(uploadDir);
    if (oldFile.startsWith(`${uploadsRoot}${path.sep}`) && oldFile !== path.resolve(uploadDir, filename)) {
      fs.rmSync(oldFile, { force: true });
    }
  }

  return publicPath;
}
