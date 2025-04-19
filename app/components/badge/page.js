"use client";

import { useState } from 'react';
import Link from 'next/link';
import TabGroup from '../../../components/TabGroup';
import ComponentExample from '../../../components/ComponentExample';
import TableOfContents from '../../../components/TableOfContents';
import Banner from '../../../components/banner';
import CodeBlock from '../../../components/CodeBlock';
// Mock imports of the actual reacui components
// In a real implementation, you would import from your component library
// import { Badge } from 'reacui';

export default function BadgePage() {
  // Table of Contents items
  const tocItems = [
    { id: 'overview', title: 'Overview' },
    { id: 'installation', title: 'Installation' },
    { id: 'import', title: 'Import' },
    { id: 'variants', title: 'Badge Variants' },
    { id: 'sizes', title: 'Badge Sizes' },
    { id: 'api-reference', title: 'API Reference' }
  ];

  // Main example for the top showcase
  const mainExample = (
    <>
      <span className="inline-flex items-center justify-center font-medium rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300 text-sm px-2.5 py-0.5 mr-2">Primary</span>
      <span className="inline-flex items-center justify-center font-medium rounded-full bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-300 text-sm px-2.5 py-0.5 mr-2">Secondary</span>
      <span className="inline-flex items-center justify-center font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-sm px-2.5 py-0.5 mr-2">Success</span>
      <span className="inline-flex items-center justify-center font-medium rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 text-sm px-2.5 py-0.5 mr-2">Danger</span>
    </>
  );

  const mainCode = `<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="danger">Danger</Badge>`;

  return (
    <>
      <Banner />

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <h1 id="overview" className="text-4xl font-bold text-secondary-900 dark:text-white mb-3">Badge</h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8">
            A lightweight component for status indicators, counts, and labels
          </p>

          {/* Main Example with Tabs */}
          <div className="mb-12">
            <TabGroup example={mainExample} code={mainCode} />
          </div>

          {/* Installation Section */}
          <section id="installation" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Installation</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Badge component is part of the ReacUI library. Install the package to use it in your project.
            </p>
            <div className="bg-secondary-900 text-white p-4 rounded-md overflow-x-auto">
              <pre className="text-sm">
                <CodeBlock code="npm install reacui" language="bash" />
              </pre>
            </div>
          </section>

          {/* Import Section */}
          <section id="import" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Import</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Import the Badge component into your React component.
            </p>
            <div className="bg-secondary-900 text-white p-4 rounded-md overflow-x-auto">
              <pre className="text-sm">
                <CodeBlock code="import { Badge } from 'reacui';" language="javascript" />
              </pre>
            </div>
          </section>

          {/* Badge Variants Section */}
          <section id="variants" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Badge Variants</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              ReacUI badges come in several variants to accommodate different statuses and contexts.
            </p>

            <ComponentExample
              example={
                <>
                  <span className="inline-flex items-center justify-center font-medium rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300 text-sm px-2.5 py-0.5 mr-2">Primary</span>
                  <span className="inline-flex items-center justify-center font-medium rounded-full bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-300 text-sm px-2.5 py-0.5 mr-2">Secondary</span>
                  <span className="inline-flex items-center justify-center font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-sm px-2.5 py-0.5 mr-2">Success</span>
                  <span className="inline-flex items-center justify-center font-medium rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 text-sm px-2.5 py-0.5 mr-2">Danger</span>
                  <span className="inline-flex items-center justify-center font-medium rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 text-sm px-2.5 py-0.5 mr-2">Warning</span>
                  <span className="inline-flex items-center justify-center font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-sm px-2.5 py-0.5 mr-2">Info</span>
                </>
              }
              code={`<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="info">Info</Badge>`}
            />
          </section>

          {/* Badge Sizes Section */}
          <section id="sizes" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Badge Sizes</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Control the size of badges using the size prop.
            </p>

            <ComponentExample
              example={
                <>
                  <span className="inline-flex items-center justify-center font-medium rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300 text-xs px-2 py-0.5 mr-2">Small</span>
                  <span className="inline-flex items-center justify-center font-medium rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300 text-sm px-2.5 py-0.5 mr-2">Medium</span>
                  <span className="inline-flex items-center justify-center font-medium rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300 text-base px-3 py-1 mr-2">Large</span>
                </>
              }
              code={`<Badge variant="primary" size="sm">Small</Badge>
<Badge variant="primary" size="md">Medium</Badge>
<Badge variant="primary" size="lg">Large</Badge>`}
            />
          </section>

          {/* API Reference Section */}
          <section id="api-reference" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">API Reference</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The following props are available for the Badge component.
            </p>

            <div className="border border-secondary-200 dark:border-secondary-800 rounded-lg overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-secondary-50 dark:bg-secondary-800">
                  <tr>
                    <th className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Prop</th>
                    <th className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Type</th>
                    <th className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Default</th>
                    <th className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">children</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">ReactNode</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">-</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">The content of the badge.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">variant</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">'primary'</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                      The badge variant: 'primary', 'secondary', 'success', 'danger', 'warning', or 'info'.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">size</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">'md'</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                      The badge size: 'sm', 'md', or 'lg'.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">className</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">''</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                      Additional CSS classes to add to the badge.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Table of Contents */}
        <div className="w-64 hidden lg:block">
          <div className="sticky top-20">
            <TableOfContents items={tocItems} />
          </div>
        </div>
      </div>
    </>
  );
} 