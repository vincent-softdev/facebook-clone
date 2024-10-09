export const getAllPosts = async () => {
    try {
        const response = await fetch('/api/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch post data from internal API');
        }
        return await response.json()
    } catch (error) {
        console.error('Error fetching post profile:', error);
        return null;
    }
};

export const getPostById = async (postId) => {
    try {
        const response = await fetch(`/api/posts/${postId}`); // Call your Next.js API route
        if (!response.ok) {
            throw new Error('Failed to fetch post data');
        }
        return await response.json(); // Return the user data
    } catch (error) {
        console.error('Error fetching post by ID:', error);
        return null; // Return null on error
    }
};
