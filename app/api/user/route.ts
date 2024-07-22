import { pool } from '@/app/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { signupObject } from '@/app/utils/zod';
import { hashPassword } from '@/app/utils/helper';

export const POST = async (req: NextRequest) => {
  try {
    const { success, data, error } = signupObject.safeParse(req.body);

    // already registered check TODO:
    if (!success) {
      return NextResponse.json({ error }, { status: 400 });
    }
    const { rows } = await pool.query('select * from user where email  = $1', [
      data.email,
    ]);
    if (rows && rows[0]) {
      return NextResponse.json({ error: 'Email is already registered' });
    }
    const password = await hashPassword(data.password);
    await pool.query(
      'insert into user (id , email , name , password) values (default,$1,$2,$3)',

      [data.email, data.name, password]
    );
    return NextResponse.json({ msg: 'user created successfully' });
  } catch (err) {
    return NextResponse.json(
      { msg: 'user created successfully' },
      { status: 403 }
    );
  }
};
