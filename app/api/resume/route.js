import { NextResponse } from "next/server";
import { readResumeUrl } from "@/lib/resume-store";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json({ url: readResumeUrl() });
}
