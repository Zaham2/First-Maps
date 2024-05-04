import { NextResponse } from "next/server"

export async function GET() {
    console.log('GET me')
    return NextResponse.json({
        "hello": "world"
    })
}