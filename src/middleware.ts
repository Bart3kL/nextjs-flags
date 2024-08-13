import { NextRequest, NextResponse } from 'next/server';
import { unstable_precompute as precompute } from '@vercel/flags/next';
import { precomputeFlags } from './flags';

export const config = { matcher: ['/'] };

export async function middleware(request: NextRequest) {
  const code = await precompute(precomputeFlags);
  const nextUrl = new URL(
    `/${code}${request.nextUrl.pathname}${request.nextUrl.search}`,
    request.url
  );
  return NextResponse.rewrite(nextUrl, { request });
}
