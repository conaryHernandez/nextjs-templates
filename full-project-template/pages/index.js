import FeaturedPosts from '../components/HomePage/FeaturedPosts/FeaturedPosts';
import Hero from '../components/HomePage/Hero';

export const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a the most popular framework for React! And not without reason...',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started with NextJS2',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a the most popular framework for React! And not without reason...',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started with NextJS3',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a the most popular framework for React! And not without reason...',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started with NextJS4',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is a the most popular framework for React! And not without reason...',
    date: '2022-02-10',
  },
];

const HomePage = () => {
  return (
    <div>
      <Hero />

      <FeaturedPosts posts={DUMMY_POSTS} />
    </div>
  );
};

export default HomePage;
