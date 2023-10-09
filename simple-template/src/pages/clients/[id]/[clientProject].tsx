import React from 'react';
import { useRouter } from 'next/router';

const ClientPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>
        The Client {router.query.id} especific page of{' '}
        {router.query.clientProject}
      </h1>
    </div>
  );
};

export default ClientPage;
