"use client";

import { useState } from 'react';
import Link from 'next/link';
import TabGroup from '../../../components/TabGroup';
import ComponentExample from '../../../components/ComponentExample';
import TableOfContents from '../../../components/TableOfContents';
import Banner from '../../../components/banner';
// Mock imports of the actual reacui components
// In a real implementation, you would import from your component library
// import { Avatar } from 'reacui';

export default function AvatarPage() {
  // Table of Contents items
  const tocItems = [
    { id: 'overview', title: 'Overview' },
    { id: 'installation', title: 'Installation' },
    { id: 'import', title: 'Import' },
    { id: 'sizes', title: 'Avatar Sizes' },
    { id: 'variants', title: 'Avatar Variants' },
    { id: 'fallback', title: 'Avatar Fallback' },
    { id: 'group', title: 'Avatar Group' },
    { id: 'api-reference', title: 'API Reference' }
  ];

  // Main example for the top showcase
  const mainExample = (
    <div className="flex flex-wrap gap-4">
      <div className="flex flex-col items-center gap-2">
        <div className="relative w-12 h-12 overflow-hidden bg-secondary-100 dark:bg-secondary-700 rounded-full">
          <img 
            src="https://i.pravatar.cc/150?img=1" 
            alt="Avatar" 
            className="object-cover w-full h-full"
          />
        </div>
        <span className="text-sm text-secondary-600 dark:text-secondary-400">Image</span>
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <div className="relative flex items-center justify-center w-12 h-12 overflow-hidden bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full">
          <span className="font-medium text-base">JD</span>
        </div>
        <span className="text-sm text-secondary-600 dark:text-secondary-400">Initials</span>
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <div className="relative flex items-center justify-center w-12 h-12 overflow-hidden bg-secondary-100 dark:bg-secondary-700 text-secondary-800 dark:text-secondary-200 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
        <span className="text-sm text-secondary-600 dark:text-secondary-400">Fallback</span>
      </div>
    </div>
  );

  const mainCode = `<Avatar src="https://i.pravatar.cc/150?img=1" alt="User avatar" />
<Avatar initials="JD" variant="primary" />
<Avatar fallback />`;

  return (
    <>
      <Banner />

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <h1 id="overview" className="text-4xl font-bold text-secondary-900 dark:text-white mb-3">Avatar</h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8">
            An image component for displaying user profile pictures with fallback states
          </p>

          {/* Main Example with Tabs */}
          <div className="mb-12">
            <TabGroup example={mainExample} code={mainCode} />
          </div>

          {/* Installation Section */}
          <section id="installation" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Installation</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Avatar component is part of the ReacUI library. Install the package to use it in your project.
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
              Import the Avatar component into your React component.
            </p>
            <div className="bg-secondary-900 text-white p-4 rounded-md overflow-x-auto">
              <pre className="text-sm">
                <code>import {'{ Avatar }'} from 'reacui';</code>
              </pre>
            </div>
          </section>

          {/* Avatar Sizes Section */}
          <section id="sizes" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Avatar Sizes</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Avatar component comes in different sizes to fit your needs.
            </p>

            <ComponentExample
              example={
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="relative w-8 h-8 overflow-hidden bg-secondary-100 dark:bg-secondary-700 rounded-full">
                    <img 
                      src="https://i.pravatar.cc/150?img=2" 
                      alt="Avatar" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="relative w-12 h-12 overflow-hidden bg-secondary-100 dark:bg-secondary-700 rounded-full">
                    <img 
                      src="https://i.pravatar.cc/150?img=3" 
                      alt="Avatar" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="relative w-16 h-16 overflow-hidden bg-secondary-100 dark:bg-secondary-700 rounded-full">
                    <img 
                      src="https://i.pravatar.cc/150?img=4" 
                      alt="Avatar" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="relative w-20 h-20 overflow-hidden bg-secondary-100 dark:bg-secondary-700 rounded-full">
                    <img 
                      src="https://i.pravatar.cc/150?img=5" 
                      alt="Avatar" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              }
              code={`<Avatar size="xs" src="https://i.pravatar.cc/150?img=2" alt="Small avatar" />
<Avatar size="sm" src="https://i.pravatar.cc/150?img=3" alt="Medium avatar" />
<Avatar size="md" src="https://i.pravatar.cc/150?img=4" alt="Large avatar" />
<Avatar size="lg" src="https://i.pravatar.cc/150?img=5" alt="Extra large avatar" />`}
            />
          </section>

          {/* Avatar Variants Section */}
          <section id="variants" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Avatar Variants</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Customize the style of your avatars with different variants.
            </p>

            <ComponentExample
              example={
                <div className="flex flex-wrap gap-4">
                  <div className="relative flex items-center justify-center w-12 h-12 overflow-hidden bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full">
                    <span className="font-medium text-base">JD</span>
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12 overflow-hidden bg-secondary-100 dark:bg-secondary-700 text-secondary-800 dark:text-secondary-200 rounded-full">
                    <span className="font-medium text-base">TS</span>
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12 overflow-hidden bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                    <span className="font-medium text-base">AB</span>
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12 overflow-hidden bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full">
                    <span className="font-medium text-base">CD</span>
                  </div>
                </div>
              }
              code={`<Avatar initials="JD" variant="primary" />
<Avatar initials="TS" variant="secondary" />
<Avatar initials="AB" variant="success" />
<Avatar initials="CD" variant="danger" />`}
            />
          </section>

          {/* Avatar Fallback Section */}
          <section id="fallback" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Avatar Fallback</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Avatars can display a fallback when the image fails to load.
            </p>

            <ComponentExample
              example={
                <div className="flex gap-4">
                  <div className="relative flex items-center justify-center w-12 h-12 overflow-hidden bg-secondary-100 dark:bg-secondary-700 text-secondary-800 dark:text-secondary-200 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12 overflow-hidden bg-secondary-100 dark:bg-secondary-700 text-secondary-800 dark:text-secondary-200 rounded-full">
                    <span className="font-medium text-base">EF</span>
                  </div>
                </div>
              }
              code={`<Avatar src="invalid-image-url.jpg" fallback />
<Avatar src="invalid-image-url.jpg" fallback="initials" initials="EF" />`}
            />
          </section>

          {/* Avatar Group Section */}
          <section id="group" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Avatar Group</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Group multiple avatars together to represent a team or collection of users.
            </p>

            <ComponentExample
              example={
                <div className="flex -space-x-3">
                  <div className="relative w-12 h-12 overflow-hidden bg-secondary-100 dark:bg-secondary-700 rounded-full border-2 border-white dark:border-secondary-900">
                    <img 
                      src="https://i.pravatar.cc/150?img=6" 
                      alt="Avatar" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="relative w-12 h-12 overflow-hidden bg-secondary-100 dark:bg-secondary-700 rounded-full border-2 border-white dark:border-secondary-900">
                    <img 
                      src="https://i.pravatar.cc/150?img=7" 
                      alt="Avatar" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="relative w-12 h-12 overflow-hidden bg-secondary-100 dark:bg-secondary-700 rounded-full border-2 border-white dark:border-secondary-900">
                    <img 
                      src="https://i.pravatar.cc/150?img=8" 
                      alt="Avatar" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12 overflow-hidden bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full border-2 border-white dark:border-secondary-900">
                    <span className="font-medium text-sm">+3</span>
                  </div>
                </div>
              }
              code={`<Avatar.Group>
  <Avatar src="https://i.pravatar.cc/150?img=6" alt="Team member 1" />
  <Avatar src="https://i.pravatar.cc/150?img=7" alt="Team member 2" />
  <Avatar src="https://i.pravatar.cc/150?img=8" alt="Team member 3" />
  <Avatar.Counter count={3} />
</Avatar.Group>`}
            />
          </section>

          {/* API Reference Section */}
          <section id="api-reference" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">API Reference</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The following props are available for the Avatar components.
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
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700" rowSpan="6">Avatar</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">src</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">-</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">The source URL of the avatar image.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">alt</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">''</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Alt text for the avatar image.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">size</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">'md'</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Size of the avatar: 'xs', 'sm', 'md', 'lg', 'xl'.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">variant</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">'secondary'</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Color variant: 'primary', 'secondary', 'success', 'danger', etc.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">initials</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">-</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Initials to display when no image is available.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">fallback</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">boolean | string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">false</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Type of fallback to use when image fails to load.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Avatar.Group</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">max</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">number</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">-</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Maximum number of avatars to display before showing the counter.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Avatar.Counter</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">count</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">number</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">0</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Number of additional avatars to represent in the counter.</td>
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