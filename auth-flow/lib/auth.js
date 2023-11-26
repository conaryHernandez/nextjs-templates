import { hash, compare } from 'bcryptjs';
import CredentialProvider from 'next-auth/providers/credentials';

import { connectDatabase } from './db';

export async function hashPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

export async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}

export const authOptions = {
  session: {
    strategy: 'jwt',
  },
  secret: process.env.SESSION_SECRET,
  providers: [
    CredentialProvider({
      name: 'credentials',
      authorize: async (credentials) => {
        const client = await connectDatabase();
        const usersCollection = client.db().collection('users');

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error('No user found!');
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error('Invalid password! Try again!');
        }

        client.close();

        return { email: user.email };
      },
    }),
  ],
};
