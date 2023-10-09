import React from 'react';
import { useRouter } from 'next/router';

const ClientPage = () => {
  const router = useRouter();

  function loadProjectHandler() {
    router.push({
      pathname: '/clients/[id]/[clientProject]',
      query: { id: router.query.id, clientProject: 'projecta' },
    });
  }

  return (
    <div>
      <h1>The Projects of client: {router.query.id}</h1>

      <ul>
        <li>
          <button onClick={loadProjectHandler}>Project A</button>
        </li>
      </ul>
    </div>
  );
};

export default ClientPage;
