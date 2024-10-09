import { NextResponse } from "next/server"

export async function GET() {
    const response = await fetch('http://localhost:3001/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch user data from external API");
    }

    const userData = await response.json();

    return NextResponse.json(userData)
}
