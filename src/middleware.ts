import { NextRequest, NextResponse } from 'next/server';

export default function middleware(req: NextRequest) {
  // Skip authentication checks and allow all requests to proceed
  return NextResponse.next(); // This will allow all requests to go through without any authentication check
}

export const config = {
  matcher: ['/dashboard/:path*'] // Only apply this to /dashboard routes
};
