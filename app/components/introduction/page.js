'use client'

import Link from 'next/link';
import CodeBlock from '../../../components/CodeBlock';
import TableOfContents from '../../../components/TableOfContents';
import Image from 'next/image';

export default function IntroductionPage() {
  const tocItems = [
    { id: 'what-is-reacui', title: 'What is ReacUI?' },
    { id: 'key-features', title: 'Key Features' },
    { id: 'why-reacui', title: 'Why ReacUI?' },
    { id: 'example', title: 'Quick Example' },
    { id: 'principles', title: 'Design Principles' },
    { id: 'getting-started', title: 'Getting Started' },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 py-6 lg:py-10 max-w-[1400px] mx-auto">
      <div className="flex-1 min-w-0">
        <header className="mb-10 lg:mb-12">
          <div className="flex items-center gap-2 text-sm text-secondary-500 dark:text-secondary-400 mb-4">
            <Link href="/docs" className="hover:text-primary-600 dark:hover:text-primary-400">Docs</Link>
            <span>/</span>
            <span>Introduction</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 id="what-is-reacui" className="text-3xl sm:text-4xl font-bold text-secondary-900 dark:text-white mb-4 scroll-mt-20">Introduction</h1>
              <p className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-300">
                A modern React UI library built with Tailwind CSS
              </p>
            </div>
            <div className="shrink-0 flex items-center space-x-3">
              <Link 
                href="/docs/installation"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Get Started
              </Link>
              <a 
                href="https://github.com/yourusername/reacui"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-secondary-300 dark:border-secondary-700 text-sm font-medium rounded-md text-secondary-700 dark:text-secondary-300 bg-white dark:bg-secondary-800 hover:bg-secondary-50 dark:hover:bg-secondary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.163 6.839 9.489.5.092.682-.217.682-.48 0-.237-.009-.865-.013-1.7-2.782.602-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.645.35-1.087.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.31.678.92.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.16 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </header>

        <div className="relative overflow-hidden rounded-xl bg-gradient-to-tr from-primary-600 to-primary-800 p-8 mb-12 text-white">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4">Build beautiful React applications with ease</h2>
            <p className="text-primary-100 mb-6 max-w-3xl">
              ReacUI provides production-ready components that follow your design system. 
              Build consistent, accessible interfaces without reinventing the wheel.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/playground"
                className="inline-flex items-center px-4 py-2 border border-primary-300 text-sm font-medium rounded-md bg-white text-primary-700 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                Try in Playground
              </Link>
              <Link 
                href="/components"
                className="inline-flex items-center px-4 py-2 border border-primary-200 text-sm font-medium rounded-md bg-transparent text-primary-100 hover:bg-primary-700/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                Browse Components
              </Link>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 opacity-10">
            <svg width="350" height="350" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 175C25 92.1573 92.1573 25 175 25C257.843 25 325 92.1573 325 175C325 257.843 257.843 325 175 325C92.1573 325 25 257.843 25 175Z" stroke="white" strokeWidth="50"/>
            </svg>
          </div>
        </div>

        <section id="key-features" className="mb-10 lg:mb-16 scroll-mt-20">
          <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-secondary-800/60 rounded-lg border border-secondary-200 dark:border-secondary-700">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">Tailwind CSS Powered</h3>
              <p className="text-secondary-600 dark:text-secondary-300">
                Built on top of Tailwind CSS, allowing complete customization and seamless integration with your existing Tailwind projects.
              </p>
            </div>
            
            <div className="p-6 bg-white dark:bg-secondary-800/60 rounded-lg border border-secondary-200 dark:border-secondary-700">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">Dark Mode Support</h3>
              <p className="text-secondary-600 dark:text-secondary-300">
                Full dark mode support out of the box, with seamless transitions and proper color contrasts for accessibility.
              </p>
            </div>
            
            <div className="p-6 bg-white dark:bg-secondary-800/60 rounded-lg border border-secondary-200 dark:border-secondary-700">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">Accessible Components</h3>
              <p className="text-secondary-600 dark:text-secondary-300">
                Designed with accessibility in mind. All components follow WAI-ARIA standards and are keyboard navigable.
              </p>
            </div>
            
            <div className="p-6 bg-white dark:bg-secondary-800/60 rounded-lg border border-secondary-200 dark:border-secondary-700">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">Modern & Lightweight</h3>
              <p className="text-secondary-600 dark:text-secondary-300">
                Built with modern JavaScript and React best practices. Optimized bundle size with tree-shaking for smaller applications.
              </p>
            </div>
          </div>
        </section>

        <section id="why-reacui" className="mb-10 lg:mb-16 scroll-mt-20">
          <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">Why ReacUI?</h2>
          
          <p className="text-secondary-600 dark:text-secondary-300 mb-6">
            In a world full of component libraries, what makes ReacUI different? We focus on three key principles:
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 font-semibold">1</div>
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">Developer Experience</h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  We prioritize APIs that are intuitive and easy to use. Our components are extensively documented and provide helpful error messages.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 font-semibold">2</div>
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">Customization</h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  ReacUI is designed to adapt to your design system. You can easily customize every aspect of the components to match your brand.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 font-semibold">3</div>
              <div>
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">Performance</h3>
                <p className="text-secondary-600 dark:text-secondary-300">
                  We build with performance in mind from the start. Our components are optimized for rendering and minimize unnecessary re-renders.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="example" className="mb-10 lg:mb-16 scroll-mt-20">
          <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">Quick Example</h2>
          
          <p className="text-secondary-600 dark:text-secondary-300 mb-6">
            Here's a simple example of how to use ReacUI components to build a sign-in form:
          </p>
          
          <div className="overflow-hidden rounded-lg mb-8">
            <CodeBlock 
              code={`import { Button, Card, Input, Checkbox } from 'reacui';

function SignInForm() {
  return (
    <Card className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Sign In</h2>
      
      <div className="mb-4">
        <Input 
          label="Email" 
          type="email" 
          placeholder="your@email.com" 
          className="w-full" 
        />
      </div>
      
      <div className="mb-6">
        <Input 
          label="Password" 
          type="password"
          placeholder="********"
          className="w-full" 
        />
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <Checkbox label="Remember me" id="remember" />
        <a className="text-sm text-primary-600 hover:underline" href="#">
          Forgot password?
        </a>
      </div>
      
      <Button variant="primary" className="w-full">
        Sign In
      </Button>
    </Card>
  );
}`} 
              language="jsx"
            />
          </div>
          
          <div className="p-6 bg-white dark:bg-secondary-800/60 rounded-lg border border-secondary-200 dark:border-secondary-700">
            <div className="max-w-md mx-auto">
              <h2 className="text-xl font-bold mb-4">Sign In</h2>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                  Email
                </label>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-secondary-900"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                  Password
                </label>
                <input 
                  type="password" 
                  placeholder="********" 
                  className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-700 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-secondary-900"
                />
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="remember" 
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 dark:border-secondary-700 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-secondary-700 dark:text-secondary-300">
                    Remember me
                  </label>
                </div>
                <div className="text-sm text-primary-600 dark:text-primary-400 hover:underline">
                  Forgot password?
                </div>
              </div>
              
              <button className="w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                Sign In
              </button>
            </div>
          </div>
        </section>

        <section id="principles" className="mb-10 lg:mb-16 scroll-mt-20">
          <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">Design Principles</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-lg bg-white dark:bg-secondary-800/60 border border-secondary-200 dark:border-secondary-700">
              <h3 className="text-lg font-semibold mb-2 text-secondary-900 dark:text-white">Consistency</h3>
              <p className="text-secondary-600 dark:text-secondary-300">
                Components follow consistent patterns and behaviors to create a cohesive user experience.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white dark:bg-secondary-800/60 border border-secondary-200 dark:border-secondary-700">
              <h3 className="text-lg font-semibold mb-2 text-secondary-900 dark:text-white">Accessibility</h3>
              <p className="text-secondary-600 dark:text-secondary-300">
                Designed with accessibility as a priority, not an afterthought.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-white dark:bg-secondary-800/60 border border-secondary-200 dark:border-secondary-700">
              <h3 className="text-lg font-semibold mb-2 text-secondary-900 dark:text-white">Flexibility</h3>
              <p className="text-secondary-600 dark:text-secondary-300">
                Components can be composed and customized to fit various use cases.
              </p>
            </div>
          </div>
        </section>

        <section id="getting-started" className="mb-10 lg:mb-16 scroll-mt-20">
          <h2 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6">Getting Started</h2>
          
          <p className="text-secondary-600 dark:text-secondary-300 mb-6">
            Ready to get started with ReacUI? Follow these steps to set up your project:
          </p>
          
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-white dark:bg-secondary-800/60 border border-secondary-200 dark:border-secondary-700">
              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-semibold">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">Installation</h3>
                  <p className="text-secondary-600 dark:text-secondary-300 mb-3">
                    Install ReacUI and its peer dependencies:
                  </p>
                  <div className="overflow-hidden rounded-lg">
                    <CodeBlock 
                      code="npm install reacui" 
                      language="bash"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-lg bg-white dark:bg-secondary-800/60 border border-secondary-200 dark:border-secondary-700">
              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-semibold">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">Set up ThemeProvider</h3>
                  <p className="text-secondary-600 dark:text-secondary-300 mb-3">
                    Wrap your application with the ThemeProvider:
                  </p>
                  <div className="overflow-hidden rounded-lg">
                    <CodeBlock 
                      code={`import { ThemeProvider } from 'reacui';

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}`} 
                      language="jsx"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-lg bg-white dark:bg-secondary-800/60 border border-secondary-200 dark:border-secondary-700">
              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-semibold">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">Start using components</h3>
                  <p className="text-secondary-600 dark:text-secondary-300 mb-3">
                    Import and use any of the ReacUI components in your application:
                  </p>
                  <div className="overflow-hidden rounded-lg">
                    <CodeBlock 
                      code={`import { Button } from 'reacui';

function MyComponent() {
  return (
    <Button variant="primary">Click me</Button>
  );
}`} 
                      language="jsx"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Link 
              href="/docs/installation"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <span>Continue to Installation</span>
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
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