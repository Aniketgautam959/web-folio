import { createHmac, timingSafeEqual } from "crypto";
import fs from "fs";
import path from "path";

const COOKIE = "folio_admin";

function readPasswordFile() {
  try {
    const raw = fs.readFileSync(path.join(process.cwd(), ".env.local"), "utf8");
    const line = raw
      .split("\n")
      .find((entry) => entry.startsWith("ADMIN_PASSWORD="));
    if (!line) return "";
    return line
      .slice("ADMIN_PASSWORD=".length)
      .trim()
      .replace(/^["']|["']$/g, "");
  } catch {
    return "";
  }
}

export function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || readPasswordFile();
}

export function passwordMatches(input) {
  const expected = getAdminPassword();
  if (!expected || typeof input !== "string") return false;

  const given = Buffer.from(input);
  const actual = Buffer.from(expected);
  if (given.length !== actual.length) return false;
  return timingSafeEqual(given, actual);
}

export function sessionToken() {
  const password = getAdminPassword();
  if (!password) return "";
  return createHmac("sha256", password).update("folio-admin").digest("hex");
}

export function isAdminRequest(request) {
  const token = request.cookies.get(COOKIE)?.value;
  const expected = sessionToken();
  if (!token || !expected || token.length !== expected.length) return false;
  return timingSafeEqual(Buffer.from(token), Buffer.from(expected));
}

export function adminCookie() {
  return {
    name: COOKIE,
    value: sessionToken(),
    options: {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    },
  };
}
