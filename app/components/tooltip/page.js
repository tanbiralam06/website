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
// import { Tooltip } from 'reacui';

export default function TooltipPage() {
  // Table of Contents items
  const tocItems = [
    { id: 'overview', title: 'Overview' },
    { id: 'installation', title: 'Installation' },
    { id: 'import', title: 'Import' },
    { id: 'basic', title: 'Basic Tooltip' },
    { id: 'positions', title: 'Tooltip Positions' },
    { id: 'triggers', title: 'Trigger Options' },
    { id: 'variants', title: 'Tooltip Variants' },
    { id: 'api-reference', title: 'API Reference' }
  ];

  // Main example for the top showcase
  const mainExample = (
    <div className="w-full max-w-md mx-auto flex justify-center">
      <div className="relative inline-block group">
        <button
          className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors"
        >
          Hover me
        </button>
        <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-auto">
          <div className="bg-secondary-900 dark:bg-secondary-700 text-white text-sm rounded py-1 px-2 whitespace-nowrap">
            This is a tooltip
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-8 border-transparent border-t-secondary-900 dark:border-t-secondary-700"></div>
          </div>
        </div>
      </div>
    </div>
  );

  const mainCode = `import { Tooltip } from 'reacui';

function Example() {
  return (
    <Tooltip content="This is a tooltip">
      <button>Hover me</button>
    </Tooltip>
  );
}`;

  return (
    <>
      <Banner />

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <h1 id="overview" className="text-4xl font-bold text-secondary-900 dark:text-white mb-3">Tooltip</h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8">
            A small informational overlay that appears when hovering over or focusing on an element
          </p>

          {/* Main Example with Tabs */}
          <div className="mb-12">
            <TabGroup example={mainExample} code={mainCode} />
          </div>

          {/* Installation Section */}
          <section id="installation" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Installation</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Tooltip component is part of the ReacUI library. Install the package to use it in your project.
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
              Import the Tooltip component into your React component.
            </p>
            <div className="bg-secondary-900 text-white p-4 rounded-md overflow-x-auto">
              <pre className="text-sm">
                <CodeBlock code="import { Tooltip } from 'reacui';" language="javascript" />
              </pre>
            </div>
          </section>

          {/* Basic Tooltip Section */}
          <section id="basic" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Basic Tooltip</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              A basic tooltip that appears when hovering over an element.
            </p>

            <ComponentExample
              example={
                <div className="w-full flex justify-center p-6">
                  <div className="relative inline-block group mx-1">
                    <button
                      className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors"
                    >
                      Hover me
                    </button>
                    <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-auto">
                      <div className="bg-secondary-900 dark:bg-secondary-700 text-white text-sm rounded py-1 px-2 whitespace-nowrap">
                        This is a tooltip
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-8 border-transparent border-t-secondary-900 dark:border-t-secondary-700"></div>
                      </div>
                    </div>
                  </div>
                </div>
              }
              code={`import { Tooltip } from 'reacui';

function Example() {
  return (
    <Tooltip content="This is a tooltip">
      <button>Hover me</button>
    </Tooltip>
  );
}`}
            />
          </section>

          {/* Tooltip Positions Section */}
          <section id="positions" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Tooltip Positions</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Tooltips can be displayed in different positions relative to the target element.
            </p>

            <ComponentExample
              example={
                <div className="w-full flex flex-wrap gap-6 justify-center p-12">
                  {/* Top tooltip */}
                  <div className="relative inline-block group">
                    <button
                      className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors"
                    >
                      Top
                    </button>
                    <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-auto">
                      <div className="bg-secondary-900 dark:bg-secondary-700 text-white text-sm rounded py-1 px-2 whitespace-nowrap">
                        Top tooltip
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-8 border-transparent border-t-secondary-900 dark:border-t-secondary-700"></div>
                      </div>
                    </div>
                  </div>

                  {/* Right tooltip */}
                  <div className="relative inline-block group">
                    <button
                      className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors"
                    >
                      Right
                    </button>
                    <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity left-full top-1/2 transform -translate-y-1/2 ml-2 w-auto">
                      <div className="bg-secondary-900 dark:bg-secondary-700 text-white text-sm rounded py-1 px-2 whitespace-nowrap">
                        Right tooltip
                        <div className="absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2 w-0 h-0 border-8 border-transparent border-r-secondary-900 dark:border-r-secondary-700"></div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom tooltip */}
                  <div className="relative inline-block group">
                    <button
                      className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors"
                    >
                      Bottom
                    </button>
                    <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity top-full left-1/2 transform -translate-x-1/2 mt-2 w-auto">
                      <div className="bg-secondary-900 dark:bg-secondary-700 text-white text-sm rounded py-1 px-2 whitespace-nowrap">
                        Bottom tooltip
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-8 border-transparent border-b-secondary-900 dark:border-b-secondary-700"></div>
                      </div>
                    </div>
                  </div>

                  {/* Left tooltip */}
                  <div className="relative inline-block group">
                    <button
                      className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors"
                    >
                      Left
                    </button>
                    <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity right-full top-1/2 transform -translate-y-1/2 mr-2 w-auto">
                      <div className="bg-secondary-900 dark:bg-secondary-700 text-white text-sm rounded py-1 px-2 whitespace-nowrap">
                        Left tooltip
                        <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 w-0 h-0 border-8 border-transparent border-l-secondary-900 dark:border-l-secondary-700"></div>
                      </div>
                    </div>
                  </div>
                </div>
              }
              code={`import { Tooltip } from 'reacui';

function Example() {
  return (
    <>
      <Tooltip content="Top tooltip" placement="top">
        <button>Top</button>
      </Tooltip>
      
      <Tooltip content="Right tooltip" placement="right">
        <button>Right</button>
      </Tooltip>
      
      <Tooltip content="Bottom tooltip" placement="bottom">
        <button>Bottom</button>
      </Tooltip>
      
      <Tooltip content="Left tooltip" placement="left">
        <button>Left</button>
      </Tooltip>
    </>
  );
}`}
            />
          </section>

          {/* Trigger Options Section */}
          <section id="triggers" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Trigger Options</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Tooltips can be triggered by different interactions like hover or focus.
            </p>

            <ComponentExample
              example={
                <div className="w-full flex flex-wrap gap-6 justify-center">
                  <div className="p-4 border border-secondary-200 dark:border-secondary-700 rounded-lg">
                    <div className="mb-2 text-sm font-medium text-secondary-900 dark:text-white">Hover trigger (default)</div>
                    <div className="relative inline-block group">
                      <button
                        className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors"
                      >
                        Hover me
                      </button>
                      <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-auto">
                        <div className="bg-secondary-900 dark:bg-secondary-700 text-white text-sm rounded py-1 px-2 whitespace-nowrap">
                          Appears on hover
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-8 border-transparent border-t-secondary-900 dark:border-t-secondary-700"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border border-secondary-200 dark:border-secondary-700 rounded-lg">
                    <div className="mb-2 text-sm font-medium text-secondary-900 dark:text-white">Focus trigger</div>
                    <div className="relative inline-block focus-within:block">
                      <input
                        type="text"
                        placeholder="Focus me"
                        className="px-4 py-2 bg-white dark:bg-secondary-800 border border-secondary-300 dark:border-secondary-700 rounded-md text-secondary-900 dark:text-white focus:ring-primary-500 focus:border-primary-500"
                      />
                      <div className="absolute invisible focus-within:visible opacity-0 focus-within:opacity-100 transition-opacity top-full left-1/2 transform -translate-x-1/2 mt-2 w-auto">
                        <div className="bg-secondary-900 dark:bg-secondary-700 text-white text-sm rounded py-1 px-2 whitespace-nowrap">
                          Appears on focus
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-8 border-transparent border-b-secondary-900 dark:border-b-secondary-700"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
              code={`import { Tooltip } from 'reacui';

function Example() {
  return (
    <>
      <Tooltip 
        content="Appears on hover" 
        triggerType="hover"
      >
        <button>Hover me</button>
      </Tooltip>
      
      <Tooltip 
        content="Appears on focus" 
        triggerType="focus"
      >
        <input type="text" placeholder="Focus me" />
      </Tooltip>
    </>
  );
}`}
            />
          </section>

          {/* Tooltip Variants Section */}
          <section id="variants" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Tooltip Variants</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Tooltips come in different color variants to match your design needs.
            </p>

            <ComponentExample
              example={
                <div className="w-full flex flex-wrap gap-4 justify-center p-8">
                  {/* Default tooltip */}
                  <div className="relative inline-block group mx-1">
                    <button
                      className="px-4 py-2 bg-secondary-200 dark:bg-secondary-700 text-secondary-900 dark:text-white rounded-md font-medium"
                    >
                      Default
                    </button>
                    <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-auto">
                      <div className="bg-secondary-900 dark:bg-secondary-700 text-white text-sm rounded py-1 px-2 whitespace-nowrap">
                        Default tooltip
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-8 border-transparent border-t-secondary-900 dark:border-t-secondary-700"></div>
                      </div>
                    </div>
                  </div>

                  {/* Primary tooltip */}
                  <div className="relative inline-block group mx-1">
                    <button
                      className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-md font-medium"
                    >
                      Primary
                    </button>
                    <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-auto">
                      <div className="bg-primary-600 text-white text-sm rounded py-1 px-2 whitespace-nowrap">
                        Primary tooltip
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-8 border-transparent border-t-primary-600"></div>
                      </div>
                    </div>
                  </div>

                  {/* Success tooltip */}
                  <div className="relative inline-block group mx-1">
                    <button
                      className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-md font-medium"
                    >
                      Success
                    </button>
                    <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-auto">
                      <div className="bg-green-600 text-white text-sm rounded py-1 px-2 whitespace-nowrap">
                        Success tooltip
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-8 border-transparent border-t-green-600"></div>
                      </div>
                    </div>
                  </div>

                  {/* Warning tooltip */}
                  <div className="relative inline-block group mx-1">
                    <button
                      className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-md font-medium"
                    >
                      Warning
                    </button>
                    <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-auto">
                      <div className="bg-yellow-600 text-white text-sm rounded py-1 px-2 whitespace-nowrap">
                        Warning tooltip
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-8 border-transparent border-t-yellow-600"></div>
                      </div>
                    </div>
                  </div>

                  {/* Danger tooltip */}
                  <div className="relative inline-block group mx-1">
                    <button
                      className="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-md font-medium"
                    >
                      Danger
                    </button>
                    <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-auto">
                      <div className="bg-red-600 text-white text-sm rounded py-1 px-2 whitespace-nowrap">
                        Danger tooltip
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-8 border-transparent border-t-red-600"></div>
                      </div>
                    </div>
                  </div>
                </div>
              }
              code={`import { Tooltip } from 'reacui';

function Example() {
  return (
    <>
      <Tooltip content="Default tooltip" variant="default">
        <button>Default</button>
      </Tooltip>
      
      <Tooltip content="Primary tooltip" variant="primary">
        <button>Primary</button>
      </Tooltip>
      
      <Tooltip content="Success tooltip" variant="success">
        <button>Success</button>
      </Tooltip>
      
      <Tooltip content="Warning tooltip" variant="warning">
        <button>Warning</button>
      </Tooltip>
      
      <Tooltip content="Danger tooltip" variant="danger">
        <button>Danger</button>
      </Tooltip>
    </>
  );
}`}
            />
          </section>

          {/* API Reference Section */}
          <section id="api-reference" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">API Reference</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The following props are available for the Tooltip component.
            </p>

            <div className="border border-secondary-200 dark:border-secondary-800 rounded-lg overflow-hidden overflow-x-auto">
              <table className="w-full text-left min-w-full">
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
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">children</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">ReactNode</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">required</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Element that the tooltip is attached to.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">content</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string | ReactNode</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">required</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Content to display in the tooltip.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">placement</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">'top'</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Placement of the tooltip: 'top', 'right', 'bottom', 'left'.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">triggerType</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">'hover'</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Type of event that triggers the tooltip: 'hover', 'focus', 'click'.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">variant</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">'default'</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Color variant: 'default', 'primary', 'success', 'warning', 'danger'.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">delay</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">number</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">0</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Delay in milliseconds before showing the tooltip.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">offset</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">number</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">8</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Distance between the tooltip and the trigger element in pixels.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">className</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">''</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Additional CSS classes to apply to the tooltip.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">isVisible</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">boolean</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">undefined</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Controls visibility if you want to use the tooltip as a controlled component.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">onVisibilityChange</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">function</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">undefined</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Callback function when the tooltip visibility changes.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Table of Contents */}
        <div className="w-64 hidden lg:block">
          <div className="sticky top-20">
            <TableOfContents items={tocItems} />
          </div>
        </div>
      </div>
    </>
  );
} 