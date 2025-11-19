import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware disabled for static marketing website
export async function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
  runtime: 'nodejs'
};
