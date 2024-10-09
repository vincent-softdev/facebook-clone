'use client'
import react from "react";
import { getUserById } from "@/services/user_service"
import { getGroupById } from "@/services/group_service";
// Post card we have: 
// 1. personal profile: who posts the post, or the anonymouse icon. If post in the group, we do have group background image, then personal 
// profile icon
// 2. H1 for Group name, or profile name. Then if we do not have group name, the profile name is H1
// 3. we do have time (hour if < 23.59 else day, over 7 days will be day and month) and type of access: (public, friendonly or private)
// 4. Description will have 3 lines, then ...see more. If user click in See more, full text will appear.
// 5. Images will be 2 rows, then + rest amount of images.
const PostCard = ({id, user_id, group_id, content}) => {

    const [user, setUser] = react.useState(null);
    const [group, setGroup] = react.useState(null);

    // Purpose: get user/author by id
    react.useEffect(() => {
        const fetchUser = async () => {
            const response = await getUserById(user_id); // Fetch user by ID
            setUser(response);
        };
        fetchUser();
    }, []);
    // purpose: get group by id
    react.useEffect(() => {
        const fetchGroup = async () => {
            const response = await getGroupById(group_id); // Fetch user by ID
            setGroup(response);
        };
        fetchGroup();
    }, []);

    /*
        profile_image_url: shold be the image source of who post the post
        name: name of author
        group_image_src: group profile image
        group_name: name of the group where the post is posted 
        content: content of the post
        image_urls: source of the images urls
    */
    return (
        <div className="post-card">
            <div className="card__header">
                <div className="">
                    image
                </div>
                <div>
                    {
                        user && user.name
                    }
                    {
                        group && group.name
                    }
                </div>
            </div>
            <div className="card__content">

            </div>
            <div className="card__footer">

            </div>
        </div>
    )
}

export default PostCard
