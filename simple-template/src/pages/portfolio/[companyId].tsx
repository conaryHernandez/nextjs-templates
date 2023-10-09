import React from 'react';
import { useRouter } from 'next/router';

const CompanyPorfolio = () => {
  const router = useRouter();

  return (
    <div>
      <h1>The CompanyPorfolio page of {router.query.companyId}</h1>
    </div>
  );
};

export default CompanyPorfolio;
