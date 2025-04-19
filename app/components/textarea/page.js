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
// import { Textarea } from 'reacui';

export default function TextareaPage() {
  // Table of Contents items
  const tocItems = [
    { id: 'overview', title: 'Overview' },
    { id: 'installation', title: 'Installation' },
    { id: 'import', title: 'Import' },
    { id: 'basic-usage', title: 'Basic Usage' },
    { id: 'sizes', title: 'Textarea Sizes' },
    { id: 'states', title: 'Textarea States' },
    { id: 'with-character-count', title: 'With Character Count' },
    { id: 'api-reference', title: 'API Reference' }
  ];

  // Main example for the top showcase
  const mainExample = (
    <div className="w-full max-w-md mx-auto">
      <textarea
        className="block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm resize-none py-2 px-3 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        placeholder="Enter your message here..."
        rows={4}
      ></textarea>
    </div>
  );

  const mainCode = `<Textarea
  placeholder="Enter your message here..."
  rows={4}
/>`;

  return (
    <>
      <Banner />

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <h1 id="overview" className="text-4xl font-bold text-secondary-900 dark:text-white mb-3">Textarea</h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8">
            A multi-line text input component for capturing longer form text
          </p>

          {/* Main Example with Tabs */}
          <div className="mb-12">
            <TabGroup example={mainExample} code={mainCode} />
          </div>

          {/* Installation Section */}
          <section id="installation" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Installation</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Textarea component is part of the ReacUI library. Install the package to use it in your project.
            </p>
            <CodeBlock code="npm install reacui" language="bash" />
          </section>

          {/* Import Section */}
          <section id="import" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Import</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Import the Textarea component into your React component.
            </p>
            <CodeBlock code="import { Textarea } from 'reacui';" language="javascript" />
          </section>

          {/* Basic Usage Section */}
          <section id="basic-usage" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Basic Usage</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Textarea component provides a styled multi-line text input.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto">
                  <label htmlFor="basic-textarea" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your message
                  </label>
                  <textarea
                    id="basic-textarea"
                    className="block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm resize-none py-2 px-3 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    placeholder="Type your message here..."
                    rows={3}
                  ></textarea>
                </div>
              }
              code={`<label htmlFor="basic-textarea" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
  Your message
</label>
<Textarea
  id="basic-textarea"
  placeholder="Type your message here..."
  rows={3}
/>`}
            />
          </section>

          {/* Textarea Sizes Section */}
          <section id="sizes" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Textarea Sizes</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Control the size of the textarea by adjusting the number of rows.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto space-y-4">
                  <div>
                    <label htmlFor="small-textarea" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Small (2 rows)
                    </label>
                    <textarea
                      id="small-textarea"
                      className="block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm resize-none py-2 px-3 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                      rows={2}
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="medium-textarea" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Medium (4 rows)
                    </label>
                    <textarea
                      id="medium-textarea"
                      className="block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm resize-none py-2 px-3 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                      rows={4}
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="large-textarea" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Large (6 rows)
                    </label>
                    <textarea
                      id="large-textarea"
                      className="block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm resize-none py-2 px-3 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                      rows={6}
                    ></textarea>
                  </div>
                </div>
              }
              code={`{/* Small */}
<label htmlFor="small-textarea" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
  Small (2 rows)
</label>
<Textarea id="small-textarea" rows={2} />

{/* Medium */}
<label htmlFor="medium-textarea" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
  Medium (4 rows)
</label>
<Textarea id="medium-textarea" rows={4} />

{/* Large */}
<label htmlFor="large-textarea" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
  Large (6 rows)
</label>
<Textarea id="large-textarea" rows={6} />`}
            />
          </section>

          {/* Textarea States Section */}
          <section id="states" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Textarea States</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Textareas can be in different states such as default, disabled, or with validation states.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto space-y-4">
                  <div>
                    <label htmlFor="default-state" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Default
                    </label>
                    <textarea
                      id="default-state"
                      className="block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm resize-none py-2 px-3 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                      placeholder="Type here..."
                      rows={3}
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="disabled-state" className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                      Disabled
                    </label>
                    <textarea
                      id="disabled-state"
                      className="block w-full rounded-md border border-gray-300 bg-gray-100 py-2 px-3 shadow-sm text-gray-500 sm:text-sm resize-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400"
                      placeholder="This textarea is disabled"
                      rows={3}
                      disabled
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="error-state" className="block text-sm font-medium text-red-700 dark:text-red-400 mb-1">
                      Error
                    </label>
                    <textarea
                      id="error-state"
                      className="block w-full rounded-md border border-red-500 focus:border-red-500 focus:ring-red-500 sm:text-sm resize-none py-2 px-3 dark:bg-gray-800 dark:text-white"
                      placeholder="There is an error"
                      rows={3}
                    ></textarea>
                    <p className="mt-1 text-sm text-red-600">This field is required</p>
                  </div>
                </div>
              }
              code={`{/* Default */}
<label htmlFor="default-state" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
  Default
</label>
<Textarea
  id="default-state"
  placeholder="Type here..."
  rows={3}
/>

{/* Disabled */}
<label htmlFor="disabled-state" className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
  Disabled
</label>
<Textarea
  id="disabled-state"
  placeholder="This textarea is disabled"
  rows={3}
  disabled
/>

{/* Error */}
<label htmlFor="error-state" className="block text-sm font-medium text-red-700 dark:text-red-400 mb-1">
  Error
</label>
<Textarea
  id="error-state"
  placeholder="There is an error"
  rows={3}
  state="error"
/>
<p className="mt-1 text-sm text-red-600">This field is required</p>`}
            />
          </section>

          {/* With Character Count Section */}
          <section id="with-character-count" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">With Character Count</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Add a character counter to help users stay within character limits.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto">
                  <label htmlFor="counter-textarea" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your bio (max 200 characters)
                  </label>
                  <div className="relative">
                    <textarea
                      id="counter-textarea"
                      className="block w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm resize-none py-2 px-3 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                      placeholder="Tell us about yourself..."
                      rows={4}
                      maxLength={200}
                    ></textarea>
                    <div className="absolute bottom-2 right-2 text-xs text-gray-500 dark:text-gray-400">
                      <span className="font-medium">0</span> / 200
                    </div>
                  </div>
                </div>
              }
              code={`<label htmlFor="counter-textarea" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
  Your bio (max 200 characters)
</label>
<Textarea
  id="counter-textarea"
  placeholder="Tell us about yourself..."
  rows={4}
  maxLength={200}
  showCount
/>`}
            />
          </section>

          {/* API Reference Section */}
          <section id="api-reference" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">API Reference</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The following props are available for the Textarea component.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Prop
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Default
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      id
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      string
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      -
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      The id attribute of the textarea element
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      name
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      string
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      -
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      The name attribute of the textarea element
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      rows
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      3
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      Number of rows in the textarea
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      placeholder
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      string
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      -
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      Placeholder text displayed when the textarea is empty
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      value
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      string
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      -
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      The controlled value of the textarea
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      defaultValue
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      string
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      -
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      The initial value of the textarea
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      disabled
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      boolean
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      false
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      Whether the textarea is disabled
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      state
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      enum
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      'default'
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      The validation state: 'default', 'valid', or 'error'
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      maxLength
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      -
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      Maximum number of characters allowed
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      showCount
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      boolean
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      false
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      Whether to show the character count when maxLength is set
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      onChange
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      function
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      -
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      Callback function triggered when the textarea value changes
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Right Sidebar - Table of Contents */}
        <div className="w-64 hidden xl:block">
          <div className="sticky top-24">
            <TableOfContents items={tocItems} />
          </div>
        </div>
      </div>
    </>
  );
}