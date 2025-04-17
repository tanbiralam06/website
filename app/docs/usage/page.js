'use client'

import Link from 'next/link';
import CodeBlock from '../../../components/CodeBlock';
import TableOfContents from '../../../components/TableOfContents';
import React from 'react';

export default function UsagePage() {
  const tocItems = [
    { id: 'basic-usage', title: 'Basic Usage' },
    { id: 'component-props', title: 'Component Props' },
    { id: 'styling', title: 'Styling Components' },
    { id: 'patterns', title: 'Common Patterns' },
    { id: 'forms', title: 'Working with Forms' },
    { id: 'advanced', title: 'Advanced Usage' },
    { id: 'best-practices', title: 'Best Practices' },
  ];
  
  const [buttonShowCode, setButtonShowCode] = React.useState(false);
  const [inputShowCode, setInputShowCode] = React.useState(false);

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 py-6 lg:py-10 max-w-[1400px] mx-auto">
      <div className="flex-1 min-w-0">
        <header className="mb-10 lg:mb-12">
          <div className="flex items-center gap-2 text-sm text-secondary-500 dark:text-secondary-400 mb-4">
            <Link href="/docs" className="hover:text-primary-600 dark:hover:text-primary-400">Docs</Link>
            <span>/</span>
            <span>Usage</span>
          </div>
          <h1 id="basic-usage" className="text-3xl sm:text-4xl font-bold text-secondary-900 dark:text-white mb-4 scroll-mt-20">Usage</h1>
          <p className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-300">
            Learn how to use ReacUI components effectively in your React projects
          </p>
        </header>

        <section className="mb-10 lg:mb-16 scroll-mt-20">
          <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">Basic Usage</h2>
          
          <p className="text-secondary-600 dark:text-secondary-300 mb-6">
            After <Link href="/docs/installation" className="text-primary-600 dark:text-primary-400 hover:underline">installing ReacUI</Link>, you can start importing and using components in your React application. All components are exported from the main package entry point.
          </p>

          <div className="overflow-hidden rounded-lg mb-8">
            <CodeBlock 
              code={`import { Button, Card, Input } from 'reacui';

function MyComponent() {
  return (
    <div>
      <Card className="p-4">
        <h2 className="text-xl font-bold">Hello World</h2>
        <p className="mt-2">This is a simple card component with custom content.</p>
        <div className="mt-4">
          <Button variant="primary">Click Me</Button>
        </div>
      </Card>
    </div>
  );
}`} 
              language="jsx"
            />
          </div>

          <div className="p-6 bg-white dark:bg-secondary-800/60 rounded-lg border border-secondary-200 dark:border-secondary-700 mb-6">
            <div className="rounded-lg border border-secondary-200 dark:border-secondary-700 p-4">
              <h2 className="text-xl font-bold">Hello World</h2>
              <p className="mt-2">This is a simple card component with custom content.</p>
              <div className="mt-4">
                <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
                  Click Me
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg">
            <h4 className="font-medium text-blue-800 dark:text-blue-300">Tip</h4>
            <p className="mt-1 text-blue-700 dark:text-blue-400">
              All ReacUI components are built to be fully compatible with React Server Components in Next.js. For client-side interactivity, some components will need to be used within client components.
            </p>
          </div>
        </section>

        <section id="component-props" className="mb-10 lg:mb-16 scroll-mt-20">
          <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">Component Props</h2>
          
          <p className="text-secondary-600 dark:text-secondary-300 mb-6">
            ReacUI components accept standardized props for consistency. Most components share common props like <code className="text-sm bg-secondary-100 dark:bg-secondary-800 px-1.5 py-0.5 rounded">className</code>, <code className="text-sm bg-secondary-100 dark:bg-secondary-800 px-1.5 py-0.5 rounded">disabled</code>, and <code className="text-sm bg-secondary-100 dark:bg-secondary-800 px-1.5 py-0.5 rounded">variant</code>.
          </p>

          {/* Button Component Example with Tabs */}
          <div className="mb-8 border border-secondary-200 dark:border-secondary-700 rounded-lg overflow-hidden">
            <div className="bg-secondary-100 dark:bg-secondary-800 px-4 py-3 border-b border-secondary-200 dark:border-secondary-700 flex">
              <h3 className="text-base font-medium text-secondary-900 dark:text-white">Button Component</h3>
              <div className="ml-auto flex">
                <button 
                  className={`px-3 py-1 rounded-md text-sm font-medium mr-2 ${
                    !buttonShowCode ? 'bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white shadow-sm' : 'text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 hover:dark:text-white'
                  }`}
                  onClick={() => setButtonShowCode(false)}
                >
                  Preview
                </button>
                <button 
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    buttonShowCode ? 'bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white shadow-sm' : 'text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 hover:dark:text-white'
                  }`}
                  onClick={() => setButtonShowCode(true)}
                >
                  Code
                </button>
              </div>
            </div>
            <div>
              {buttonShowCode ? (
                <div className="overflow-hidden">
                  <CodeBlock 
                    code={`// Button component with various props
<Button 
  variant="primary"        // Appearance: primary, secondary, outline, ghost, or danger
  size="md"                // Size: sm, md, or lg
  disabled={false}         // Disabled state
  loading={isLoading}      // Loading state with spinner
  onClick={handleClick}    // Event handler
  className="w-full mt-4"  // Additional classes
>
  Submit
</Button>`} 
                    language="jsx"
                  />
                </div>
              ) : (
                <div className="p-6 bg-white dark:bg-secondary-800/60">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium text-secondary-500 dark:text-secondary-400 mb-4">Button Variants</h3>
                      <div className="flex flex-wrap gap-3">
                        <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
                          Primary
                        </button>
                        <button className="px-4 py-2 bg-secondary-200 text-secondary-700 dark:bg-secondary-700 dark:text-secondary-200 rounded-md hover:bg-secondary-300 dark:hover:bg-secondary-600 transition-colors">
                          Secondary
                        </button>
                        <button className="px-4 py-2 border border-secondary-300 dark:border-secondary-600 rounded-md hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors">
                          Outline
                        </button>
                        <button className="px-4 py-2 text-secondary-700 dark:text-secondary-300 rounded-md hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors">
                          Ghost
                        </button>
                        <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                          Danger
                        </button>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-secondary-500 dark:text-secondary-400 mb-4">Button Sizes</h3>
                      <div className="flex flex-wrap items-center gap-3">
                        <button className="px-2.5 py-1.5 text-xs bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
                          Small
                        </button>
                        <button className="px-4 py-2 text-sm bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
                          Medium
                        </button>
                        <button className="px-5 py-2.5 text-base bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
                          Large
                        </button>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-secondary-500 dark:text-secondary-400 mb-4">Button States</h3>
                      <div className="flex flex-wrap gap-3">
                        <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
                          Normal
                        </button>
                        <button className="px-4 py-2 bg-primary-600 text-white rounded-md opacity-50 cursor-not-allowed">
                          Disabled
                        </button>
                        <button className="px-4 py-2 bg-primary-600 text-white rounded-md flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Loading
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Input Component Example with Tabs */}
          <div className="mb-8 border border-secondary-200 dark:border-secondary-700 rounded-lg overflow-hidden">
            <div className="bg-secondary-100 dark:bg-secondary-800 px-4 py-3 border-b border-secondary-200 dark:border-secondary-700 flex">
              <h3 className="text-base font-medium text-secondary-900 dark:text-white">Input Component</h3>
              <div className="ml-auto flex">
                <button 
                  className={`px-3 py-1 rounded-md text-sm font-medium mr-2 ${
                    !inputShowCode ? 'bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white shadow-sm' : 'text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 hover:dark:text-white'
                  }`}
                  onClick={() => setInputShowCode(false)}
                >
                  Preview
                </button>
                <button 
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    inputShowCode ? 'bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white shadow-sm' : 'text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 hover:dark:text-white'
                  }`}
                  onClick={() => setInputShowCode(true)}
                >
                  Code
                </button>
              </div>
            </div>
            <div>
              {inputShowCode ? (
                <div className="overflow-hidden">
                  <CodeBlock 
                    code={`// Input component with various props
<Input
  type="email"            // Input type: text, email, password, etc.
  label="Email Address"   // Label text
  placeholder="your@email.com"
  value={email}
  onChange={setEmail}
  error={errors.email}    // Error message
  required                // HTML5 validation
  className="mb-4"        // Additional classes
/>

// Form group with multiple inputs
<FormGroup>
  <Input
    type="text"
    label="First Name"
    required
  />
  <Input
    type="text"
    label="Last Name"
    required
  />
</FormGroup>`} 
                    language="jsx"
                  />
                </div>
              ) : (
                <div className="p-6 bg-white dark:bg-secondary-800/60">
                  <div className="max-w-md space-y-6">
                    <div>
                      <h3 className="text-sm font-medium text-secondary-500 dark:text-secondary-400 mb-4">Basic Inputs</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                            Email Address
                          </label>
                          <input 
                            type="email" 
                            placeholder="your@email.com" 
                            className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-secondary-800"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                            Password
                          </label>
                          <input 
                            type="password" 
                            className="w-full px-3 py-2 border border-red-300 dark:border-red-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-secondary-800"
                          />
                          <p className="mt-1 text-sm text-red-600 dark:text-red-400">Password is required</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-secondary-500 dark:text-secondary-400 mb-4">Input with Icon</h3>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg className="h-5 w-5 text-secondary-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          placeholder="Search..."
                          className="pl-10 w-full px-3 py-2 border border-secondary-300 dark:border-secondary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-secondary-800"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-secondary-500 dark:text-secondary-400 mb-4">Form Group</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                            First Name
                          </label>
                          <input 
                            type="text" 
                            className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-secondary-800"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                            Last Name
                          </label>
                          <input 
                            type="text" 
                            className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-secondary-800"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <p className="text-secondary-600 dark:text-secondary-300 mb-6">
            Each component's documentation page provides a complete list of available props. In general, ReacUI components are designed to feel familiar if you've used other React component libraries.
          </p>
        </section>

        <section id="styling" className="mb-10 lg:mb-16 scroll-mt-20">
          <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">Styling Components</h2>
          
          <p className="text-secondary-600 dark:text-secondary-300 mb-6">
            ReacUI is built with Tailwind CSS, making it easy to customize components using Tailwind classes. You can pass Tailwind classes via the <code className="text-sm bg-secondary-100 dark:bg-secondary-800 px-1.5 py-0.5 rounded">className</code> prop to override default styles.
          </p>

          <div className="overflow-hidden rounded-lg mb-8">
            <CodeBlock 
              code={`// Default button
<Button variant="primary">Default Button</Button>

// Customized button with Tailwind classes
<Button 
  variant="primary"
  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-none shadow-lg"
>
  Customized Button
</Button>`} 
              language="jsx"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex justify-center items-center p-6 bg-white dark:bg-secondary-800/60 rounded-lg border border-secondary-200 dark:border-secondary-700">
              <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
                Default Button
              </button>
            </div>
            <div className="flex justify-center items-center p-6 bg-white dark:bg-secondary-800/60 rounded-lg border border-secondary-200 dark:border-secondary-700">
              <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-md border-none shadow-lg transition-colors">
                Customized Button
              </button>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">Theme Customization</h3>

          <p className="text-secondary-600 dark:text-secondary-300 mb-6">
            For global styling changes, you can customize your Tailwind config to match your brand colors. ReacUI will automatically use these colors:
          </p>

          <div className="overflow-hidden rounded-lg mb-6">
            <CodeBlock 
              code={`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          /* ... */
          600: '#0284c7',  // Your primary brand color
          /* ... */
          900: '#0c4a6e',
        },
        secondary: {
          /* Your secondary colors */
        },
      },
    },
  },
}`} 
              language="javascript"
            />
          </div>
        </section>

        <section id="patterns" className="mb-10 lg:mb-16 scroll-mt-20">
          <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">Common Patterns</h2>
          
          <p className="text-secondary-600 dark:text-secondary-300 mb-6">
            Here are some common patterns and component combinations that you'll find useful:
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">Layout Containers</h3>
              <div className="overflow-hidden rounded-lg mb-6">
                <CodeBlock 
                  code={`<Card>
  <Card.Header>
    <Card.Title>Dashboard</Card.Title>
    <Card.Description>Your recent activity</Card.Description>
  </Card.Header>
  <Card.Content>
    {/* Card content */}
  </Card.Content>
  <Card.Footer>
    <Button variant="outline" size="sm">View All</Button>
  </Card.Footer>
</Card>`} 
                  language="jsx"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">Data Display</h3>
              <div className="overflow-hidden rounded-lg mb-6">
                <CodeBlock 
                  code={`<Table>
  <Table.Header>
    <Table.Row>
      <Table.Head>Name</Table.Head>
      <Table.Head>Email</Table.Head>
      <Table.Head>Status</Table.Head>
      <Table.Head>Actions</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {users.map(user => (
      <Table.Row key={user.id}>
        <Table.Cell>{user.name}</Table.Cell>
        <Table.Cell>{user.email}</Table.Cell>
        <Table.Cell>
          <Badge variant={user.status === 'active' ? 'success' : 'warning'}>
            {user.status}
          </Badge>
        </Table.Cell>
        <Table.Cell>
          <Button variant="ghost" size="sm">Edit</Button>
        </Table.Cell>
      </Table.Row>
    ))}
  </Table.Body>
</Table>`} 
                  language="jsx"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">Notifications and Alerts</h3>
              <div className="overflow-hidden rounded-lg mb-6">
                <CodeBlock 
                  code={`// Success Alert
<Alert variant="success">
  <Alert.Icon />
  <Alert.Title>Success!</Alert.Title>
  <Alert.Description>Your changes have been saved successfully.</Alert.Description>
</Alert>

// Error Alert
<Alert variant="error">
  <Alert.Icon />
  <Alert.Title>Error</Alert.Title>
  <Alert.Description>There was a problem with your submission.</Alert.Description>
</Alert>`} 
                  language="jsx"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">Conditional Rendering</h3>
              <div className="overflow-hidden rounded-lg mb-8">
                <CodeBlock 
                  code={`// Conditional rendering
function UserProfile({ user, isLoading }) {
  if (isLoading) {
    return <LoadingSpinner />;
  }
  
  if (!user) {
    return (
      <EmptyState
        message="No profile found"
        action={<Button>Sign In</Button>}
      />
    );
  }
  
  return (
    <ProfileCard
      name={user.name}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
}`} 
                  language="jsx"
                />
              </div>

              <div className="p-6 bg-white dark:bg-secondary-800/60 rounded-lg border border-secondary-200 dark:border-secondary-700 mb-6">
                <h3 className="text-sm font-medium text-secondary-500 dark:text-secondary-400 mb-2">Conditional Rendering Preview</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Loading State */}
                  <div className="p-4 border border-secondary-200 dark:border-secondary-700 rounded-lg">
                    <h4 className="text-xs text-secondary-500 font-medium mb-3">Loading State</h4>
                    <div className="flex items-center justify-center p-6">
                      <div className="h-10 w-10 rounded-full border-2 border-primary-600 border-t-transparent animate-spin"></div>
                    </div>
                    <div className="mt-3 text-xs text-center text-secondary-500">
                      <code>isLoading === true</code>
                    </div>
                  </div>

                  {/* Empty State */}
                  <div className="p-4 border border-secondary-200 dark:border-secondary-700 rounded-lg">
                    <h4 className="text-xs text-secondary-500 font-medium mb-3">Empty State</h4>
                    <div className="flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-secondary-100 dark:bg-secondary-700 flex items-center justify-center mb-3">
                        <svg className="h-6 w-6 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium mb-3">No profile found</p>
                      <button className="px-3 py-1 bg-primary-600 text-white text-sm rounded-md">Sign In</button>
                    </div>
                    <div className="mt-3 text-xs text-center text-secondary-500">
                      <code>user === null</code>
                    </div>
                  </div>

                  {/* User Profile */}
                  <div className="p-4 border border-secondary-200 dark:border-secondary-700 rounded-lg">
                    <h4 className="text-xs text-secondary-500 font-medium mb-3">User Profile</h4>
                    <div className="flex flex-col items-center p-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-xl font-bold mb-3">
                        JD
                      </div>
                      <h3 className="font-medium text-base">Jane Doe</h3>
                      <p className="text-secondary-500 text-sm mb-3">jane@example.com</p>
                      <div className="w-full grid grid-cols-3 gap-2 text-center pt-2 border-t border-secondary-200 dark:border-secondary-700">
                        <div>
                          <div className="font-medium">142</div>
                          <div className="text-xs text-secondary-500">Posts</div>
                        </div>
                        <div>
                          <div className="font-medium">3.2k</div>
                          <div className="text-xs text-secondary-500">Followers</div>
                        </div>
                        <div>
                          <div className="font-medium">256</div>
                          <div className="text-xs text-secondary-500">Following</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-1 text-xs text-center text-secondary-500">
                      <code>user provided</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="forms" className="mb-10 lg:mb-16 scroll-mt-20">
          <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">Working with Forms</h2>
          
          <p className="text-secondary-600 dark:text-secondary-300 mb-6">
            ReacUI provides form components that work well together and are easy to integrate with form libraries like React Hook Form or Formik.
          </p>

          <div className="overflow-hidden rounded-lg mb-8">
            <CodeBlock 
              code={`import { useState } from 'react';
import { Button, Card, Input, Checkbox, Select } from 'reacui';

function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
    agreeToTerms: false
  });
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Submit to your API
  };
  
  return (
    <Card className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Create Account</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <Input
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          
          <Input
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <Input
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          
          <Select
            label="Role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select a role</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
          </Select>
          
          <Checkbox
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            label="I agree to the terms and conditions"
            required
          />
          
          <Button type="submit" variant="primary" className="w-full">
            Create Account
          </Button>
        </div>
      </form>
    </Card>
  );
}`} 
              language="jsx"
            />
          </div>

          <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">React Hook Form Integration</h3>

          <p className="text-secondary-600 dark:text-secondary-300 mb-6">
            ReacUI components work seamlessly with React Hook Form. Here's how to use them together:
          </p>

          <div className="overflow-hidden rounded-lg mb-6">
            <CodeBlock 
              code={`import { useForm } from 'react-hook-form';
import { Button, Input, Checkbox } from 'reacui';

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    // Submit to your API
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Email"
        error={errors.email?.message}
        {...register('email', { 
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address'
          }
        })}
      />
      
      <Input
        type="password"
        label="Password"
        error={errors.password?.message}
        {...register('password', { 
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters'
          }
        })}
      />
      
      <Checkbox
        label="Remember me"
        {...register('remember')}
      />
      
      <Button type="submit" variant="primary">
        Sign In
      </Button>
    </form>
  );
}`} 
              language="jsx"
            />
          </div>
        </section>

        <section id="advanced" className="mb-10 lg:mb-16 scroll-mt-20">
          <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">Advanced Usage</h2>
          
          <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">Composition Patterns</h3>
          
          <p className="text-secondary-600 dark:text-secondary-300 mb-6">
            ReacUI components are designed to be composable. You can combine them in various ways to create complex UIs:
          </p>

          <div className="overflow-hidden rounded-lg mb-8">
            <CodeBlock 
              code={`// Component Composition
function Layout({ children }) {
  return (
    <div className="layout">
      {children}
    </div>
  );
}

function Sidebar({ children }) {
  return (
    <aside className="sidebar">
      {children}
    </aside>
  );
}

function Content({ children }) {
  return (
    <main className="content">
      {children}
    </main>
  );
}

function Dashboard() {
  return (
    <Layout>
      <Sidebar>
        <NavLinks />
        <ThemeToggle />
      </Sidebar>
      <Content>
        <Header />
        <DataGrid />
        <Footer />
      </Content>
    </Layout>
  );
}`} 
              language="jsx"
            />
          </div>

          <div className="p-6 bg-white dark:bg-secondary-800/60 rounded-lg border border-secondary-200 dark:border-secondary-700 mb-8">
            <h3 className="text-sm font-medium text-secondary-500 dark:text-secondary-400 mb-2">Component Composition Preview</h3>
            <div className="border border-secondary-200 dark:border-secondary-700 rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row h-[400px]">
                {/* Sidebar */}
                <div className="w-full md:w-64 bg-secondary-100 dark:bg-secondary-800 p-4 border-b md:border-b-0 md:border-r border-secondary-200 dark:border-secondary-700">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-8 h-8 rounded-md bg-primary-600 flex items-center justify-center">
                      <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">AppName</span>
                  </div>
                  
                  {/* NavLinks component */}
                  <div className="mb-6">
                    <h4 className="text-xs uppercase text-secondary-500 font-medium mb-3">Navigation</h4>
                    <nav className="space-y-1">
                      <a className="flex items-center px-3 py-2 text-sm rounded-md bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300">
                        <svg className="mr-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        Dashboard
                      </a>
                      <a className="flex items-center px-3 py-2 text-sm rounded-md text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-800">
                        <svg className="mr-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        Users
                      </a>
                      <a className="flex items-center px-3 py-2 text-sm rounded-md text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-800">
                        <svg className="mr-3 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                        </svg>
                        Finance
                      </a>
                    </nav>
                  </div>
                  
                  {/* ThemeToggle component */}
                  <div className="pt-4 border-t border-secondary-200 dark:border-secondary-700">
                    <button className="w-full flex items-center justify-between px-3 py-2 text-sm rounded-md text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-800">
                      <span>Dark Mode</span>
                      <div className="w-8 h-4 rounded-full bg-primary-600 relative">
                        <div className="absolute right-0.5 top-0.5 w-3 h-3 rounded-full bg-white"></div>
                      </div>
                    </button>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 overflow-auto">
                  {/* Header component */}
                  <header className="border-b border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-900 p-4">
                    <div className="flex justify-between items-center">
                      <h1 className="text-lg font-medium">Dashboard Overview</h1>
                      <div className="flex items-center space-x-3">
                        <button className="p-1.5 rounded-full text-secondary-400 hover:text-secondary-500 hover:bg-secondary-100 dark:hover:bg-secondary-800">
                          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                          </svg>
                        </button>
                        <div className="w-8 h-8 rounded-full bg-secondary-300 dark:bg-secondary-600"></div>
                      </div>
                    </div>
                  </header>
                  
                  {/* DataGrid component */}
                  <div className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-white dark:bg-secondary-800 rounded-lg p-4 border border-secondary-200 dark:border-secondary-700">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm text-secondary-500">Total Users</p>
                            <p className="text-2xl font-semibold mt-1">8,249</p>
                          </div>
                          <div className="p-2 rounded-md bg-green-100 text-green-600">
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div className="mt-2 text-sm text-green-600">
                          <span className="font-medium">+14%</span> from last month
                        </div>
                      </div>
                      <div className="bg-white dark:bg-secondary-800 rounded-lg p-4 border border-secondary-200 dark:border-secondary-700">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm text-secondary-500">Revenue</p>
                            <p className="text-2xl font-semibold mt-1">$23,432</p>
                          </div>
                          <div className="p-2 rounded-md bg-green-100 text-green-600">
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div className="mt-2 text-sm text-green-600">
                          <span className="font-medium">+8%</span> from last month
                        </div>
                      </div>
                      <div className="bg-white dark:bg-secondary-800 rounded-lg p-4 border border-secondary-200 dark:border-secondary-700">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm text-secondary-500">Conversion</p>
                            <p className="text-2xl font-semibold mt-1">3.6%</p>
                          </div>
                          <div className="p-2 rounded-md bg-red-100 text-red-600">
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div className="mt-2 text-sm text-red-600">
                          <span className="font-medium">-2.3%</span> from last month
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-secondary-800 rounded-lg border border-secondary-200 dark:border-secondary-700 overflow-hidden">
                      <div className="px-4 py-3 border-b border-secondary-200 dark:border-secondary-700 bg-secondary-50 dark:bg-secondary-800/80">
                        <h3 className="font-medium">Recent Users</h3>
                      </div>
                      <table className="min-w-full divide-y divide-secondary-200 dark:divide-secondary-700">
                        <thead className="bg-secondary-50 dark:bg-secondary-800/50">
                          <tr>
                            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                              Name
                            </th>
                            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                              Email
                            </th>
                            <th scope="col" className="px-4 py-2 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-secondary-800 divide-y divide-secondary-200 dark:divide-secondary-700">
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm">John Smith</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-secondary-500">john@example.com</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Active
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm">Alice Johnson</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-secondary-500">alice@example.com</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Active
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 whitespace-nowrap text-sm">Robert Brown</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm text-secondary-500">robert@example.com</td>
                            <td className="px-4 py-2 whitespace-nowrap text-sm">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-secondary-100 text-secondary-800">
                                Inactive
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  {/* Footer component */}
                  <footer className="border-t border-secondary-200 dark:border-secondary-700 p-4 text-center text-sm text-secondary-500">
                    © 2023 Example App. All rights reserved.
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="best-practices" className="mb-10 lg:mb-16 scroll-mt-20">
          <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">Best Practices</h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-white dark:bg-secondary-800/60 rounded-lg border border-secondary-200 dark:border-secondary-700">
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                <span className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Use Consistent Patterns
                </span>
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300">
                Maintain consistency in your UI by using the same component variants and sizes for similar actions throughout your application.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-secondary-800/60 rounded-lg border border-secondary-200 dark:border-secondary-700">
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                <span className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Follow Accessibility Guidelines
                </span>
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300">
                Always include proper labels, aria attributes, and ensure keyboard navigation works correctly. ReacUI handles most of this for you, but always test your implementation.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-secondary-800/60 rounded-lg border border-secondary-200 dark:border-secondary-700">
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                <span className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Create Component Compositions
                </span>
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300">
                Instead of building complex components from scratch, compose existing components together to create new UIs. This maintains consistency and reduces code duplication.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-secondary-800/60 rounded-lg border border-secondary-200 dark:border-secondary-700">
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                <span className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Optimize for Performance
                </span>
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300">
                For large lists or complex UIs, use virtualization, pagination, and other performance optimization techniques. Consider code-splitting to reduce initial bundle size.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 border border-secondary-200 dark:border-secondary-700 rounded-lg bg-secondary-50 dark:bg-secondary-900/50">
            <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">Common Pitfalls to Avoid</h3>
            
            <ul className="space-y-3">
              <li className="flex gap-3">
                <svg className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div>
                  <strong className="text-secondary-900 dark:text-white">Overriding Too Many Styles</strong>
                  <p className="text-secondary-600 dark:text-secondary-400 mt-1">
                    Instead of heavily customizing components with inline styles or className overrides, consider creating your own component wrappers or extending the theme.
                  </p>
                </div>
              </li>
              
              <li className="flex gap-3">
                <svg className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div>
                  <strong className="text-secondary-900 dark:text-white">Ignoring Mobile Responsiveness</strong>
                  <p className="text-secondary-600 dark:text-secondary-400 mt-1">
                    Always test your UI on different screen sizes and ensure it's fully responsive. Use responsive utilities provided by Tailwind for adaptable layouts.
                  </p>
                </div>
              </li>
              
              <li className="flex gap-3">
                <svg className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div>
                  <strong className="text-secondary-900 dark:text-white">Missing Feedback States</strong>
                  <p className="text-secondary-600 dark:text-secondary-400 mt-1">
                    Always provide appropriate feedback for user actions. Use loading states, success/error messages, and transitions to create a polished user experience.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <div className="mt-12 border-t border-secondary-200 dark:border-secondary-800 pt-8">
          <div className="flex justify-between items-center">
            <Link 
              href="/docs/installation" 
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300"
            >
              <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Installation
            </Link>
            <Link 
              href="/docs/theming" 
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300"
            >
              Theming
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Right sidebar - Table of contents */}
      <div className="hidden lg:block w-64 shrink-0 sticky top-20">
        <TableOfContents items={tocItems} />
      </div>
    </div>
  );
} 