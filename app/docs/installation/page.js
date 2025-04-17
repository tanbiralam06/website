'use client'

import Link from 'next/link';
import CodeBlock from '../../../components/CodeBlock';
import TableOfContents from '../../../components/TableOfContents';
import { useState } from 'react';

export default function InstallationPage() {
  const [activeTab, setActiveTab] = useState('npm');
  const tocItems = [
    { id: 'overview', title: 'Overview' },
    { id: 'requirements', title: 'Requirements' },
    { id: 'installation', title: 'Installation' },
    { id: 'framework-setup', title: 'Framework Setup' },
    { id: 'tailwind-setup', title: 'Tailwind Setup' },
    { id: 'theming', title: 'Theming' },
    { id: 'usage', title: 'Basic Usage' },
    { id: 'troubleshooting', title: 'Troubleshooting' }
  ];

  const packageManagerCommands = {
    npm: 'npm install reacui',
    yarn: 'yarn add reacui',
    pnpm: 'pnpm add reacui'
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 py-6 lg:py-10 max-w-[1400px] mx-auto">
      <div className="flex-1 min-w-0">
        <header className="mb-10 lg:mb-12">
          <div className="flex items-center gap-2 text-sm text-secondary-500 dark:text-secondary-400 mb-4">
            <Link href="/docs" className="hover:text-primary-600 dark:hover:text-primary-400">Docs</Link>
            <span>/</span>
            <span>Installation</span>
          </div>
          <h1 id="overview" className="text-3xl sm:text-4xl font-bold text-secondary-900 dark:text-white mb-4 scroll-mt-20">Installation</h1>
          <p className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-300">
            Get started with ReacUI in your React project within minutes
          </p>
        </header>

        <section id="requirements" className="mb-10 lg:mb-16 scroll-mt-20">
          <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">Requirements</h2>
          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex-1 p-4 sm:p-6 bg-white dark:bg-secondary-800/60 rounded-lg border border-secondary-200 dark:border-secondary-700">
              <h3 className="font-semibold mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Peer Dependencies
              </h3>
              <ul className="list-disc list-inside space-y-1.5 text-secondary-600 dark:text-secondary-300">
                <li>React 18 or higher</li>
                <li>React DOM 18 or higher</li>
                <li>Tailwind CSS 3.0 or higher</li>
              </ul>
            </div>
            <div className="flex-1 p-4 sm:p-6 bg-white dark:bg-secondary-800/60 rounded-lg border border-secondary-200 dark:border-secondary-700">
              <h3 className="font-semibold mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Browser Support
              </h3>
              <ul className="list-disc list-inside space-y-1.5 text-secondary-600 dark:text-secondary-300">
                <li>Chrome 90+</li>
                <li>Firefox 90+</li>
                <li>Safari 15+</li>
                <li>Edge 90+</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="installation" className="mb-10 lg:mb-16 scroll-mt-20">
          <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">Installation</h2>
          <p className="mb-4 sm:mb-6 text-secondary-600 dark:text-secondary-300">
            Choose your preferred package manager to install ReacUI:
          </p>

          <div className="mb-6 sm:mb-8">
            <div className="flex border-b border-secondary-200 dark:border-secondary-700 mb-4 sm:mb-6 overflow-x-auto">
              {['npm', 'yarn', 'pnpm'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 whitespace-nowrap transition-colors ${
                    activeTab === tab 
                      ? 'border-b-2 border-primary-500 font-medium text-primary-600 dark:text-primary-400' 
                      : 'text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-secondary-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="overflow-hidden rounded-lg">
              <CodeBlock 
                code={packageManagerCommands[activeTab]} 
                language="bash"
              />
            </div>
          </div>
          
          <div className="p-4 border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-950/30 rounded-r-lg mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-amber-800 dark:text-amber-300">Version Compatibility</h3>
                <div className="mt-1 text-sm text-amber-700 dark:text-amber-400">
                  Make sure you're using React 18 or higher. Support for React 17 was dropped in ReacUI v2.0.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="framework-setup" className="mb-10 lg:mb-16 scroll-mt-20">
          <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">Framework Setup</h2>
          <p className="mb-4 sm:mb-6 text-secondary-600 dark:text-secondary-300">
            ReacUI works with all popular React frameworks. Select your framework for specific setup instructions:
          </p>

          <div className="space-y-6 sm:space-y-8">
            <div className="p-5 border border-secondary-200 dark:border-secondary-700 rounded-lg bg-white dark:bg-secondary-800/60">
              <div className="font-medium text-lg mb-2">Next.js (App Router)</div>
              <div className="text-sm text-secondary-600 dark:text-secondary-400 mb-4">For Next.js 13+ projects using the app directory</div>
              <div className="overflow-hidden rounded-lg">
                <CodeBlock 
                  code={`// app/providers.js
'use client'

import { ThemeProvider } from 'reacui'

export function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>
}

// app/layout.js
import { Providers } from './providers'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}`} 
                  language="jsx"
                />
              </div>
            </div>

            <div className="p-5 border border-secondary-200 dark:border-secondary-700 rounded-lg bg-white dark:bg-secondary-800/60">
              <div className="font-medium text-lg mb-2">Create React App</div>
              <div className="text-sm text-secondary-600 dark:text-secondary-400 mb-4">For projects created with Create React App</div>
              <div className="overflow-hidden rounded-lg">
                <CodeBlock 
                  code={`// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'reacui';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);`} 
                  language="jsx"
                />
              </div>
            </div>

            <div className="p-5 border border-secondary-200 dark:border-secondary-700 rounded-lg bg-white dark:bg-secondary-800/60">
              <div className="font-medium text-lg mb-2">Vite</div>
              <div className="text-sm text-secondary-600 dark:text-secondary-400 mb-4">For projects created with Vite</div>
              <div className="overflow-hidden rounded-lg">
                <CodeBlock 
                  code={`// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'reacui'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)`} 
                  language="jsx"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="tailwind-setup" className="mb-10 lg:mb-16 scroll-mt-20">
          <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">Tailwind Setup</h2>
          <p className="mb-4 sm:mb-6 text-secondary-600 dark:text-secondary-300">
            ReacUI is built with Tailwind CSS. Follow these steps to properly configure your project:
          </p>

          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <span className="flex items-center justify-center bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 w-6 h-6 rounded-full mr-2 text-sm">1</span>
                Install Tailwind CSS
              </h3>
              <p className="mb-3 text-secondary-600 dark:text-secondary-300">
                If you haven't already installed Tailwind CSS in your project, you can do so with:
              </p>
              <div className="overflow-hidden rounded-lg">
                <CodeBlock 
                  code="npm install -D tailwindcss postcss autoprefixer" 
                  language="bash"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <span className="flex items-center justify-center bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 w-6 h-6 rounded-full mr-2 text-sm">2</span>
                Initialize Tailwind CSS
              </h3>
              <p className="mb-3 text-secondary-600 dark:text-secondary-300">
                Generate the configuration files:
              </p>
              <div className="overflow-hidden rounded-lg">
                <CodeBlock 
                  code="npx tailwindcss init -p" 
                  language="bash"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <span className="flex items-center justify-center bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 w-6 h-6 rounded-full mr-2 text-sm">3</span>
                Configure Tailwind
              </h3>
              <p className="mb-3 text-secondary-600 dark:text-secondary-300">
                Update your tailwind.config.js file to include ReacUI components:
              </p>
              <div className="overflow-hidden rounded-lg">
                <CodeBlock 
                  code={`// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/reacui/**/*.{js,jsx}"
  ],
  darkMode: 'class', // or 'media' for OS preference
  theme: {
    extend: {
      // You can extend the theme here if needed
    },
  },
  plugins: [],
}`} 
                  language="javascript"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <span className="flex items-center justify-center bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 w-6 h-6 rounded-full mr-2 text-sm">4</span>
                Add Tailwind Directives
              </h3>
              <p className="mb-3 text-secondary-600 dark:text-secondary-300">
                Add the Tailwind directives to your CSS:
              </p>
              <div className="overflow-hidden rounded-lg">
                <CodeBlock 
                  code={`/* styles/globals.css or src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;`} 
                  language="css"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="theming" className="mb-10 lg:mb-16 scroll-mt-20">
          <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">Theming</h2>
          <p className="mb-4 sm:mb-6 text-secondary-600 dark:text-secondary-300">
            ReacUI comes with a built-in theme provider that supports dark mode and custom color themes.
          </p>

          <h3 className="text-lg font-semibold mb-3">Basic Theme Setup</h3>
          <p className="mb-4 text-secondary-600 dark:text-secondary-300">
            The ThemeProvider component handles dark/light mode switching and enables custom theme configuration:
          </p>
          <div className="overflow-hidden rounded-lg mb-6">
            <CodeBlock 
              code={`import { ThemeProvider } from 'reacui';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <YourApp />
    </ThemeProvider>
  );
}`} 
              language="jsx"
            />
          </div>

          <h3 className="text-lg font-semibold mt-6 mb-3">Custom Color Theme</h3>
          <p className="mb-4 text-secondary-600 dark:text-secondary-300">
            You can customize the color scheme by extending your Tailwind config:
          </p>
          <div className="overflow-hidden rounded-lg">
            <CodeBlock 
              code={`// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // ... other config
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        // Add other color customizations as needed
      },
    },
  },
}`} 
              language="javascript"
            />
          </div>
        </section>
        
        <section id="usage" className="mb-10 lg:mb-16 scroll-mt-20">
          <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">Basic Usage</h2>
          <p className="mb-4 sm:mb-6 text-secondary-600 dark:text-secondary-300">
            After setting up ReacUI, you can start using the components in your project:
          </p>
          
          <div className="overflow-hidden rounded-lg mb-6">
            <CodeBlock 
              code={`import { Button, Card, Input } from 'reacui';

function MyComponent() {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-4">Sign In</h2>
      <div className="mb-4">
        <Input 
          placeholder="Email" 
          type="email" 
          className="w-full" 
        />
      </div>
      <div className="mb-6">
        <Input 
          placeholder="Password" 
          type="password"
          className="w-full" 
        />
      </div>
      <Button variant="primary">Sign In</Button>
    </Card>
  );
}`} 
              language="jsx"
            />
          </div>
          
          <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg p-4 sm:p-6 mt-6">
            <h3 className="text-lg font-medium text-primary-900 dark:text-primary-100 mb-2 sm:mb-3">Next Steps</h3>
            <p className="text-primary-700 dark:text-primary-300 mb-4">
              Now that you've set up ReacUI, explore our component library to see all available components and their usage examples.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link 
                href="/components" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Browse Components
              </Link>
              <Link 
                href="/playground" 
                className="inline-flex items-center px-4 py-2 border border-primary-300 text-sm font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Try in Playground
              </Link>
            </div>
          </div>
        </section>

        <section id="troubleshooting" className="mb-10 lg:mb-16 scroll-mt-20">
          <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">Troubleshooting</h2>
          
          <div className="divide-y divide-secondary-200 dark:divide-secondary-700 rounded-lg border border-secondary-200 dark:border-secondary-700 overflow-hidden">
            <div className="p-4 bg-white dark:bg-secondary-800/60">
              <h3 className="font-medium text-secondary-900 dark:text-white mb-2">Components are missing styles</h3>
              <div className="text-secondary-600 dark:text-secondary-300">
                <p className="mb-2">This usually happens when Tailwind isn't configured correctly to scan ReacUI components.</p>
                <p>Make sure your tailwind.config.js includes the ReacUI package in its content configuration:</p>
                <div className="mt-2 text-sm bg-secondary-50 dark:bg-secondary-900 p-2 rounded">
                  <code>{`content: ["./node_modules/reacui/**/*.{js,jsx}"]`}</code>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-white dark:bg-secondary-800/60">
              <h3 className="font-medium text-secondary-900 dark:text-white mb-2">Dark mode isn't working</h3>
              <div className="text-secondary-600 dark:text-secondary-300">
                <p className="mb-2">Ensure you've set darkMode to 'class' in your Tailwind config and that you're using the ThemeProvider component correctly.</p>
                <div className="mt-2 text-sm bg-secondary-50 dark:bg-secondary-900 p-2 rounded">
                  <code>{`darkMode: 'class'`}</code>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-white dark:bg-secondary-800/60">
              <h3 className="font-medium text-secondary-900 dark:text-white mb-2">TypeScript errors</h3>
              <div className="text-secondary-600 dark:text-secondary-300">
                <p>If you're using TypeScript and seeing type errors, make sure you have the types installed:</p>
                <div className="mt-2 text-sm bg-secondary-50 dark:bg-secondary-900 p-2 rounded">
                  <code>{`npm install --save-dev @types/reacui`}</code>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex items-start p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <svg className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-1">Need more help?</h3>
              <p className="text-blue-700 dark:text-blue-300">
                If you're still having issues, check out our{' '}
                <a href="https://github.com/yourusername/reacui/discussions" className="font-medium underline" target="_blank" rel="noopener noreferrer">
                  GitHub Discussions
                </a>{' '}
                or{' '}
                <a href="https://github.com/yourusername/reacui/issues" className="font-medium underline" target="_blank" rel="noopener noreferrer">
                  open an issue
                </a>.
              </p>
            </div>
          </div>
        </section>
      </div>
      
      {/* Right sidebar - Table of contents */}
      <div className="hidden lg:block w-64 shrink-0 sticky top-20">
        <TableOfContents items={tocItems} />
      </div>
    </div>
  );
} 