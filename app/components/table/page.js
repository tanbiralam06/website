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
// import { Table } from 'reacui';

export default function TablePage() {
  // Table of Contents items
  const tocItems = [
    { id: 'overview', title: 'Overview' },
    { id: 'installation', title: 'Installation' },
    { id: 'import', title: 'Import' },
    { id: 'basic-usage', title: 'Basic Usage' },
    { id: 'table-structure', title: 'Table Structure' },
    { id: 'custom-styling', title: 'Custom Styling' },
    { id: 'api-reference', title: 'API Reference' }
  ];

  // Main example for the top showcase
  const mainExample = (
    <div className="overflow-x-auto rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Role</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">John Doe</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">john@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">Admin</td>
          </tr>
          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">Jane Smith</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">jane@example.com</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">Editor</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const mainCode = `<Table>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Name</Table.HeaderCell>
      <Table.HeaderCell>Email</Table.HeaderCell>
      <Table.HeaderCell>Role</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>John Doe</Table.Cell>
      <Table.Cell>john@example.com</Table.Cell>
      <Table.Cell>Admin</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Jane Smith</Table.Cell>
      <Table.Cell>jane@example.com</Table.Cell>
      <Table.Cell>Editor</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>`;

  return (
    <>
      <Banner />

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <h1 id="overview" className="text-4xl font-bold text-secondary-900 dark:text-white mb-3">Table</h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8">
            A flexible table component for displaying structured data
          </p>

          {/* Main Example with Tabs */}
          <div className="mb-12">
            <TabGroup example={mainExample} code={mainCode} />
          </div>

          {/* Installation Section */}
          <section id="installation" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Installation</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Table component is part of the ReacUI library. Install the package to use it in your project.
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
              Import the Table component into your React component.
            </p>
            <div className="bg-secondary-900 text-white p-4 rounded-md overflow-x-auto">
              <pre className="text-sm">
                <CodeBlock code="import { Table } from 'reacui';" language="javascript" />
              </pre>
            </div>
          </section>

          {/* Basic Usage Section */}
          <section id="basic-usage" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Basic Usage</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              A simple table with headers and body rows.
            </p>

            <ComponentExample
              example={
                <div className="overflow-x-auto rounded-lg shadow">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Product</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Price</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">Product A</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">$100</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">Product B</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">$200</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              }
              code={`<Table>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Product</Table.HeaderCell>
      <Table.HeaderCell>Price</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Product A</Table.Cell>
      <Table.Cell>$100</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Product B</Table.Cell>
      <Table.Cell>$200</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>`}
            />
          </section>

          {/* Table Structure Section */}
          <section id="table-structure" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Table Structure</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Table component is composed of several subcomponents: Header, Body, Row, HeaderCell, and Cell.
            </p>

            <CodeBlock 
              code={`<Table>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Column 1</Table.HeaderCell>
      <Table.HeaderCell>Column 2</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Data 1</Table.Cell>
      <Table.Cell>Data 2</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>`}
              language="jsx"
            />
          </section>

          {/* Custom Styling Section */}
          <section id="custom-styling" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Custom Styling</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Apply custom styles to any part of the table using the className prop.
            </p>

            <ComponentExample
              example={
                <div className="overflow-x-auto rounded-lg shadow">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-primary-100 dark:bg-primary-900">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-primary-800 dark:text-primary-300 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-primary-800 dark:text-primary-300 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                      <tr className="hover:bg-primary-50 dark:hover:bg-primary-900/50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">Project Alpha</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className="inline-flex items-center justify-center font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-xs px-2 py-0.5">Active</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-primary-50 dark:hover:bg-primary-900/50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">Project Beta</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className="inline-flex items-center justify-center font-medium rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 text-xs px-2 py-0.5">In Review</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              }
              code={`<Table>
  <Table.Header className="bg-primary-100 dark:bg-primary-900">
    <Table.Row>
      <Table.HeaderCell className="text-primary-800 dark:text-primary-300">Name</Table.HeaderCell>
      <Table.HeaderCell className="text-primary-800 dark:text-primary-300">Status</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row className="hover:bg-primary-50 dark:hover:bg-primary-900/50">
      <Table.Cell>Project Alpha</Table.Cell>
      <Table.Cell>
        <Badge variant="success" size="sm">Active</Badge>
      </Table.Cell>
    </Table.Row>
    <Table.Row className="hover:bg-primary-50 dark:hover:bg-primary-900/50">
      <Table.Cell>Project Beta</Table.Cell>
      <Table.Cell>
        <Badge variant="warning" size="sm">In Review</Badge>
      </Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>`}
            />
          </section>

          {/* API Reference Section */}
          <section id="api-reference" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">API Reference</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The following props are available for the Table components.
            </p>

            <div className="border border-secondary-200 dark:border-secondary-800 rounded-lg overflow-hidden mb-6">
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
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Table</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">children</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">ReactNode</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">-</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">The table content.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Table</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">className</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">''</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Additional CSS classes.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Table.Header</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">children</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">ReactNode</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">-</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">The table header content.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Table.Header</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">className</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">''</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Additional CSS classes.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Table.Body</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">children</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">ReactNode</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">-</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">The table body content.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Table.Body</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">className</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">''</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Additional CSS classes.</td>
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