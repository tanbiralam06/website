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
// import { Select } from 'reacui';

export default function SelectPage() {
  // Table of Contents items
  const tocItems = [
    { id: 'overview', title: 'Overview' },
    { id: 'installation', title: 'Installation' },
    { id: 'import', title: 'Import' },
    { id: 'basic-usage', title: 'Basic Usage' },
    { id: 'with-option-groups', title: 'With Option Groups' },
    { id: 'states', title: 'Select States' },
    { id: 'validation', title: 'Validation' },
    { id: 'api-reference', title: 'API Reference' }
  ];

  // Main example for the top showcase
  const mainExample = (
    <div className="w-full max-w-md mx-auto">
      <select
        className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white"
      >
        <option value="" disabled>Choose an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );

  const mainCode = `<Select>
  <option value="" disabled>Choose an option</option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</Select>`;

  return (
    <>
      <Banner />

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <h1 id="overview" className="text-4xl font-bold text-secondary-900 dark:text-white mb-3">Select</h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8">
            A dropdown select component for choosing an option from a list
          </p>

          {/* Main Example with Tabs */}
          <div className="mb-12">
            <TabGroup example={mainExample} code={mainCode} />
          </div>

          {/* Installation Section */}
          <section id="installation" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Installation</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Select component is part of the ReacUI library. Install the package to use it in your project.
            </p>
            <CodeBlock code="npm install reacui" language="bash" />
          </section>

          {/* Import Section */}
          <section id="import" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Import</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Import the Select component into your React component.
            </p>
            <CodeBlock code="import { Select } from 'reacui';" language="javascript" />
          </section>

          {/* Basic Usage Section */}
          <section id="basic-usage" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Basic Usage</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Select component provides a styled dropdown for selecting options.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto">
                  <label htmlFor="basic-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Select an option
                  </label>
                  <select
                    id="basic-select"
                    className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              }
              code={`<label htmlFor="basic-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
  Select an option
</label>
<Select id="basic-select">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</Select>`}
            />
          </section>

          {/* With Option Groups Section */}
          <section id="with-option-groups" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">With Option Groups</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Group related options together for better organization.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto">
                  <label htmlFor="grouped-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Select a vehicle
                  </label>
                  <select
                    id="grouped-select"
                    className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  >
                    <option value="">Please select</option>
                    <optgroup label="Cars">
                      <option value="sedan">Sedan</option>
                      <option value="suv">SUV</option>
                      <option value="hatchback">Hatchback</option>
                    </optgroup>
                    <optgroup label="Motorcycles">
                      <option value="cruiser">Cruiser</option>
                      <option value="sport">Sport</option>
                      <option value="touring">Touring</option>
                    </optgroup>
                  </select>
                </div>
              }
              code={`<label htmlFor="grouped-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
  Select a vehicle
</label>
<Select id="grouped-select">
  <option value="">Please select</option>
  <optgroup label="Cars">
    <option value="sedan">Sedan</option>
    <option value="suv">SUV</option>
    <option value="hatchback">Hatchback</option>
  </optgroup>
  <optgroup label="Motorcycles">
    <option value="cruiser">Cruiser</option>
    <option value="sport">Sport</option>
    <option value="touring">Touring</option>
  </optgroup>
</Select>`}
            />
          </section>

          {/* Select States Section */}
          <section id="states" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Select States</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Select inputs can be in different states such as default, disabled, or with a default value.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto space-y-4">
                  <div>
                    <label htmlFor="default-state" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Default
                    </label>
                    <select
                      id="default-state"
                      className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    >
                      <option value="">Please select</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="selected-state" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      With default value
                    </label>
                    <select
                      id="selected-state"
                      className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                      defaultValue="option2"
                    >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="disabled-state" className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                      Disabled
                    </label>
                    <select
                      id="disabled-state"
                      className="block w-full rounded-md border border-gray-300 bg-gray-100 py-2 px-3 shadow-sm text-gray-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400"
                      disabled
                    >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>
                </div>
              }
              code={`{/* Default */}
<label htmlFor="default-state" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
  Default
</label>
<Select id="default-state">
  <option value="">Please select</option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
</Select>

{/* With default value */}
<label htmlFor="selected-state" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
  With default value
</label>
<Select id="selected-state" defaultValue="option2">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</Select>

{/* Disabled */}
<label htmlFor="disabled-state" className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
  Disabled
</label>
<Select id="disabled-state" disabled>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</Select>`}
            />
          </section>

          {/* Validation Section */}
          <section id="validation" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Validation</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Select components can display validation states to provide user feedback.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto space-y-4">
                  <div>
                    <label htmlFor="valid-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Valid selection
                    </label>
                    <select
                      id="valid-select"
                      className="block w-full rounded-md border border-green-500 bg-white py-2 px-3 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                      defaultValue="option1"
                    >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                    </select>
                    <p className="mt-1 text-sm text-green-600">This selection is valid!</p>
                  </div>
                  
                  <div>
                    <label htmlFor="error-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Invalid selection
                    </label>
                    <select
                      id="error-select"
                      className="block w-full rounded-md border border-red-500 bg-white py-2 px-3 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                      defaultValue=""
                    >
                      <option value="" disabled>Please select an option</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                    </select>
                    <p className="mt-1 text-sm text-red-600">Please make a selection</p>
                  </div>
                </div>
              }
              code={`{/* Valid Selection */}
<label htmlFor="valid-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
  Valid selection
</label>
<Select 
  id="valid-select" 
  defaultValue="option1"
  state="valid" 
>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
</Select>
<p className="mt-1 text-sm text-green-600">This selection is valid!</p>

{/* Invalid Selection */}
<label htmlFor="error-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
  Invalid selection
</label>
<Select 
  id="error-select" 
  defaultValue=""
  state="error" 
>
  <option value="" disabled>Please select an option</option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
</Select>
<p className="mt-1 text-sm text-red-600">Please make a selection</p>`}
            />
          </section>

          {/* API Reference Section */}
          <section id="api-reference" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">API Reference</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The following props are available for the Select component.
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
                      The id attribute of the select element
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
                      The name attribute of the select element
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
                      The initial value of the select element
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
                      The controlled value of the select element
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
                      Whether the select is disabled
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
                      The validation state of the select: 'default', 'valid', or 'error'
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
                      Callback function that is triggered when the select value changes
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