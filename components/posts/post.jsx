'use client';
import react from "react";
import { useSession } from "next-auth/react";
import CreatePost from "./create_post";
import PostCard from "./post_card";
import { getAllPosts } from "@/services/post_service";

const Post = () => {
    const { data: session } = useSession();
    const [posts, setPosts] = react.useState(null);
    const [loading, setLoading] = react.useState(true);

    react.useEffect(() => {
        const fetchPosts = async () => {
            const response = await getAllPosts(); // Fetch user by ID
            setPosts(response);
            setLoading(false)
        };
        fetchPosts();
    }, []);

    // Dummy data for posts, you can later replace this with actual post data
    const profile = {
        image: session.user.image, // Use fetched user image if available
        name: session.user.name, // Use fetched user name if available
        email: session.user.email
    };

    return (
        <div className="mt-4">
            <CreatePost profile={profile}/>
            {/* Add PostCard component or any additional content here */}
            {/* Posts */}
            {
                loading && <div>Loading...</div>
            }
            {
                !loading && posts.map(
                    (item, idx) => {
                        console.log(item)
                        return (
                            <div key={idx}>
                                <PostCard {...item}/>
                            </div>
                        )
                    }
                )
            }
        </div>
    );
}

export default Post;
