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
// import { Input } from 'reacui';

export default function InputPage() {
  // Table of Contents items
  const tocItems = [
    { id: 'overview', title: 'Overview' },
    { id: 'installation', title: 'Installation' },
    { id: 'import', title: 'Import' },
    { id: 'basic-usage', title: 'Basic Usage' },
    { id: 'input-types', title: 'Input Types' },
    { id: 'states', title: 'Input States' },
    { id: 'with-labels', title: 'With Labels' },
    { id: 'api-reference', title: 'API Reference' }
  ];

  // Main example for the top showcase
  const mainExample = (
    <div className="w-full max-w-md mx-auto flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Enter your username"
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <input
        type="password"
        placeholder="Enter your password"
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );

  const mainCode = `<Input placeholder="Enter your username" />
<Input type="email" placeholder="Enter your email" />
<Input type="password" placeholder="Enter your password" />`;

  return (
    <>
      <Banner />

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <h1 id="overview" className="text-4xl font-bold text-secondary-900 dark:text-white mb-3">Input</h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8">
            A versatile input component for collecting user information
          </p>

          {/* Main Example with Tabs */}
          <div className="mb-12">
            <TabGroup example={mainExample} code={mainCode} />
          </div>

          {/* Installation Section */}
          <section id="installation" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Installation</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Input component is part of the ReacUI library. Install the package to use it in your project.
            </p>
            <CodeBlock code="npm install reacui" language="bash" />
          </section>

          {/* Import Section */}
          <section id="import" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Import</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Import the Input component into your React component.
            </p>
            <CodeBlock code="import { Input } from 'reacui';" language="javascript" />
          </section>

          {/* Basic Usage Section */}
          <section id="basic-usage" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Basic Usage</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Input component provides a styled input field with consistent styling.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto">
                  <input
                    type="text"
                    placeholder="Basic input example"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              }
              code={`<Input placeholder="Basic input example" />`}
            />
          </section>

          {/* Input Types Section */}
          <section id="input-types" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Input Types</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Change the type of input using the type prop.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto flex flex-col space-y-4">
                  <input
                    type="text"
                    placeholder="Text input"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Email input"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="password"
                    placeholder="Password input"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="number"
                    placeholder="Number input"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              }
              code={`<Input type="text" placeholder="Text input" />
<Input type="email" placeholder="Email input" />
<Input type="password" placeholder="Password input" />
<Input type="number" placeholder="Number input" />`}
            />
          </section>

          {/* Input States Section */}
          <section id="states" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Input States</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Inputs can be in different states such as disabled or with a default value.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto flex flex-col space-y-4">
                  <input
                    type="text"
                    placeholder="Default state"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="text"
                    value="With default value"
                    readOnly
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Disabled input"
                    disabled
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-100 text-gray-500"
                  />
                </div>
              }
              code={`<Input placeholder="Default state" />
<Input defaultValue="With default value" />
<Input placeholder="Disabled input" disabled />`}
            />
          </section>

          {/* With Labels Section */}
          <section id="with-labels" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">With Labels</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Combine inputs with labels for better accessibility and user experience.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto flex flex-col space-y-4">
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                    <input
                      id="username"
                      type="text"
                      placeholder="Enter your username"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <p className="mt-1 text-sm text-gray-500">We'll never share your email with anyone else.</p>
                  </div>
                </div>
              }
              code={`<div>
  <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
    Username
  </label>
  <Input id="username" placeholder="Enter your username" />
</div>

<div>
  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
    Email
  </label>
  <Input id="email" type="email" placeholder="Enter your email" />
  <p className="mt-1 text-sm text-gray-500">
    We'll never share your email with anyone else.
  </p>
</div>`}
            />
          </section>

          {/* API Reference Section */}
          <section id="api-reference" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">API Reference</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The following props are available for the Input component.
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
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">type</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">
                      string
                    </td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">'text'</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Type of the input (text, email, password, etc.)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">placeholder</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">
                      string
                    </td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">undefined</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Placeholder text for the input</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">disabled</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">boolean</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">false</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Whether the input is disabled</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">value</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">undefined</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Controlled value of the input</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">defaultValue</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">undefined</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Default value for uncontrolled input</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">onChange</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">function</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">undefined</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Function called when input value changes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-sm">className</td>
                    <td className="px-4 py-2 font-mono text-sm">string</td>
                    <td className="px-4 py-2 font-mono text-sm">''</td>
                    <td className="px-4 py-2">Additional CSS classes to apply to the input</td>
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