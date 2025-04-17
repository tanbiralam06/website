import Link from 'next/link';

export default function ButtonPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-secondary-900 dark:text-white">Button Component</h1>
        <p className="mt-4 text-xl text-secondary-600 dark:text-secondary-300">
          Buttons allow users to trigger an action or event with a single click.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-secondary-900 dark:text-white">Variants</h2>
        <div className="mt-4 p-6 bg-white dark:bg-secondary-800 rounded-lg border border-secondary-200 dark:border-secondary-700">
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-outline">Outline</button>
            <button className="btn btn-ghost">Ghost</button>
            <button className="btn btn-link">Link</button>
          </div>
        </div>
        <div className="mt-4 p-4 bg-secondary-50 dark:bg-secondary-900 rounded-lg border border-secondary-200 dark:border-secondary-800">
          <pre className="font-mono text-sm">
            <code>{`<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn btn-outline">Outline</button>
<button className="btn btn-ghost">Ghost</button>
<button className="btn btn-link">Link</button>`}</code>
          </pre>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-secondary-900 dark:text-white">Sizes</h2>
        <div className="mt-4 p-6 bg-white dark:bg-secondary-800 rounded-lg border border-secondary-200 dark:border-secondary-700">
          <div className="flex flex-wrap items-center gap-4">
            <button className="btn btn-primary btn-sm">Small</button>
            <button className="btn btn-primary">Default</button>
            <button className="btn btn-primary btn-lg">Large</button>
          </div>
        </div>
        <div className="mt-4 p-4 bg-secondary-50 dark:bg-secondary-900 rounded-lg border border-secondary-200 dark:border-secondary-800">
          <pre className="font-mono text-sm">
            <code>{`<button className="btn btn-primary btn-sm">Small</button>
<button className="btn btn-primary">Default</button>
<button className="btn btn-primary btn-lg">Large</button>`}</code>
          </pre>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-secondary-900 dark:text-white">States</h2>
        <div className="mt-4 p-6 bg-white dark:bg-secondary-800 rounded-lg border border-secondary-200 dark:border-secondary-700">
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-primary">Default</button>
            <button className="btn btn-primary hover:bg-primary-700" disabled>Disabled</button>
            <button className="btn btn-primary loading">Loading</button>
          </div>
        </div>
        <div className="mt-4 p-4 bg-secondary-50 dark:bg-secondary-900 rounded-lg border border-secondary-200 dark:border-secondary-800">
          <pre className="font-mono text-sm">
            <code>{`<button className="btn btn-primary">Default</button>
<button className="btn btn-primary" disabled>Disabled</button>
<button className="btn btn-primary loading">Loading</button>`}</code>
          </pre>
        </div>
      </div>

      <div className="pt-4 border-t border-secondary-200 dark:border-secondary-700">
        <Link href="/components" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium">
          &larr; Back to components
        </Link>
      </div>
    </div>
  );
} 