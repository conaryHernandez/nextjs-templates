import React from 'react';
import { useRouter } from 'next/router';

const SlugPage = () => {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The Slug page</h1>
    </div>
  );
};

export default SlugPage;
