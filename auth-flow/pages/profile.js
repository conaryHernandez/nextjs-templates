import { getServerSession } from 'next-auth';

import UserProfile from '../components/profile/user-profile';
import { authOptions } from '../lib/auth';

function ProfilePage() {
  return <UserProfile />;
}

export const getServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }
  return {
    props: { value: JSON.parse(JSON.stringify(session)) },
  };
};

export default ProfilePage;
