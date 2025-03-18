import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {

  if (req.nextUrl.pathname == '/dashboard' ) {

    const userId = req.cookies.get("userId")?.value || "guest";
 

    return NextResponse.rewrite(new URL(`/dashboard/${userId}`, req.url))
  }
  
}