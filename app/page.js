// /app/page.js

import Header from "@/components/header/header";
import Login from "@/components/login/login";
import { checkSession } from "@/utils/session_check"; // Import the session check utility
import SideBar from "@/components/side_bar/side_bar";

export default async function Home() {
    // Use the utility to fetch the session
    const session = await checkSession();

    // If there's no session, render the login page
    if (!session) {
        return <Login />; // Render the Login component if not authenticated
    }

    // Render the header and session info if logged in
    return (
        <div>
            <Header />
            <div className="w-full xl:w-[1464px]">
                <SideBar />
            </div>
        </div>
    );
}
