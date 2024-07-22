import { pool } from '@/app/lib/db';
import { hashPassword } from '@/app/utils/helper';
import { loginObject } from '@/app/utils/zod';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
export const POST = async (req: NextRequest) => {
  try {
    const { success, data, error } = loginObject.safeParse(req.body);
    if (!success) {
      return NextResponse.json({ error }, { status: 400 });
    }
    const password = await hashPassword(data.password);
    const { rows } = await pool.query(
      'select * from user where email = $1 and password = $2',
      [data.email, password]
    );
    if (!rows || rows.length === 0) {
      return NextResponse.json({ error: 'Email & password does not match' });
    }
    const email: string = rows[0].email;

    const token = await jwt.sign({ email }, 'somesecret', { expiresIn: '1h' });
    return NextResponse.json({ token });
  } catch (err) {
    return NextResponse.json({ msg: 'Failed to Login' }, { status: 403 });
  }
};
