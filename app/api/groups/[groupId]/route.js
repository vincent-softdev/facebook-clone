import { NextResponse } from "next/server";

// Fetch user data by userId
export async function GET(request, { params }) {
    const { groupId } = params; // Extract userId from params
    const response = await fetch(`http://localhost:3001/groups/${groupId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch group data from external API");
    }

    const groupData = await response.json();

    return NextResponse.json(groupData);
}
