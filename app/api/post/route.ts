import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { pool } from '@/app/lib/db';
import { postObject } from '@/app/utils/zod';
export const POST = async (req: NextRequest) => {
  try {
    const obj: any = req.headers.get('user');
    const user = JSON.parse(obj);
    const body = await req.json();
    const userId = user.id;
    const { success, data, error } = postObject.safeParse(body);
    if (!success) {
      return NextResponse.json(
        { error: error.issues[0].message },
        { status: 400 }
      );
    }
    const post = await pool.query(
      'insert into post (id , title , content , authorId) values (default , $1,$2,$3)',
      [data.title, data.content, userId]
    );
    return NextResponse.json({ msg: 'post created' });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err }, { status: 401 });
  }
};

export const GET = async (req: NextRequest) => {
  try {
    // const searchParams = req.nextUrl;
    const page = req.nextUrl.searchParams.get('page');

    const { rows } = await pool.query(
      'select p.id , substr(p.title , 1,70) as title ,substr(p.content, 1,300) as content ,a.id as authorId ,a.name as authorName,a.email as authorEmail from post p join author a on p.authorid = a.id limit 10 offset $1',
      [(Number(page) - 1) * 10]
    );
    return NextResponse.json(rows);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err }, { status: 401 });
  }
};
