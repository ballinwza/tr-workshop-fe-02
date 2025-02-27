import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    return NextResponse.redirect(new URL('/blogs', request.url))

    // return NextResponse.next()
}

export const config = {
    matcher: ['/'],
}
