import { pool } from '@/app/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { signupObject } from '@/app/utils/zod';
import { hashPassword } from '@/app/utils/helper';

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const { success, data, error } = signupObject.safeParse(body);

    // already registered check TODO:
    if (!success) {
      return NextResponse.json(
        { error: error?.issues[0]?.message },
        { status: 400 }
      );
    }
    const { rows } = await pool.query(
      'select * from author where email  = $1',
      [data.email]
    );
    if (rows && rows[0]) {
      return NextResponse.json({ error: 'Email is already registered' });
    }
    const password = await hashPassword(data.password);
    const g = await pool.query(
      'insert into author (id , email , name , password) values (default,$1,$2,$3)',

      [data.email, data.name, password]
    );
    return NextResponse.json({ msg: 'user created successfully' });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ msg: 'user creation Failed' }, { status: 403 });
  }
};

export const GET = async (req: NextRequest) => {
  try {
    const obj: any = req.headers.get('user');
    const user = JSON.parse(obj);
    console.log(user);
    const { rows } = await pool.query(
      'select id , name , email from author where id = $1',
      [user.id]
    );
    return NextResponse.json(rows[0]);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: 'Failed to get user details' });
  }
};
