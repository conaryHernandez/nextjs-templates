import { DUMMY_POSTS } from '..';
import AllPosts from '../../components/Posts/AllPosts';

const PostsPage = ({ posts = DUMMY_POSTS }) => {
  return <AllPosts posts={posts} />;
};

export default PostsPage;
