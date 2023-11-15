import PostContent from '../../components/Posts/PostContent';
import { getPostData, getPostsFiles } from '../../lib/posts-util';

const Post = ({ post }) => {
  return <PostContent post={post} />;
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const { slug } = params;

  const postData = getPostData(`${slug}.md`);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postsFileNames = getPostsFiles();

  const slugs = postsFileNames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export default Post;
