import { DUMMY_POSTS } from '..';
import AllPosts from '../../components/Posts/AllPosts';
import { getAllPosts } from '../../lib/posts-util';

const PostsPage = ({ posts }) => {
  return <AllPosts posts={posts} />;
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
