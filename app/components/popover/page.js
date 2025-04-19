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
// import { Popover } from 'reacui';

export default function PopoverPage() {
  // Table of Contents items
  const tocItems = [
    { id: 'overview', title: 'Overview' },
    { id: 'installation', title: 'Installation' },
    { id: 'import', title: 'Import' },
    { id: 'basic', title: 'Basic Popover' },
    { id: 'positioning', title: 'Popover Positioning' },
    { id: 'trigger', title: 'Trigger Options' },
    { id: 'customization', title: 'Customization' },
    { id: 'api-reference', title: 'API Reference' }
  ];

  // State for interactive examples
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isTopOpen, setIsTopOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);
  const [isBottomOpen, setIsBottomOpen] = useState(false);
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isCustomOpen, setIsCustomOpen] = useState(false);

  // Helper function to toggle popover state
  const togglePopover = (setter) => {
    setter(prev => !prev);
  };

  // Main example for the top showcase
  const mainExample = (
    <div className="w-full max-w-md mx-auto flex justify-center">
      <div className="relative inline-block">
        <button
          onClick={() => togglePopover(setIsPopoverOpen)}
          className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors"
        >
          Click me
        </button>
        
        {isPopoverOpen && (
          <div className="absolute z-10 w-64 max-w-sm mt-2 bg-white dark:bg-secondary-800 rounded-lg shadow-lg border border-secondary-200 dark:border-secondary-700">
            <div className="absolute -top-2 left-1/2 -ml-2 h-4 w-4 rotate-45 bg-white dark:bg-secondary-800 border-l border-t border-secondary-200 dark:border-secondary-700"></div>
            <div className="relative z-20 p-4 rounded-lg bg-white dark:bg-secondary-800">
              <h3 className="font-medium text-secondary-900 dark:text-white">Popover Title</h3>
              <p className="mt-1 text-sm text-secondary-600 dark:text-secondary-400">
                This is the popover content with some useful information.
              </p>
              <div className="mt-3 flex justify-end">
                <button
                  onClick={() => setIsPopoverOpen(false)}
                  className="text-sm text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const mainCode = `import { useState } from 'react';
import { Popover } from 'reacui';

function Example() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Popover
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      trigger={
        <button>Click me</button>
      }
      content={
        <>
          <Popover.Header>Popover Title</Popover.Header>
          <Popover.Body>
            This is the popover content with some useful information.
          </Popover.Body>
          <Popover.Footer>
            <button onClick={() => setIsOpen(false)}>
              Dismiss
            </button>
          </Popover.Footer>
        </>
      }
    />
  );
}`;

  return (
    <>
      <Banner />

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <h1 id="overview" className="text-4xl font-bold text-secondary-900 dark:text-white mb-3">Popover</h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8">
            A floating card that displays contextual information triggered by a click
          </p>

          {/* Main Example with Tabs */}
          <div className="mb-12">
            <TabGroup example={mainExample} code={mainCode} />
          </div>

          {/* Installation Section */}
          <section id="installation" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Installation</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Popover component is part of the ReacUI library. Install the package to use it in your project.
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
              Import the Popover component into your React component.
            </p>
            <div className="bg-secondary-900 text-white p-4 rounded-md overflow-x-auto">
              <pre className="text-sm">
                <CodeBlock code="import { Popover } from 'reacui';" language="javascript" />
              </pre>
            </div>
          </section>

          {/* Basic Popover Section */}
          <section id="basic" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Basic Popover</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              A basic popover that displays when clicked and closes when clicked again.
            </p>

            <ComponentExample
              example={
                <div className="w-full flex justify-center p-12">
                  <div className="relative inline-block">
                    <button
                      onClick={() => togglePopover(setIsPopoverOpen)}
                      className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors"
                    >
                      Click me
                    </button>
                    
                    {isPopoverOpen && (
                      <div className="absolute z-10 w-64 max-w-sm mt-2 bg-white dark:bg-secondary-800 rounded-lg shadow-lg border border-secondary-200 dark:border-secondary-700">
                        <div className="absolute -top-2 left-1/2 -ml-2 h-4 w-4 rotate-45 bg-white dark:bg-secondary-800 border-l border-t border-secondary-200 dark:border-secondary-700"></div>
                        <div className="relative z-20 p-4 rounded-lg bg-white dark:bg-secondary-800">
                          <h3 className="font-medium text-secondary-900 dark:text-white">Popover Title</h3>
                          <p className="mt-1 text-sm text-secondary-600 dark:text-secondary-400">
                            This is the popover content with some useful information.
                          </p>
                          <div className="mt-3 flex justify-end">
                            <button
                              onClick={() => setIsPopoverOpen(false)}
                              className="text-sm text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300"
                            >
                              Dismiss
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              }
              code={`import { useState } from 'react';
import { Popover } from 'reacui';

function Example() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Popover
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      trigger={
        <button>Click me</button>
      }
      content={
        <>
          <Popover.Header>Popover Title</Popover.Header>
          <Popover.Body>
            This is the popover content with some useful information.
          </Popover.Body>
          <Popover.Footer>
            <button onClick={() => setIsOpen(false)}>
              Dismiss
            </button>
          </Popover.Footer>
        </>
      }
    />
  );
}`}
            />
          </section>

          {/* Popover Positioning Section */}
          <section id="positioning" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Popover Positioning</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Popovers can be positioned in different directions: top, right, bottom, or left.
            </p>

            <ComponentExample
              example={
                <div className="w-full flex flex-wrap gap-8 justify-center p-16">
                  {/* Top popover */}
                  <div className="relative inline-block">
                    <button
                      onClick={() => togglePopover(setIsTopOpen)}
                      className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors"
                    >
                      Top
                    </button>
                    
                    {isTopOpen && (
                      <div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 w-48 mb-2 bg-white dark:bg-secondary-800 rounded-lg shadow-lg border border-secondary-200 dark:border-secondary-700">
                        <div className="absolute -bottom-2 left-1/2 -ml-2 h-4 w-4 rotate-45 bg-white dark:bg-secondary-800 border-r border-b border-secondary-200 dark:border-secondary-700"></div>
                        <div className="relative z-20 p-3 rounded-lg bg-white dark:bg-secondary-800">
                          <p className="text-sm text-secondary-600 dark:text-secondary-400">
                            Popover on top
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right popover */}
                  <div className="relative inline-block">
                    <button
                      onClick={() => togglePopover(setIsRightOpen)}
                      className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors"
                    >
                      Right
                    </button>
                    
                    {isRightOpen && (
                      <div className="absolute z-10 left-full top-1/2 transform -translate-y-1/2 w-48 ml-2 bg-white dark:bg-secondary-800 rounded-lg shadow-lg border border-secondary-200 dark:border-secondary-700">
                        <div className="absolute top-1/2 -left-2 -mt-2 h-4 w-4 rotate-45 bg-white dark:bg-secondary-800 border-l border-b border-secondary-200 dark:border-secondary-700"></div>
                        <div className="relative z-20 p-3 rounded-lg bg-white dark:bg-secondary-800">
                          <p className="text-sm text-secondary-600 dark:text-secondary-400">
                            Popover on right
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom popover */}
                  <div className="relative inline-block">
                    <button
                      onClick={() => togglePopover(setIsBottomOpen)}
                      className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors"
                    >
                      Bottom
                    </button>
                    
                    {isBottomOpen && (
                      <div className="absolute z-10 top-full left-1/2 transform -translate-x-1/2 w-48 mt-2 bg-white dark:bg-secondary-800 rounded-lg shadow-lg border border-secondary-200 dark:border-secondary-700">
                        <div className="absolute -top-2 left-1/2 -ml-2 h-4 w-4 rotate-45 bg-white dark:bg-secondary-800 border-l border-t border-secondary-200 dark:border-secondary-700"></div>
                        <div className="relative z-20 p-3 rounded-lg bg-white dark:bg-secondary-800">
                          <p className="text-sm text-secondary-600 dark:text-secondary-400">
                            Popover on bottom
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Left popover */}
                  <div className="relative inline-block">
                    <button
                      onClick={() => togglePopover(setIsLeftOpen)}
                      className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors"
                    >
                      Left
                    </button>
                    
                    {isLeftOpen && (
                      <div className="absolute z-10 right-full top-1/2 transform -translate-y-1/2 w-48 mr-2 bg-white dark:bg-secondary-800 rounded-lg shadow-lg border border-secondary-200 dark:border-secondary-700">
                        <div className="absolute top-1/2 -right-2 -mt-2 h-4 w-4 rotate-45 bg-white dark:bg-secondary-800 border-t border-r border-secondary-200 dark:border-secondary-700"></div>
                        <div className="relative z-20 p-3 rounded-lg bg-white dark:bg-secondary-800">
                          <p className="text-sm text-secondary-600 dark:text-secondary-400">
                            Popover on left
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              }
              code={`import { Popover } from 'reacui';

function Example() {
  return (
    <>
      <Popover
        placement="top"
        trigger={<button>Top</button>}
        content="Popover on top"
      />
      
      <Popover
        placement="right"
        trigger={<button>Right</button>}
        content="Popover on right"
      />
      
      <Popover
        placement="bottom"
        trigger={<button>Bottom</button>}
        content="Popover on bottom"
      />
      
      <Popover
        placement="left"
        trigger={<button>Left</button>}
        content="Popover on left"
      />
    </>
  );
}`}
            />
          </section>

          {/* Trigger Options Section */}
          <section id="trigger" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Trigger Options</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Popovers can be triggered by click, hover, or focus events.
            </p>

            <ComponentExample
              example={
                <div className="w-full flex flex-wrap gap-4 justify-center">
                  <div className="p-4 border border-secondary-200 dark:border-secondary-700 rounded-lg">
                    <div className="mb-2 text-sm font-medium text-secondary-900 dark:text-white">Click trigger (default)</div>
                    <div className="relative inline-block">
                      <button
                        onClick={() => togglePopover(setIsPopoverOpen)}
                        className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors"
                      >
                        Click me
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-4 border border-secondary-200 dark:border-secondary-700 rounded-lg">
                    <div className="mb-2 text-sm font-medium text-secondary-900 dark:text-white">Hover trigger</div>
                    <div className="relative inline-block">
                      <button
                        onMouseEnter={() => setIsRightOpen(true)}
                        onMouseLeave={() => setIsRightOpen(false)}
                        className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors"
                      >
                        Hover me
                      </button>
                      
                      {isRightOpen && (
                        <div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 w-48 mb-2 bg-white dark:bg-secondary-800 rounded-lg shadow-lg border border-secondary-200 dark:border-secondary-700">
                          <div className="absolute -bottom-2 left-1/2 -ml-2 h-4 w-4 rotate-45 bg-white dark:bg-secondary-800 border-r border-b border-secondary-200 dark:border-secondary-700"></div>
                          <div className="relative z-20 p-3 rounded-lg bg-white dark:bg-secondary-800">
                            <p className="text-sm text-secondary-600 dark:text-secondary-400">
                              Appears on hover
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-4 border border-secondary-200 dark:border-secondary-700 rounded-lg">
                    <div className="mb-2 text-sm font-medium text-secondary-900 dark:text-white">Focus trigger</div>
                    <div className="relative inline-block">
                      <input
                        type="text"
                        placeholder="Focus me"
                        onFocus={() => setIsBottomOpen(true)}
                        onBlur={() => setIsBottomOpen(false)}
                        className="px-4 py-2 bg-white dark:bg-secondary-800 border border-secondary-300 dark:border-secondary-700 rounded-md text-secondary-900 dark:text-white focus:ring-primary-500 focus:border-primary-500"
                      />
                      
                      {isBottomOpen && (
                        <div className="absolute z-10 top-full left-1/2 transform -translate-x-1/2 w-48 mt-2 bg-white dark:bg-secondary-800 rounded-lg shadow-lg border border-secondary-200 dark:border-secondary-700">
                          <div className="absolute -top-2 left-1/2 -ml-2 h-4 w-4 rotate-45 bg-white dark:bg-secondary-800 border-l border-t border-secondary-200 dark:border-secondary-700"></div>
                          <div className="relative z-20 p-3 rounded-lg bg-white dark:bg-secondary-800">
                            <p className="text-sm text-secondary-600 dark:text-secondary-400">
                              Appears on focus
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              }
              code={`import { Popover } from 'reacui';

function Example() {
  return (
    <>
      <Popover
        trigger={<button>Click me</button>}
        triggerType="click"
        content="Appears on click"
      />
      
      <Popover
        trigger={<button>Hover me</button>}
        triggerType="hover"
        content="Appears on hover"
      />
      
      <Popover
        trigger={<input type="text" placeholder="Focus me" />}
        triggerType="focus"
        content="Appears on focus"
      />
    </>
  );
}`}
            />
          </section>

          {/* Customization Section */}
          <section id="customization" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Customization</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Customize the popover with different styles and content.
            </p>

            <ComponentExample
              example={
                <div className="w-full flex justify-center p-12">
                  <div className="relative inline-block">
                    <button
                      onClick={() => togglePopover(setIsCustomOpen)}
                      className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white rounded-md font-medium transition-colors"
                    >
                      Custom Popover
                    </button>
                    
                    {isCustomOpen && (
                      <div className="absolute z-10 mt-2 w-72 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg shadow-xl border border-green-200 dark:border-green-900/30">
                        <div className="absolute -top-2 left-1/2 -ml-2 h-4 w-4 rotate-45 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border-l border-t border-green-200 dark:border-green-900/30"></div>
                        <div className="relative overflow-hidden z-20 p-4 rounded-lg">
                          <div className="absolute top-0 right-0 p-1">
                            <button
                              onClick={() => setIsCustomOpen(false)}
                              className="p-1 hover:bg-green-100 dark:hover:bg-green-800/30 rounded-full transition-colors"
                            >
                              <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                          <div className="flex items-center mb-3">
                            <div className="flex-shrink-0 bg-green-100 dark:bg-green-800/30 p-2 rounded-full">
                              <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                              </svg>
                            </div>
                            <h3 className="ml-3 text-lg font-medium text-secondary-900 dark:text-white">Custom Styled Popover</h3>
                          </div>
                          <p className="text-sm text-secondary-600 dark:text-secondary-400">
                            This popover has a custom design with gradient background and styled content.
                          </p>
                          <div className="mt-4 pt-3 border-t border-green-200 dark:border-green-800/30">
                            <a href="#" className="text-sm text-green-600 dark:text-green-400 font-medium hover:text-green-700 dark:hover:text-green-300">
                              Learn more about customization →
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              }
              code={`import { Popover } from 'reacui';

function Example() {
  return (
    <Popover
      className="bg-gradient-to-r from-green-50 to-teal-50 border-green-200 w-72"
      trigger={
        <button className="bg-gradient-to-r from-green-500 to-teal-600">
          Custom Popover
        </button>
      }
      content={
        <>
          <div className="flex items-center mb-3">
            <div className="bg-green-100 p-2 rounded-full">
              <HandIcon className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="ml-3 text-lg font-medium">Custom Styled Popover</h3>
          </div>
          <p className="text-sm">
            This popover has a custom design with gradient background and styled content.
          </p>
          <div className="mt-4 pt-3 border-t border-green-200">
            <a href="#" className="text-sm text-green-600 font-medium">
              Learn more about customization →
            </a>
          </div>
        </>
      }
      closeButton
    />
  );
}`}
            />
          </section>

          {/* API Reference Section */}
          <section id="api-reference" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">API Reference</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The following props are available for the Popover component.
            </p>

            <div className="border border-secondary-200 dark:border-secondary-800 rounded-lg overflow-hidden overflow-x-auto">
              <table className="w-full text-left min-w-full">
                <thead className="bg-secondary-50 dark:bg-secondary-800">
                  <tr>
                    <th className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Component</th>
                    <th className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Prop</th>
                    <th className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Type</th>
                    <th className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Default</th>
                    <th className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700" rowSpan="9">Popover</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">trigger</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">ReactNode</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">required</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">The element that triggers the popover.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">content</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">ReactNode</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">required</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">The content to display inside the popover.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">isOpen</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">boolean</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">-</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Controls the open state when using as a controlled component.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">onOpenChange</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">function</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">-</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Callback function when the popover open state changes.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">placement</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">'bottom'</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Placement of the popover: 'top', 'right', 'bottom', 'left'</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">triggerType</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">'click'</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">How to trigger the popover: 'click', 'hover', 'focus'</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">offset</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">number</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">8</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Distance between trigger and popover in pixels.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">closeButton</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">boolean</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">false</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Whether to show a close button in the popover.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">className</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">''</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Additional CSS classes for the popover.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Popover.Header</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">className</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">''</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Additional CSS classes for the popover header.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Popover.Body</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">className</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">''</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Additional CSS classes for the popover body.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Popover.Footer</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">className</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">''</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Additional CSS classes for the popover footer.</td>
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