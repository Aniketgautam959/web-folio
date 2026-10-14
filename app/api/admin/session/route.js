import { NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export function GET(request) {
  return NextResponse.json({ ok: isAdminRequest(request) });
}
