"use client";

import { useState } from 'react';
import Link from 'next/link';
import TabGroup from '../../../components/TabGroup';
import ComponentExample from '../../../components/ComponentExample';
import TableOfContents from '../../../components/TableOfContents';
import Banner from '../../../components/banner';
// Mock imports of the actual reacui components
// In a real implementation, you would import from your component library
// import { Toast } from 'reacui';

export default function ToastPage() {
  // Table of Contents items
  const tocItems = [
    { id: 'overview', title: 'Overview' },
    { id: 'installation', title: 'Installation' },
    { id: 'import', title: 'Import' },
    { id: 'variants', title: 'Toast Variants' },
    { id: 'positions', title: 'Toast Positions' },
    { id: 'custom-duration', title: 'Custom Duration' },
    { id: 'with-actions', title: 'With Actions' },
    { id: 'api-reference', title: 'API Reference' }
  ];

  // Main example for the top showcase
  const mainExample = (
    <div className="space-y-4 w-full relative h-56">
      <div className="flex items-center w-full max-w-xs p-4 rounded-lg shadow-lg text-sm font-medium bg-blue-50 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
        <svg className="w-5 h-5 mr-3 text-blue-700 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
        </svg>
        <div className="flex-grow">
          <div className="font-medium">Information toast</div>
          <div className="mt-1 text-sm opacity-90">This is additional information</div>
        </div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex h-8 w-8 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </button>
      </div>
    </div>
  );

  const mainCode = `<Toast
  message="Information toast"
  description="This is additional information"
  variant="info"
  position="top-right"
  duration={5000}
  dismissible={true}
  onDismiss={() => console.log('Toast dismissed')}
/>`;

  return (
    <>
      <Banner />

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <h1 id="overview" className="text-4xl font-bold text-secondary-900 dark:text-white mb-3">Toast</h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8">
            Notifications that appear temporarily to provide feedback to users
          </p>

          {/* Main Example with Tabs */}
          <div className="mb-12">
            <TabGroup example={mainExample} code={mainCode} />
          </div>

          {/* Installation Section */}
          <section id="installation" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Installation</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Toast component is part of the ReacUI library. Install the package to use it in your project.
            </p>
            <div className="bg-secondary-900 text-white p-4 rounded-md overflow-x-auto">
              <pre className="text-sm">
                <code>npm install reacui</code>
              </pre>
            </div>
          </section>

          {/* Import Section */}
          <section id="import" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Import</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Import the Toast component into your React component.
            </p>
            <div className="bg-secondary-900 text-white p-4 rounded-md overflow-x-auto">
              <pre className="text-sm">
                <code>import {'{ Toast }'} from 'reacui';</code>
              </pre>
            </div>
          </section>

          {/* Toast Variants Section */}
          <section id="variants" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Toast Variants</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              ReacUI toasts come in several variants to accommodate different types of notifications.
            </p>

            <ComponentExample
              example={
                <div className="space-y-4 w-full">
                  <div className="flex items-center w-full max-w-xs p-4 rounded-lg shadow-lg text-sm font-medium bg-blue-50 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                    <svg className="w-5 h-5 mr-3 text-blue-700 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                    </svg>
                    <div className="flex-grow">
                      <div className="font-medium">Information toast</div>
                    </div>
                  </div>

                  <div className="flex items-center w-full max-w-xs p-4 rounded-lg shadow-lg text-sm font-medium bg-green-50 text-green-800 dark:bg-green-900/50 dark:text-green-300">
                    <svg className="w-5 h-5 mr-3 text-green-700 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <div className="flex-grow">
                      <div className="font-medium">Success toast</div>
                    </div>
                  </div>

                  <div className="flex items-center w-full max-w-xs p-4 rounded-lg shadow-lg text-sm font-medium bg-yellow-50 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300">
                    <svg className="w-5 h-5 mr-3 text-yellow-700 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                    </svg>
                    <div className="flex-grow">
                      <div className="font-medium">Warning toast</div>
                    </div>
                  </div>

                  <div className="flex items-center w-full max-w-xs p-4 rounded-lg shadow-lg text-sm font-medium bg-red-50 text-red-800 dark:bg-red-900/50 dark:text-red-300">
                    <svg className="w-5 h-5 mr-3 text-red-700 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                    </svg>
                    <div className="flex-grow">
                      <div className="font-medium">Danger toast</div>
                    </div>
                  </div>
                </div>
              }
              code={`<Toast message="Information toast" variant="info" />
<Toast message="Success toast" variant="success" />
<Toast message="Warning toast" variant="warning" />
<Toast message="Danger toast" variant="danger" />`}
            />
          </section>

          {/* Toast Positions Section */}
          <section id="positions" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Toast Positions</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Toasts can be positioned in different parts of the screen.
            </p>

            <ComponentExample
              example={
                <div className="space-y-4 w-full">
                  <div className="flex items-center w-full max-w-xs p-4 rounded-lg shadow-lg text-sm font-medium bg-blue-50 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                    <svg className="w-5 h-5 mr-3 text-blue-700 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                    </svg>
                    <div className="flex-grow">
                      <div className="font-medium">Top Right (Default)</div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center w-full max-w-xs p-4 rounded-lg shadow-lg text-sm font-medium bg-blue-50 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                    <svg className="w-5 h-5 mr-3 text-blue-700 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                    </svg>
                    <div className="flex-grow">
                      <div className="font-medium">Bottom Left</div>
                    </div>
                  </div>
                </div>
              }
              code={`<Toast 
  message="Top Right (Default)" 
  position="top-right" 
/>

<Toast 
  message="Bottom Left" 
  position="bottom-left" 
/>`}
            />
          </section>

          {/* Custom Duration Section */}
          <section id="custom-duration" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Custom Duration</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              You can customize how long a toast remains visible before auto-dismissing.
            </p>

            <ComponentExample
              example={
                <div className="space-y-4 w-full">
                  <div className="flex items-center w-full max-w-xs p-4 rounded-lg shadow-lg text-sm font-medium bg-blue-50 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                    <svg className="w-5 h-5 mr-3 text-blue-700 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                    </svg>
                    <div className="flex-grow">
                      <div className="font-medium">Short duration (2 seconds)</div>
                    </div>
                  </div>

                  <div className="flex items-center w-full max-w-xs p-4 rounded-lg shadow-lg text-sm font-medium bg-green-50 text-green-800 dark:bg-green-900/50 dark:text-green-300">
                    <svg className="w-5 h-5 mr-3 text-green-700 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <div className="flex-grow">
                      <div className="font-medium">Persistent toast (never auto-dismiss)</div>
                    </div>
                  </div>
                </div>
              }
              code={`<Toast 
  message="Short duration (2 seconds)" 
  duration={2000} 
/>

<Toast 
  message="Persistent toast (never auto-dismiss)" 
  duration={0} 
/>`}
            />
          </section>

          {/* With Actions Section */}
          <section id="with-actions" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">With Actions</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Toasts can include action buttons for additional functionality.
            </p>

            <ComponentExample
              example={
                <div className="space-y-4 w-full">
                  <div className="flex items-center w-full max-w-xs p-4 rounded-lg shadow-lg text-sm font-medium bg-blue-50 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                    <svg className="w-5 h-5 mr-3 text-blue-700 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                    </svg>
                    <div className="flex-grow">
                      <div className="font-medium">File uploaded successfully</div>
                    </div>
                    <button className="px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 mr-2">
                      View
                    </button>
                    <button
                      type="button"
                      className="ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex h-8 w-8 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
                      aria-label="Close"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              }
              code={`<Toast 
  message="File uploaded successfully" 
  variant="info"
  action={
    <button 
      className="px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 mr-2"
      onClick={() => console.log('View file')}
    >
      View
    </button>
  }
/>`}
            />
          </section>

          {/* API Reference Section */}
          <section id="api-reference" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">API Reference</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The following props are available for the Toast component.
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
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">message</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">-</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                      Primary message to display in the toast
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">description</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">''</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                      Additional description text
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">variant</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">'info'</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                      Toast style variant: 'info', 'success', 'warning', or 'danger'
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">position</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">'top-right'</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                      Position on the screen: 'top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">duration</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">number</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">5000</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                      Time in milliseconds before auto-dismissing. Set to 0 to disable auto-dismiss.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">dismissible</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">boolean</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">true</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                      Whether the toast can be manually dismissed
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
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">action</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">ReactNode</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">null</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                      Action button or content to display in the toast
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
                    <td className="px-4 py-2 border-secondary-200 dark:border-secondary-700 font-mono text-sm">onDismiss</td>
                    <td className="px-4 py-2 border-secondary-200 dark:border-secondary-700 font-mono text-sm">function</td>
                    <td className="px-4 py-2 border-secondary-200 dark:border-secondary-700 font-mono text-sm">-</td>
                    <td className="px-4 py-2 border-secondary-200 dark:border-secondary-700">
                      Callback function invoked when the toast is dismissed
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