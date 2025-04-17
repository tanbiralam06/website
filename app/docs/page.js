import Link from 'next/link';

export default function DocsPage() {
  const sections = [
    {
      title: 'Getting Started',
      items: [
        { title: 'Introduction', href: '/docs/introduction' },
        { title: 'Installation', href: '/docs/installation' },
        { title: 'Usage', href: '/docs/usage' },
        { title: 'Theming', href: '/docs/theming' },
      ],
    },
    {
      title: 'Core Concepts',
      items: [
        { title: 'Component Structure', href: '/docs/component-structure' },
        { title: 'Dark Mode', href: '/docs/dark-mode' },
        { title: 'Accessibility', href: '/docs/accessibility' },
        { title: 'Customization', href: '/docs/customization' },
      ],
    },
    {
      title: 'Advanced',
      items: [
        { title: 'Custom Components', href: '/docs/custom-components' },
        { title: 'Server Components', href: '/docs/server-components' },
        { title: 'Performance', href: '/docs/performance' },
        { title: 'Contributing', href: '/docs/contributing' },
      ],
    },
  ];

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-secondary-900 dark:text-white">Documentation</h1>
        <p className="mt-4 text-xl text-secondary-600 dark:text-secondary-300">
          Learn how to use ReacUI in your projects with comprehensive guides and examples.
        </p>

        <div className="mt-12 space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-semibold text-secondary-900 dark:text-white border-b border-secondary-200 dark:border-secondary-800 pb-2">
                {section.title}
              </h2>
              <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {section.items.map((item) => (
                  <li key={item.title}>
                    <Link 
                      href={item.href}
                      className="block p-4 rounded-lg border border-secondary-200 dark:border-secondary-800 bg-white dark:bg-secondary-900 hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
                    >
                      <h3 className="font-medium text-secondary-900 dark:text-white">
                        {item.title}
                      </h3>
                      <div className="mt-1 flex items-center text-sm text-primary-600 dark:text-primary-400">
                        <span>Read more</span>
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
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-lg border border-secondary-200 dark:border-secondary-800 bg-white dark:bg-secondary-900 p-6">
          <h2 className="text-xl font-semibold text-secondary-900 dark:text-white">
            Can't find what you're looking for?
          </h2>
          <p className="mt-2 text-secondary-600 dark:text-secondary-400">
            If you have questions or need help with something not covered in the documentation, check out these resources:
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <a 
                href="https://github.com/yourusername/reacui/issues"
                className="text-primary-600 dark:text-primary-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open an issue on GitHub
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/yourusername/reacui/discussions"
                className="text-primary-600 dark:text-primary-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ask in GitHub Discussions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 