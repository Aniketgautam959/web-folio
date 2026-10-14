import { NextResponse } from "next/server";
import { readAvatarPath } from "@/lib/avatar-store";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json({ url: readAvatarPath() });
}
