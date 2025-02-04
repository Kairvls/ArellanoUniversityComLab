import db from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
        const [labs] = await db.query('SELECT * FROM labs');

        return new NextResponse(JSON.stringify(labs), { status: 200 });
    }
    catch ( error ) {
        console.error('Failed to fetch', error);
        return new NextResponse(JSON.stringify({ error: 'Failed to fetch data' }), { status: 500 });
    }
}