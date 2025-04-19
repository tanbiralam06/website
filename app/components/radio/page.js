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
// import { Radio } from 'reacui';

export default function RadioPage() {
  // Table of Contents items
  const tocItems = [
    { id: 'overview', title: 'Overview' },
    { id: 'installation', title: 'Installation' },
    { id: 'import', title: 'Import' },
    { id: 'basic-usage', title: 'Basic Usage' },
    { id: 'radio-group', title: 'Radio Group' },
    { id: 'states', title: 'Radio States' },
    { id: 'in-forms', title: 'In Forms' },
    { id: 'api-reference', title: 'API Reference' }
  ];

  // Main example for the top showcase
  const mainExample = (
    <div className="w-full max-w-md mx-auto flex flex-col space-y-4">
      <div className="flex items-center">
        <input
          type="radio"
          id="option1"
          name="radio-group"
          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:border-gray-600"
        />
        <label htmlFor="option1" className="ml-2 block text-sm text-gray-900 dark:text-white">
          Option 1
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          id="option2"
          name="radio-group"
          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:border-gray-600"
          defaultChecked
        />
        <label htmlFor="option2" className="ml-2 block text-sm text-gray-900 dark:text-white">
          Option 2
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          id="option3"
          name="radio-group"
          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:border-gray-600"
          disabled
        />
        <label htmlFor="option3" className="ml-2 block text-sm text-gray-500 dark:text-gray-400">
          Disabled option
        </label>
      </div>
    </div>
  );

  const mainCode = `<div className="flex items-center">
  <Radio id="option1" name="radio-group" />
  <label htmlFor="option1" className="ml-2 block text-sm text-gray-900 dark:text-white">
    Option 1
  </label>
</div>

<div className="flex items-center">
  <Radio id="option2" name="radio-group" defaultChecked />
  <label htmlFor="option2" className="ml-2 block text-sm text-gray-900 dark:text-white">
    Option 2
  </label>
</div>

<div className="flex items-center">
  <Radio id="option3" name="radio-group" disabled />
  <label htmlFor="option3" className="ml-2 block text-sm text-gray-500 dark:text-gray-400">
    Disabled option
  </label>
</div>`;

  return (
    <>
      <Banner />

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <h1 id="overview" className="text-4xl font-bold text-secondary-900 dark:text-white mb-3">Radio</h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8">
            A radio button component for selecting a single option from a set
          </p>

          {/* Main Example with Tabs */}
          <div className="mb-12">
            <TabGroup example={mainExample} code={mainCode} />
          </div>

          {/* Installation Section */}
          <section id="installation" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Installation</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Radio component is part of the ReacUI library. Install the package to use it in your project.
            </p>
            <CodeBlock code="npm install reacui" language="bash" />
          </section>

          {/* Import Section */}
          <section id="import" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Import</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Import the Radio component into your React component.
            </p>
            <CodeBlock code="import { Radio } from 'reacui';" language="javascript" />
          </section>

          {/* Basic Usage Section */}
          <section id="basic-usage" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Basic Usage</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Radio component provides a styled radio button input.
            </p>

            <ComponentExample
              example={
                <div className="max-w-md mx-auto">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        id="radio-option-1"
                        name="radio-group-basic"
                        type="radio"
                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:border-gray-600"
                        defaultChecked
                      />
                      <label htmlFor="radio-option-1" className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Option 1
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="radio-option-2"
                        name="radio-group-basic"
                        type="radio"
                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:border-gray-600"
                      />
                      <label htmlFor="radio-option-2" className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Option 2
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="radio-option-3"
                        name="radio-group-basic"
                        type="radio"
                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:border-gray-600"
                      />
                      <label htmlFor="radio-option-3" className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Option 3
                      </label>
                    </div>
                  </div>
                </div>
              }
              code={`<div className="space-y-2">
  <div className="flex items-center">
    <Radio id="radio-option-1" name="radio-group-basic" defaultChecked />
    <label htmlFor="radio-option-1" className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
      Option 1
    </label>
  </div>
  
  <div className="flex items-center">
    <Radio id="radio-option-2" name="radio-group-basic" />
    <label htmlFor="radio-option-2" className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
      Option 2
    </label>
  </div>
  
  <div className="flex items-center">
    <Radio id="radio-option-3" name="radio-group-basic" />
    <label htmlFor="radio-option-3" className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
      Option 3
    </label>
  </div>
</div>`}
            />
          </section>

          {/* Radio Group Section */}
          <section id="radio-group" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Radio Group</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Group radio buttons together to represent a set of related options.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="small"
                        name="size"
                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:border-gray-600"
                      />
                      <label htmlFor="small" className="ml-2 block text-sm text-gray-900 dark:text-white">
                        Small
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="medium"
                        name="size"
                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:border-gray-600"
                        defaultChecked
                      />
                      <label htmlFor="medium" className="ml-2 block text-sm text-gray-900 dark:text-white">
                        Medium
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="large"
                        name="size"
                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:border-gray-600"
                      />
                      <label htmlFor="large" className="ml-2 block text-sm text-gray-900 dark:text-white">
                        Large
                      </label>
                    </div>
                  </div>
                </div>
              }
              code={`<div className="space-y-2">
  <div className="flex items-center">
    <Radio id="small" name="size" />
    <label htmlFor="small" className="ml-2 block text-sm text-gray-900 dark:text-white">
      Small
    </label>
  </div>
  
  <div className="flex items-center">
    <Radio id="medium" name="size" defaultChecked />
    <label htmlFor="medium" className="ml-2 block text-sm text-gray-900 dark:text-white">
      Medium
    </label>
  </div>
  
  <div className="flex items-center">
    <Radio id="large" name="size" />
    <label htmlFor="large" className="ml-2 block text-sm text-gray-900 dark:text-white">
      Large
    </label>
  </div>
</div>`}
            />
          </section>

          {/* Radio States Section */}
          <section id="states" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Radio States</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Radio buttons can be in different states such as default, checked, or disabled.
            </p>

            <ComponentExample
              example={
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      id="default-radio-1"
                      name="default-radio"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600"
                      defaultChecked
                    />
                    <label htmlFor="default-radio-1" className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Default
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="default-radio-2"
                      name="default-radio"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600"
                    />
                    <label htmlFor="default-radio-2" className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Secondary
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="default-radio-3"
                      name="default-radio"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600"
                      disabled
                    />
                    <label htmlFor="default-radio-3" className="ml-2 block text-sm font-medium text-gray-400 dark:text-gray-500">
                      Disabled
                    </label>
                  </div>
                </div>
              }
              code={`<div className="space-y-4">
  <div className="flex items-center">
    <Radio id="default-radio-1" name="default-radio" defaultChecked />
    <label htmlFor="default-radio-1" className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
      Default
    </label>
  </div>
  
  <div className="flex items-center">
    <Radio id="default-radio-2" name="default-radio" />
    <label htmlFor="default-radio-2" className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
      Secondary
    </label>
  </div>
  
  <div className="flex items-center">
    <Radio id="default-radio-3" name="default-radio" disabled />
    <label htmlFor="default-radio-3" className="ml-2 block text-sm font-medium text-gray-400 dark:text-gray-500">
      Disabled
    </label>
  </div>
</div>`}
            />
          </section>

          {/* In Forms Section */}
          <section id="in-forms" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">In Forms</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Radio buttons are commonly used in forms to allow users to select from predefined options.
            </p>

            <ComponentExample
              example={
                <div className="max-w-md mx-auto">
                  <fieldset>
                    <legend className="text-base font-medium text-gray-900 dark:text-white mb-2">
                      Notifications
                    </legend>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      How would you like to receive notifications?
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          id="push"
                          name="notification-method"
                          type="radio"
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:border-gray-600"
                          defaultChecked
                        />
                        <label htmlFor="push" className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Push notification
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="sms"
                          name="notification-method"
                          type="radio"
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:border-gray-600"
                        />
                        <label htmlFor="sms" className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                          SMS
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="email"
                          name="notification-method"
                          type="radio"
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:border-gray-600"
                        />
                        <label htmlFor="email" className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Email
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              }
              code={`<div className="space-y-4">
  <fieldset>
    <legend className="text-base font-medium text-gray-900 dark:text-white mb-2">
      Notifications
    </legend>
    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
      How would you like to receive notifications?
    </p>
    <div className="space-y-2">
      <div className="flex items-center">
        <Radio id="push" name="notification-method" defaultChecked />
        <label htmlFor="push" className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
          Push notification
        </label>
      </div>
      <div className="flex items-center">
        <Radio id="sms" name="notification-method" />
        <label htmlFor="sms" className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
          SMS
        </label>
      </div>
      <div className="flex items-center">
        <Radio id="email" name="notification-method" />
        <label htmlFor="email" className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
          Email
        </label>
      </div>
    </div>
  </fieldset>
</div>`}
            />
          </section>

          {/* API Reference Section */}
          <section id="api-reference" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">API Reference</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The following props are available for the Radio component.
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
                      The id attribute of the radio button
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
                      The name attribute of the radio button, used to group related options
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      defaultChecked
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      boolean
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      false
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      Whether the radio button is checked by default
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      checked
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      boolean
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      -
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      Controls the checked state of the radio button
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
                      Whether the radio button is disabled
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
                      Callback function that is triggered when the radio button state changes
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