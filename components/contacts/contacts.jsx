import { useCollection } from "react-firebase-hooks/firestore"
import { collection, query, orderBy } from "firebase/firestore"
import { db } from "@/firebase"

const Contacts = () => {
    // Get users from firebase
    const userQuery = query(collection(db, 'users'))
    const [realtimeUsers, loading, error] = useCollection(userQuery);
    
    console.log(userQuery)

    return (
        <div className="hidden lg:inline-block lg:w-[280px] lg:min-w-[280px] bg-black">

        </div>
    )
}

export default Contacts
