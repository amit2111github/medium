import { pool } from '@/app/lib/db';
import { hashPassword } from '@/app/utils/helper';
import { loginObject } from '@/app/utils/zod';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { success, data, error } = loginObject.safeParse(body);
    if (!success) {
      return NextResponse.json(
        { error: error.issues[0].message },
        { status: 400 }
      );
    }
    const password = await hashPassword(data.password);
    const { rows } = await pool.query(
      'select * from author where email = $1 and password = $2',
      [data.email, password]
    );
    if (!rows || rows.length === 0) {
      return NextResponse.json({ error: 'Email & password does not match' });
    }
    const id: string = rows[0].id;

    const token = await jwt.sign({ id }, 'somesecret', { expiresIn: '1h' });
    const expire = 1000 * 60 * 60;
    return NextResponse.json(
      { token },
      {
        headers: {
          'Set-Cookie': `token=${token}; expiresIn=${expire}/; HttpOnly=true; SameSite=lax`,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (err) {
    return NextResponse.json({ msg: 'Failed to Login' }, { status: 403 });
  }
};
