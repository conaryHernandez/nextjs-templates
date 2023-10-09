import React from 'react';
import { useRouter } from 'next/router';

const ClientPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>The Client page of {router.query.id}</h1>
    </div>
  );
};

export default ClientPage;
