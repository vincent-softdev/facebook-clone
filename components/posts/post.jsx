'use client'
import { useSession } from "next-auth/react";
import CreatePost from "./create_post";

const Post = () => {
    const { data: session } = useSession();

    const profile = {
        image: session.user.image,
        name: session.user.name,
    };

    return (
        <div className="mt-4">
            <CreatePost profile={profile}/>
        </div>
    )
}

export default Post