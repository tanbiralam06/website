"use client";

import { useState } from 'react';
import CodeBlock from './CodeBlock';

export default function TabGroup({ example, code }) {
  const [activeTab, setActiveTab] = useState('preview');

  return (
    <div className="border border-secondary-200 dark:border-secondary-800 rounded-lg overflow-hidden bg-white dark:bg-secondary-900">
      {/* Tabs Header */}
      <div className="border-b border-secondary-200 dark:border-secondary-800 p-1 bg-secondary-50 dark:bg-secondary-800 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex space-x-1 px-3 w-full sm:w-auto">
          <button 
            onClick={() => setActiveTab('preview')}
            className={`px-3 py-1.5 text-sm rounded-md ${
              activeTab === 'preview' 
                ? 'bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white' 
                : 'text-secondary-600 dark:text-secondary-400 hover:bg-white/50 dark:hover:bg-secondary-800/50'
            }`}
          >
            Preview
          </button>
          <button 
            onClick={() => setActiveTab('code')}
            className={`px-3 py-1.5 text-sm rounded-md ${
              activeTab === 'code' 
                ? 'bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white' 
                : 'text-secondary-600 dark:text-secondary-400 hover:bg-white/50 dark:hover:bg-secondary-800/50'
            }`}
          >
            Code
          </button>
        </div>
        <div className="pr-3 mt-2 sm:mt-0 w-full sm:w-auto text-right">
          <button 
            onClick={() => {
              navigator.clipboard.writeText(code);
              // Toast notification could be added here
            }}
            className="px-3 py-1 text-sm bg-secondary-100 dark:bg-secondary-700 text-secondary-900 dark:text-white rounded-md hover:bg-secondary-200 dark:hover:bg-secondary-600"
          >
            Copy snippet
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'preview' && (
          <div className="p-4 sm:p-8 flex flex-wrap gap-4 justify-center items-center">
            {example}
          </div>
        )}
        
        {activeTab === 'code' && (
          <div className="p-3 sm:p-6">
            <CodeBlock code={code} />
          </div>
        )}
      </div>
    </div>
  );
} 