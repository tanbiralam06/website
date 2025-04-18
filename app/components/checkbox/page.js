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
// import { Checkbox } from 'reacui';

export default function CheckboxPage() {
  // Table of Contents items
  const tocItems = [
    { id: 'overview', title: 'Overview' },
    { id: 'installation', title: 'Installation' },
    { id: 'import', title: 'Import' },
    { id: 'basic-usage', title: 'Basic Usage' },
    { id: 'with-labels', title: 'With Labels' },
    { id: 'states', title: 'Checkbox States' },
    { id: 'in-forms', title: 'In Forms' },
    { id: 'api-reference', title: 'API Reference' }
  ];

  // Main example for the top showcase
  const mainExample = (
    <div className="w-full max-w-md mx-auto flex flex-col space-y-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          id="example1"
          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="example1" className="ml-2 block text-sm text-gray-900">
          Default checkbox
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="example2"
          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          defaultChecked
        />
        <label htmlFor="example2" className="ml-2 block text-sm text-gray-900">
          Checked checkbox
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="example3"
          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          disabled
        />
        <label htmlFor="example3" className="ml-2 block text-sm text-gray-500">
          Disabled checkbox
        </label>
      </div>
    </div>
  );

  const mainCode = `<div className="flex items-center">
  <Checkbox id="example1" />
  <label htmlFor="example1" className="ml-2 block text-sm text-gray-900">
    Default checkbox
  </label>
</div>

<div className="flex items-center">
  <Checkbox id="example2" defaultChecked />
  <label htmlFor="example2" className="ml-2 block text-sm text-gray-900">
    Checked checkbox
  </label>
</div>

<div className="flex items-center">
  <Checkbox id="example3" disabled />
  <label htmlFor="example3" className="ml-2 block text-sm text-gray-500">
    Disabled checkbox
  </label>
</div>`;

  return (
    <>
      <Banner />
       
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <h1 id="overview" className="text-4xl font-bold text-secondary-900 dark:text-white mb-3">Checkbox</h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8">
            A checkbox component for selecting multiple options from a set
          </p>

          {/* Main Example with Tabs */}
          <div className="mb-12">
            <TabGroup example={mainExample} code={mainCode} />
          </div>

          {/* Installation Section */}
          <section id="installation" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Installation</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Checkbox component is part of the ReacUI library. Install the package to use it in your project.
            </p>
            <CodeBlock code="npm install reacui" language="bash" />
          </section>

          {/* Import Section */}
          <section id="import" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Import</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Import the Checkbox component into your React component.
            </p>
            <CodeBlock code="import { Checkbox } from 'reacui';" language="javascript" />
          </section>

          {/* Basic Usage Section */}
          <section id="basic-usage" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Basic Usage</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Checkbox component provides a styled checkbox input.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto">
                  <input
                    type="checkbox"
                    id="basic-checkbox"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </div>
              }
              code={`<Checkbox id="basic-checkbox" />`}
            />
          </section>

          {/* With Labels Section */}
          <section id="with-labels" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">With Labels</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Combine checkboxes with labels for better accessibility and user experience.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-900 dark:text-gray-100">
                      I agree to the terms and conditions
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-900 dark:text-gray-100">
                      Subscribe to our newsletter
                    </label>
                  </div>
                </div>
              }
              code={`<div className="flex items-center">
  <Checkbox id="terms" />
  <label htmlFor="terms" className="ml-2 block text-sm text-gray-900 dark:text-gray-100">
    I agree to the terms and conditions
  </label>
</div>

<div className="flex items-center">
  <Checkbox id="newsletter" />
  <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-900 dark:text-gray-100">
    Subscribe to our newsletter
  </label>
</div>`}
            />
          </section>

          {/* Checkbox States Section */}
          <section id="states" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Checkbox States</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Checkboxes can be in different states such as checked or disabled.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="unchecked"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="unchecked" className="ml-2 block text-sm text-gray-900 dark:text-gray-100">
                      Unchecked
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="checked"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      defaultChecked
                    />
                    <label htmlFor="checked" className="ml-2 block text-sm text-gray-900 dark:text-gray-100">
                      Checked
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="disabled-unchecked"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 opacity-50 cursor-not-allowed"
                      disabled
                    />
                    <label htmlFor="disabled-unchecked" className="ml-2 block text-sm text-gray-500 dark:text-gray-400">
                      Disabled Unchecked
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="disabled-checked"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 opacity-50 cursor-not-allowed"
                      defaultChecked
                      disabled
                    />
                    <label htmlFor="disabled-checked" className="ml-2 block text-sm text-gray-500 dark:text-gray-400">
                      Disabled Checked
                    </label>
                  </div>
                </div>
              }
              code={`<div className="flex items-center">
  <Checkbox id="unchecked" />
  <label htmlFor="unchecked" className="ml-2 block text-sm text-gray-900 dark:text-gray-100">
    Unchecked
  </label>
</div>

<div className="flex items-center">
  <Checkbox id="checked" defaultChecked />
  <label htmlFor="checked" className="ml-2 block text-sm text-gray-900 dark:text-gray-100">
    Checked
  </label>
</div>

<div className="flex items-center">
  <Checkbox id="disabled-unchecked" disabled />
  <label htmlFor="disabled-unchecked" className="ml-2 block text-sm text-gray-500 dark:text-gray-400">
    Disabled Unchecked
  </label>
</div>

<div className="flex items-center">
  <Checkbox id="disabled-checked" defaultChecked disabled />
  <label htmlFor="disabled-checked" className="ml-2 block text-sm text-gray-500 dark:text-gray-400">
    Disabled Checked
  </label>
</div>`}
            />
          </section>

          {/* In Forms Section */}
          <section id="in-forms" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">In Forms</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Use checkboxes in forms to collect multiple selections.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto p-6 bg-white dark:bg-secondary-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Notification Preferences</h3>
                  <form className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="email-updates"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          defaultChecked
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="email-updates" className="font-medium text-gray-700 dark:text-gray-200">Email updates</label>
                        <p className="text-gray-500 dark:text-gray-400">Get notified when new features are released</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="marketing"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="marketing" className="font-medium text-gray-700 dark:text-gray-200">Marketing emails</label>
                        <p className="text-gray-500 dark:text-gray-400">Receive product tips and promotional offers</p>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <button type="button" className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">
                        Save preferences
                      </button>
                    </div>
                  </form>
                </div>
              }
              code={`<div className="p-6 bg-white dark:bg-secondary-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Notification Preferences</h3>
  <form className="space-y-4">
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <Checkbox id="email-updates" defaultChecked />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor="email-updates" className="font-medium text-gray-700 dark:text-gray-200">
          Email updates
        </label>
        <p className="text-gray-500 dark:text-gray-400">Get notified when new features are released</p>
      </div>
    </div>
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <Checkbox id="marketing" />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor="marketing" className="font-medium text-gray-700 dark:text-gray-200">
          Marketing emails
        </label>
        <p className="text-gray-500 dark:text-gray-400">Receive product tips and promotional offers</p>
      </div>
    </div>
    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
      <Button variant="primary">Save preferences</Button>
    </div>
  </form>
</div>`}
            />
          </section>

          {/* API Reference Section */}
          <section id="api-reference" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">API Reference</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The following props are available for the Checkbox component.
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
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">id</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">
                      string
                    </td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">undefined</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">ID for the checkbox input, useful for linking with labels</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">checked</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">
                      boolean
                    </td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">undefined</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Controlled checked state of the checkbox</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">defaultChecked</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">boolean</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">false</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Initial checked state for uncontrolled checkbox</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">disabled</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">boolean</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">false</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Whether the checkbox is disabled</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">onChange</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">function</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">undefined</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Function called when checkbox state changes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-sm">className</td>
                    <td className="px-4 py-2 font-mono text-sm">string</td>
                    <td className="px-4 py-2 font-mono text-sm">''</td>
                    <td className="px-4 py-2">Additional CSS classes to apply to the checkbox</td>
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