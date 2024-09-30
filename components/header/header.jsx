"use client"
import {Icons} from "@/public/icons"
import IconList from "./icon_list";
import SearchBar from "./search_bar";
import Personal from "./personal";

const Header = () => {
    const center = [
        {icon: Icons.HomeIcon, name: "Home", path: ""}, 
        {icon: Icons.FriendIcon, name: "Friends", path: ""}, 
        {icon: Icons.VideoIcon, name: "Video", path: ""}, 
        {icon: Icons.MarketplaceIcon, name: "Home", path: ""}, 
        {icon: Icons.GroupsIcon, name: "Home", path: ""}]

    return (
        <div className="flex sticky z-50 bg-white items-center p-2 px-5 shadow-md">
            {/* Left */}
            <SearchBar />
            {/* center */}
            <div className="hidden md:flex md:justify-center md:flex-grow">
                <IconList icons={center}/>
            </div>

            {/* right */}
            <div className="flex ">
                <Personal />
            </div>
        </div>
    )
}

export default Header

