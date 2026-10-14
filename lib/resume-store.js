import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "portfolio-data.json");

export function readResumeUrl() {
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return data.personal?.resumeUrl || "";
}

export function isResumeUrl(value) {
  if (typeof value !== "string") return false;
  const url = value.trim();
  if (!url || url.length > 500) return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export function writeResumeUrl(url) {
  const nextUrl = url.trim();
  const raw = fs.readFileSync(filePath, "utf8");
  if (!/"resumeUrl"\s*:/.test(raw)) {
    throw new Error("resumeUrl field is missing");
  }

  const next = raw.replace(
    /"resumeUrl"\s*:\s*"(?:\\.|[^"\\])*"/,
    `"resumeUrl": ${JSON.stringify(nextUrl)}`
  );
  fs.writeFileSync(filePath, next);
  return nextUrl;
}
