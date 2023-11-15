import FeaturedPosts from '../components/HomePage/FeaturedPosts/FeaturedPosts';
import Hero from '../components/HomePage/Hero';
import { getFeaturedPosts } from '../lib/posts-util';

const HomePage = ({ posts }) => {
  return (
    <div>
      <Hero />

      <FeaturedPosts posts={posts} />
    </div>
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
