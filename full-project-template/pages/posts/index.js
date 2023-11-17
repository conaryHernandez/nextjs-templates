import Head from 'next/head';
import AllPosts from '../../components/Posts/AllPosts';
import { getAllPosts } from '../../lib/posts-util';

const PostsPage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All My Posts</title>
        <meta name='description' content='Next Blog' />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 600,
  };
};

export default PostsPage;
