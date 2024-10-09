export const getAllGroups = async () => {
    try {
        const response = await fetch('/api/groups');
        if (!response.ok) {
            throw new Error('Failed to fetch group data from internal API');
        }
        return await response.json()
    } catch (error) {
        console.error('Error fetching group profile:', error);
        return null;
    }
};

export const getGroupById = async (groupId) => {
    try {
        const response = await fetch(`/api/groups/${groupId}`); // Call your Next.js API route
        if (!response.ok) {
            throw new Error('Failed to fetch group data');
        }
        return await response.json(); // Return the user data
    } catch (error) {
        console.error('Error fetching group by ID:', error);
        return null; // Return null on error
    }
};
