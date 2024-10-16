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

                return { 
                    name: "Admin", 
                    email: "lythevinh002@gmail.com", 
                    image: "https://scontent.fmel8-1.fna.fbcdn.net/v/t39.30808-1/453235400_3817583518466333_2745631905922420128_n.jpg?stp=dst-jpg_s480x480&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=r0sCI0dwr6MQ7kNvgHr0taP&_nc_zt=24&_nc_ht=scontent.fmel8-1.fna&_nc_gid=AsXMsbLqFHBFNH_pIUB10Em&oh=00_AYBDDKZAv3IJ-QiVOwKCvdTG24_Pi0ybk3MAvGAHDQBNAw&oe=671564E3" 
                }
            }
        }),
    ],
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    },
    pages: {
        signIn: '/auth/signin', // Custom sign-in page
        error: '/auth/error', // Custom error page
    },
    callbacks: {
        async redirect({ url, baseUrl }) {
          // Always redirect to the homepage on login
          return baseUrl; // This will redirect to your site's root ("/")
        },
      },
}

// Create a NextAuth handler
const handler = NextAuth(authOptions)

// Export the handler for GET and POST methods
export { handler as GET, handler as POST }
