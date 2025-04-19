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
// import { RangeSlider } from 'reacui';

export default function RangeSliderPage() {
  // Table of Contents items
  const tocItems = [
    { id: 'overview', title: 'Overview' },
    { id: 'installation', title: 'Installation' },
    { id: 'import', title: 'Import' },
    { id: 'basic-usage', title: 'Basic Usage' },
    { id: 'with-tooltips', title: 'With Tooltips' },
    { id: 'with-labels', title: 'With Labels' },
    { id: 'colors', title: 'Colors' },
    { id: 'api-reference', title: 'API Reference' }
  ];

  // Main example for the top showcase
  const mainExample = (
    <div className="w-full max-w-md mx-auto px-4">
      <div className="relative pt-1">
        <div className="flex h-2 overflow-hidden rounded bg-gray-200 dark:bg-gray-700">
          <div className="flex flex-col justify-center overflow-hidden bg-transparent" style={{ width: "30%" }}></div>
          <div className="flex flex-col justify-center overflow-hidden bg-blue-500 dark:bg-blue-400" style={{ width: "40%" }}></div>
        </div>
        <div className="absolute inset-y-0 left-0 flex items-center" style={{ left: "30%" }}>
          <div className="h-5 w-5 -ml-2.5 rounded-full border-2 border-white bg-blue-500 dark:border-gray-900 dark:bg-blue-400 flex items-center justify-center">
          </div>
        </div>
        <div className="absolute inset-y-0 left-0 flex items-center" style={{ left: "70%" }}>
          <div className="h-5 w-5 -ml-2.5 rounded-full border-2 border-white bg-blue-500 dark:border-gray-900 dark:bg-blue-400 flex items-center justify-center">
          </div>
        </div>
      </div>
    </div>
  );

  const mainCode = `<RangeSlider
  minValue={30}
  maxValue={70}
  min={0}
  max={100}
  onChange={({ min, max }) => console.log(min, max)}
/>`;

  return (
    <>
      <Banner />

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <h1 id="overview" className="text-4xl font-bold text-secondary-900 dark:text-white mb-3">Range Slider</h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8">
            A dual-handle slider component for selecting a range of values
          </p>

          {/* Main Example with Tabs */}
          <div className="mb-12">
            <TabGroup example={mainExample} code={mainCode} />
          </div>

          {/* Installation Section */}
          <section id="installation" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Installation</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The RangeSlider component is part of the ReacUI library. Install the package to use it in your project.
            </p>
            <CodeBlock code="npm install reacui" language="bash" />
          </section>

          {/* Import Section */}
          <section id="import" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Import</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Import the RangeSlider component into your React component.
            </p>
            <CodeBlock code="import { RangeSlider } from 'reacui';" language="javascript" />
          </section>

          {/* Basic Usage Section */}
          <section id="basic-usage" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Basic Usage</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The RangeSlider component allows users to select a range of values within a specified range.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto px-4">
                  <div className="relative pt-1">
                    <div className="flex h-2 overflow-hidden rounded bg-gray-200 dark:bg-gray-700">
                      <div className="flex flex-col justify-center overflow-hidden bg-transparent" style={{ width: "20%" }}></div>
                      <div className="flex flex-col justify-center overflow-hidden bg-blue-500 dark:bg-blue-400" style={{ width: "50%" }}></div>
                    </div>
                    <div className="absolute inset-y-0 left-0 flex items-center" style={{ left: "20%" }}>
                      <div className="h-5 w-5 -ml-2.5 rounded-full border-2 border-white bg-blue-500 dark:border-gray-900 dark:bg-blue-400 flex items-center justify-center">
                      </div>
                    </div>
                    <div className="absolute inset-y-0 left-0 flex items-center" style={{ left: "70%" }}>
                      <div className="h-5 w-5 -ml-2.5 rounded-full border-2 border-white bg-blue-500 dark:border-gray-900 dark:bg-blue-400 flex items-center justify-center">
                      </div>
                    </div>
                  </div>
                </div>
              }
              code={`<RangeSlider
  minValue={20}
  maxValue={70}
  min={0}
  max={100}
  onChange={({ min, max }) => {
    setMinValue(min);
    setMaxValue(max);
  }}
/>`}
            />
          </section>

          {/* With Tooltips Section */}
          <section id="with-tooltips" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">With Tooltips</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Add tooltips to show the current values of the range slider handles.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto px-4">
                  <div className="relative pt-5 pb-1">
                    <div className="flex h-2 overflow-hidden rounded bg-gray-200 dark:bg-gray-700">
                      <div className="flex flex-col justify-center overflow-hidden bg-transparent" style={{ width: "25%" }}></div>
                      <div className="flex flex-col justify-center overflow-hidden bg-blue-500 dark:bg-blue-400" style={{ width: "45%" }}></div>
                    </div>
                    <div className="absolute inset-y-0 left-0 flex items-center" style={{ left: "25%" }}>
                      <div className="h-5 w-5 -ml-2.5 rounded-full border-2 border-white bg-blue-500 dark:border-gray-900 dark:bg-blue-400 flex items-center justify-center">
                      </div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs rounded px-2 py-1 dark:bg-blue-400">
                        25
                      </div>
                    </div>
                    <div className="absolute inset-y-0 left-0 flex items-center" style={{ left: "70%" }}>
                      <div className="h-5 w-5 -ml-2.5 rounded-full border-2 border-white bg-blue-500 dark:border-gray-900 dark:bg-blue-400 flex items-center justify-center">
                      </div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs rounded px-2 py-1 dark:bg-blue-400">
                        70
                      </div>
                    </div>
                  </div>
                </div>
              }
              code={`<RangeSlider
  minValue={25}
  maxValue={70}
  min={0}
  max={100}
  showTooltips
  onChange={({ min, max }) => {
    setMinValue(min);
    setMaxValue(max);
  }}
/>`}
            />
          </section>

          {/* With Labels Section */}
          <section id="with-labels" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">With Labels</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Add labels to provide more context and improve usability.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto px-4">
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Price Range
                      </label>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        $50 - $200
                      </div>
                    </div>
                    <div className="relative pt-1">
                      <div className="flex h-2 overflow-hidden rounded bg-gray-200 dark:bg-gray-700">
                        <div className="flex flex-col justify-center overflow-hidden bg-transparent" style={{ width: "10%" }}></div>
                        <div className="flex flex-col justify-center overflow-hidden bg-blue-500 dark:bg-blue-400" style={{ width: "30%" }}></div>
                      </div>
                      <div className="absolute inset-y-0 left-0 flex items-center" style={{ left: "10%" }}>
                        <div className="h-5 w-5 -ml-2.5 rounded-full border-2 border-white bg-blue-500 dark:border-gray-900 dark:bg-blue-400 flex items-center justify-center">
                        </div>
                      </div>
                      <div className="absolute inset-y-0 left-0 flex items-center" style={{ left: "40%" }}>
                        <div className="h-5 w-5 -ml-2.5 rounded-full border-2 border-white bg-blue-500 dark:border-gray-900 dark:bg-blue-400 flex items-center justify-center">
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-1 text-xs text-gray-600 dark:text-gray-400">
                      <span>$0</span>
                      <span>$500</span>
                    </div>
                  </div>
                </div>
              }
              code={`const [range, setRange] = useState({ min: 50, max: 200 });

<div className="mb-6">
  <div className="flex justify-between items-center mb-2">
    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
      Price Range
    </label>
    <div className="text-sm text-gray-600 dark:text-gray-400">
      $50 - $200
    </div>
  </div>
  <RangeSlider
    minValue={range.min}
    maxValue={range.max}
    min={0}
    max={500}
    showLimits
    onChange={({ min, max }) => setRange({ min, max })}
  />
</div>`}
            />
          </section>

          {/* Colors Section */}
          <section id="colors" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Colors</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              RangeSliders can be styled with different colors to match your application's theme.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto space-y-8 px-4">
                  <div className="relative pt-1">
                    <div className="flex h-2 overflow-hidden rounded bg-gray-200 dark:bg-gray-700">
                      <div className="flex flex-col justify-center overflow-hidden bg-transparent" style={{ width: "20%" }}></div>
                      <div className="flex flex-col justify-center overflow-hidden bg-blue-500 dark:bg-blue-400" style={{ width: "50%" }}></div>
                    </div>
                    <div className="absolute inset-y-0 left-0 flex items-center" style={{ left: "20%" }}>
                      <div className="h-5 w-5 -ml-2.5 rounded-full border-2 border-white bg-blue-500 dark:border-gray-900 dark:bg-blue-400 flex items-center justify-center">
                      </div>
                    </div>
                    <div className="absolute inset-y-0 left-0 flex items-center" style={{ left: "70%" }}>
                      <div className="h-5 w-5 -ml-2.5 rounded-full border-2 border-white bg-blue-500 dark:border-gray-900 dark:bg-blue-400 flex items-center justify-center">
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Primary (Default)</p>
                  </div>
                  
                  <div className="relative pt-1">
                    <div className="flex h-2 overflow-hidden rounded bg-gray-200 dark:bg-gray-700">
                      <div className="flex flex-col justify-center overflow-hidden bg-transparent" style={{ width: "30%" }}></div>
                      <div className="flex flex-col justify-center overflow-hidden bg-green-500 dark:bg-green-400" style={{ width: "40%" }}></div>
                    </div>
                    <div className="absolute inset-y-0 left-0 flex items-center" style={{ left: "30%" }}>
                      <div className="h-5 w-5 -ml-2.5 rounded-full border-2 border-white bg-green-500 dark:border-gray-900 dark:bg-green-400 flex items-center justify-center">
                      </div>
                    </div>
                    <div className="absolute inset-y-0 left-0 flex items-center" style={{ left: "70%" }}>
                      <div className="h-5 w-5 -ml-2.5 rounded-full border-2 border-white bg-green-500 dark:border-gray-900 dark:bg-green-400 flex items-center justify-center">
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Success</p>
                  </div>
                  
                  <div className="relative pt-1">
                    <div className="flex h-2 overflow-hidden rounded bg-gray-200 dark:bg-gray-700">
                      <div className="flex flex-col justify-center overflow-hidden bg-transparent" style={{ width: "10%" }}></div>
                      <div className="flex flex-col justify-center overflow-hidden bg-purple-500 dark:bg-purple-400" style={{ width: "60%" }}></div>
                    </div>
                    <div className="absolute inset-y-0 left-0 flex items-center" style={{ left: "10%" }}>
                      <div className="h-5 w-5 -ml-2.5 rounded-full border-2 border-white bg-purple-500 dark:border-gray-900 dark:bg-purple-400 flex items-center justify-center">
                      </div>
                    </div>
                    <div className="absolute inset-y-0 left-0 flex items-center" style={{ left: "70%" }}>
                      <div className="h-5 w-5 -ml-2.5 rounded-full border-2 border-white bg-purple-500 dark:border-gray-900 dark:bg-purple-400 flex items-center justify-center">
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Custom</p>
                  </div>
                </div>
              }
              code={`{/* Primary (Default) */}
<RangeSlider
  minValue={20}
  maxValue={70}
  min={0}
  max={100}
  color="primary"
/>

{/* Success */}
<RangeSlider
  minValue={30}
  maxValue={70}
  min={0}
  max={100}
  color="success"
/>

{/* Custom */}
<RangeSlider
  minValue={10}
  maxValue={70}
  min={0}
  max={100}
  color="purple"
/>`}
            />
          </section>

          {/* API Reference Section */}
          <section id="api-reference" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">API Reference</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The following props are available for the RangeSlider component.
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
                      minValue
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      0
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      The current minimum value of the range
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      maxValue
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      100
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      The current maximum value of the range
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      min
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      0
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      The minimum possible value
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      max
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      100
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      The maximum possible value
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      step
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      1
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      The step increment value
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
                      Whether the range slider is disabled
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      color
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      string
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      'primary'
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      The color of the range slider: 'primary', 'success', or custom
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      showTooltips
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      boolean
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      false
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      Whether to show tooltips with the current values
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      showLimits
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      boolean
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      false
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      Whether to show min and max limits as labels
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
                      Callback function that is triggered when values change, receives an object with min and max properties
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