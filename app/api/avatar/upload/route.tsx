import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
import { getJWTPayLoad } from '../../util/auth';
import { sql } from '@/db';

export async function POST(request: Request): Promise<NextResponse> {
    const jwtPayload = await getJWTPayLoad();
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename')!;

  // ⚠️ The below code is for App Router Route Handlers only
  const blob = await put(filename, request.body!, {
    access: 'public',
  });

  await sql("update users set avatar = $1 where id = $2",[blob.url, jwtPayload.sub])



  return NextResponse.json(blob);
}

