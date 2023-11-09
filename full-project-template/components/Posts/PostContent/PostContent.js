import ReactMarkdown from 'react-markdown';
import PostHeader from '../PostHeader';

import classes from './PostContent.module.css';

const DUMMY_POST = {
  title: 'Getting Started With NextJS',
  image: 'getting-started-nextjs.png',
  content: '# Content',
  date: '2022-02-10',
  slug: 'getting-started-with-nextjs',
};

const PostContent = ({ post = DUMMY_POST }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
