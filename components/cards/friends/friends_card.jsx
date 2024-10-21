const FriendsCard = (user) => {
    // Get all information from user
    const { name, image, active, follower, following, posts, stories, type } = user.user;

    return (
        <div
            className="w-full border-[1px] shadow-md min-w-[200px] cursor-pointer h-[376px] rounded-xl bg-center text-black relative font-semibold flex flex-col"
        >
            {/* Image section */}
            <div 
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                }}
                className="h-[200px] w-full"
            />

            {/* Content section */}
            <div className="p-3 flex flex-1 flex-col justify-between">
                <div className="friends-cards__header">
                    <p>{name}</p>
                </div>

                {/* Action buttons pinned to the bottom */}
                <div className="friends-cards__action flex flex-col gap-2 mt-auto">
                    <button className="bg-blue-50 text-blue-600 py-2 rounded-md">
                        Add friend
                    </button>
                    <button className="bg-gray-200 py-2 rounded-md">
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FriendsCard;
