import NextAuth from 'next-auth/next';
import CredentialProvider from 'next-auth/providers/credentials';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../../lib/mongodb';

export default NextAuth({
  providers: [
    CredentialProvider({
      name: 'credentials',
      credentials: {
        email: {
          type: 'email',
        },
        password: { type: 'password' },
      },
      authorize: (credentials) => {
        // database look up
        console.log('credentials', credentials);
        {
          return {
            name: credentials.email,
            email: credentials.password,
          };
        }
      },
    }),
  ],
  // callbacks: {
  //   jwt: async ({ token, user }) => {
  //     console.log('user', user);
  //     console.log('token', token);
  //   },
  //   session: ({ session, token }) => {
  //     console.log('session', session);
  //     if (token) {
  //       session.id = token.id;
  //     }
  //     return session;
  //   },
  // },
  secret: 'test',
  // adapter: MongoDBAdapter(clientPromise),
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
});
