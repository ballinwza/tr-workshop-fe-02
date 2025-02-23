import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    console.log('init middleware :', request.url)

    return NextResponse.next()
}

export const config = {
    matcher: '/login/:path*',
}
