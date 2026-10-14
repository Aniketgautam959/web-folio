import { NextResponse } from "next/server";
import { adminCookie, getAdminPassword, passwordMatches } from "@/lib/admin-auth";

export async function POST(request) {
  if (!getAdminPassword()) {
    return NextResponse.json(
      { error: "Admin password is not configured." },
      { status: 503 }
    );
  }

  const body = await request.json().catch(() => ({}));
  if (!passwordMatches(body.password)) {
    return NextResponse.json({ error: "Wrong password." }, { status: 401 });
  }

  const cookie = adminCookie();
  const response = NextResponse.json({ ok: true });
  response.cookies.set(cookie.name, cookie.value, cookie.options);
  return response;
}
