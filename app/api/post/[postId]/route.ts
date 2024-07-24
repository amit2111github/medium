import { NextRequest, NextResponse, userAgent } from 'next/server';
import { pool } from '@/app/lib/db';
import { postObject } from '@/app/utils/zod';

export const GET = async (
  req: NextRequest,
  { params }: { params: { postId: string } }
) => {
  try {
    const { rows } = await pool.query(
      'select p.id,p.title,p.content,p.authorId , a.name ,a.email from post p  join author a on p.authorId = a.id where p.id = $1',
      [Number(params.postId)]
    );
    return NextResponse.json(rows[0]);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: 'failed to get post' }, { status: 400 });
  }
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: { postId: string } }
) => {
  try {
    const obj: any = req.headers.get('user');
    const user = JSON.parse(obj);
    const body = await req.json();
    {
      const data = await pool.query(`select authorId from post where id = $1`, [
        params.postId,
      ]);
      if (data.rows[0].authorid != user.id) {
        return NextResponse.json(
          { error: 'permission denied' },
          { status: 403 }
        );
      }
    }

    const { success, data, error } = postObject.safeParse(body);
    if (!success) {
      return NextResponse.json(
        { error: error.issues[0].message },
        { status: 400 }
      );
    }
    const { rows } = await pool.query(
      'update post set title = $1 , content = $2 where id = $3',
      [data.title, data.content, Number(params.postId)]
    );
    return NextResponse.json({ msg: 'post updated successfully' });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: 'failed to get post' }, { status: 400 });
  }
};
