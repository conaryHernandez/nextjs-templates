import { useEffect, useState } from 'react';
import useSWR from 'swr';

function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);

  const { data, error } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      setSales(data);
    }
  }, [data]);

  if (error) {
    return <p>Failed to load.</p>;
  }

  if (!data && !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>{sale.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  return { props: { sales: data } };
}

export default LastSalesPage;
