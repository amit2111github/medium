import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { pool } from '@/app/lib/db';
import * as jose from 'jose';
import path from 'path';
const jwtConfig = {
  secret: new TextEncoder().encode('somesecret'),
};

export const middleware = async (req: NextRequest) => {
  try {
    const { pathname } = new URL(req.url);
    if (req.method === 'POST' && pathname === '/api/user') {
      // console.log('cught');
      return NextResponse.next();
    }
    const header = req.headers.get('authorization');
    const token = header?.split(' ')[1] || '';
    if (!token) {
      return NextResponse.json(
        { error: 'Authorization Failed' },
        { status: 401 }
      );
    }
    const { payload } = await jose.jwtVerify(token, jwtConfig.secret);
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set('user', JSON.stringify(payload));
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: 'Authorization failed', err },
      { status: 401 }
    );
  }
};

export const config = {
  matcher: ['/api/post/:path*', '/api/user/:path*'],
};
