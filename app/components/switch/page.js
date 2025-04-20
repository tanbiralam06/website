"use client";

import { useState } from 'react';
import Link from 'next/link';
import TabGroup from '../../../components/TabGroup';
import ComponentExample from '../../../components/ComponentExample';
import TableOfContents from '../../../components/TableOfContents';
import CodeBlock from '../../../components/CodeBlock';
import Banner from '../../../components/banner';

// Mock imports of the actual reacui components
// In a real implementation, you would import from your component library
// import { Switch } from 'reacui';

export default function SwitchPage() {
  // Table of Contents items
  const tocItems = [
    { id: 'overview', title: 'Overview' },
    { id: 'installation', title: 'Installation' },
    { id: 'import', title: 'Import' },
    { id: 'basic-usage', title: 'Basic Usage' },
    { id: 'states', title: 'Switch States' },
    { id: 'sizes', title: 'Switch Sizes' },
    { id: 'with-label', title: 'With Label' },
    { id: 'api-reference', title: 'API Reference' }
  ];

  // State for switches
  const [mainSwitchChecked, setMainSwitchChecked] = useState(true);
  const [basicSwitchChecked, setBasicSwitchChecked] = useState(false);
  const [switchStates, setSwitchStates] = useState({
    unchecked: false,
    checked: true,
    disabledUnchecked: false,
    disabledChecked: true
  });
  const [switchSizes, setSwitchSizes] = useState({
    small: true,
    medium: true,
    large: true
  });
  const [labelSwitches, setLabelSwitches] = useState({
    dailyDigest: true,
    darkMode: false
  });

  // Custom Switch Component
  const InteractiveSwitch = ({ checked, onChange, disabled = false, size = "md" }) => {
    const handleChange = () => {
      if (!disabled && onChange) {
        onChange(!checked);
      }
    };

    // Size classes
    const sizeClasses = {
      sm: "h-4 w-8",
      md: "h-6 w-11",
      lg: "h-8 w-14"
    };

    const thumbSizeClasses = {
      sm: "h-3 w-3 translate-x-0",
      md: "h-5 w-5 translate-x-0",
      lg: "h-7 w-7 translate-x-0"
    };

    const thumbTranslateClasses = {
      sm: "translate-x-3",
      md: "translate-x-5",
      lg: "translate-x-6"
    };

    const currentSizeClass = sizeClasses[size] || sizeClasses.md;
    const currentThumbSizeClass = thumbSizeClasses[size] || thumbSizeClasses.md;
    const currentThumbTranslateClass = thumbTranslateClasses[size] || thumbTranslateClasses.md;

    return (
      <div
        onClick={handleChange}
        className={`relative inline-flex ${currentSizeClass} flex-shrink-0 ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} rounded-full border-2 border-transparent ${checked ? 'bg-blue-600 dark:bg-blue-500' : 'bg-gray-200 dark:bg-gray-700'} transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
      >
        <span
          className={`${currentThumbSizeClass} ${checked ? currentThumbTranslateClass : ''} pointer-events-none relative inline-block transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
        >
          <span className={`${checked ? 'opacity-100' : 'opacity-0'} duration-100 ease-in absolute inset-0 flex h-full w-full items-center justify-center transition-opacity`} aria-hidden="true">
            <svg className="h-3 w-3 text-blue-600" fill="currentColor" viewBox="0 0 12 12">
              <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414 1.414a1 1 0 001.414 0l4.243-4.243a1 1 0 00-1.414-1.414L4.5 6.207 3.707 5.293z" />
            </svg>
          </span>
          <span className={`${!checked ? 'opacity-100' : 'opacity-0'} duration-100 ease-in absolute inset-0 flex h-full w-full items-center justify-center transition-opacity`} aria-hidden="true">
            <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
              <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </span>
      </div>
    );
  };

  // Main example for the top showcase
  const mainExample = (
    <div className="w-full max-w-md mx-auto flex items-center space-x-3">
      <InteractiveSwitch 
        checked={mainSwitchChecked} 
        onChange={setMainSwitchChecked} 
      />
      <span className="text-sm font-medium text-gray-900 dark:text-white">Enabled</span>
    </div>
  );

  const mainCode = `<div className="flex items-center space-x-3">
  <Switch checked={${mainSwitchChecked}} onChange={handleChange} />
  <span className="text-sm font-medium text-gray-900 dark:text-white">
    Enabled
  </span>
</div>`;

  return (
    <>
      <Banner />

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <h1 id="overview" className="text-4xl font-bold text-secondary-900 dark:text-white mb-3">Switch</h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8">
            A toggle switch component for controlling boolean states
          </p>

          {/* Main Example with Tabs */}
          <div className="mb-12">
            <TabGroup example={mainExample} code={mainCode} />
          </div>

          {/* Installation Section */}
          <section id="installation" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Installation</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Switch component is part of the ReacUI library. Install the package to use it in your project.
            </p>
            <CodeBlock code="npm install reacui" language="bash" />
          </section>

          {/* Import Section */}
          <section id="import" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Import</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Import the Switch component into your React component.
            </p>
            <CodeBlock code="import { Switch } from 'reacui';" language="javascript" />
          </section>

          {/* Basic Usage Section */}
          <section id="basic-usage" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Basic Usage</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Switch component provides a toggle switch control to manage boolean states.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto">
                  <InteractiveSwitch 
                    checked={basicSwitchChecked}
                    onChange={setBasicSwitchChecked}
                  />
                </div>
              }
              code={`<Switch />

// With onChange handler
<Switch onChange={(checked) => console.log(checked)} />`}
            />
          </section>

          {/* Switch States Section */}
          <section id="states" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Switch States</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Switches can be in different states such as checked, unchecked, or disabled.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto space-y-6">
                  <div className="flex items-center space-x-3">
                    <InteractiveSwitch 
                      checked={switchStates.unchecked}
                      onChange={(checked) => setSwitchStates({...switchStates, unchecked: checked})}
                    />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Unchecked</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <InteractiveSwitch 
                      checked={switchStates.checked}
                      onChange={(checked) => setSwitchStates({...switchStates, checked: checked})}
                    />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Checked</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <InteractiveSwitch 
                      checked={switchStates.disabledUnchecked}
                      onChange={(checked) => setSwitchStates({...switchStates, disabledUnchecked: checked})}
                      disabled={true}
                    />
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Disabled (Unchecked)</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <InteractiveSwitch 
                      checked={switchStates.disabledChecked}
                      onChange={(checked) => setSwitchStates({...switchStates, disabledChecked: checked})}
                      disabled={true}
                    />
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Disabled (Checked)</span>
                  </div>
                </div>
              }
              code={`{/* Unchecked */}
<Switch checked={false} />

{/* Checked */}
<Switch checked={true} />

{/* Disabled (Unchecked) */}
<Switch checked={false} disabled />

{/* Disabled (Checked) */}
<Switch checked={true} disabled />`}
            />
          </section>

          {/* Switch Sizes Section */}
          <section id="sizes" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Switch Sizes</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Switch component comes in different sizes to fit your design.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto space-y-6">
                  <div className="flex items-center space-x-3">
                    <InteractiveSwitch 
                      checked={switchSizes.small}
                      onChange={(checked) => setSwitchSizes({...switchSizes, small: checked})}
                      size="sm"
                    />
                    <span className={`text-xs font-medium ${switchSizes.small ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>Small</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <InteractiveSwitch 
                      checked={switchSizes.medium}
                      onChange={(checked) => setSwitchSizes({...switchSizes, medium: checked})}
                      size="md"
                    />
                    <span className={`text-sm font-medium ${switchSizes.medium ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>Medium (default)</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <InteractiveSwitch 
                      checked={switchSizes.large}
                      onChange={(checked) => setSwitchSizes({...switchSizes, large: checked})}
                      size="lg"
                    />
                    <span className={`text-base font-medium ${switchSizes.large ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>Large</span>
                  </div>
                </div>
              }
              code={`{/* Small */}
<Switch size="sm" checked={true} />

{/* Medium (default) */}
<Switch size="md" checked={true} />

{/* Large */}
<Switch size="lg" checked={true} />`}
            />
          </section>

          {/* With Label Section */}
          <section id="with-label" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">With Label</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Add labels to your switches to provide more context.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto space-y-4">
                  <div className="flex items-center">
                    <div className="flex h-5 items-center">
                      <InteractiveSwitch 
                        checked={labelSwitches.dailyDigest}
                        onChange={(checked) => setLabelSwitches({...labelSwitches, dailyDigest: checked})}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="comments" className={`font-medium ${labelSwitches.dailyDigest ? 'text-gray-700 dark:text-gray-300' : 'text-gray-500 dark:text-gray-400'}`}>Daily digest</label>
                      <p className={`${labelSwitches.dailyDigest ? 'text-gray-500 dark:text-gray-400' : 'text-gray-400 dark:text-gray-500'}`}>Get notified once a day with a summary of all activity.</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="flex h-5 items-center">
                      <InteractiveSwitch 
                        checked={labelSwitches.darkMode}
                        onChange={(checked) => setLabelSwitches({...labelSwitches, darkMode: checked})}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="candidates" className={`font-medium ${labelSwitches.darkMode ? 'text-gray-700 dark:text-gray-300' : 'text-gray-500 dark:text-gray-400'}`}>Dark mode</label>
                      <p className={`${labelSwitches.darkMode ? 'text-gray-500 dark:text-gray-400' : 'text-gray-400 dark:text-gray-500'}`}>Switch between light and dark theme.</p>
                    </div>
                  </div>
                </div>
              }
              code={`<div className="flex items-center">
  <div className="flex h-5 items-center">
    <Switch id="comments" checked={true} />
  </div>
  <div className="ml-3 text-sm">
    <label htmlFor="comments" className="font-medium text-gray-700 dark:text-gray-300">
      Daily digest
    </label>
    <p className="text-gray-500 dark:text-gray-400">
      Get notified once a day with a summary of all activity.
    </p>
  </div>
</div>

<div className="flex items-center">
  <div className="flex h-5 items-center">
    <Switch id="darkMode" checked={false} />
  </div>
  <div className="ml-3 text-sm">
    <label htmlFor="darkMode" className="font-medium text-gray-700 dark:text-gray-300">
      Dark mode
    </label>
    <p className="text-gray-500 dark:text-gray-400">
      Switch between light and dark theme.
    </p>
  </div>
</div>`}
            />
          </section>

          {/* API Reference Section */}
          <section id="api-reference" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">API Reference</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The following props are available for the Switch component.
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Prop
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Default
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      checked
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      boolean
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      false
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      Whether the switch is checked
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      disabled
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      boolean
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      false
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      Whether the switch is disabled
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      size
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      enum
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      'md'
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      Size of the switch: 'sm', 'md', or 'lg'
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      onChange
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      function
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      -
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      Callback function that is triggered when the switch state changes
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      id
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      string
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      -
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      The id attribute of the switch
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Right Sidebar - Table of Contents */}
        <div className="w-64 hidden xl:block">
          <div className="sticky top-24">
            <TableOfContents items={tocItems} />
          </div>
        </div>
      </div>
    </>
  );
} 