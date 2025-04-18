"use client";

import { useState } from 'react';
import Link from 'next/link';
import TabGroup from '../../../components/TabGroup';
import ComponentExample from '../../../components/ComponentExample';
import TableOfContents from '../../../components/TableOfContents';
import CodeBlock from '../../../components/CodeBlock';
import Banner from '../../../components/banner';
// Mock imports of the actual reacui components
// In a real implementation, you would import from your component library
// import { Card } from 'reacui';

export default function CardPage() {
  // Table of Contents items
  const tocItems = [
    { id: 'overview', title: 'Overview' },
    { id: 'installation', title: 'Installation' },
    { id: 'import', title: 'Import' },
    { id: 'basic-usage', title: 'Basic Usage' },
    { id: 'with-header-footer', title: 'With Header & Footer' },
    { id: 'with-title-description', title: 'With Title & Description' },
    { id: 'complete-example', title: 'Complete Example' },
    { id: 'api-reference', title: 'API Reference' }
  ];

  // Main example for the top showcase
  const mainExample = (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white dark:bg-secondary-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-4">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Card Title</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">This is a description of the card content.</p>
        </div>
        <div className="p-4">
          <p className="text-gray-900 dark:text-gray-100">This is the main content of the card. You can add any elements here.</p>
        </div>
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-end space-x-2">
            <button className="px-4 py-2 text-sm rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">Cancel</button>
            <button className="px-4 py-2 text-sm text-white bg-blue-600 dark:bg-blue-500 rounded-md">Save</button>
          </div>
        </div>
      </div>
    </div>
  );

  const mainCode = `<Card>
  <Card.Header>
    <Card.Title>Card Title</Card.Title>
    <Card.Description>This is a description of the card content.</Card.Description>
  </Card.Header>
  <Card.Content>
    <p>This is the main content of the card. You can add any elements here.</p>
  </Card.Content>
  <Card.Footer>
    <div className="flex justify-end space-x-2">
      <Button variant="outline">Cancel</Button>
      <Button variant="primary">Save</Button>
    </div>
  </Card.Footer>
</Card>`;

  return (
    <>
     
      <Banner />

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <h1 id="overview" className="text-4xl font-bold text-secondary-900 dark:text-white mb-3">Card</h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8">
            A versatile card component for displaying content in a contained format
          </p>

          {/* Main Example with Tabs */}
          <div className="mb-12">
            <TabGroup example={mainExample} code={mainCode} />
          </div>

          {/* Installation Section */}
          <section id="installation" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Installation</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Card component is part of the ReacUI library. Install the package to use it in your project.
            </p>
            <CodeBlock code="npm install reacui" language="bash" />
          </section>

          {/* Import Section */}
          <section id="import" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Import</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Import the Card component into your React component.
            </p>
            <CodeBlock code="import { Card } from 'reacui';" language="javascript" />
          </section>

          {/* Basic Usage Section */}
          <section id="basic-usage" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Basic Usage</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Card component provides a container for content with a consistent style.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto">
                  <div className="bg-white dark:bg-secondary-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-4">
                    <p className="text-gray-900 dark:text-gray-100">This is a basic card with simple content.</p>
                  </div>
                </div>
              }
              code={`<Card>
  <p>This is a basic card with simple content.</p>
</Card>`}
            />
          </section>

          {/* With Header & Footer Section */}
          <section id="with-header-footer" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">With Header & Footer</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Add structure to your card with a header and footer.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto">
                  <div className="bg-white dark:bg-secondary-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                      <p className="font-medium text-gray-900 dark:text-gray-100">Card Header</p>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-900 dark:text-gray-100">This is the main content of the card.</p>
                    </div>
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-gray-900 dark:text-gray-100">Card Footer</p>
                    </div>
                  </div>
                </div>
              }
              code={`<Card>
  <Card.Header>
    <p className="font-medium">Card Header</p>
  </Card.Header>
  <Card.Content>
    <p>This is the main content of the card.</p>
  </Card.Content>
  <Card.Footer>
    <p>Card Footer</p>
  </Card.Footer>
</Card>`}
            />
          </section>

          {/* With Title & Description Section */}
          <section id="with-title-description" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">With Title & Description</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Use Card.Title and Card.Description to add formatted text content.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto">
                  <div className="bg-white dark:bg-secondary-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Feature Highlight</h3>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Learn about this amazing feature that will improve your workflow.</p>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-900 dark:text-gray-100">This is the main content of the card.</p>
                    </div>
                  </div>
                </div>
              }
              code={`<Card>
  <Card.Header>
    <Card.Title>Feature Highlight</Card.Title>
    <Card.Description>
      Learn about this amazing feature that will improve your workflow.
    </Card.Description>
  </Card.Header>
  <Card.Content>
    <p>This is the main content of the card.</p>
  </Card.Content>
</Card>`}
            />
          </section>

          {/* Complete Example Section */}
          <section id="complete-example" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Complete Example</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              A full example showing all Card subcomponents working together.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto">
                  <div className="bg-white dark:bg-secondary-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Subscription Plan</h3>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Choose the right plan for your needs.</p>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-medium text-gray-900 dark:text-white">Pro Plan</span>
                        <span className="text-lg font-bold text-gray-900 dark:text-white">$29/mo</span>
                      </div>
                      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li>✓ Unlimited projects</li>
                        <li>✓ Advanced analytics</li>
                        <li>✓ Priority support</li>
                      </ul>
                    </div>
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                      <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        Upgrade Now
                      </button>
                    </div>
                  </div>
                </div>
              }
              code={`<Card>
  <Card.Header>
    <Card.Title>Subscription Plan</Card.Title>
    <Card.Description>Choose the right plan for your needs.</Card.Description>
  </Card.Header>
  <Card.Content>
    <div className="flex justify-between items-center mb-3">
      <span className="font-medium">Pro Plan</span>
      <span className="text-lg font-bold">$29/mo</span>
    </div>
    <ul className="space-y-1 text-sm">
      <li>✓ Unlimited projects</li>
      <li>✓ Advanced analytics</li>
      <li>✓ Priority support</li>
    </ul>
  </Card.Content>
  <Card.Footer>
    <Button variant="primary" className="w-full">
      Upgrade Now
    </Button>
  </Card.Footer>
</Card>`}
            />
          </section>

          {/* API Reference Section */}
          <section id="api-reference" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">API Reference</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The following props and subcomponents are available for the Card component.
            </p>

            <div className="border border-secondary-200 dark:border-secondary-800 rounded-lg overflow-hidden mb-8">
              <table className="w-full text-left">
                <thead className="bg-secondary-50 dark:bg-secondary-800">
                  <tr>
                    <th className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Component</th>
                    <th className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Description</th>
                    <th className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Props</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-secondary-900">
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm text-gray-900 dark:text-white">Card</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 text-gray-700 dark:text-gray-300">
                      Main container component
                    </td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm text-gray-700 dark:text-gray-400">
                      children, className
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm text-gray-900 dark:text-white">Card.Header</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 text-gray-700 dark:text-gray-300">
                      Container for the card header content
                    </td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm text-gray-700 dark:text-gray-400">
                      children, className
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm text-gray-900 dark:text-white">Card.Title</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 text-gray-700 dark:text-gray-300">
                      Styled heading for the card
                    </td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm text-gray-700 dark:text-gray-400">
                      children, className
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm text-gray-900 dark:text-white">Card.Description</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 text-gray-700 dark:text-gray-300">
                      Styled description text for the card
                    </td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm text-gray-700 dark:text-gray-400">
                      children, className
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm text-gray-900 dark:text-white">Card.Content</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 text-gray-700 dark:text-gray-300">
                      Container for the main card content
                    </td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm text-gray-700 dark:text-gray-400">
                      children, className
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-sm text-gray-900 dark:text-white">Card.Footer</td>
                    <td className="px-4 py-2 text-gray-700 dark:text-gray-300">
                      Container for the card footer content
                    </td>
                    <td className="px-4 py-2 font-mono text-sm text-gray-700 dark:text-gray-400">
                      children, className
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Table of Contents Sidebar */}
        <div className="w-64 hidden lg:block">
          <div className="sticky top-24">
            <TableOfContents items={tocItems} />
          </div>
        </div>
      </div>
    </>
  );
} 