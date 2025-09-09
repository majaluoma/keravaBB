import BlockView from '@/components/customUi/BlockView';
import { blogData } from '@/data/blogData';
import BlogNavigation from '@/features/blog/BlogNavigation';
import BlogPosts from '@/features/blog/BlogPosts';
import LinkAccordion from '@/components/customUi/LinkAccordion';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FadingBackground from '@/components/customUi/FadingBackgorund';
import wallpaper1 from '@/assets/wallpaper1.png';
type BlockProps = {
  single?: boolean;
  batch?: boolean;
};
const sortBlogsByTime = (a: (typeof blogData)[0], b: (typeof blogData)[0]) => {
  return b.date.getTime() - a.date.getTime();
};

export default function Blog({ single, batch }: Readonly<BlockProps>) {
  const { id, year } = useParams();
  const [blogPosts, setBlogPosts] = useState(blogData.sort(sortBlogsByTime).slice(0, 10));

  useEffect(() => {
    if (single) {
      const post = blogData.find((blog) => blog.id === Number(id));
      if (post) {
        setBlogPosts([post]);
      }
    }

    if (batch) {
      const post = blogData.filter(
        (blog) => blog.date.getFullYear().toString() === year,
      );
      if (post) {
        setBlogPosts(post.sort(sortBlogsByTime));
      }
    }
  }, [batch, single, id, year]);

  return (
    <>
      <div>
        <FadingBackground image={wallpaper1} />
        <div className="text-card bg-primary relative top-20 rounded-2xl p-4">
          <h1 className="font-headline text-6xl font-bold">Urheilu uutiset</h1>
          <p>Katso kuvat</p>
        </div>
      </div>

      <BlockView>
        <BlogPosts
          blogposts={blogPosts.sort((a, b) => {
            return b.date.getTime() - a.date.getTime();
          })}
        />
      </BlockView>
      <BlockView>
        <h2 className="font-headline text-4xl font-bold">All posts</h2>
        <LinkAccordion
          links={blogData.map((blogentry) => {
            return {
              name: `${blogentry.date.toLocaleDateString()} ${blogentry.title}`,
              url: `/blog/${blogentry.date.getFullYear().toString()}/${blogentry.id}`,
              categories: [blogentry.date.getFullYear().toString()],
            };
          })}
          firstOpen={false}
        />
      </BlockView>
      <div className="fixed bottom-1 left-1 z-50 md:top-50 md:left-20">
        <BlogNavigation />
      </div>
    </>
  );
}
