import Head from 'next/head';
import FeaturedPosts from '../components/HomePage/FeaturedPosts';
import Hero from '../components/HomePage/Hero';
import { getFeaturedPosts } from '../lib/posts-util';

const HomePage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Conary's Blog</title>
        <meta name='description' content='Next Blog' />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export const getStaticProps = async () => {
  const featuredPosts = await getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 600,
  };
};

export default HomePage;
