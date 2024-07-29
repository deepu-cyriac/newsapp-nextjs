//this is a reserved filename and middleware file should be in project root
//the function name should also be middleware

import { NextResponse } from "next/server";

export function middleware(request) {
  console.log(request);
  return NextResponse.next();
}

//this is a reserved variable name and it should have a matcher property - check docs - used for matching routes for middleware
export const config = {
  matcher: "/news",
};
