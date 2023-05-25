import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  // This is a simple example that adds a `X-Hello` header to the response.
  const res = NextResponse.next()
  res.headers.set('X-Hello', 'World')
  return res
}
