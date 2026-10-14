import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import { readAvatarPath, saveAvatarFile } from "@/lib/avatar-store";

export const dynamic = "force-dynamic";

const knownErrors = new Set([
  "Use a JPG, PNG, or WebP image.",
  "Image must be under 5 MB.",
  "That file looks empty.",
]);

export function GET(request) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }
  return NextResponse.json({ url: readAvatarPath() });
}

export async function POST(request) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const form = await request.formData().catch(() => null);
  const file = form?.get("photo");
  if (!file || typeof file === "string") {
    return NextResponse.json({ error: "Choose a photo first." }, { status: 400 });
  }

  try {
    const url = await saveAvatarFile(file);
    return NextResponse.json({ url });
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    return NextResponse.json(
      { error: knownErrors.has(message) ? message : "Could not save the photo." },
      { status: 400 }
    );
  }
}
