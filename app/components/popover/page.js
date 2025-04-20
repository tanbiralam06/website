"use client";

import { useState, useEffect } from 'react';
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

  // State for mobile TOC drawer
  const [isTocOpen, setIsTocOpen] = useState(false);
  
  // State for viewport size
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  
  // Update viewport size state on resize
  useEffect(() => {
    const checkViewportSize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    
    // Check on mount
    checkViewportSize();
    
    // Add listener for resize
    window.addEventListener('resize', checkViewportSize);
    
    // Clean up
    return () => window.removeEventListener('resize', checkViewportSize);
  }, []);

  // State for interactive examples - create separate state variables for each section
  const [isMainExampleOpen, setIsMainExampleOpen] = useState(false);
  const [isBasicExampleOpen, setIsBasicExampleOpen] = useState(false);
  const [isClickTriggerOpen, setIsClickTriggerOpen] = useState(false);
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
          onClick={() => togglePopover(setIsMainExampleOpen)}
          className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors"
        >
          Click me
        </button>
        
        {isMainExampleOpen && (
          <div className="absolute z-50 w-64 max-w-sm mt-2 bg-white dark:bg-secondary-800 rounded-lg shadow-lg border border-secondary-200 dark:border-secondary-700">
            <div className="absolute -top-2 left-1/2 -ml-2 h-4 w-4 rotate-45 bg-white dark:bg-secondary-800 border-l border-t border-secondary-200 dark:border-secondary-700"></div>
            <div className="relative z-20 p-4 rounded-lg bg-white dark:bg-secondary-800">
              <h3 className="font-medium text-secondary-900 dark:text-white">Popover Title</h3>
              <p className="mt-1 text-sm text-secondary-600 dark:text-secondary-400">
                This is the popover content with some useful information.
              </p>
              <div className="mt-3 flex justify-end">
                <button
                  onClick={() => setIsMainExampleOpen(false)}
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

      {/* Mobile TOC toggle button - visible only on small screens */}
      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <button
          onClick={() => setIsTocOpen(!isTocOpen)}
          className="bg-primary-600 text-white p-3 rounded-full shadow-lg hover:bg-primary-700 transition-colors duration-200"
          aria-label="Toggle table of contents"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>
      </div>

      {/* Mobile TOC drawer - visible only when toggled on small screens */}
      {isTocOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsTocOpen(false)}></div>
          <div className="absolute right-0 top-0 bottom-0 w-64 bg-white dark:bg-secondary-900 shadow-xl overflow-y-auto p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-secondary-900 dark:text-white">Contents</h3>
              <button 
                onClick={() => setIsTocOpen(false)}
                className="text-secondary-500 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <TableOfContents items={tocItems} />
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
        <div className="flex-1 max-w-full lg:max-w-[calc(100%-16rem)]">
          <h1 id="overview" className="text-3xl sm:text-4xl font-bold text-secondary-900 dark:text-white mb-3">Popover</h1>
          <p className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-300 mb-6 sm:mb-8">
            A floating card that displays contextual information triggered by a click
          </p>

          {/* Main Example with Tabs */}
          <div className="mb-10 sm:mb-12">
            <TabGroup example={mainExample} code={mainCode} />
          </div>

          {/* Installation Section */}
          <section id="installation" className="mb-10 sm:mb-12 scroll-mt-20 sm:scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-3 sm:mb-4">Installation</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-4 sm:mb-6">
              The Popover component is part of the ReacUI library. Install the package to use it in your project.
            </p>
            <div className="bg-secondary-900 text-white p-3 sm:p-4 rounded-md overflow-x-auto">
              <pre className="text-sm">
                <CodeBlock code="npm install reacui" language="bash" />
              </pre>
            </div>
          </section>

          {/* Import Section */}
          <section id="import" className="mb-10 sm:mb-12 scroll-mt-20 sm:scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-3 sm:mb-4">Import</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-4 sm:mb-6">
              Import the Popover component into your React component.
            </p>
            <div className="bg-secondary-900 text-white p-3 sm:p-4 rounded-md overflow-x-auto">
              <pre className="text-sm">
                <CodeBlock code="import { Popover } from 'reacui';" language="javascript" />
              </pre>
            </div>
          </section>

          {/* Basic Popover Section */}
          <section id="basic" className="mb-10 sm:mb-12 scroll-mt-20 sm:scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-3 sm:mb-4">Basic Popover</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-4 sm:mb-6">
              A basic popover that displays when clicked and closes when clicked again.
            </p>

            <ComponentExample
              example={
                <div className="w-full flex justify-center p-6 sm:p-12">
                  <div className="relative inline-block">
                    <button
                      onClick={() => togglePopover(setIsBasicExampleOpen)}
                      className="px-3 py-2 sm:px-4 sm:py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors"
                    >
                      Click me
                    </button>
                    
                    {isBasicExampleOpen && (
                      <div className="absolute z-50 w-64 max-w-[calc(100vw-2rem)] sm:max-w-sm mt-2 bg-white dark:bg-secondary-800 rounded-lg shadow-lg border border-secondary-200 dark:border-secondary-700">
                        <div className="absolute -top-2 left-1/2 -ml-2 h-4 w-4 rotate-45 bg-white dark:bg-secondary-800 border-l border-t border-secondary-200 dark:border-secondary-700"></div>
                        <div className="relative z-20 p-3 sm:p-4 rounded-lg bg-white dark:bg-secondary-800">
                          <h3 className="font-medium text-secondary-900 dark:text-white">Popover Title</h3>
                          <p className="mt-1 text-sm text-secondary-600 dark:text-secondary-400">
                            This is the popover content with some useful information.
                          </p>
                          <div className="mt-3 flex justify-end">
                            <button
                              onClick={() => setIsBasicExampleOpen(false)}
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
          <section id="positioning" className="mb-10 sm:mb-12 scroll-mt-20 sm:scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-3 sm:mb-4">Popover Positioning</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-4 sm:mb-6">
              Popovers can be positioned in different directions: top, right, bottom, or left.
            </p>

            <ComponentExample
              example={
                <div className="w-full flex flex-wrap gap-4 sm:gap-8 justify-center p-6 sm:p-16">
                  {/* Top popover */}
                  <div className="relative inline-block">
                    <button
                      onClick={() => togglePopover(setIsTopOpen)}
                      className="px-3 py-2 sm:px-4 sm:py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors"
                    >
                      Top
                    </button>
                    
                    {isTopOpen && (
                      <div className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 w-48 mb-2 bg-white dark:bg-secondary-800 rounded-lg shadow-lg border border-secondary-200 dark:border-secondary-700">
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
                      className="px-3 py-2 sm:px-4 sm:py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors"
                    >
                      Right
                    </button>
                    
                    {isRightOpen && (
                      <div className="absolute z-50 left-full top-1/2 transform -translate-y-1/2 w-48 ml-2 bg-white dark:bg-secondary-800 rounded-lg shadow-lg border border-secondary-200 dark:border-secondary-700">
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
                      className="px-3 py-2 sm:px-4 sm:py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors"
                    >
                      Bottom
                    </button>
                    
                    {isBottomOpen && (
                      <div className="absolute z-50 top-full left-1/2 transform -translate-x-1/2 w-48 mt-2 bg-white dark:bg-secondary-800 rounded-lg shadow-lg border border-secondary-200 dark:border-secondary-700">
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
                      className="px-3 py-2 sm:px-4 sm:py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors"
                    >
                      Left
                    </button>
                    
                    {isLeftOpen && (
                      <div className="absolute z-50 right-full top-1/2 transform -translate-y-1/2 w-48 mr-2 bg-white dark:bg-secondary-800 rounded-lg shadow-lg border border-secondary-200 dark:border-secondary-700">
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
          <section id="trigger" className="mb-10 sm:mb-12 scroll-mt-20 sm:scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-3 sm:mb-4">Trigger Options</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-4 sm:mb-6">
              Popovers can be triggered by click, hover, or focus events.
            </p>

            <ComponentExample
              example={
                <div className="w-full flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
                  <div className="p-4 border border-secondary-200 dark:border-secondary-700 rounded-lg w-full sm:w-auto">
                    <div className="mb-2 text-sm font-medium text-secondary-900 dark:text-white">Click trigger (default)</div>
                    <div className="relative inline-block">
                      <button
                        onClick={() => togglePopover(setIsClickTriggerOpen)}
                        className="px-3 py-2 sm:px-4 sm:py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors"
                      >
                        Click me
                      </button>
                      
                      {isClickTriggerOpen && (
                        <div className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 w-48 mb-2 bg-white dark:bg-secondary-800 rounded-lg shadow-lg border border-secondary-200 dark:border-secondary-700">
                          <div className="absolute -bottom-2 left-1/2 -ml-2 h-4 w-4 rotate-45 bg-white dark:bg-secondary-800 border-r border-b border-secondary-200 dark:border-secondary-700"></div>
                          <div className="relative z-20 p-3 rounded-lg bg-white dark:bg-secondary-800">
                            <p className="text-sm text-secondary-600 dark:text-secondary-400">
                              Appears on click
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-4 border border-secondary-200 dark:border-secondary-700 rounded-lg w-full sm:w-auto">
                    <div className="mb-2 text-sm font-medium text-secondary-900 dark:text-white">Hover trigger</div>
                    <div className="relative inline-block">
                      <button
                        onMouseEnter={() => setIsRightOpen(true)}
                        onMouseLeave={() => setIsRightOpen(false)}
                        className="px-3 py-2 sm:px-4 sm:py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors"
                      >
                        Hover me
                      </button>
                      
                      {isRightOpen && (
                        <div className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 w-48 mb-2 bg-white dark:bg-secondary-800 rounded-lg shadow-lg border border-secondary-200 dark:border-secondary-700">
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
                  
                  <div className="p-4 border border-secondary-200 dark:border-secondary-700 rounded-lg w-full sm:w-auto">
                    <div className="mb-2 text-sm font-medium text-secondary-900 dark:text-white">Focus trigger</div>
                    <div className="relative inline-block">
                      <input
                        type="text"
                        placeholder="Focus me"
                        onFocus={() => setIsBottomOpen(true)}
                        onBlur={() => setIsBottomOpen(false)}
                        className="px-3 py-2 sm:px-4 sm:py-2 bg-white dark:bg-secondary-800 border border-secondary-300 dark:border-secondary-700 rounded-md text-secondary-900 dark:text-white focus:ring-primary-500 focus:border-primary-500 w-full sm:w-auto"
                      />
                      
                      {isBottomOpen && (
                        <div className="absolute z-50 top-full left-1/2 transform -translate-x-1/2 w-48 mt-2 bg-white dark:bg-secondary-800 rounded-lg shadow-lg border border-secondary-200 dark:border-secondary-700">
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
          <section id="customization" className="mb-10 sm:mb-12 scroll-mt-20 sm:scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-3 sm:mb-4">Customization</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-4 sm:mb-6">
              Customize the popover with different styles and content.
            </p>

            <ComponentExample
              example={
                <div className="w-full flex justify-center p-6 sm:p-12">
                  <div className="relative inline-block">
                    <button
                      onClick={() => togglePopover(setIsCustomOpen)}
                      className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white rounded-md font-medium transition-colors"
                    >
                      Custom Popover
                    </button>
                    
                    {isCustomOpen && (
                      <div className="absolute z-50 mt-2 w-64 sm:w-72 max-w-[calc(100vw-2rem)] bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg shadow-xl border border-green-200 dark:border-green-900/30">
                        <div className="absolute -top-2 left-1/2 -ml-2 h-4 w-4 rotate-45 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border-l border-t border-green-200 dark:border-green-900/30"></div>
                        <div className="relative overflow-hidden z-20 p-3 sm:p-4 rounded-lg">
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
                              <svg className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                              </svg>
                            </div>
                            <h3 className="ml-3 text-base sm:text-lg font-medium text-secondary-900 dark:text-white">Custom Styled Popover</h3>
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
          <section id="api-reference" className="mb-10 sm:mb-12 scroll-mt-20 sm:scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-3 sm:mb-4">API Reference</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-4 sm:mb-6">
              The following props are available for the Popover component.
            </p>

            <div className="border border-secondary-200 dark:border-secondary-800 rounded-lg overflow-hidden overflow-x-auto scrollbar-thin scrollbar-thumb-secondary-300 dark:scrollbar-thumb-secondary-700 scrollbar-track-transparent">
              <table className="w-full text-left min-w-[640px]">
                <thead className="bg-secondary-50 dark:bg-secondary-800">
                  <tr>
                    <th className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">Component</th>
                    <th className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">Prop</th>
                    <th className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">Type</th>
                    <th className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">Default</th>
                    <th className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm" rowSpan="9">Popover</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">trigger</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">ReactNode</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">required</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">The element that triggers the popover.</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">content</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">ReactNode</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">required</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">The content to display inside the popover.</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">isOpen</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">boolean</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">-</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">Controls the open state when using as a controlled component.</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">onOpenChange</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">function</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">-</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">Callback function when the popover open state changes.</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">placement</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">string</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">'bottom'</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">Placement of the popover: 'top', 'right', 'bottom', 'left'</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">triggerType</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">string</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">'click'</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">How to trigger the popover: 'click', 'hover', 'focus'</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">offset</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">number</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">8</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">Distance between trigger and popover in pixels.</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">closeButton</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">boolean</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">false</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">Whether to show a close button in the popover.</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">className</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">string</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">''</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">Additional CSS classes for the popover.</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">Popover.Header</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">className</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">string</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">''</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">Additional CSS classes for the popover header.</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">Popover.Body</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">className</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">string</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">''</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">Additional CSS classes for the popover body.</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">Popover.Footer</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">className</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">string</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">''</td>
                    <td className="px-3 py-2 sm:px-4 sm:py-2 border-b border-secondary-200 dark:border-secondary-700 text-sm">Additional CSS classes for the popover footer.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Desktop Table of Contents - only visible on large screens */}
        <div className="w-64 hidden lg:block shrink-0">
          <div className="sticky top-20">
            <TableOfContents items={tocItems} />
          </div>
        </div>
      </div>
    </>
  );
} 