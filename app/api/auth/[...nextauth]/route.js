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
                    email: credentials.email, 
                    image: "https://scontent.fmel15-1.fna.fbcdn.net/v/t39.30808-1/453235400_3817583518466333_2745631905922420128_n.jpg?stp=dst-jpg_s480x480&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=kdr6Cb2VfX4Q7kNvgGa-s3h&_nc_ht=scontent.fmel15-1.fna&_nc_gid=A-9bSYO8G-NaVqGOzwOY736&oh=00_AYA9iNCD9W_H_F9P5zwGzJtoL2S1ugz3WyJfd0M70KXLEA&oe=6705CB23" 
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
