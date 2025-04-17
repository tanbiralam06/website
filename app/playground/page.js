'use client';

import { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import React from 'react';
import * as ReacUIComponents from 'reacui-components'; // Import from npm package

// Prepare scope for LiveProvider with React and all components
const scope = {
  React,
  ...ReacUIComponents,
  // Explicitly add each component to ensure they're in scope
  Button: ReacUIComponents.Button,
  ThemeProvider: ReacUIComponents.ThemeProvider,
  Card: ReacUIComponents.Card,
  Input: ReacUIComponents.Input,
  Checkbox: ReacUIComponents.Checkbox
};

// Log available components
console.log('Available components:', Object.keys(scope));

const defaultCode = `
import React from 'react';
import { Button, ThemeProvider } from 'reacui-components';

function Example() {
  return (
    <ThemeProvider>
      <div className="space-y-4">
        <div className="space-x-2">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        
        <div className="space-x-2">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        
        <div>
          <Button disabled>Disabled</Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

render(<Example />);
`;

const templates = [
  {
    name: 'Button',
    code: defaultCode,
  },
  {
    name: 'Card',
    code: `
import React from 'react';
import { Card, ThemeProvider } from 'reacui-components';

function Example() {
  return (
    <ThemeProvider>
      <Card>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
          <Card.Description>Card description goes here</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>This is the main content of the card.</p>
        </Card.Content>
        <Card.Footer>
          <div className="flex justify-end space-x-2">
            <button className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
          </div>
        </Card.Footer>
      </Card>
    </ThemeProvider>
  );
}

render(<Example />);
`,
  },
  {
    name: 'Form',
    code: `
import React from 'react';
import { Button, Input, Checkbox, ThemeProvider } from 'reacui-components';

function Example() {
  return (
    <ThemeProvider>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <Input type="email" placeholder="Enter your email" />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <Input type="password" placeholder="Enter your password" />
        </div>
        
        <div className="flex items-center">
          <Checkbox id="remember" />
          <label htmlFor="remember" className="ml-2 text-sm">Remember me</label>
        </div>
        
        <Button type="submit" variant="primary" className="w-full">
          Sign in
        </Button>
      </form>
    </ThemeProvider>
  );
}

render(<Example />);
`,
  },
];

export default function PlaygroundPage() {
  const [code, setCode] = useState(defaultCode);
  const [darkMode, setDarkMode] = useState(false);

  const handleTemplateChange = (templateCode) => {
    setCode(templateCode);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="container py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary-900 dark:text-white">Playground</h1>
          <p className="mt-4 text-xl text-secondary-600 dark:text-secondary-300">
            Test and experiment with ReacUI components in real-time.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <label className="font-medium text-secondary-900 dark:text-white">Templates</label>
              <button
                className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                onClick={toggleDarkMode}
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {templates.map((template) => (
                <button
                  key={template.name}
                  className="px-3 py-1 rounded-md bg-secondary-100 dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 hover:bg-secondary-200 dark:hover:bg-secondary-700"
                  onClick={() => handleTemplateChange(template.code)}
                >
                  {template.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={`playground ${darkMode ? 'dark' : ''}`}>
          <LiveProvider
            code={code.trim()}
            scope={scope}
            noInline={true}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-800 rounded-lg shadow-sm p-4">
                <h2 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4">Code Editor</h2>
                <div className="border border-secondary-200 dark:border-secondary-800 rounded-md overflow-hidden">
                  <LiveEditor
                    className="font-mono"
                    style={{
                      background: darkMode ? '#1e293b' : '#f8fafc',
                      color: darkMode ? '#f8fafc' : '#0f172a',
                      fontSize: 14,
                      minHeight: 400,
                      padding: 12,
                    }}
                  />
                </div>
                <LiveError className="mt-4 text-red-500 text-sm" />
              </div>

              <div className="bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-800 rounded-lg shadow-sm p-4">
                <h2 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4">Preview</h2>
                <div
                  className={`border border-secondary-200 dark:border-secondary-800 rounded-md p-6 min-h-[400px] ${
                    darkMode ? 'bg-secondary-900' : 'bg-white'
                  }`}
                >
                  <LivePreview />
                </div>
              </div>
            </div>
          </LiveProvider>
        </div>

        <div className="mt-12 text-center">
          <p className="text-secondary-600 dark:text-secondary-400">
            Ready to use these components in your project?
          </p>
          <div className="mt-4">
            <a
              href="https://github.com/yourusername/reacui"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 