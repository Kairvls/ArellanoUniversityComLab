import db from "@/lib/db";
import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
        const [laboratory] = await db.query('SELECT * FROM labs');

        return new NextResponse(JSON.stringify(laboratory), { status: 200 });
    }
    catch (error) {
        console.error('Faield to fetch data', error);
        return new NextResponse(JSON.stringify({ error: 'Faield fetching the data' }), { status: 500 });
    }
}