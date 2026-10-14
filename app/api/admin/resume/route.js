import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";
import { isResumeUrl, readResumeUrl, writeResumeUrl } from "@/lib/resume-store";

export const dynamic = "force-dynamic";

export function GET(request) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }
  return NextResponse.json({ url: readResumeUrl() });
}

export async function PUT(request) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  if (!isResumeUrl(body.url)) {
    return NextResponse.json(
      { error: "Enter a full link, starting with https://." },
      { status: 400 }
    );
  }

  try {
    const url = writeResumeUrl(body.url);
    return NextResponse.json({ url });
  } catch {
    return NextResponse.json(
      { error: "Could not save the resume link." },
      { status: 500 }
    );
  }
}
