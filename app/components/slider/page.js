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
// import { Slider } from 'reacui';

export default function SliderPage() {
  // Table of Contents items
  const tocItems = [
    { id: 'overview', title: 'Overview' },
    { id: 'installation', title: 'Installation' },
    { id: 'import', title: 'Import' },
    { id: 'basic-usage', title: 'Basic Usage' },
    { id: 'colors', title: 'Colors' },
    { id: 'with-label', title: 'With Label' },
    { id: 'with-markers', title: 'With Markers' },
    { id: 'api-reference', title: 'API Reference' }
  ];

  // State for sliders
  const [mainSliderValue, setMainSliderValue] = useState(60);
  const [basicSliderValue, setBasicSliderValue] = useState(40);
  const [volumeSliderValue, setVolumeSliderValue] = useState(75);
  const [brightnessSliderValue, setBrightnessSliderValue] = useState(50);
  const [markersSliderValue, setMarkersSliderValue] = useState(60);
  const [colorSliders, setColorSliders] = useState({
    primary: 60,
    success: 70,
    danger: 30,
    custom: 50
  });

  // Custom Slider Component
  const InteractiveSlider = ({ value, onChange, min = 0, max = 100, color = "blue" }) => {
    const handleSliderChange = (e) => {
      const newValue = parseInt(e.target.value);
      onChange(newValue);
    };

    const percentage = ((value - min) / (max - min)) * 100;
    
    return (
      <div className="relative pt-1">
        <input 
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={handleSliderChange}
          className="absolute w-full h-2 opacity-0 cursor-pointer z-10"
          style={{ top: "4px" }}
        />
        <div className="flex h-2 overflow-hidden rounded bg-gray-200 dark:bg-gray-700">
          <div 
            className={`flex flex-col justify-center overflow-hidden bg-${color}-500 dark:bg-${color}-400`} 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="absolute inset-y-0 left-0 flex items-center" style={{ left: `${percentage}%` }}>
          <div className={`h-5 w-5 -ml-2.5 rounded-full border-2 border-white bg-${color}-500 dark:border-gray-900 dark:bg-${color}-400 flex items-center justify-center`}>
          </div>
        </div>
      </div>
    );
  };

  // Main example for the top showcase
  const mainExample = (
    <div className="w-full max-w-md mx-auto px-4">
      <InteractiveSlider 
        value={mainSliderValue} 
        onChange={setMainSliderValue} 
      />
    </div>
  );

  const mainCode = `<Slider
  value={${mainSliderValue}}
  min={0}
  max={100}
  onChange={(value) => console.log(value)}
/>`;

  return (
    <>
     <Banner />

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <h1 id="overview" className="text-4xl font-bold text-secondary-900 dark:text-white mb-3">Slider</h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8">
            A slider component for selecting values within a range
          </p>

          {/* Main Example with Tabs */}
          <div className="mb-12">
            <TabGroup example={mainExample} code={mainCode} />
          </div>

          {/* Installation Section */}
          <section id="installation" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Installation</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Slider component is part of the ReacUI library. Install the package to use it in your project.
            </p>
            <CodeBlock code="npm install reacui" language="bash" />
          </section>

          {/* Import Section */}
          <section id="import" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Import</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Import the Slider component into your React component.
            </p>
            <CodeBlock code="import { Slider } from 'reacui';" language="javascript" />
          </section>

          {/* Basic Usage Section */}
          <section id="basic-usage" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Basic Usage</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Slider component allows users to select a value within a specified range.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto px-4">
                  <InteractiveSlider 
                    value={basicSliderValue} 
                    onChange={setBasicSliderValue} 
                  />
                </div>
              }
              code={`<Slider
  value={${basicSliderValue}}
  min={0}
  max={100}
  onChange={(value) => console.log(value)}
/>`}
            />
          </section>

          {/* Colors Section */}
          <section id="colors" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Colors</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Sliders can be styled with different colors to match your application's theme.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto space-y-8 px-4">
                  <div className="relative pt-1">
                    <InteractiveSlider 
                      value={colorSliders.primary} 
                      onChange={(value) => setColorSliders({...colorSliders, primary: value})} 
                      color="blue"
                    />
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Primary (Default)</p>
                  </div>
                  
                  <div className="relative pt-1">
                    <InteractiveSlider 
                      value={colorSliders.success} 
                      onChange={(value) => setColorSliders({...colorSliders, success: value})} 
                      color="green"
                    />
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Success</p>
                  </div>
                  
                  <div className="relative pt-1">
                    <InteractiveSlider 
                      value={colorSliders.danger} 
                      onChange={(value) => setColorSliders({...colorSliders, danger: value})} 
                      color="red"
                    />
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Danger</p>
                  </div>
                  
                  <div className="relative pt-1">
                    <InteractiveSlider 
                      value={colorSliders.custom} 
                      onChange={(value) => setColorSliders({...colorSliders, custom: value})} 
                      color="purple"
                    />
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Custom</p>
                  </div>
                </div>
              }
              code={`{/* Primary (Default) */}
<Slider
  value={${colorSliders.primary}}
  min={0}
  max={100}
  color="primary"
/>

{/* Success */}
<Slider
  value={${colorSliders.success}}
  min={0}
  max={100}
  color="success"
/>

{/* Danger */}
<Slider
  value={${colorSliders.danger}}
  min={0}
  max={100}
  color="danger"
/>

{/* Custom */}
<Slider
  value={${colorSliders.custom}}
  min={0}
  max={100}
  color="purple"
/>`}
            />
          </section>

          {/* With Label Section */}
          <section id="with-label" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">With Label</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Add labels and value indicators to provide more context and improve usability.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto px-4">
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor="volume-slider" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Volume
                      </label>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{volumeSliderValue}%</span>
                    </div>
                    <InteractiveSlider 
                      value={volumeSliderValue} 
                      onChange={setVolumeSliderValue} 
                    />
                    <div className="flex justify-between mt-1 text-xs text-gray-600 dark:text-gray-400">
                      <span>0%</span>
                      <span>100%</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor="brightness-slider" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Brightness
                      </label>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{brightnessSliderValue}%</span>
                    </div>
                    <InteractiveSlider 
                      value={brightnessSliderValue} 
                      onChange={setBrightnessSliderValue} 
                    />
                    <div className="flex justify-between mt-1 text-xs text-gray-600 dark:text-gray-400">
                      <span>0%</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>
              }
              code={`<div className="mb-6">
  <div className="flex justify-between items-center mb-2">
    <label htmlFor="volume-slider" className="text-sm font-medium text-gray-700 dark:text-gray-300">
      Volume
    </label>
    <span className="text-sm text-gray-600 dark:text-gray-400">{value}%</span>
  </div>
  <Slider
    id="volume-slider"
    value={${volumeSliderValue}}
    min={0}
    max={100}
    showLimits
    onChange={(value) => setValue(value)}
  />
</div>

<div>
  <div className="flex justify-between items-center mb-2">
    <label htmlFor="brightness-slider" className="text-sm font-medium text-gray-700 dark:text-gray-300">
      Brightness
    </label>
    <span className="text-sm text-gray-600 dark:text-gray-400">{value}%</span>
  </div>
  <Slider
    id="brightness-slider"
    value={${brightnessSliderValue}}
    min={0}
    max={100}
    showLimits
    onChange={(value) => setValue(value)}
  />
</div>`}
            />
          </section>

          {/* With Markers Section */}
          <section id="with-markers" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">With Markers</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Add markers to provide predefined values for the slider.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-md mx-auto px-4">
                  <div className="relative pt-1">
                    <InteractiveSlider 
                      value={markersSliderValue} 
                      onChange={setMarkersSliderValue} 
                    />
                    <div className="flex justify-between mt-2">
                      <div className="flex flex-col items-center">
                        <div className="h-1 w-1 rounded-full bg-gray-400 dark:bg-gray-500"></div>
                        <span className="mt-1 text-xs text-gray-600 dark:text-gray-400">0</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="h-1 w-1 rounded-full bg-gray-400 dark:bg-gray-500"></div>
                        <span className="mt-1 text-xs text-gray-600 dark:text-gray-400">25</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="h-1 w-1 rounded-full bg-gray-400 dark:bg-gray-500"></div>
                        <span className="mt-1 text-xs text-gray-600 dark:text-gray-400">50</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="h-1 w-1 rounded-full bg-gray-400 dark:bg-gray-500"></div>
                        <span className="mt-1 text-xs text-gray-600 dark:text-gray-400">75</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="h-1 w-1 rounded-full bg-gray-400 dark:bg-gray-500"></div>
                        <span className="mt-1 text-xs text-gray-600 dark:text-gray-400">100</span>
                      </div>
                    </div>
                  </div>
                </div>
              }
              code={`<Slider
  value={${markersSliderValue}}
  min={0}
  max={100}
  step={25}
  markers={[
    { value: 0, label: '0' },
    { value: 25, label: '25' },
    { value: 50, label: '50' },
    { value: 75, label: '75' },
    { value: 100, label: '100' }
  ]}
  onChange={(value) => console.log(value)}
/>`}
            />
          </section>

          {/* API Reference Section */}
          <section id="api-reference" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">API Reference</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The following props are available for the Slider component.
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
                      value
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      0
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      The current value of the slider
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      min
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      0
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      The minimum value of the slider
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      max
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      100
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      The maximum value of the slider
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      step
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      1
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      The step increment value
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
                      Whether the slider is disabled
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      color
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      string
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      'primary'
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      The color of the slider: 'primary', 'success', 'danger', or custom
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      showLimits
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      boolean
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      false
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      Whether to show min and max labels
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      markers
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      array
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      []
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      Array of marker objects with value and label
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
                      Callback function that is triggered when the slider value changes
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