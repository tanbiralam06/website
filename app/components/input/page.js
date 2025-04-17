import Link from 'next/link';

export default function InputPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-secondary-900 dark:text-white">Input Component</h1>
        <p className="mt-4 text-xl text-secondary-600 dark:text-secondary-300">
          Input components allow users to enter text and data in a form.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-secondary-900 dark:text-white">Basic Input</h2>
        <div className="mt-4 p-6 bg-white dark:bg-secondary-800 rounded-lg border border-secondary-200 dark:border-secondary-700">
          <div className="flex flex-col gap-4 max-w-md">
            <input type="text" className="input" placeholder="Default input" />
            <input type="text" className="input input-bordered" placeholder="Bordered input" />
            <input type="text" className="input input-ghost" placeholder="Ghost input" />
          </div>
        </div>
        <div className="mt-4 p-4 bg-secondary-50 dark:bg-secondary-900 rounded-lg border border-secondary-200 dark:border-secondary-800">
          <pre className="font-mono text-sm">
            <code>{`<input type="text" className="input" placeholder="Default input" />
<input type="text" className="input input-bordered" placeholder="Bordered input" />
<input type="text" className="input input-ghost" placeholder="Ghost input" />`}</code>
          </pre>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-secondary-900 dark:text-white">Sizes</h2>
        <div className="mt-4 p-6 bg-white dark:bg-secondary-800 rounded-lg border border-secondary-200 dark:border-secondary-700">
          <div className="flex flex-col gap-4 max-w-md">
            <input type="text" className="input input-bordered input-sm" placeholder="Small input" />
            <input type="text" className="input input-bordered" placeholder="Default input" />
            <input type="text" className="input input-bordered input-lg" placeholder="Large input" />
          </div>
        </div>
        <div className="mt-4 p-4 bg-secondary-50 dark:bg-secondary-900 rounded-lg border border-secondary-200 dark:border-secondary-800">
          <pre className="font-mono text-sm">
            <code>{`<input type="text" className="input input-bordered input-sm" placeholder="Small input" />
<input type="text" className="input input-bordered" placeholder="Default input" />
<input type="text" className="input input-bordered input-lg" placeholder="Large input" />`}</code>
          </pre>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-secondary-900 dark:text-white">States</h2>
        <div className="mt-4 p-6 bg-white dark:bg-secondary-800 rounded-lg border border-secondary-200 dark:border-secondary-700">
          <div className="flex flex-col gap-4 max-w-md">
            <input type="text" className="input input-bordered" placeholder="Default input" />
            <input type="text" className="input input-bordered input-error" placeholder="Error input" />
            <input type="text" className="input input-bordered" placeholder="Disabled input" disabled />
          </div>
        </div>
        <div className="mt-4 p-4 bg-secondary-50 dark:bg-secondary-900 rounded-lg border border-secondary-200 dark:border-secondary-800">
          <pre className="font-mono text-sm">
            <code>{`<input type="text" className="input input-bordered" placeholder="Default input" />
<input type="text" className="input input-bordered input-error" placeholder="Error input" />
<input type="text" className="input input-bordered" placeholder="Disabled input" disabled />`}</code>
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