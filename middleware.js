import { NextResponse } from 'next/server';

export function middleware(req) {
  const isDev = process.env.NODE_ENV === 'development';

  // Get cookies from the request
  const sessionCookie = req.cookies.get('next-auth.session-token');

  // Check if in development mode and if session cookie exists
  if (isDev && sessionCookie) {
    console.log('Development mode: Clearing session cookies after server restart.');

    // Create a response and clear the session cookies
    const response = NextResponse.next();
    response.cookies.set('next-auth.session-token', '', { maxAge: 0 });
    response.cookies.set('next-auth.csrf-token', '', { maxAge: 0 });

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/', // Apply middleware to the root route; adjust for specific routes as needed
};
