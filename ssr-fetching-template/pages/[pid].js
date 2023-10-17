import fs from 'fs/promises';
import path from 'path';

const ProductDetailPage = ({ product }) => {
  return <p>Product: {product?.title}</p>;
};

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.pid;

  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');

  const jsonData = await fs.readFile(filePath, 'utf-8');

  const data = JSON.parse(jsonData);

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { pid: 'p1' } }, { params: { pid: 'p2' } }],
    fallback: true,
  };
}

export default ProductDetailPage;
