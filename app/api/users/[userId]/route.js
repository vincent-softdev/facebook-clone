import { NextResponse } from "next/server";

// Fetch user data by userId
export async function GET(request, { params }) {
    const { userId } = params; // Extract userId from params
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch user data from external API");
    }

    const userData = await response.json();

    return NextResponse.json(userData);
}
