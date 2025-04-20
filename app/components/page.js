import Link from 'next/link';

export default function ComponentsPage() {
  const componentGroups = [
    {
      title: 'Basic Components',
      description: 'Fundamental UI building blocks for your applications',
      components: [
        { 
          name: 'Alert',
          description: 'Feedback or status messages with multiple variants',
          href: '/components/alert',
          isNew: true,
        },
        { 
          name: 'Button',
          description: 'Standard button with variants, sizes, and states',
          href: '/components/button',
          isNew: false,
        },
        { 
          name: 'Badge',
          description: 'Small numerical value or status descriptor',
          href: '/components/badge',
          isNew: true,
        },
        { 
          name: 'Card',
          description: 'Container for content and actions',
          href: '/components/card',
          isNew: false,
        },
        { 
          name: 'Input',
          description: 'Text input with validation and states',
          href: '/components/input',
          isNew: false,
        },
        { 
          name: 'Spinner',
          description: 'Loading indicator with different sizes and colors',
          href: '/components/spinner',
          isNew: false,
        },
        { 
          name: 'Table',
          description: 'Display data in rows and columns',
          href: '/components/table',
          isNew: false,
        },
        { 
          name: 'Toast',
          description: 'Notifications that appear temporarily to provide feedback',
          href: '/components/toast',
          isNew: true,
        },
      ]
    },
    {
      title: 'Form Components',
      description: 'Components for building interactive and accessible forms',
      components: [
        { 
          name: 'Checkbox',
          description: 'Multi-selection control for forms',
          href: '/components/checkbox',
          isNew: false,
        },
        { 
          name: 'DateTimePicker',
          description: 'Date and time selection component',
          href: '/components/datetimepicker',
          isNew: true,
        },
        { 
          name: 'File Input',
          description: 'Input control for file uploads',
          href: '/components/file-input',
          isNew: true,
        },
        { 
          name: 'Radio',
          description: 'Single-selection control for forms',
          href: '/components/radio',
          isNew: false,
        },
        // { 
        //   name: 'Range Slider',
        //   description: 'Dual handle slider for selecting ranges',
        //   href: '/components/range-slider',
        //   isNew: true,
        // },
        { 
          name: 'Select',
          description: 'Dropdown selection control',
          href: '/components/select',
          isNew: false,
        },
        { 
          name: 'Slider',
          description: 'Visual control for selecting a value from a range',
          href: '/components/slider',
          isNew: true,
        },
        { 
          name: 'Switch',
          description: 'Toggle control for binary options',
          href: '/components/switch',
          isNew: true,
        },
        {
          name: 'Textarea',
          description: 'Multi-line text input control',
          href: '/components/textarea',
          isNew: false,
        },
      ]
    },
    {
      title: 'Overlay Components',
      description: 'Components that appear above other content',
      components: [
        { 
          name: 'Modal',
          description: 'Dialog for important content or actions',
          href: '/components/modal',
          isNew: false,
        },
        { 
          name: 'Popover',
          description: 'Rich content tooltip',
          href: '/components/popover',
          isNew: false,
        },
        { 
          name: 'Tooltip',
          description: 'Short informational message on hover',
          href: '/components/tooltip',
          isNew: false,
        },
      ]
    },
    {
      title: 'Display Components',
      description: 'Components for displaying and organizing content',
      components: [
        { 
          name: 'Accordion',
          description: 'Vertically collapsing content panels',
          href: '/components/accordion',
          isNew: false,
        },
        { 
          name: 'Tabs',
          description: 'Organize content into selectable views',
          href: '/components/tabs',
          isNew: false,
        },
      ]
    },
    {
      title: 'Layout Components',
      description: 'Components for organizing content on the page',
      components: [
        { 
          name: 'Container',
          description: 'Wrapper that centers content with max-width',
          href: '/components/container',
          isNew: false,
        },
        { 
          name: 'Grid',
          description: 'Flexible grid layout system for complex designs',
          href: '/components/grid',
          isNew: true,
        },
      ]
    },
    {
      title: 'Feedback Components',
      description: 'Components for providing user feedback',
      components: [
        { 
          name: 'Alert',
          description: 'Status messages to notify users about important information',
          href: '/components/alert',
          isNew: true,
        },
        { 
          name: 'Toast',
          description: 'Notifications that appear temporarily to provide feedback',
          href: '/components/toast',
          isNew: true,
        },
      ]
    },
  ];

  return (
    <div className="max-w-full pt-6">
      {/* Beta Banner */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-3 rounded-lg mb-8">
        <div className="container flex justify-between items-center">
          <div className="flex items-center">
            <span className="mr-2">🚀</span>
            <span>ReacUI is currently in <strong>Beta</strong>. We're actively improving it! ✨</span>
          </div>
          <button className="text-white hover:text-white/80 underline text-sm">
            Share feedback
          </button>
        </div>
      </div>

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-secondary-900 dark:text-white mb-3">Components</h1>
        <p className="text-xl text-secondary-600 dark:text-secondary-300">
          A collection of React UI components built with Tailwind CSS for building modern web applications.
        </p>
      </div>

      {componentGroups.map((group) => (
        <div key={group.title} className="mb-16">
          <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">{group.title}</h2>
          <p className="text-secondary-600 dark:text-secondary-400 mb-6">{group.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {group.components.map((component) => (
              <Link
                href={component.href}
                key={component.name}
                className="flex flex-col h-full group relative rounded-lg border border-secondary-200 dark:border-secondary-800 bg-white dark:bg-secondary-900 p-5 shadow-sm transition hover:shadow-md hover:border-primary-300 dark:hover:border-primary-700"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-medium text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                    {component.name}
                  </h3>
                  {component.isNew && (
                    <span className="inline-flex items-center rounded-full bg-primary-100 dark:bg-primary-900/30 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:text-primary-300">
                      NEW
                    </span>
                  )}
                </div>
                <p className="text-sm text-secondary-600 dark:text-secondary-400 flex-grow">
                  {component.description}
                </p>
                <div className="flex items-center mt-4 text-sm text-primary-600 dark:text-primary-400 font-medium">
                  View component <span className="ml-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-16 rounded-lg bg-primary-50 dark:bg-primary-900/20 p-6 border border-primary-100 dark:border-primary-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">Don't see what you need?</h2>
            <p className="text-secondary-600 dark:text-secondary-400">
              Our component library is always growing. You can contribute or request new components.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="/docs/contributing"
              className="btn btn-primary"
            >
              Contribute
            </Link>
            <Link
              href="/docs/roadmap"
              className="btn btn-outline"
            >
              View Roadmap
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 