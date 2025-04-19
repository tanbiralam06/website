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
// import { Button } from 'reacui';

export default function ButtonPage() {
  // Table of Contents items
  const tocItems = [
    { id: 'overview', title: 'Overview' },
    { id: 'installation', title: 'Installation' },
    { id: 'import', title: 'Import' },
    { id: 'variants', title: 'Button Variants' },
    { id: 'sizes', title: 'Button Sizes' },
    { id: 'states', title: 'Button States' },
    { id: 'with-icons', title: 'Button with Icons' },
    { id: 'api-reference', title: 'API Reference' }
  ];

  // Main example for the top showcase
  const mainExample = (
    <>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-outline">Outline</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-danger">Danger</button>
    </>
  );

  const mainCode = `<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-outline">Outline</button>
<button className="btn btn-ghost">Ghost</button>
<button className="btn btn-danger">Danger</button>`;

  return (
    <>
      <Banner />

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <h1 id="overview" className="text-4xl font-bold text-secondary-900 dark:text-white mb-3">Button</h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8">
            A versatile button component with multiple variants and sizes
          </p>

          {/* Main Example with Tabs */}
          <div className="mb-12">
            <TabGroup example={mainExample} code={mainCode} />
          </div>

          {/* Installation Section */}
          <section id="installation" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Installation</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Button component is part of the ReacUI library. Install the package to use it in your project.
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
              Import the Button component into your React component.
            </p>
            <div className="bg-secondary-900 text-white p-4 rounded-md overflow-x-auto">
              <pre className="text-sm">
                <CodeBlock code="import { Button } from 'reacui';" language="javascript" />
              </pre>
            </div>
          </section>

          {/* Button Variants Section */}
          <section id="variants" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Button Variants</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              ReacUI buttons come in several variants to accommodate different design needs and contexts.
            </p>

            <ComponentExample
              example={
                <>
                  <button className="btn btn-primary">Primary</button>
                  <button className="btn btn-secondary">Secondary</button>
                  <button className="btn btn-outline">Outline</button>
                  <button className="btn btn-ghost">Ghost</button>
                  <button className="btn btn-danger">Danger</button>
                </>
              }
              code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>`}
            />
          </section>

          {/* Button Sizes Section */}
          <section id="sizes" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Button Sizes</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Control the size of buttons using the size prop.
            </p>

            <ComponentExample
              example={
                <>
                  <button className="btn btn-primary btn-sm">Small</button>
                  <button className="btn btn-primary">Default</button>
                  <button className="btn btn-primary btn-lg">Large</button>
                </>
              }
              code={`<Button variant="primary" size="sm">Small</Button>
<Button variant="primary" size="md">Default</Button>
<Button variant="primary" size="lg">Large</Button>`}
            />
          </section>

          {/* Button States Section */}
          <section id="states" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Button States</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Buttons can be in different states such as disabled or loading.
            </p>

            <ComponentExample
              example={
                <>
                  <button className="btn btn-primary">Default</button>
                  <button className="btn btn-primary" disabled>Disabled</button>
                  <button className="btn btn-primary loading">Loading</button>
                </>
              }
              code={`<Button variant="primary">Default</Button>
<Button variant="primary" disabled>Disabled</Button>
<Button variant="primary" loading>Loading</Button>`}
            />
          </section>

          {/* Button With Icons Section */}
          <section id="with-icons" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Button with Icons</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Combine icons with text to create more informative buttons.
            </p>

            <ComponentExample
              example={
                <>
                  <button className="btn btn-primary">
                    <span className="mr-2">►</span> Play
                  </button>
                  <button className="btn btn-outline">
                    <span className="mr-2">↓</span> Download
                  </button>
                  <button className="btn btn-secondary">
                    Send <span className="ml-2">→</span>
                  </button>
                </>
              }
              code={`<Button variant="primary">
  <PlayIcon className="mr-2" /> Play
</Button>
<Button variant="outline">
  <DownloadIcon className="mr-2" /> Download
</Button>
<Button variant="secondary">
  Send <ArrowRightIcon className="ml-2" />
</Button>`}
            />
          </section>

          {/* API Reference Section */}
          <section id="api-reference" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">API Reference</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The following props are available for the Button component.
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
                <tbody className="bg-white dark:bg-secondary-900">
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">variant</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">
                      'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
                    </td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">'primary'</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">The visual style of the button</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">size</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">
                      'sm' | 'md' | 'lg'
                    </td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">'md'</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">The size of the button</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">disabled</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">boolean</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">false</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Whether the button is disabled</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">loading</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">boolean</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">false</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Whether to show a loading spinner</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">onClick</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">function</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">undefined</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Function called when the button is clicked</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-sm">children</td>
                    <td className="px-4 py-2 font-mono text-sm">React.ReactNode</td>
                    <td className="px-4 py-2 font-mono text-sm">undefined</td>
                    <td className="px-4 py-2">The content of the button</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Right sidebar - Table of contents */}
        <div className="hidden lg:block w-64 shrink-0">
          <TableOfContents items={tocItems} />
        </div>
      </div>
    </>
  );
} 