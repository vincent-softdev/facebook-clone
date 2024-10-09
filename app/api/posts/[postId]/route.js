import { NextResponse } from "next/server";

// Fetch user data by userId
export async function GET(request, { params }) {
    const { postId } = params; // Extract userId from params
    const response = await fetch(`http://localhost:3001/posts/${postId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch post data from external API");
    }

    const postData = await response.json();

    return NextResponse.json(postData);
}
