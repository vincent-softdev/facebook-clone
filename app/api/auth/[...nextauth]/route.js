import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

// Define the authOptions
export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "admin@gmail.com" },
                password: { label: "Password", type: "password", placeholder: "admin" },
            },
            async authorize(credentials) {
                const { email, password } = credentials;

                // Simple authentication check
                if (email === "admin@gmail.com" && password === "admin") {
                    return { name: "Admin", email: credentials.email }
                } else {
                    return null
                }
            }
        }),
    ],
    pages: {
        signIn: '/auth/signin', // Custom sign-in page
        error: '/auth/error', // Custom error page
    },
}

// Create a NextAuth handler
const handler = NextAuth(authOptions)

// Export the handler for GET and POST methods
export { handler as GET, handler as POST }
