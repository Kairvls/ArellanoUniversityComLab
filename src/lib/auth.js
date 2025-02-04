// src/lib/auth.js
import { serialize } from 'cookie';
import { NextResponse } from 'next/server';

// Example of setting JWT or session in cookies
export function setLoginSession(userData) {
    const sessionToken = createSessionToken(userData); // Create JWT token, or use a session store

    const cookie = serialize('session_token', sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Use secure cookie in production
        sameSite: 'Strict',
        path: '/',
        maxAge: 60 * 60 * 24, // 1 day
    });

    // Set the cookie in the response
    const response = NextResponse.next();
    response.headers.set('Set-Cookie', cookie);
    return response;
}
