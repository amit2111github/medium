import { NextRequest, NextResponse } from 'next/server';

export const POST = (req: NextRequest) => {
  try {
    return NextResponse.json(
      { msg: 'logout' },
      {
        headers: {
          'Set-Cookie': `token=; Max-Age=0; HttpOnly; SameSite=None; Secure; Path=/;`,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (err) {}
};
