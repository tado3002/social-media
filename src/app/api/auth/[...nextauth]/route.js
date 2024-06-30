import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/libs/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter"

const options = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const {username, password} = await req.body.json() 
        const userCredentials = {username,password}
        const res = await fetch("/api/v1/login", {
          method: "POST",
          body: JSON.stringify(userCredentials),
        });
        const user = await res.json();

        if (res.ok && user) {
          return user;
        }
        console.log(userCredentials)
        return null;
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session : {strategy: "jwt"
  },
  callbacks:{
    async session(session,user,token){
      if(user !== null){
        session.user = user
      }
      return await session
    },
    async jwt({token,user}){
      return await token  
    }
  }
}

export default (req, res) => nextAuth(req, res, options);

