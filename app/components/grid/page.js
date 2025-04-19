"use client";

import { useState } from 'react';
import Link from 'next/link';
import TabGroup from '../../../components/TabGroup';
import ComponentExample from '../../../components/ComponentExample';
import TableOfContents from '../../../components/TableOfContents';
import Banner from '../../../components/banner';
// Mock imports of the actual reacui components
// In a real implementation, you would import from your component library
// import { Grid, GridItem } from 'reacui';

export default function GridPage() {
  // Table of Contents items
  const tocItems = [
    { id: 'overview', title: 'Overview' },
    { id: 'installation', title: 'Installation' },
    { id: 'import', title: 'Import' },
    { id: 'basic-usage', title: 'Basic Usage' },
    { id: 'responsive-grid', title: 'Responsive Grid' },
    { id: 'grid-items', title: 'Grid Items' },
    { id: 'grid-alignment', title: 'Grid Alignment' },
    { id: 'api-reference', title: 'API Reference' }
  ];

  // Main example for the top showcase
  const mainExample = (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">1</div>
        <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">2</div>
        <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">3</div>
        <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">4</div>
        <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">5</div>
        <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">6</div>
      </div>
    </div>
  );

  const mainCode = `<Grid columns={3} gap={4}>
  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">1</div>
  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">2</div>
  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">3</div>
  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">4</div>
  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">5</div>
  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">6</div>
</Grid>`;

  return (
    <>
      <Banner />

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <h1 id="overview" className="text-4xl font-bold text-secondary-900 dark:text-white mb-3">Grid</h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8">
            A flexible grid layout system built on CSS Grid with responsive capabilities
          </p>

          {/* Main Example with Tabs */}
          <div className="mb-12">
            <TabGroup example={mainExample} code={mainCode} />
          </div>

          {/* Installation Section */}
          <section id="installation" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Installation</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Grid component is part of the ReacUI library. Install the package to use it in your project.
            </p>
            <div className="bg-secondary-900 text-white p-4 rounded-md overflow-x-auto">
              <pre className="text-sm">
                <code>npm install reacui</code>
              </pre>
            </div>
          </section>

          {/* Import Section */}
          <section id="import" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Import</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Import the Grid components into your React component.
            </p>
            <div className="bg-secondary-900 text-white p-4 rounded-md overflow-x-auto">
              <pre className="text-sm">
                <code>import {'{ Grid, GridItem }'} from 'reacui';</code>
              </pre>
            </div>
          </section>

          {/* Basic Usage Section */}
          <section id="basic-usage" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Basic Usage</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Grid component uses CSS Grid to create flexible layouts. You can specify the number of columns and gap size.
            </p>

            <ComponentExample
              example={
                <div className="w-full">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">1</div>
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">2</div>
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">3</div>
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">4</div>
                  </div>
                </div>
              }
              code={`<Grid columns={2} gap={4}>
  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">1</div>
  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">2</div>
  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">3</div>
  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">4</div>
</Grid>`}
            />
          </section>

          {/* Responsive Grid Section */}
          <section id="responsive-grid" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Responsive Grid</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              You can make a grid responsive by specifying different column counts at various breakpoints.
            </p>

            <ComponentExample
              example={
                <div className="w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">1</div>
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">2</div>
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">3</div>
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">4</div>
                  </div>
                </div>
              }
              code={`<Grid columns={1} sm={2} md={3} lg={4} gap={4}>
  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">1</div>
  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">2</div>
  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">3</div>
  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">4</div>
</Grid>`}
            />
          </section>

          {/* Grid Items Section */}
          <section id="grid-items" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Grid Items</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Use GridItem to control how individual items span across rows and columns of the grid.
            </p>

            <ComponentExample
              example={
                <div className="w-full">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">Span 2 columns</div>
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">1 column</div>
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">1 column</div>
                    <div className="col-span-2 bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">Span 2 columns</div>
                  </div>
                </div>
              }
              code={`<Grid columns={3} gap={4}>
  <GridItem colSpan={2}>
    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">Span 2 columns</div>
  </GridItem>
  <GridItem>
    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">1 column</div>
  </GridItem>
  <GridItem>
    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">1 column</div>
  </GridItem>
  <GridItem colSpan={2}>
    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">Span 2 columns</div>
  </GridItem>
</Grid>`}
            />
          </section>

          {/* Grid Alignment Section */}
          <section id="grid-alignment" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Grid Alignment</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Control how items are aligned within the grid using alignment properties.
            </p>

            <ComponentExample
              example={
                <div className="w-full">
                  <div className="grid grid-cols-3 gap-4 items-center justify-items-center h-32">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">1</div>
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">2</div>
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">3</div>
                  </div>
                </div>
              }
              code={`<Grid 
  columns={3} 
  gap={4} 
  alignItems="center" 
  justifyItems="center"
  className="h-32"
>
  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">1</div>
  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">2</div>
  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">3</div>
</Grid>`}
            />
          </section>

          {/* API Reference Section */}
          <section id="api-reference" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">API Reference</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The following props are available for the Grid and GridItem components.
            </p>

            <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">Grid Props</h3>
            <div className="border border-secondary-200 dark:border-secondary-800 rounded-lg overflow-hidden mb-8">
              <table className="w-full text-left">
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
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">columns</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">number</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">1</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                      Number of columns in the grid
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">gap</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">number</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">4</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                      Space between grid items (in Tailwind's spacing scale)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">rowGap</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">number</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">-</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                      Space between rows (overrides gap for rows)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">columnGap</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">number</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">-</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                      Space between columns (overrides gap for columns)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">sm</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">number</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">-</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                      Number of columns at the small breakpoint
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">md</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">number</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">-</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                      Number of columns at the medium breakpoint
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">lg</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">number</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">-</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                      Number of columns at the large breakpoint
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">xl</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">-</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">-</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                      Number of columns at the extra-large breakpoint
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">alignItems</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">'stretch'</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                      Vertical alignment of items: 'start', 'center', 'end', 'stretch'
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">justifyItems</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">'start'</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                      Horizontal alignment of items: 'start', 'center', 'end', 'stretch'
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">justifyContent</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">'start'</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                      Content distribution along the horizontal axis
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-secondary-200 dark:border-secondary-700 font-mono text-sm">alignContent</td>
                    <td className="px-4 py-2 border-secondary-200 dark:border-secondary-700 font-mono text-sm">string</td>
                    <td className="px-4 py-2 border-secondary-200 dark:border-secondary-700 font-mono text-sm">'start'</td>
                    <td className="px-4 py-2 border-secondary-200 dark:border-secondary-700">
                      Content distribution along the vertical axis
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-4">GridItem Props</h3>
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
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">colSpan</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">number</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">1</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                      Number of columns this item should span
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">rowSpan</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">number</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">1</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                      Number of rows this item should span
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">colStart</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">number</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">-</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                      Column start position (1-based)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">colEnd</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">number</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">-</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                      Column end position (inclusive)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">rowStart</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">number</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700 font-mono text-sm">-</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">
                      Row start position (1-based)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-secondary-200 dark:border-secondary-700 font-mono text-sm">rowEnd</td>
                    <td className="px-4 py-2 border-secondary-200 dark:border-secondary-700 font-mono text-sm">number</td>
                    <td className="px-4 py-2 border-secondary-200 dark:border-secondary-700 font-mono text-sm">-</td>
                    <td className="px-4 py-2 border-secondary-200 dark:border-secondary-700">
                      Row end position (inclusive)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Table of Contents - Right Side */}
        <div className="hidden lg:block w-64 relative">
          <div className="sticky top-16">
            <TableOfContents items={tocItems} />
          </div>
        </div>
      </div>
    </>
  );
} 