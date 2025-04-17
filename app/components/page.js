import Link from 'next/link';

export default function ComponentsPage() {
  const components = [
    { 
      name: 'Button',
      description: 'Standard button with variants, sizes, and states',
      href: '/components/button',
      category: 'Core',
    },
    { 
      name: 'Input',
      description: 'Text input with validation and states',
      href: '/components/input',
      category: 'Form',
    },
    { 
      name: 'Modal',
      description: 'Dialog for important content or actions',
      href: '/components/modal',
      category: 'Overlay',
    },
    { 
      name: 'Card',
      description: 'Container for content and actions',
      href: '/components/card',
      category: 'Layout',
    },
    { 
      name: 'Accordion',
      description: 'Vertically collapsing content panels',
      href: '/components/accordion',
      category: 'Display',
    },
    { 
      name: 'Badge',
      description: 'Small numerical value or status descriptor',
      href: '/components/badge',
      category: 'Display',
    },
    // Additional components will be added here
  ];

  const categories = [...new Set(components.map(c => c.category))];

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-secondary-900 dark:text-white">Components</h1>
        <p className="mt-4 text-xl text-secondary-600 dark:text-secondary-300">
          Browse our collection of React UI components built with Tailwind CSS.
        </p>
      </div>

      <div className="mt-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {components.map((component) => (
            <Link
              href={component.href}
              key={component.name}
              className="group relative rounded-lg border border-secondary-200 dark:border-secondary-800 bg-white dark:bg-secondary-900 p-6 shadow-sm transition hover:shadow-md hover:border-primary-300 dark:hover:border-primary-700"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  {component.name}
                </h3>
                <span className="inline-flex items-center rounded-full bg-primary-100 dark:bg-primary-900/30 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:text-primary-300">
                  {component.category}
                </span>
              </div>
              <p className="mt-2 text-sm text-secondary-600 dark:text-secondary-400">
                {component.description}
              </p>
              <span
                className="absolute inset-0"
                aria-hidden="true"
              ></span>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-secondary-600 dark:text-secondary-400">Don't see what you need?</p>
        <div className="mt-4">
          <Link
            href="/docs/contributing"
            className="btn btn-outline"
          >
            Contribute a component
          </Link>
        </div>
      </div>
    </div>
  );
} 