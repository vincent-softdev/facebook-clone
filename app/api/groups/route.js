import { NextResponse } from "next/server"

export async function GET() {
    const response = await fetch('http://localhost:3001/groups', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch group data from external API");
    }

    const groupData = await response.json();

    return NextResponse.json(groupData)
}
