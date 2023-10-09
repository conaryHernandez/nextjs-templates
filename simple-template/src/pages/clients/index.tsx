import Link from 'next/link';
import React from 'react';

const clients = [
  { id: 'juan', name: 'Juan' },
  { id: 'pedro', name: 'Pedro' },
  { id: 'julie', name: 'Julie' },
];

const ClientsPage = () => {
  return (
    <div>
      <h1>The ClientsPage</h1>

      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: '/clients/[id]',
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
