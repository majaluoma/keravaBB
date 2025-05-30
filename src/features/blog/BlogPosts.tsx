import TextContent from '../textContent/TextContent';

type Blogpost = {
  id: number;
  title: string;
  ingress: string;
  date: Date;
};

type BlogPostsProps = {
  blogposts: Blogpost[];
};

export default function BlogPosts({ blogposts }: Readonly<BlogPostsProps>) {
  return (
    <div>
      <div className="flex flex-col max-w-screen">
        {blogposts.map((blogpost) => {
          return (
            <div key={`blogpost_${blogpost.id}`} className='bg-card p-4 rounded-2xl my-5'>
              <p className="text-gray-600">
                {blogpost.date.toLocaleDateString()}
              </p>
              <TextContent
                markdownFile={`/siteTexts/blogEntries/${blogpost.id}/text.md`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
