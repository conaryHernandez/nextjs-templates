import fs from 'fs/promises';
import path from 'path';

function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  // cwd = current working directory / makes sure that we are in the right folder
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');

  const jsonData = await fs.readFile(filePath, 'utf-8');

  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: '/no-data',
      },
    };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 15,
    // notFound: true,
  };
}

export default HomePage;
