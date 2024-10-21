'use client'

import SideBar from "@/components/side_bar/friends/side_bar";
import { collection, query } from "firebase/firestore";
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from "@/firebase";
import FriendsCard from "@/components/cards/friends/friends_card";

export default function Friends() {
    const usersQuery = query(collection(db, 'users'));
    const [realtimeUsers, loading, error] = useCollection(usersQuery);

    return (
        <div className="h-fit flex gap-8">
            <SideBar />
            <div className="pt-10 pr-8 grow">
                {/* Title */}
                <div className="friends-header flex justify-between mb-5">
                    <p className="text-[1.3rem] font-bold">People you may know</p>
                    <p className="text-blue-600">See all</p>
                </div>

                {/* Friends cards */}
                <div className="grid gap-3 mb-10" 
                     style={{
                         gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
                     }}>
                    {realtimeUsers &&
                        realtimeUsers.docs.map((user) => (
                            <div
                                key={user.id}
                                className="bg-white shadow-md rounded-lg border-[1px] border-gray-300 overflow-hidden flex items-center justify-center"
                         
                            >
                                <FriendsCard user={user.data()} />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
