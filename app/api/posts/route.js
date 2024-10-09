import { NextResponse } from "next/server"

export async function GET() {
    const response = await fetch('http://localhost:3001/posts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch post data from external API");
    }

    const postData = await response.json();

    return NextResponse.json(postData)
}
