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
// import { Accordion } from 'reacui';

export default function AccordionPage() {
  // Table of Contents items
  const tocItems = [
    { id: 'overview', title: 'Overview' },
    { id: 'installation', title: 'Installation' },
    { id: 'import', title: 'Import' },
    { id: 'basic', title: 'Basic Accordion' },
    { id: 'multiple', title: 'Multiple Accordions' },
    { id: 'customization', title: 'Customization' },
    { id: 'api-reference', title: 'API Reference' }
  ];

  // State to control the open/closed state of accordions
  const [openItem, setOpenItem] = useState(null);
  
  const toggleAccordion = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  // Main example for the top showcase
  const mainExample = (
    <div className="w-full max-w-md mx-auto">
      <div className="border rounded-md border-secondary-200 dark:border-secondary-700 overflow-hidden">
        <div className="border-b border-secondary-200 dark:border-secondary-700 last:border-b-0">
          <button 
            className="flex justify-between items-center w-full text-left px-4 py-3 font-medium text-secondary-900 dark:text-white hover:bg-secondary-50 dark:hover:bg-secondary-800"
            onClick={() => toggleAccordion(0)}
            aria-expanded={openItem === 0}
            data-state={openItem === 0 ? "open" : "closed"}
          >
            <span>What is ReacUI?</span>
            <svg 
              className={`w-5 h-5 transition-transform duration-200 ${openItem === 0 ? 'transform rotate-180' : ''}`}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div 
            className={`px-4 py-3 text-secondary-600 dark:text-secondary-400 text-sm overflow-hidden transition-all duration-200 ${openItem === 0 ? 'max-h-96' : 'max-h-0 h-0 p-0 opacity-0 hidden'}`}
            aria-hidden={openItem !== 0}
          >
            ReacUI is a modern component library for React applications, designed with accessibility and customization in mind.
          </div>
        </div>
        <div className="border-b border-secondary-200 dark:border-secondary-700 last:border-b-0">
          <button 
            className="flex justify-between items-center w-full text-left px-4 py-3 font-medium text-secondary-900 dark:text-white hover:bg-secondary-50 dark:hover:bg-secondary-800"
            onClick={() => toggleAccordion(1)}
            aria-expanded={openItem === 1}
            data-state={openItem === 1 ? "open" : "closed"}
          >
            <span>How do I install ReacUI?</span>
            <svg 
              className={`w-5 h-5 transition-transform duration-200 ${openItem === 1 ? 'transform rotate-180' : ''}`}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div 
            className={`px-4 py-3 text-secondary-600 dark:text-secondary-400 text-sm overflow-hidden transition-all duration-200 ${openItem === 1 ? 'max-h-96' : 'max-h-0 h-0 p-0 opacity-0 hidden'}`}
            aria-hidden={openItem !== 1}
          >
            You can install ReacUI using npm or yarn: <code>npm install reacui</code> or <code>yarn add reacui</code>.
          </div>
        </div>
      </div>
    </div>
  );

  const mainCode = `import { Accordion } from 'reacui';

function Example() {
  return (
    <Accordion>
      <Accordion.Item>
        <Accordion.Header>What is ReacUI?</Accordion.Header>
        <Accordion.Content>
          ReacUI is a modern component library for React applications, 
          designed with accessibility and customization in mind.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Header>How do I install ReacUI?</Accordion.Header>
        <Accordion.Content>
          You can install ReacUI using npm or yarn: 
          \`npm install reacui\` or \`yarn add reacui\`.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}`;

  return (
    <>
      <Banner />

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <h1 id="overview" className="text-4xl font-bold text-secondary-900 dark:text-white mb-3">Accordion</h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8">
            A vertically stacked set of interactive headings that reveal or hide associated content
          </p>

          {/* Main Example with Tabs */}
          <div className="mb-12">
            <TabGroup example={mainExample} code={mainCode} />
          </div>

          {/* Installation Section */}
          <section id="installation" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Installation</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Accordion component is part of the ReacUI library. Install the package to use it in your project.
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
              Import the Accordion component into your React component.
            </p>
            <div className="bg-secondary-900 text-white p-4 rounded-md overflow-x-auto">
              <pre className="text-sm">
              <CodeBlock code="import { Accordion } from 'reacui';" language="javascript" />
              </pre>
            </div>
          </section>

          {/* Basic Accordion Section */}
          <section id="basic" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Basic Accordion</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              A basic accordion component with a header and content section.
            </p>

            <ComponentExample
              example={
                <div className="w-full">
                  <div className="border rounded-md border-secondary-200 dark:border-secondary-700 overflow-hidden">
                    <div className="border-b border-secondary-200 dark:border-secondary-700 last:border-b-0">
                      <button 
                        className="flex justify-between items-center w-full text-left px-4 py-3 font-medium text-secondary-900 dark:text-white hover:bg-secondary-50 dark:hover:bg-secondary-800"
                        onClick={() => toggleAccordion(2)}
                        aria-expanded={openItem === 2}
                        data-state={openItem === 2 ? "open" : "closed"}
                      >
                        <span>Section 1</span>
                        <svg 
                          className={`w-5 h-5 transition-transform duration-200 ${openItem === 2 ? 'transform rotate-180' : ''}`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div 
                        className={`px-4 py-3 text-secondary-600 dark:text-secondary-400 text-sm overflow-hidden transition-all duration-200 ${openItem === 2 ? 'max-h-96' : 'max-h-0 h-0 p-0 opacity-0 hidden'}`}
                        aria-hidden={openItem !== 2}
                      >
                        Content for section 1
                      </div>
                    </div>
                  </div>
                </div>
              }
              code={`<Accordion>
  <Accordion.Item>
    <Accordion.Header>Section 1</Accordion.Header>
    <Accordion.Content>
      Content for section 1
    </Accordion.Content>
  </Accordion.Item>
</Accordion>`}
            />
          </section>

          {/* Multiple Accordions Section */}
          <section id="multiple" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Multiple Accordions</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Multiple accordion items can be grouped together. By default, only one item can be opened at a time.
            </p>

            <ComponentExample
              example={
                <div className="w-full">
                  <div className="border rounded-md border-secondary-200 dark:border-secondary-700 overflow-hidden">
                    <div className="border-b border-secondary-200 dark:border-secondary-700 last:border-b-0">
                      <button 
                        className="flex justify-between items-center w-full text-left px-4 py-3 font-medium text-secondary-900 dark:text-white hover:bg-secondary-50 dark:hover:bg-secondary-800"
                        onClick={() => toggleAccordion(3)}
                        aria-expanded={openItem === 3}
                        data-state={openItem === 3 ? "open" : "closed"}
                      >
                        <span>Section 1</span>
                        <svg 
                          className={`w-5 h-5 transition-transform duration-200 ${openItem === 3 ? 'transform rotate-180' : ''}`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div 
                        className={`px-4 py-3 text-secondary-600 dark:text-secondary-400 text-sm overflow-hidden transition-all duration-200 ${openItem === 3 ? 'max-h-96' : 'max-h-0 h-0 p-0 opacity-0 hidden'}`}
                        aria-hidden={openItem !== 3}
                      >
                        Content for section 1
                      </div>
                    </div>
                    <div className="border-b border-secondary-200 dark:border-secondary-700 last:border-b-0">
                      <button 
                        className="flex justify-between items-center w-full text-left px-4 py-3 font-medium text-secondary-900 dark:text-white hover:bg-secondary-50 dark:hover:bg-secondary-800"
                        onClick={() => toggleAccordion(4)}
                        aria-expanded={openItem === 4}
                        data-state={openItem === 4 ? "open" : "closed"}
                      >
                        <span>Section 2</span>
                        <svg 
                          className={`w-5 h-5 transition-transform duration-200 ${openItem === 4 ? 'transform rotate-180' : ''}`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div 
                        className={`px-4 py-3 text-secondary-600 dark:text-secondary-400 text-sm overflow-hidden transition-all duration-200 ${openItem === 4 ? 'max-h-96' : 'max-h-0 h-0 p-0 opacity-0 hidden'}`}
                        aria-hidden={openItem !== 4}
                      >
                        Content for section 2
                      </div>
                    </div>
                    <div className="border-b border-secondary-200 dark:border-secondary-700 last:border-b-0">
                      <button 
                        className="flex justify-between items-center w-full text-left px-4 py-3 font-medium text-secondary-900 dark:text-white hover:bg-secondary-50 dark:hover:bg-secondary-800"
                        onClick={() => toggleAccordion(5)}
                        aria-expanded={openItem === 5}
                        data-state={openItem === 5 ? "open" : "closed"}
                      >
                        <span>Section 3</span>
                        <svg 
                          className={`w-5 h-5 transition-transform duration-200 ${openItem === 5 ? 'transform rotate-180' : ''}`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div 
                        className={`px-4 py-3 text-secondary-600 dark:text-secondary-400 text-sm overflow-hidden transition-all duration-200 ${openItem === 5 ? 'max-h-96' : 'max-h-0 h-0 p-0 opacity-0 hidden'}`}
                        aria-hidden={openItem !== 5}
                      >
                        Content for section 3
                      </div>
                    </div>
                  </div>
                </div>
              }
              code={`<Accordion>
  <Accordion.Item>
    <Accordion.Header>Section 1</Accordion.Header>
    <Accordion.Content>
      Content for section 1
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item>
    <Accordion.Header>Section 2</Accordion.Header>
    <Accordion.Content>
      Content for section 2
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item>
    <Accordion.Header>Section 3</Accordion.Header>
    <Accordion.Content>
      Content for section 3
    </Accordion.Content>
  </Accordion.Item>
</Accordion>`}
            />
          </section>

          {/* Customization Section */}
          <section id="customization" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Customization</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Accordion component can be customized with different styles and behavior.
            </p>

            <ComponentExample
              example={
                <div className="w-full">
                  <div className="rounded-md overflow-hidden bg-primary-50 dark:bg-primary-900/20">
                    <div className="mb-2">
                      <button 
                        className="flex justify-between items-center w-full text-left px-4 py-3 font-medium text-primary-800 dark:text-primary-200 hover:bg-primary-100 dark:hover:bg-primary-800/30 rounded-md"
                        onClick={() => toggleAccordion(6)}
                        aria-expanded={openItem === 6}
                        data-state={openItem === 6 ? "open" : "closed"}
                      >
                        <span>Customized Accordion</span>
                        <svg 
                          className={`w-5 h-5 text-primary-600 dark:text-primary-400 transition-transform duration-200 ${openItem === 6 ? 'transform rotate-180' : ''}`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div 
                        className={`px-4 py-3 text-primary-700 dark:text-primary-300 text-sm overflow-hidden transition-all duration-200 ${openItem === 6 ? 'max-h-96' : 'max-h-0 h-0 p-0 opacity-0 hidden'}`}
                        aria-hidden={openItem !== 6}
                      >
                        This accordion has custom styling with primary color theme.
                      </div>
                    </div>
                  </div>
                </div>
              }
              code={`<Accordion variant="primary" allowMultiple>
  <Accordion.Item>
    <Accordion.Header>Customized Accordion</Accordion.Header>
    <Accordion.Content>
      This accordion has custom styling with primary color theme.
    </Accordion.Content>
  </Accordion.Item>
</Accordion>`}
            />
          </section>

          {/* API Reference Section */}
          <section id="api-reference" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">API Reference</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The following props are available for the Accordion components.
            </p>

            <div className="border border-secondary-200 dark:border-secondary-800 rounded-lg overflow-hidden">
              <table className="w-full text-left">
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
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700" rowSpan="2">Accordion</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">allowMultiple</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">boolean</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">false</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Allow multiple accordion items to be expanded at once.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">variant</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">'default'</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Visual style variant: 'default', 'primary', etc.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Accordion.Item</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">className</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">''</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Additional CSS classes to apply.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Accordion.Header</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">className</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">''</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Additional CSS classes for the header.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Accordion.Content</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">className</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">''</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Additional CSS classes for the content.</td>
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