import Link from 'next/link';
import Image from 'next/image';
import FeatureCard from '../components/FeatureCard';

export default function Home() {
  const features = [
    {
      title: 'Customizable Components',
      description: 'Easily customize components with props for variants, sizes, and colors.',
      icon: (
        <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
    },
    {
      title: 'Dark/Light Mode',
      description: 'Built-in support for dark and light modes using Tailwind CSS.',
      icon: (
        <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
    },
    {
      title: 'Responsive Design',
      description: 'All components are fully responsive and work on any screen size.',
      icon: (
        <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Accessible',
      description: 'Components include ARIA attributes and keyboard navigation for accessibility.',
      icon: (
        <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Lightweight',
      description: 'Optimized bundle size with tree-shaking support via Rollup.',
      icon: (
        <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Comprehensive Docs',
      description: 'Detailed documentation with examples and API references.',
      icon: (
        <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-secondary-900 py-20 sm:py-32">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary-100 via-slate-50 to-white dark:from-primary-900/20 dark:via-secondary-900 dark:to-secondary-900"></div>
        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 dark:text-white sm:text-6xl">
              Beautiful React UI components
              <span className="block text-primary-600 dark:text-primary-400"> made with Tailwind CSS</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-secondary-600 dark:text-secondary-300 max-w-3xl">
              A professionally designed, fully responsive, and accessible component library that makes it easy to build beautiful React applications.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/docs/getting-started"
                className="btn btn-primary"
              >
                Get Started
              </Link>
              <Link
                href="/components"
                className="btn btn-outline"
              >
                Browse Components
              </Link>
            </div>
          </div>

          <div className="mt-16 rounded-lg border border-secondary-200 dark:border-secondary-800 overflow-hidden bg-white dark:bg-secondary-800 shadow-md">
            <div className="p-1 bg-secondary-100 dark:bg-secondary-800 flex">
              <div className="flex space-x-1">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="p-4 sm:p-6 lg:p-8 bg-white dark:bg-secondary-900 text-secondary-900 dark:text-secondary-300">
              <pre className="font-mono text-sm sm:text-base">
                <code>{`import React from 'react';
import { ThemeProvider, Button } from 'reacui';

function App() {
  return (
    <ThemeProvider>
      <div className="p-4">
        <Button variant="primary">Get Started</Button>
        <Button variant="outline">Learn More</Button>
      </div>
    </ThemeProvider>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary-50 dark:bg-secondary-800">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 dark:text-white sm:text-4xl">
              Everything you need to build modern UIs
            </h2>
            <p className="mt-4 text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              ReacUI provides a comprehensive set of components to help you build beautiful, accessible, and responsive web applications.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg bg-white dark:bg-secondary-900 p-6 shadow-md border border-secondary-200 dark:border-secondary-700 hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
              >
                <div className="mb-4 rounded-full bg-primary-100 dark:bg-primary-900/30 p-2 w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-secondary-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-secondary-600 dark:text-secondary-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 dark:bg-primary-900 py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
            Start building beautiful interfaces with our library in minutes. Install the package and begin integrating components into your application.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/docs/getting-started"
              className="btn bg-white text-primary-600 hover:bg-primary-50 focus:ring-primary-500"
            >
              Read the Docs
            </Link>
            <Link
              href="/playground"
              className="btn bg-primary-700 text-white hover:bg-primary-800 focus:ring-primary-500"
            >
              Try the Playground
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 