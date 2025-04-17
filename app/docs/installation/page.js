import Link from 'next/link';

export default function InstallationPage() {
  return (
    <div className="container py-12">
      <article className="max-w-3xl mx-auto prose dark:prose-invert prose-headings:text-secondary-900 dark:prose-headings:text-white prose-a:text-primary-600 dark:prose-a:text-primary-400">
        <h1>Installation</h1>
        
        <p>
          This guide will help you set up ReacUI in your React project. ReacUI is designed to work with
          React 18+ and is built with JavaScript and Tailwind CSS.
        </p>

        <h2>Quick Install</h2>
        
        <p>To install ReacUI, run one of the following commands in your project directory:</p>
        
        <div className="bg-secondary-100 dark:bg-secondary-800 p-4 rounded-md overflow-auto">
          <pre className="text-secondary-900 dark:text-secondary-100">
            <code>npm install reacui</code>
          </pre>
        </div>
        
        <p>Or if you're using Yarn:</p>
        
        <div className="bg-secondary-100 dark:bg-secondary-800 p-4 rounded-md overflow-auto">
          <pre className="text-secondary-900 dark:text-secondary-100">
            <code>yarn add reacui</code>
          </pre>
        </div>

        <h2>Peer Dependencies</h2>
        
        <p>
          ReacUI requires React 18 or higher. Make sure you have the following peer dependencies installed:
        </p>
        
        <div className="bg-secondary-100 dark:bg-secondary-800 p-4 rounded-md overflow-auto">
          <pre className="text-secondary-900 dark:text-secondary-100">
            <code>{`"react": "^18.0.0"\n"react-dom": "^18.0.0"`}</code>
          </pre>
        </div>

        <h2>Setup with Tailwind CSS</h2>
        
        <p>
          ReacUI is built with Tailwind CSS. If your project doesn't already use Tailwind,
          you'll need to set it up:
        </p>
        
        <ol>
          <li>Install Tailwind CSS:</li>
          <div className="bg-secondary-100 dark:bg-secondary-800 p-4 rounded-md overflow-auto mt-2 mb-4">
            <pre className="text-secondary-900 dark:text-secondary-100">
              <code>npm install -D tailwindcss postcss autoprefixer</code>
            </pre>
          </div>
          
          <li>Initialize Tailwind CSS:</li>
          <div className="bg-secondary-100 dark:bg-secondary-800 p-4 rounded-md overflow-auto mt-2 mb-4">
            <pre className="text-secondary-900 dark:text-secondary-100">
              <code>npx tailwindcss init -p</code>
            </pre>
          </div>
          
          <li>Configure your tailwind.config.js:</li>
          <div className="bg-secondary-100 dark:bg-secondary-800 p-4 rounded-md overflow-auto mt-2 mb-4">
            <pre className="text-secondary-900 dark:text-secondary-100">
              <code>{`// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/reacui/**/*.js", // Add this to scan ReacUI components
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}`}</code>
            </pre>
          </div>
          
          <li>Add Tailwind directives to your CSS:</li>
          <div className="bg-secondary-100 dark:bg-secondary-800 p-4 rounded-md overflow-auto mt-2 mb-4">
            <pre className="text-secondary-900 dark:text-secondary-100">
              <code>{`/* src/styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;`}</code>
            </pre>
          </div>
        </ol>

        <h2>Theme Setup</h2>
        
        <p>ReacUI includes a <code>ThemeProvider</code> component that enables dark/light mode support:</p>
        
        <div className="bg-secondary-100 dark:bg-secondary-800 p-4 rounded-md overflow-auto">
          <pre className="text-secondary-900 dark:text-secondary-100">
            <code>{`// src/App.js
import React from 'react';
import { ThemeProvider } from 'reacui';
import 'reacui/dist/style.css'; // Import styles

function App() {
  return (
    <ThemeProvider>
      {/* Your app content */}
    </ThemeProvider>
  );
}

export default App;`}</code>
          </pre>
        </div>

        <h2>Next Steps</h2>
        
        <p>
          Once you've installed ReacUI, you're ready to start using the components in your project.
          Check out these resources:
        </p>
        
        <ul>
          <li>
            <Link href="/docs/usage" className="text-primary-600 dark:text-primary-400 hover:underline">
              Usage Guide
            </Link>
            {' '}- Learn how to use the components
          </li>
          <li>
            <Link href="/components" className="text-primary-600 dark:text-primary-400 hover:underline">
              Components
            </Link>
            {' '}- Browse available components
          </li>
          <li>
            <Link href="/playground" className="text-primary-600 dark:text-primary-400 hover:underline">
              Playground
            </Link>
            {' '}- Experiment with components
          </li>
        </ul>

        <div className="bg-primary-50 dark:bg-primary-900/30 p-4 rounded-md border-l-4 border-primary-500 mt-8">
          <h3 className="text-lg font-medium text-primary-800 dark:text-primary-400 mt-0">
            Need help?
          </h3>
          <p className="text-primary-700 dark:text-primary-300 mb-0">
            If you encounter any issues during installation, please{' '}
            <a 
              href="https://github.com/yourusername/reacui/issues"
              className="font-medium underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              open an issue
            </a>{' '}
            on GitHub.
          </p>
        </div>
      </article>
    </div>
  );
} 