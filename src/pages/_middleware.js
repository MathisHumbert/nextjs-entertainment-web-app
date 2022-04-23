import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export default async function middleware(req) {
  if (req.nextUrl.pathname === '/') {
    const session = await getToken({
      req,
      secret: 'test',
    });

    if (!session) return NextResponse.redirect(new URL('/login', req.url));
  }
}
