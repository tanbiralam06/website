'use client'

import React from 'react';
import Link from 'next/link';
import CodeBlock from '../../../components/CodeBlock';
import TableOfContents from '../../../components/TableOfContents';

export default function ThemingPage() {
  const tocItems = [
    { id: 'overview', title: 'Overview' },
    { id: 'configuration', title: 'Theme Configuration' },
    { id: 'colors', title: 'Color System' },
    { id: 'dark-mode', title: 'Dark Mode' },
    { id: 'custom-themes', title: 'Custom Themes' },
    { id: 'component-styles', title: 'Component-Specific Styling' },
    { id: 'best-practices', title: 'Best Practices' },
  ];

  const [colorTheme, setColorTheme] = React.useState('default');
  const [showDefaultColorCode, setShowDefaultColorCode] = React.useState(false);
  const [showCustomColorCode, setShowCustomColorCode] = React.useState(false);
  const [showDarkModeCode, setShowDarkModeCode] = React.useState(false);

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 py-6 lg:py-10 max-w-[1400px] mx-auto">
      <div className="flex-1 min-w-0">
        <header className="mb-10 lg:mb-12">
          <div className="flex items-center gap-2 text-sm text-secondary-500 dark:text-secondary-400 mb-4">
            <Link href="/docs" className="hover:text-primary-600 dark:hover:text-primary-400">Docs</Link>
            <span>/</span>
            <span>Theming</span>
          </div>
          <h1 id="overview" className="text-3xl sm:text-4xl font-bold text-secondary-900 dark:text-white mb-4 scroll-mt-20">Theming</h1>
          <p className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-300">
            Learn how to customize and extend the ReacUI design system to match your brand
          </p>
        </header>

        <section className="mb-10 lg:mb-16 scroll-mt-20">
          <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">Overview</h2>
          
          <p className="text-secondary-600 dark:text-secondary-300 mb-6">
            ReacUI is built with a flexible theming system that allows you to customize the look and feel of all components to match your brand's identity. The theming system is built on top of Tailwind CSS, making it easy to extend and customize.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
            <div className="p-5 rounded-lg border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800">
              <div className="flex items-center text-primary-600 dark:text-primary-400 mb-3">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 7H17M7 12H17M7 17H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="font-semibold">Simple Configuration</h3>
              </div>
              <p className="text-secondary-600 dark:text-secondary-400">
                Customize your theme with a simple configuration file that extends Tailwind CSS.
              </p>
            </div>
            <div className="p-5 rounded-lg border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800">
              <div className="flex items-center text-primary-600 dark:text-primary-400 mb-3">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 4.5L11.5 2.5L16 4.5L19.5 8L20.5 12.5L19.5 17L16 20.5L11.5 22.5L7.5 20.5L4 17L3 12.5L4 8L7.5 4.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <h3 className="font-semibold">Design Tokens</h3>
              </div>
              <p className="text-secondary-600 dark:text-secondary-400">
                Use design tokens to maintain consistency across your application's UI.
              </p>
            </div>
            <div className="p-5 rounded-lg border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800">
              <div className="flex items-center text-primary-600 dark:text-primary-400 mb-3">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 18.5V19.5M8.2 18.5V19.5M15.8 18.5V19.5M2.5 12C2.5 7.3 3.9 4.5 12 4.5C20.1 4.5 21.5 7.3 21.5 12V14.5C21.5 19.2 20.1 22 12 22C3.9 22 2.5 19.2 2.5 14.5V12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M7 8H12M7 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <h3 className="font-semibold">Dark Mode Support</h3>
              </div>
              <p className="text-secondary-600 dark:text-secondary-400">
                Built-in dark mode support with seamless transitions between light and dark themes.
              </p>
            </div>
          </div>

          <div className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg mb-8">
            <h4 className="font-medium text-blue-800 dark:text-blue-300">Pro Tip</h4>
            <p className="mt-1 text-blue-700 dark:text-blue-400">
              The theming system is designed to work with Tailwind CSS out of the box. If you're already using Tailwind, you can seamlessly integrate ReacUI into your existing theme.
            </p>
          </div>
        </section>

        <section id="configuration" className="mb-10 lg:mb-16 scroll-mt-20">
          <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">Theme Configuration</h2>
          
          <p className="text-secondary-600 dark:text-secondary-300 mb-6">
            ReacUI's theming is powered by Tailwind CSS. To customize the theme, you'll need to modify your <code className="text-sm bg-secondary-100 dark:bg-secondary-800 px-1.5 py-0.5 rounded">tailwind.config.js</code> file. This allows you to change colors, typography, spacing, and more.
          </p>

          <div className="overflow-hidden rounded-lg mb-8">
            <CodeBlock 
              code={`// tailwind.config.js
module.exports = {
  // Enable dark mode
  darkMode: 'class',
  
  theme: {
    extend: {
      colors: {
        // Primary colors (used for buttons, links, focus rings)
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
        // Secondary colors (used for text, backgrounds, borders)
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      // Custom border radius
      borderRadius: {
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      // Custom box shadows
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}`} 
              language="javascript"
            />
          </div>

          <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">Key Configuration Areas</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-5 rounded-lg border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800">
              <h4 className="font-medium text-secondary-900 dark:text-white mb-2">Colors</h4>
              <p className="text-secondary-600 dark:text-secondary-400 mb-3">
                Define your brand colors in the <code className="text-sm bg-secondary-100 dark:bg-secondary-800 px-1.5 py-0.5 rounded">colors</code> section. ReacUI uses these color scales:
              </p>
              <ul className="list-disc pl-5 text-secondary-600 dark:text-secondary-400 space-y-1">
                <li><code className="text-sm bg-secondary-100 dark:bg-secondary-800 px-1.5 py-0.5 rounded">primary</code>: Brand colors, calls-to-action</li>
                <li><code className="text-sm bg-secondary-100 dark:bg-secondary-800 px-1.5 py-0.5 rounded">secondary</code>: UI text, borders, backgrounds</li>
                <li>Semantic colors: success, warning, error, info</li>
              </ul>
            </div>
            <div className="p-5 rounded-lg border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800">
              <h4 className="font-medium text-secondary-900 dark:text-white mb-2">Typography</h4>
              <p className="text-secondary-600 dark:text-secondary-400 mb-3">
                Customize fonts, sizes, weights, and line heights:
              </p>
              <div className="overflow-hidden rounded-lg bg-secondary-100 dark:bg-secondary-800/70 p-3 text-sm">
                <pre className="text-secondary-800 dark:text-secondary-200 overflow-x-auto">
{`fontFamily: {
  sans: ['Inter', 'sans-serif'],
  mono: ['Fira Code', 'monospace'],
},
fontSize: {
  xs: ['0.75rem', { lineHeight: '1rem' }],
  sm: ['0.875rem', { lineHeight: '1.25rem' }],
  base: ['1rem', { lineHeight: '1.5rem' }],
  lg: ['1.125rem', { lineHeight: '1.75rem' }],
  xl: ['1.25rem', { lineHeight: '1.75rem' }],
  // ...etc
}`}
                </pre>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-5 rounded-lg border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800">
              <h4 className="font-medium text-secondary-900 dark:text-white mb-2">Spacing & Sizing</h4>
              <p className="text-secondary-600 dark:text-secondary-400 mb-3">
                Control margins, padding, width, and height:
              </p>
              <div className="overflow-hidden rounded-lg bg-secondary-100 dark:bg-secondary-800/70 p-3 text-sm">
                <pre className="text-secondary-800 dark:text-secondary-200 overflow-x-auto">
{`spacing: {
  px: '1px',
  0: '0',
  0.5: '0.125rem',
  1: '0.25rem',
  // ...continues with 1.5, 2, etc.
},`}
                </pre>
              </div>
            </div>
            <div className="p-5 rounded-lg border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800">
              <h4 className="font-medium text-secondary-900 dark:text-white mb-2">Breakpoints</h4>
              <p className="text-secondary-600 dark:text-secondary-400 mb-3">
                Define responsive breakpoints:
              </p>
              <div className="overflow-hidden rounded-lg bg-secondary-100 dark:bg-secondary-800/70 p-3 text-sm">
                <pre className="text-secondary-800 dark:text-secondary-200 overflow-x-auto">
{`screens: {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
},`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section id="colors" className="mb-10 lg:mb-16 scroll-mt-20">
          <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">Color System</h2>
          
          <p className="text-secondary-600 dark:text-secondary-300 mb-6">
            ReacUI uses a systematic approach to colors. Each color in the palette includes a range of shades from 50 (lightest) to 950 (darkest), giving you fine-grained control over your UI.
          </p>

          <div className="mb-8 border border-secondary-200 dark:border-secondary-700 rounded-lg overflow-hidden">
            <div className="bg-secondary-100 dark:bg-secondary-800 px-4 py-3 border-b border-secondary-200 dark:border-secondary-700 flex">
              <h3 className="text-base font-medium text-secondary-900 dark:text-white">Default Color Palette</h3>
              <div className="ml-auto flex">
                <button 
                  className={`px-3 py-1 rounded-md text-sm font-medium mr-2 ${
                    !showDefaultColorCode ? 'bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white shadow-sm' : 'text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 hover:dark:text-white'
                  }`}
                  onClick={() => setShowDefaultColorCode(false)}
                >
                  Preview
                </button>
                <button 
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    showDefaultColorCode ? 'bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white shadow-sm' : 'text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 hover:dark:text-white'
                  }`}
                  onClick={() => setShowDefaultColorCode(true)}
                >
                  Code
                </button>
              </div>
            </div>
            <div>
              {showDefaultColorCode ? (
                <div className="overflow-hidden">
                  <CodeBlock 
                    code={`// Primary color palette
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
  // Secondary color palette
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  },
  // Semantic colors
  success: {
    50: '#f0fdf4',
    // ... other shades
    600: '#16a34a',
    // ... other shades
  },
  warning: {
    50: '#fffbeb',
    // ... other shades
    600: '#d97706',
    // ... other shades
  },
  error: {
    50: '#fef2f2',
    // ... other shades
    600: '#dc2626',
    // ... other shades
  },
}`} 
                    language="javascript"
                  />
                </div>
              ) : (
                <div className="p-6 bg-white dark:bg-secondary-800">
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-sm font-medium text-secondary-500 dark:text-secondary-400 mb-3">Primary Colors</h4>
                      <div className="grid grid-cols-11 gap-2">
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-primary-50 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">50</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-primary-100 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">100</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-primary-200 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">200</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-primary-300 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">300</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-primary-400 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">400</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-primary-500 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">500</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-primary-600 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">600</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-primary-700 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">700</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-primary-800 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">800</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-primary-900 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">900</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-primary-950 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">950</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-secondary-500 dark:text-secondary-400 mb-3">Secondary Colors</h4>
                      <div className="grid grid-cols-11 gap-2">
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-secondary-50 border border-secondary-200 dark:border-secondary-700 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">50</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-secondary-100 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">100</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-secondary-200 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">200</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-secondary-300 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">300</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-secondary-400 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">400</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-secondary-500 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">500</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-secondary-600 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">600</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-secondary-700 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">700</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-secondary-800 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">800</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-secondary-900 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">900</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-secondary-950 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">950</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-secondary-500 dark:text-secondary-400 mb-3">Success</h4>
                        <div className="h-10 w-full bg-green-600 rounded-md"></div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-secondary-500 dark:text-secondary-400 mb-3">Warning</h4>
                        <div className="h-10 w-full bg-amber-600 rounded-md"></div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-secondary-500 dark:text-secondary-400 mb-3">Error</h4>
                        <div className="h-10 w-full bg-red-600 rounded-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">Customizing Colors</h3>
          
          <p className="text-secondary-600 dark:text-secondary-300 mb-6">
            To customize the color palette, replace the default colors with your brand colors in the Tailwind configuration. It's recommended to use a complete scale for each color to ensure proper contrast in different UI states.
          </p>

          <div className="mb-8 border border-secondary-200 dark:border-secondary-700 rounded-lg overflow-hidden">
            <div className="bg-secondary-100 dark:bg-secondary-800 px-4 py-3 border-b border-secondary-200 dark:border-secondary-700 flex">
              <h3 className="text-base font-medium text-secondary-900 dark:text-white">Custom Brand Colors</h3>
              <div className="ml-auto flex">
                <button 
                  className={`px-3 py-1 rounded-md text-sm font-medium mr-2 ${
                    !showCustomColorCode ? 'bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white shadow-sm' : 'text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 hover:dark:text-white'
                  }`}
                  onClick={() => setShowCustomColorCode(false)}
                >
                  Preview
                </button>
                <button 
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    showCustomColorCode ? 'bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white shadow-sm' : 'text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 hover:dark:text-white'
                  }`}
                  onClick={() => setShowCustomColorCode(true)}
                >
                  Code
                </button>
              </div>
            </div>
            <div>
              {showCustomColorCode ? (
                <div className="overflow-hidden">
                  <CodeBlock 
                    code={`// Example: Using purple as primary color
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        // Keep secondary or change it too
      }
    }
  }
}`} 
                    language="javascript"
                  />
                </div>
              ) : (
                <div className="p-6 bg-white dark:bg-secondary-800">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium text-secondary-500 dark:text-secondary-400 mb-3">Purple Brand (Primary)</h4>
                      <div className="grid grid-cols-11 gap-2">
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-purple-50 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">50</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-purple-100 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">100</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-purple-200 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">200</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-purple-300 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">300</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-purple-400 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">400</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-purple-500 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">500</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-purple-600 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">600</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-purple-700 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">700</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-purple-800 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">800</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-purple-900 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">900</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-10 w-full bg-purple-950 rounded-md mb-1"></div>
                          <span className="text-xs text-secondary-500">950</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-secondary-500 dark:text-secondary-400 mb-3">Default Button</h4>
                        <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
                          Primary Button
                        </button>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-secondary-500 dark:text-secondary-400 mb-3">Purple Button</h4>
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                          Purple Button
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="p-4 border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-900/20 rounded-r-lg mb-8">
            <h4 className="font-medium text-amber-800 dark:text-amber-300">Color Accessibility</h4>
            <p className="mt-1 text-amber-700 dark:text-amber-400">
              When customizing colors, ensure they meet WCAG accessibility guidelines for contrast. Tools like <a href="https://color.review/" target="_blank" rel="noopener noreferrer" className="underline">Color Review</a> can help you check contrast ratios.
            </p>
          </div>
        </section>

        <section id="dark-mode" className="mb-10 lg:mb-16 scroll-mt-20">
          <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">Dark Mode</h2>
          
          <p className="text-secondary-600 dark:text-secondary-300 mb-6">
            ReacUI has built-in support for dark mode using Tailwind's dark mode feature. The dark mode is implemented using the 'class' strategy, allowing you to toggle it programmatically.
          </p>

          <div className="mb-8 border border-secondary-200 dark:border-secondary-700 rounded-lg overflow-hidden">
            <div className="bg-secondary-100 dark:bg-secondary-800 px-4 py-3 border-b border-secondary-200 dark:border-secondary-700 flex">
              <h3 className="text-base font-medium text-secondary-900 dark:text-white">Dark Mode Implementation</h3>
              <div className="ml-auto flex">
                <button 
                  className={`px-3 py-1 rounded-md text-sm font-medium mr-2 ${
                    !showDarkModeCode ? 'bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white shadow-sm' : 'text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 hover:dark:text-white'
                  }`}
                  onClick={() => setShowDarkModeCode(false)}
                >
                  Preview
                </button>
                <button 
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    showDarkModeCode ? 'bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white shadow-sm' : 'text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 hover:dark:text-white'
                  }`}
                  onClick={() => setShowDarkModeCode(true)}
                >
                  Code
                </button>
              </div>
            </div>
            <div>
              {showDarkModeCode ? (
                <div className="overflow-hidden">
                  <CodeBlock 
                    code={`// 1. Configure Tailwind (tailwind.config.js)
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  // ...rest of your config
}

// 2. Create a ThemeProvider component (components/ThemeProvider.jsx)
'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
})

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')
  
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }
  
  useEffect(() => {
    // Check for user preference on initial load
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    }
  }, [])
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}

// 3. Use the ThemeProvider in your layout
// app/layout.jsx
import { ThemeProvider } from '../components/ThemeProvider'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

// 4. Create a theme toggle button in your app
import { useTheme } from '../components/ThemeProvider'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-md bg-secondary-100 dark:bg-secondary-800"
    >
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  )
}`} 
                    language="jsx"
                  />
                </div>
              ) : (
                <div className="p-6 bg-white dark:bg-secondary-800">
                  <div className="space-y-6">
                    <div className="flex justify-around">
                      <div className="text-center">
                        <h4 className="text-sm font-medium text-secondary-500 dark:text-secondary-400 mb-3">Light Mode</h4>
                        <div className="w-48 h-64 rounded-lg bg-white border border-secondary-200 shadow-sm p-4 text-left">
                          <div className="flex items-center justify-between mb-4">
                            <div className="text-sm font-medium text-secondary-900">User Profile</div>
                            <button className="p-1 rounded-full bg-secondary-100 hover:bg-secondary-200 text-secondary-500">
                              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                              </svg>
                            </button>
                          </div>
                          <div className="bg-primary-50 rounded-lg p-3 mb-4">
                            <div className="flex items-center">
                              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 text-white flex items-center justify-center font-medium shadow-sm ring-2 ring-primary-100">
                                JD
                              </div>
                              <div className="ml-3">
                                <div className="text-sm font-medium text-secondary-900">John Doe</div>
                                <div className="text-xs text-secondary-500">john@example.com</div>
                              </div>
                            </div>
                          </div>
                          <div className="text-xs text-secondary-500 mb-2">Projects</div>
                          <div className="space-y-2">
                            <div className="p-2 bg-secondary-50 rounded-md text-sm text-secondary-900">Dashboard Redesign</div>
                            <div className="p-2 bg-secondary-50 rounded-md text-sm text-secondary-900">Mobile App</div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <h4 className="text-sm font-medium text-secondary-500 dark:text-secondary-400 mb-3">Dark Mode</h4>
                        <div className="w-48 h-64 rounded-lg bg-secondary-900 border border-secondary-700 shadow-sm p-4 text-left">
                          <div className="flex items-center justify-between mb-4">
                            <div className="text-sm font-medium text-white">User Profile</div>
                            <button className="p-1 rounded-full bg-secondary-800 hover:bg-secondary-700 text-secondary-400">
                              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                              </svg>
                            </button>
                          </div>
                          <div className="bg-primary-900/20 rounded-lg p-3 mb-4">
                            <div className="flex items-center">
                              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white flex items-center justify-center font-medium shadow-md ring-2 ring-primary-600/30 dark:ring-primary-400/20">
                                JD
                              </div>
                              <div className="ml-3">
                                <div className="text-sm font-medium text-white">John Doe</div>
                                <div className="text-xs text-secondary-400">john@example.com</div>
                              </div>
                            </div>
                          </div>
                          <div className="text-xs text-secondary-400 mb-2">Projects</div>
                          <div className="space-y-2">
                            <div className="p-2 bg-secondary-800 rounded-md text-sm text-secondary-100">Dashboard Redesign</div>
                            <div className="p-2 bg-secondary-800 rounded-md text-sm text-secondary-100">Mobile App</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-center mt-4">
                        <button className="px-4 py-2 bg-secondary-200 dark:bg-secondary-700 rounded-md text-secondary-900 dark:text-secondary-100 flex items-center">
                          <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            {colorTheme === 'dark' ? (
                              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            ) : (
                              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                            )}
                          </svg>
                          Toggle Theme
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">Dark Mode Design Principles</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-5 rounded-lg border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800">
              <h4 className="font-medium text-secondary-900 dark:text-white mb-2">Don't Just Invert Colors</h4>
              <p className="text-secondary-600 dark:text-secondary-400">
                Dark mode isn't just about swapping light for dark. Use slightly desaturated colors and reduce contrast for text and UI elements to reduce eye strain.
              </p>
            </div>
            <div className="p-5 rounded-lg border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800">
              <h4 className="font-medium text-secondary-900 dark:text-white mb-2">Test for Accessibility</h4>
              <p className="text-secondary-600 dark:text-secondary-400">
                Ensure your dark theme maintains sufficient contrast ratios for text and interactive elements. What works in light mode may not work in dark mode.
              </p>
            </div>
            <div className="p-5 rounded-lg border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800">
              <h4 className="font-medium text-secondary-900 dark:text-white mb-2">Avoid Pure Black</h4>
              <p className="text-secondary-600 dark:text-secondary-400">
                Use dark grays (like #121212 or #1e1e1e) instead of pure black for backgrounds. Pure black can cause eye strain and create too much contrast.
              </p>
            </div>
            <div className="p-5 rounded-lg border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800">
              <h4 className="font-medium text-secondary-900 dark:text-white mb-2">Use Shadows Carefully</h4>
              <p className="text-secondary-600 dark:text-secondary-400">
                In dark mode, reduce shadow opacity and blur. Consider using lighter shadows on dark backgrounds for better depth perception.
              </p>
            </div>
          </div>
        </section>

        <section id="custom-themes" className="mb-10 lg:mb-16 scroll-mt-20">
          <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">Custom Themes</h2>
          
          <p className="text-secondary-600 dark:text-secondary-300 mb-6">
            Create custom themes by extending the base theme with your own design tokens. This approach allows you to maintain consistency across your application while providing flexibility for different visual styles.
          </p>

          <div className="overflow-hidden rounded-lg mb-8">
            <CodeBlock 
              code={`// themes.js - Theme configuration
export const themes = {
  default: {
    name: 'Default',
    colors: {
      primary: {
        50: '#f0f9ff',
        // ... other shades
        600: '#0284c7', // Primary action color
        // ... other shades
      },
      radius: {
        sm: '0.125rem',
        md: '0.25rem',
        lg: '0.5rem',
      }
    }
  },
  modern: {
    name: 'Modern',
    colors: {
      primary: {
        50: '#f5f3ff',
        // ... other shades
        600: '#7c3aed', // Purple primary
        // ... other shades
      },
      radius: {
        sm: '0.5rem',
        md: '0.75rem', 
        lg: '1rem',
      }
    }
  },
  minimal: {
    name: 'Minimal',
    colors: {
      primary: {
        50: '#f9fafb',
        // ... other shades
        600: '#374151', // Gray primary
        // ... other shades
      },
      radius: {
        sm: '0',
        md: '0.125rem',
        lg: '0.25rem',
      }
    }
  }
}

// ThemeContext.jsx
'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { themes } from './themes'

const ThemeContext = createContext({
  theme: 'default',
  colorMode: 'light',
  setTheme: () => {},
  toggleColorMode: () => {},
})

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('default')
  const [colorMode, setColorMode] = useState('light')
  
  const toggleColorMode = () => {
    const newMode = colorMode === 'light' ? 'dark' : 'light'
    setColorMode(newMode)
    
    if (newMode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    localStorage.setItem('colorMode', newMode)
  }
  
  const changeTheme = (newTheme) => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    
    // Apply theme-specific CSS variables
    const root = document.documentElement
    const currentTheme = themes[newTheme]
    
    // Apply primary color variables
    for (const [shade, value] of Object.entries(currentTheme.colors.primary)) {
      root.style.setProperty(\`--color-primary-\${shade}\`, value)
    }
    
    // Apply border radius
    for (const [size, value] of Object.entries(currentTheme.colors.radius)) {
      root.style.setProperty(\`--radius-\${size}\`, value)
    }
  }
  
  useEffect(() => {
    // Initialize on client side
    const savedTheme = localStorage.getItem('theme') || 'default'
    const savedColorMode = localStorage.getItem('colorMode')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedColorMode === 'dark' || (!savedColorMode && prefersDark)) {
      setColorMode('dark')
      document.documentElement.classList.add('dark')
    }
    
    changeTheme(savedTheme)
  }, [])
  
  return (
    <ThemeContext.Provider value={{ 
      theme, 
      colorMode, 
      setTheme: changeTheme, 
      toggleColorMode 
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}`} 
              language="jsx"
            />
          </div>

          <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">Theme Selector Component</h3>
          
          <p className="text-secondary-600 dark:text-secondary-300 mb-6">
            Create a theme selector component to allow users to switch between different themes:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="overflow-hidden rounded-lg">
              <CodeBlock 
                code={`// ThemeSelector.jsx
import { useTheme } from '../context/ThemeContext'
import { themes } from '../themes'

export function ThemeSelector() {
  const { theme, setTheme } = useTheme()
  
  return (
    <div className="p-4 border rounded-lg">
      <h3 className="font-medium mb-3">Select Theme</h3>
      <div className="flex flex-wrap gap-2">
        {Object.keys(themes).map((themeKey) => (
          <button
            key={themeKey}
            className={\`px-3 py-1.5 rounded-md \${
              theme === themeKey 
                ? 'bg-primary-600 text-white' 
                : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300'
            }\`}
            onClick={() => setTheme(themeKey)}
          >
            {themes[themeKey].name}
          </button>
        ))}
      </div>
    </div>
  )
}`} 
                language="jsx"
              />
            </div>
            <div className="p-6 bg-white dark:bg-secondary-800/60 rounded-lg border border-secondary-200 dark:border-secondary-700">
              <h3 className="text-base font-medium text-secondary-900 dark:text-white mb-4">Theme Preview</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <button
                    className={`px-3 py-1.5 rounded-md ${
                      colorTheme === 'default' 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300'
                    }`}
                    onClick={() => setColorTheme('default')}
                  >
                    Default
                  </button>
                  <button
                    className={`px-3 py-1.5 rounded-md ${
                      colorTheme === 'modern' 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300'
                    }`}
                    onClick={() => setColorTheme('modern')}
                  >
                    Modern
                  </button>
                  <button
                    className={`px-3 py-1.5 rounded-md ${
                      colorTheme === 'minimal' 
                        ? 'bg-gray-600 text-white' 
                        : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300'
                    }`}
                    onClick={() => setColorTheme('minimal')}
                  >
                    Minimal
                  </button>
                </div>
                <div className="p-5 border border-secondary-200 dark:border-secondary-700 rounded-lg">
                  <div className="flex flex-col gap-3">
                    <button
                      className={`w-full py-2 rounded-md ${
                        colorTheme === 'default' 
                          ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                          : colorTheme === 'modern'
                            ? 'bg-purple-600 hover:bg-purple-700 text-white rounded-lg'
                            : 'bg-gray-600 hover:bg-gray-700 text-white rounded-sm'
                      }`}
                    >
                      Primary Button
                    </button>
                    <div 
                      className={`p-4 ${
                        colorTheme === 'default' 
                          ? 'bg-primary-100 text-primary-800 rounded-md' 
                          : colorTheme === 'modern'
                            ? 'bg-purple-100 text-purple-800 rounded-lg'
                            : 'bg-gray-100 text-gray-800 rounded-sm'
                      }`}
                    >
                      <p>This is a message box</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <input 
                        type="checkbox"
                        className={`h-4 w-4 ${
                          colorTheme === 'default' 
                            ? 'accent-primary-600' 
                            : colorTheme === 'modern'
                              ? 'accent-purple-600'
                              : 'accent-gray-600'
                        }`}
                        checked
                        readOnly
                      />
                      <span>Remember my preferences</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="component-styles" className="mb-10 lg:mb-16 scroll-mt-20">
          <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">Component-Specific Styling</h2>
          
          <p className="text-secondary-600 dark:text-secondary-300 mb-6">
            ReacUI components are designed to be easily customizable through props and class names. Here are some common patterns for customizing specific components.
          </p>

          <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">Button Variants</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="overflow-hidden rounded-lg">
              <CodeBlock 
                code={`// Custom button variants in your Button component
// components/Button.jsx

import { cva } from 'class-variance-authority'
import { cn } from '../lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500",
        secondary: "bg-secondary-200 text-secondary-700 dark:bg-secondary-700 dark:text-secondary-200 hover:bg-secondary-300 dark:hover:bg-secondary-600",
        outline: "border border-secondary-300 dark:border-secondary-600 bg-transparent hover:bg-secondary-50 dark:hover:bg-secondary-800",
        ghost: "bg-transparent hover:bg-secondary-100 dark:hover:bg-secondary-800 text-secondary-700 dark:text-secondary-300",
        danger: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
        // Add your custom variants
        gradient: "bg-gradient-to-r from-primary-600 to-purple-600 text-white hover:from-primary-700 hover:to-purple-700",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 py-2",
        lg: "h-12 px-6 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export function Button({
  className,
  variant,
  size,
  children,
  ...props
}) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  )
}

// Usage:
<Button variant="gradient" size="lg">
  Sign Up Now
</Button>`} 
                language="jsx"
              />
            </div>
            <div className="p-6 bg-white dark:bg-secondary-800/60 rounded-lg border border-secondary-200 dark:border-secondary-700">
              <h3 className="text-base font-medium text-secondary-900 dark:text-white mb-4">Button Style Examples</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-sm text-secondary-500 dark:text-secondary-400 mb-2">Default Variant</p>
                    <button className="px-4 py-2 rounded-md bg-primary-600 text-white hover:bg-primary-700 transition-colors">
                      Default Button
                    </button>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500 dark:text-secondary-400 mb-2">Custom Gradient</p>
                    <button className="px-4 py-2 rounded-md bg-gradient-to-r from-primary-600 to-purple-600 text-white hover:from-primary-700 hover:to-purple-700 transition-colors">
                      Gradient Button
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-secondary-500 dark:text-secondary-400 mb-2">Size Variants</p>
                  <div className="flex flex-wrap items-center gap-3">
                    <button className="px-3 py-1 text-xs rounded-md bg-primary-600 text-white">
                      Small
                    </button>
                    <button className="px-4 py-2 text-sm rounded-md bg-primary-600 text-white">
                      Medium
                    </button>
                    <button className="px-6 py-3 text-base rounded-md bg-primary-600 text-white">
                      Large
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-secondary-500 dark:text-secondary-400 mb-2">Custom Classes</p>
                  <button className="px-4 py-2 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors shadow-lg hover:shadow-primary-600/50">
                    Rounded with Shadow
                  </button>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">Card Component Styling</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="overflow-hidden rounded-lg">
              <CodeBlock 
                code={`// Card component with variants
// components/Card.jsx

import { cva } from 'class-variance-authority'
import { cn } from '../lib/utils'

const cardVariants = cva(
  "rounded-lg border overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-white dark:bg-secondary-800 border-secondary-200 dark:border-secondary-700",
        outline: "bg-transparent border-secondary-200 dark:border-secondary-700",
        filled: "bg-secondary-100 dark:bg-secondary-800 border-secondary-100 dark:border-secondary-800",
        // Custom variant
        primary: "bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-700",
      },
      shadow: {
        none: "",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
      }
    },
    defaultVariants: {
      variant: "default",
      shadow: "none",
    },
  }
)

export function Card({
  className,
  variant,
  shadow,
  children,
  ...props
}) {
  return (
    <div
      className={cn(cardVariants({ variant, shadow }), className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, ...props }) {
  return (
    <div
      className={cn("px-6 py-4 border-b border-secondary-200 dark:border-secondary-700", className)}
      {...props}
    />
  )
}

export function CardContent({ className, ...props }) {
  return (
    <div
      className={cn("px-6 py-4", className)}
      {...props}
    />
  )
}

export function CardFooter({ className, ...props }) {
  return (
    <div
      className={cn("px-6 py-4 border-t border-secondary-200 dark:border-secondary-700", className)}
      {...props}
    />
  )
}

// Usage:
<Card variant="primary" shadow="md" className="max-w-md">
  <CardHeader>
    <h3 className="text-lg font-semibold">Card Title</h3>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`} 
                language="jsx"
              />
            </div>
            <div className="p-6 bg-white dark:bg-secondary-800/60 rounded-lg border border-secondary-200 dark:border-secondary-700">
              <h3 className="text-base font-medium text-secondary-900 dark:text-white mb-4">Card Style Examples</h3>
              <div className="space-y-6">
                <div className="rounded-lg border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 overflow-hidden">
                  <div className="px-6 py-4 border-b border-secondary-200 dark:border-secondary-700">
                    <h3 className="text-lg font-semibold">Default Card</h3>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-secondary-600 dark:text-secondary-300">Default card with standard styling</p>
                  </div>
                </div>
                
                <div className="rounded-lg border border-primary-200 dark:border-primary-700 bg-primary-50 dark:bg-primary-900/20 overflow-hidden shadow-md">
                  <div className="px-6 py-4 border-b border-primary-200 dark:border-primary-700">
                    <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-200">Primary Card</h3>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-primary-700 dark:text-primary-300">Custom primary themed card with shadow</p>
                  </div>
                  <div className="px-6 py-4 border-t border-primary-200 dark:border-primary-700 bg-primary-100/50 dark:bg-primary-900/30">
                    <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
                      Action Button
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="best-practices" className="mb-10 lg:mb-16 scroll-mt-20">
          <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">Best Practices</h2>
          
          <div className="space-y-6 mb-8">
            <div className="p-5 rounded-lg border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-2">
                Use Design Tokens for Consistency
              </h3>
              <p className="text-green-800 dark:text-green-400">
                Define all your colors, spacing, typography, and other design variables as tokens in your theme configuration. This ensures consistency across your application and makes it easier to update your design system.
              </p>
            </div>

            <div className="p-5 rounded-lg border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-2">
                Create Component Abstractions
              </h3>
              <p className="text-green-800 dark:text-green-400">
                Build component abstractions that encapsulate styling logic. Use utility libraries like <code className="text-sm bg-green-100 dark:bg-green-800/70 px-1.5 py-0.5 rounded">class-variance-authority</code> (cva) to create reusable component variants rather than repeating the same class combinations.
              </p>
              <div className="mt-3 p-3 bg-green-100 dark:bg-green-800/40 rounded text-sm">
                <pre className="text-green-800 dark:text-green-300 overflow-x-auto">
{`// Good: Encapsulated button styles
<Button variant="primary" size="lg" />

// Avoid: Repeating class combinations
<button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700" />`}
                </pre>
              </div>
            </div>

            <div className="p-5 rounded-lg border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-2">
                Test All Color Modes
              </h3>
              <p className="text-green-800 dark:text-green-400">
                Always test your components in both light and dark mode. A design that looks good in light mode might have contrast or readability issues in dark mode, and vice versa.
              </p>
            </div>

            <div className="p-5 rounded-lg border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-2">
                Design for Accessibility First
              </h3>
              <p className="text-green-800 dark:text-green-400">
                Ensure your theme meets WCAG accessibility guidelines. Pay special attention to color contrast ratios, font sizes, and interactive states to ensure your UI is accessible to all users.
              </p>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-3">Common Pitfalls to Avoid</h3>
          
          <div className="space-y-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-lg border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20">
                <h4 className="font-medium text-red-900 dark:text-red-300 mb-2">
                  Hardcoding Colors
                </h4>
                <p className="text-red-800 dark:text-red-400">
                  Avoid using hardcoded color values like <code className="text-sm bg-red-100 dark:bg-red-800/50 px-1 py-0.5 rounded">#3b82f6</code> directly in your components. Always use theme tokens (<code className="text-sm bg-red-100 dark:bg-red-800/50 px-1 py-0.5 rounded">bg-primary-600</code>) instead.
                </p>
              </div>
              <div className="p-5 rounded-lg border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20">
                <h4 className="font-medium text-red-900 dark:text-red-300 mb-2">
                  Overriding Core Components
                </h4>
                <p className="text-red-800 dark:text-red-400">
                  Avoid directly modifying core component files. Instead, create wrapper components or use composition to extend functionality while keeping the original components intact.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-lg border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20">
                <h4 className="font-medium text-red-900 dark:text-red-300 mb-2">
                  Ignoring Dark Mode
                </h4>
                <p className="text-red-800 dark:text-red-400">
                  Don't assume everyone uses light mode. Always design and test for both light and dark themes to ensure a good user experience for all users.
                </p>
              </div>
              <div className="p-5 rounded-lg border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20">
                <h4 className="font-medium text-red-900 dark:text-red-300 mb-2">
                  Too Many Custom Variants
                </h4>
                <p className="text-red-800 dark:text-red-400">
                  Don't create a unique variant for every special case. Stick to a reasonable number of reusable variants, and use composition or local customization for edge cases.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white dark:bg-secondary-800/60 rounded-lg border border-secondary-200 dark:border-secondary-700 mb-8">
            <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">Theme Configuration Checklist</h3>
            
            <ul className="space-y-3 text-secondary-600 dark:text-secondary-300">
              <li className="flex items-baseline gap-2">
                <svg className="h-5 w-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Define a coherent <strong>color palette</strong> with primary, secondary, and semantic colors</span>
              </li>
              <li className="flex items-baseline gap-2">
                <svg className="h-5 w-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Configure <strong>typography</strong> with consistent font families, sizes, weights, and line heights</span>
              </li>
              <li className="flex items-baseline gap-2">
                <svg className="h-5 w-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Set up a consistent <strong>spacing system</strong> for margins, padding, and layout</span>
              </li>
              <li className="flex items-baseline gap-2">
                <svg className="h-5 w-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Define <strong>border radius</strong> values that match your design language</span>
              </li>
              <li className="flex items-baseline gap-2">
                <svg className="h-5 w-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Configure <strong>shadows</strong> for elevation and depth</span>
              </li>
              <li className="flex items-baseline gap-2">
                <svg className="h-5 w-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Test all components in both <strong>light and dark mode</strong></span>
              </li>
              <li className="flex items-baseline gap-2">
                <svg className="h-5 w-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Verify <strong>accessibility compliance</strong> for all theme variations</span>
              </li>
            </ul>
          </div>
        </section>

        <div className="mt-12 border-t border-secondary-200 dark:border-secondary-800 pt-8">
          <div className="flex justify-between items-center">
            <Link 
              href="/docs/usage" 
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300"
            >
              <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Usage
            </Link>
            <Link 
              href="/docs/components" 
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300"
            >
              Components
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
