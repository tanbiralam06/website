"use client";

import CodeBlock from './CodeBlock';

export default function ComponentExample({ title, description, example, code }) {
  return (
    <div className="space-y-6">
      <div>
        {title && <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">{title}</h3>}
        {description && <p className="text-secondary-600 dark:text-secondary-400 mb-4">{description}</p>}
      </div>
      
      <div className="border border-secondary-200 dark:border-secondary-800 rounded-lg overflow-hidden">
        <div className="p-6 bg-white dark:bg-secondary-900 flex flex-wrap gap-4 justify-center items-center">
          {example}
        </div>
        
        <div className="bg-secondary-50 dark:bg-secondary-900 border-t border-secondary-200 dark:border-secondary-800 p-4">
          <CodeBlock code={code} />
        </div>
      </div>
    </div>
  );
} 