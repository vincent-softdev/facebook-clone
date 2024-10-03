"use client"; // Make sure this is declared to enable client-side functionality

import { signIn } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation" // Note the change here

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await signIn("credentials", {
            redirect: false,
            email,
            password,
        })

        if (result?.error) {
            console.error("Login failed:", result.error)
        } else {
            console.log('login good')
            // Redirect to the homepage if successful
            router.refresh() // Navigate to the homepage
        }
    }

    return (
        <div className="grid place-items-center bg-[#f2f4f7]">
            <div className="h-[720px]">
                <div className="flex flex-col items-center">
                    <form onSubmit={handleSubmit} className="flex gap-3 p-6 rounded-lg shadow-lg flex-col items-center bg-white w-[300px] sm:w-[396px] h-fit">
                        <input
                            type="email"
                            placeholder="admin@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mb-4 w-full p-2 border rounded-lg text-[17px] px-[14px] py-[16px]"
                        />
                        <input
                            type="password"
                            placeholder="admin"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mb-4 w-full p-2 border rounded-lg text-[17px] px-[14px] py-[16px]"
                        />
                        <button type="submit" className="p-5 text-[17px] font-bold w-full bg-blue-500 rounded-lg text-white text-center cursor-pointer">
                            Login
                        </button>
                        <p>Forgotten password?</p>
                        <hr />
                        <button type="submit" className="h-12 text-[17px] font-bold px-5 bg-[#42b72a] w-fit rounded-lg text-white text-center cursor-pointer">
                            Create new account
                        </button>
                    </form>
                    <p className="mt-7"><b>Create a Page</b> for a celebrity, brand or business.</p>
                </div>
            </div>
        </div>
    )
}

export default Login
