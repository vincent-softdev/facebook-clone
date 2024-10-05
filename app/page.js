// /app/page.js

import Header from "@/components/header/header";
import Login from "@/components/login/login";
import { checkSession } from "@/utils/session_check"; // Import the session check utility
import SideBar from "@/components/side_bar/side_bar";
import Stories from "@/components/story/stories";
import Contacts from "@/components/contacts/contacts";

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
            <div className="w-full flex flex-col items-center">
                <div className="mt-5 w-full 2xl:w-[1464px] flex justify-center gap-10">
                    <SideBar />
                    <div id="middle-home" className="flex flex-col overflow-hidden w-full max-w-[680px]">
                        <Stories />
                    </div>
                    <Contacts />
                </div>
                
            </div>
            
        </div>
    );
}
