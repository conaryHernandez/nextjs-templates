function UserProfile({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  const { uid } = params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${uid}`
  );
  const data = await response.json();

  if (!data) {
    return {
      redirect: {
        destination: '/no-data',
      },
    };
  }

  return {
    props: {
      user: data,
    },
  };
}

export default UserProfile;
