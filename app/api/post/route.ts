import { NextRequest, NextResponse } from 'next/server';

export const POST = (req: NextRequest) => {
  try {
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 400 }
    );
  }
};
