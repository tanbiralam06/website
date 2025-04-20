'use client';

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'Components', href: '/components' },
        { name: 'Playground', href: '/playground' },
        { name: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'GitHub', href: 'https://github.com/reacui/reacui' },
        { name: 'Issues', href: 'https://github.com/reacui/reacui/issues' },
        { name: 'Contributing', href: 'https://github.com/reacui/reacui/blob/main/CONTRIBUTING.md' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'License', href: 'https://github.com/reacui/reacui/blob/main/LICENSE' },
      ],
    },
  ];

  return (
    <footer className="bg-secondary-50 dark:bg-secondary-900 border-t border-secondary-200 dark:border-secondary-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary-600 dark:text-primary-400 tracking-tight">ReacUI</span>
            </Link>
            <p className="mt-4 text-secondary-600 dark:text-secondary-400 leading-relaxed">
              A modern React UI library with customizable components, built with Tailwind CSS and React 18.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-base font-semibold text-secondary-900 dark:text-secondary-100 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-primary-600 dark:hover:text-primary-400 text-secondary-600 dark:text-secondary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-secondary-200 dark:border-secondary-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-secondary-600 dark:text-secondary-400 text-center sm:text-left">
            &copy; {currentYear} ReacUI. All rights reserved.
          </p>

          <div className="flex space-x-5">
            {/* GitHub */}
            <a
              href="https://github.com/reacui/reacui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 
                  0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
                  -.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832
                  .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 
                  0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 
                  0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 
                  2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 
                  2.651.64.7 1.028 1.595 1.028 2.688 
                  0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 
                  0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 
                  10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/tanbir_tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition"
            >
              <span className="sr-only">X</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.452 3H17.35l-4.127 5.314L9.333 3H3l7.544 10.74L3 21h3.104l4.582-5.895L14.667 21H21l-7.826-11.14L20.452 3zm-3.286 16h-1.813l-9.37-12.9h1.788l9.395 12.9z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
