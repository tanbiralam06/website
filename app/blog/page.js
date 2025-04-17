import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
  const posts = [
    {
      slug: 'getting-started-with-reacui',
      title: 'Getting Started with ReacUI',
      description:
        'Learn how to install and set up ReacUI in your React project, and create your first components.',
      date: 'May 1, 2023',
      author: {
        name: 'John Doe',
        image: 'https://placeholdercdn.io/100x100?text=JD',
      },
      tags: ['tutorial', 'getting-started'],
    },
    {
      slug: 'building-a-dashboard-with-reacui',
      title: 'Building a Dashboard with ReacUI',
      description:
        'Step-by-step guide to building a beautiful admin dashboard using ReacUI components.',
      date: 'April 15, 2023',
      author: {
        name: 'Jane Smith',
        image: 'https://placeholdercdn.io/100x100?text=JS',
      },
      tags: ['tutorial', 'dashboard', 'example'],
    },
    {
      slug: 'customizing-themes-in-reacui',
      title: 'Customizing Themes in ReacUI',
      description:
        'Deep dive into the theme system and how to customize the look and feel of your components.',
      date: 'March 28, 2023',
      author: {
        name: 'Alex Johnson',
        image: 'https://placeholdercdn.io/100x100?text=AJ',
      },
      tags: ['theming', 'customization'],
    },
    {
      slug: 'advanced-form-handling-with-reacui',
      title: 'Advanced Form Handling with ReacUI',
      description:
        'Learn how to build complex forms with validation using ReacUI form components.',
      date: 'March 10, 2023',
      author: {
        name: 'Sarah Williams',
        image: 'https://placeholdercdn.io/100x100?text=SW',
      },
      tags: ['forms', 'validation', 'advanced'],
    },
  ];

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-secondary-900 dark:text-white">Blog</h1>
        <p className="mt-4 text-xl text-secondary-600 dark:text-secondary-300">
          Tutorials, guides, and updates about ReacUI.
        </p>

        <div className="mt-12 space-y-10">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border-b border-secondary-200 dark:border-secondary-800 pb-10 last:border-none last:pb-0"
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-bold text-secondary-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  {post.title}
                </h2>
              </Link>
              <div className="mt-3 flex items-center text-sm text-secondary-600 dark:text-secondary-400">
                <div className="flex items-center">
                  <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                    <Image
                      src={post.author.image}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span>{post.author.name}</span>
                </div>
                <span className="mx-2">•</span>
                <time dateTime={post.date}>{post.date}</time>
              </div>
              <p className="mt-4 text-secondary-600 dark:text-secondary-400">
                {post.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-primary-100 dark:bg-primary-900/30 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:text-primary-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 inline-flex items-center"
                >
                  Read more
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-secondary-600 dark:text-secondary-400">
            Want to contribute to the blog?
          </p>
          <a
            href="https://github.com/yourusername/reacui/tree/main/website/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 btn btn-outline inline-block"
          >
            Submit a post
          </a>
        </div>
      </div>
    </div>
  );
} 