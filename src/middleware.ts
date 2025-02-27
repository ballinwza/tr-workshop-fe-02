import { cookies } from 'next/headers'

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isEmpty } from 'radash'

export async function middleware(request: NextRequest) {
    console.log('init middleware :', request.url)

    const cookie = await cookies()

    if (isEmpty(cookie.get('access_token')?.value)) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/our-blog/:path*', '/'],
}
