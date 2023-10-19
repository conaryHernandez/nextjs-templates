import fs from 'fs/promises';
import path from 'path';

const ProductDetailPage = ({ product }) => {
  return <p>Product: {product?.title}</p>;
};

const getData = async () => {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');

  const jsonData = await fs.readFile(filePath, 'utf-8');

  const data = JSON.parse(jsonData);

  return data;
};

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.pid;

  const data = await getData();

  const product = data.products.find((product) => product.id === productId);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.products.map((product) => product.id);

  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));

  return {
    paths: pathsWithParams,
    fallback: true,
  };
}

export default ProductDetailPage;
