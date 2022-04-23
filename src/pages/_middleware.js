import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export default async function middleware(req) {
  if (req.nextUrl.pathname === '/') {
    const session = await getToken({
      req,
      secret: 'test',
      secureCookie: process.env.NODE_ENV === 'production',
    });
    console.log('session', session);

    if (!session) return NextResponse.redirect(new URL('/login', req.url));
  }
}
