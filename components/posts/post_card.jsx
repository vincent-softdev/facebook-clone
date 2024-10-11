'use client'
import react from "react";
import { getUserById } from "@/services/user_service";
import { getGroupById } from "@/services/group_service";
import { formatDistanceToNow, format } from 'date-fns';
import { Icons } from "@/public/icons";

const PostCard = ({ id, user_id, group_id, content }) => {
    const post_date = "2024-10-11T12:10:00Z"
    const [user, setUser] = react.useState(null);
    const [group, setGroup] = react.useState(null);

    // Fetch user by ID
    if (user_id != null) {
        react.useEffect(() => {
            const fetchUser = async () => {
                const response = await getUserById(user_id);
                setUser(response);
            };
            fetchUser();
        }, [user_id]);
    }

    // Fetch group by ID
    if (group_id != null) {
        react.useEffect(() => {
            const fetchGroup = async () => {
                const response = await getGroupById(group_id);
                setGroup(response);
            };
            fetchGroup();
        }, [group_id]);
    }

    // Calculate the relative date
    const getRelativeTime = (date) => {
        console.log(date)
        if (!date) {
            return "Invalid date"; // Fallback for missing date
        }

        const now = new Date();
        const postTime = new Date(date);

        // Log postTime for debugging
        console.log("postTime:", postTime);

        if (isNaN(postTime.getTime())) {
            return "Invalid date"; // Fallback if date is unparseable
        }

        const daysDifference = (now - postTime) / (1000 * 60 * 60 * 24);
        if (daysDifference > 7) {
            return format(postTime, "MMMM d 'at' h:mm a");
        } else {
            return formatDistanceToNow(postTime, { addSuffix: true }).replace("about ", "").replace("in ", "");
        }
    };

    return (
        <div className="post-card">
            <div className="card__header flex justify-between">
                <div className="flex">
                    <div className="mr-2">
                        {/* If we have a group image, we will display the group image first, then the personal image */}
                        {
                            (group && user) && (
                                <div className="relative w-10">
                                    <img src={group.url} alt="group image" className="h-9 w-9 rounded-lg" />
                                    <img src={user.url} alt="user image" className="h-6 w-6 rounded-full absolute top-4 right-0 border-[1px] border-white" />
                                </div>
                            )
                        }
                        {
                            (group && !user) && (
                                <div>
                                    <img src={group.url} alt="group image" className="h-10 w-10 rounded-full" />
                                </div>
                            )
                        }
                        {
                            (!group && user) && (
                                <div>
                                    <img src={user.url} alt="user image" className="h-10 w-10 rounded-full" />
                                </div>
                            )
                        }
                    </div>
                    <div>
                        <div>{group && group.name}</div>
                        <div className="font-semibold text-[12px] flex items-center text-gray-500">{user && user.name} 
                            <span className="mb-1 mx-1">.</span> {getRelativeTime(post_date)} 
                            <span className="mb-1 mx-1">.</span>
                             <Icons.PublicTypeIcon />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card__content">{/* Post content goes here */}</div>
            <div className="card__footer">{/* Footer content */}</div>
        </div>
    );
};

export default PostCard;
