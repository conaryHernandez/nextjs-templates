import NextAuth from 'next-auth';

import { authOptions } from '../../../lib/auth';

// NextAuth() executes and returns a handler function
export default NextAuth(authOptions);
