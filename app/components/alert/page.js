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
// import { Alert } from 'reacui';

export default function AlertPage() {
  // Table of Contents items
  const tocItems = [
    { id: 'overview', title: 'Overview' },
    { id: 'installation', title: 'Installation' },
    { id: 'import', title: 'Import' },
    { id: 'variants', title: 'Alert Variants' },
    { id: 'with-icons', title: 'Alerts with Icons' },
    { id: 'dismissible', title: 'Dismissible Alerts' },
    { id: 'api-reference', title: 'API Reference' }
  ];

  // Main example for the top showcase
  const mainExample = (
    <div className="space-y-4 w-full">
      <div className="flex items-start p-4 mb-4 rounded-lg bg-blue-50 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
        <svg className="w-5 h-5 mr-2 text-blue-700 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
        </svg>
        <div className="text-sm font-medium flex-grow">This is an info alert — check it out!</div>
      </div>
      
      <div className="flex items-start p-4 mb-4 rounded-lg bg-green-50 text-green-800 dark:bg-green-900/50 dark:text-green-300">
        <svg className="w-5 h-5 mr-2 text-green-700 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
        <div className="text-sm font-medium flex-grow">This is a success alert — check it out!</div>
      </div>
    </div>
  );

  const mainCode = `<Alert variant="info">This is an info alert — check it out!</Alert>
<Alert variant="success">This is a success alert — check it out!</Alert>`;

  return (
    <>
      <Banner />

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <h1 id="overview" className="text-4xl font-bold text-secondary-900 dark:text-white mb-3">Alert</h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8">
            Feedback and status message component with multiple variants and customization options
          </p>

          {/* Main Example with Tabs */}
          <div className="mb-12">
            <TabGroup example={mainExample} code={mainCode} />
          </div>

          {/* Installation Section */}
          <section id="installation" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Installation</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Alert component is part of the ReacUI library. Install the package to use it in your project.
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
              Import the Alert component into your React component.
            </p>
            <div className="bg-secondary-900 text-white p-4 rounded-md overflow-x-auto">
              <pre className="text-sm">
              <CodeBlock code="import { Alert } from 'reacui';" language="javascript" />
              </pre>
            </div>
          </section>

          {/* Alert Variants Section */}
          <section id="variants" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Alert Variants</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              ReacUI alerts come in several variants to accommodate different types of messages and contexts.
            </p>

            <ComponentExample
              example={
                <div className="space-y-4 w-full">
                  <div className="flex items-start p-4 mb-4 rounded-lg bg-blue-50 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                    <svg className="w-5 h-5 mr-2 text-blue-700 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                    </svg>
                    <div className="text-sm font-medium flex-grow">This is an info alert — check it out!</div>
                  </div>
                  
                  <div className="flex items-start p-4 mb-4 rounded-lg bg-green-50 text-green-800 dark:bg-green-900/50 dark:text-green-300">
                    <svg className="w-5 h-5 mr-2 text-green-700 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <div className="text-sm font-medium flex-grow">This is a success alert — check it out!</div>
                  </div>
                  
                  <div className="flex items-start p-4 mb-4 rounded-lg bg-yellow-50 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">
                    <svg className="w-5 h-5 mr-2 text-yellow-700 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                    </svg>
                    <div className="text-sm font-medium flex-grow">This is a warning alert — check it out!</div>
                  </div>
                  
                  <div className="flex items-start p-4 mb-4 rounded-lg bg-red-50 text-red-800 dark:bg-red-900/50 dark:text-red-300">
                    <svg className="w-5 h-5 mr-2 text-red-700 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                    </svg>
                    <div className="text-sm font-medium flex-grow">This is a danger alert — check it out!</div>
                  </div>
                </div>
              }
              code={`<Alert variant="info">This is an info alert — check it out!</Alert>
<Alert variant="success">This is a success alert — check it out!</Alert>
<Alert variant="warning">This is a warning alert — check it out!</Alert>
<Alert variant="danger">This is a danger alert — check it out!</Alert>`}
            />
          </section>

          {/* Alerts with Icons Section */}
          <section id="with-icons" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Alerts with Icons</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              You can customize alerts with custom icons or no icons at all.
            </p>

            <ComponentExample
              example={
                <div className="space-y-4 w-full">
                  <div className="flex items-start p-4 mb-4 rounded-lg bg-blue-50 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                    <div className="text-sm font-medium flex-grow">This is an alert with no icon</div>
                  </div>
                  
                  <div className="flex items-start p-4 mb-4 rounded-lg bg-green-50 text-green-800 dark:bg-green-900/50 dark:text-green-300">
                    <span className="mr-2">🔔</span>
                    <div className="text-sm font-medium flex-grow">This is an alert with a custom icon</div>
                  </div>
                </div>
              }
              code={`<Alert icon={null}>This is an alert with no icon</Alert>
<Alert icon={<BellIcon className="mr-2" />}>This is an alert with a custom icon</Alert>`}
            />
          </section>

          {/* Dismissible Alerts Section */}
          <section id="dismissible" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Dismissible Alerts</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Alerts can be made dismissible, allowing users to close them.
            </p>

            <ComponentExample
              example={
                <div className="space-y-4 w-full">
                  <div className="flex items-start p-4 mb-4 rounded-lg bg-blue-50 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                    <svg className="w-5 h-5 mr-2 text-blue-700 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                    </svg>
                    <div className="text-sm font-medium flex-grow">This is a dismissible alert</div>
                    <button 
                      type="button" 
                      className="ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex h-8 w-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-50 focus:ring-blue-600 dark:focus:ring-offset-blue-900 dark:focus:ring-blue-500"
                      aria-label="Close"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              }
              code={`<Alert 
  variant="info" 
  dismissible
  onDismiss={() => console.log('Alert dismissed')}
>
  This is a dismissible alert
</Alert>`}
            />
          </section>

          {/* API Reference Section */}
          <section id="api-reference" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">API Reference</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The following props are available for the Alert component.
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
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">variant</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">'info'</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                      Alert style variant: 'info', 'success', 'warning', or 'danger'
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">dismissible</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">boolean</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">false</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                      Determines if the alert can be dismissed
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">icon</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">ReactNode</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">-</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                      Custom icon to display. Set to null to hide icon completely.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">className</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">''</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                      Additional CSS classes to apply
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">onDismiss</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">function</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">-</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                      Callback function invoked when the alert is dismissed
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-secondary-200 dark:border-secondary-700 font-mono text-sm">children</td>
                    <td className="px-4 py-2 border-secondary-200 dark:border-secondary-700 font-mono text-sm">ReactNode</td>
                    <td className="px-4 py-2 border-secondary-200 dark:border-secondary-700 font-mono text-sm">-</td>
                    <td className="px-4 py-2 border-secondary-200 dark:border-secondary-700">
                      Content to display inside the alert
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Table of Contents - Right Side */}
        <div className="hidden lg:block w-64 relative">
          <div className="sticky top-16">
            <TableOfContents items={tocItems} />
          </div>
        </div>
      </div>
    </>
  );
} 