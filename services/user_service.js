export const getAllUser = async () => {
    try {
        const response = await fetch('/api/users');
        if (!response.ok) {
            throw new Error('Failed to fetch user data from internal API');
        }
        return await response.json()
    } catch (error) {
        console.error('Error fetching user profile:', error);
        return null;
    }
};

export const getUserById = async (userId) => {
    try {
        const response = await fetch(`/api/users/${userId}`); // Call your Next.js API route
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        return await response.json(); // Return the user data
    } catch (error) {
        console.error('Error fetching user by ID:', error);
        return null; // Return null on error
    }
};
