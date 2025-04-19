"use client";

import { useState } from 'react';
import Link from 'next/link';
import TabGroup from '../../../components/TabGroup';
import ComponentExample from '../../../components/ComponentExample';
import TableOfContents from '../../../components/TableOfContents';
import Banner from '../../../components/banner';
// Mock imports of the actual reacui components
// In a real implementation, you would import from your component library
// import { DateTimePicker } from 'reacui';

export default function DateTimePickerPage() {
  // Table of Contents items
  const tocItems = [
    { id: 'overview', title: 'Overview' },
    { id: 'installation', title: 'Installation' },
    { id: 'import', title: 'Import' },
    { id: 'basic', title: 'Basic DatePicker' },
    { id: 'time', title: 'TimePicker' },
    { id: 'datetime', title: 'DateTimePicker' },
    { id: 'range', title: 'Date Range Picker' },
    { id: 'customization', title: 'Customization' },
    { id: 'api-reference', title: 'API Reference' }
  ];

  // Mock date state for examples
  const [date, setDate] = useState(new Date('2023-04-23'));
  const [showCalendar, setShowCalendar] = useState(true);
  const [selectedDay, setSelectedDay] = useState(23);
  const [currentMonth, setCurrentMonth] = useState(3); // 0-indexed, so 3 is April
  const [currentYear, setCurrentYear] = useState(2023);
  
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };
  
  const selectDate = (day) => {
    setSelectedDay(day);
    // Update displayed date string
    const newDate = new Date(date);
    newDate.setDate(day);
    setDate(newDate);
  };

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 
    'May', 'June', 'July', 'August', 
    'September', 'October', 'November', 'December'
  ];

  // Main example for the top showcase
  const mainExample = (
    <div className="w-full max-w-sm mx-auto space-y-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-secondary-500 dark:text-secondary-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
        </div>
        <input 
          type="text" 
          value={`${monthNames[currentMonth]} ${selectedDay}, ${currentYear}`}
          readOnly
          onClick={toggleCalendar}
          className="bg-white dark:bg-secondary-800 border border-secondary-300 dark:border-secondary-700 text-secondary-900 dark:text-white text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 cursor-pointer"
          placeholder="Select date"
        />
      </div>

      {showCalendar && (
        <div className="bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 rounded-md shadow p-2 sm:p-4 fixed sm:static z-10 left-2 right-2 sm:left-auto sm:right-auto">
          <div className="flex items-center justify-between mb-2">
            <button 
              className="p-1 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded"
              onClick={goToPreviousMonth}
            >
              <svg className="w-5 h-5 text-secondary-500 dark:text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h2 className="text-secondary-900 dark:text-white font-medium">{monthNames[currentMonth]} {currentYear}</h2>
            <button 
              className="p-1 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded"
              onClick={goToNextMonth}
            >
              <svg className="w-5 h-5 text-secondary-500 dark:text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 mb-2">
            <span className="text-xs text-center text-secondary-500 dark:text-secondary-400">Su</span>
            <span className="text-xs text-center text-secondary-500 dark:text-secondary-400">Mo</span>
            <span className="text-xs text-center text-secondary-500 dark:text-secondary-400">Tu</span>
            <span className="text-xs text-center text-secondary-500 dark:text-secondary-400">We</span>
            <span className="text-xs text-center text-secondary-500 dark:text-secondary-400">Th</span>
            <span className="text-xs text-center text-secondary-500 dark:text-secondary-400">Fr</span>
            <span className="text-xs text-center text-secondary-500 dark:text-secondary-400">Sa</span>
          </div>
          <div className="grid grid-cols-7 gap-1">
            <span className="text-sm text-center text-secondary-400 dark:text-secondary-500 p-2">26</span>
            <span className="text-sm text-center text-secondary-400 dark:text-secondary-500 p-2">27</span>
            <span className="text-sm text-center text-secondary-400 dark:text-secondary-500 p-2">28</span>
            <span className="text-sm text-center text-secondary-400 dark:text-secondary-500 p-2">29</span>
            <span className="text-sm text-center text-secondary-400 dark:text-secondary-500 p-2">30</span>
            <span className="text-sm text-center text-secondary-400 dark:text-secondary-500 p-2">31</span>
            <button 
              onClick={() => selectDate(1)}
              className="text-sm text-center text-secondary-900 dark:text-white p-2 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-md"
            >1</button>
            <button 
              onClick={() => selectDate(2)}
              className="text-sm text-center text-secondary-900 dark:text-white p-2 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-md"
            >2</button>
            <button 
              onClick={() => selectDate(3)}
              className="text-sm text-center text-secondary-900 dark:text-white p-2 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-md"
            >3</button>
            <button 
              onClick={() => selectDate(4)}
              className="text-sm text-center text-secondary-900 dark:text-white p-2 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-md"
            >4</button>
            <button 
              onClick={() => selectDate(5)}
              className="text-sm text-center text-secondary-900 dark:text-white p-2 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-md"
            >5</button>
            <button 
              onClick={() => selectDate(6)}
              className="text-sm text-center text-secondary-900 dark:text-white p-2 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-md"
            >6</button>
            <button 
              onClick={() => selectDate(7)}
              className="text-sm text-center text-secondary-900 dark:text-white p-2 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-md"
            >7</button>
            <button 
              onClick={() => selectDate(8)}
              className="text-sm text-center text-secondary-900 dark:text-white p-2 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-md"
            >8</button>
            <button 
              onClick={() => selectDate(9)}
              className="text-sm text-center text-secondary-900 dark:text-white p-2 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-md"
            >9</button>
            <button 
              onClick={() => selectDate(10)}
              className="text-sm text-center text-secondary-900 dark:text-white p-2 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-md"
            >10</button>
            <button 
              onClick={() => selectDate(11)}
              className="text-sm text-center text-secondary-900 dark:text-white p-2 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-md"
            >11</button>
            <button 
              onClick={() => selectDate(12)}
              className="text-sm text-center text-secondary-900 dark:text-white p-2 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-md"
            >12</button>
            <button 
              onClick={() => selectDate(13)}
              className="text-sm text-center text-secondary-900 dark:text-white p-2 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-md"
            >13</button>
            <button 
              onClick={() => selectDate(14)}
              className="text-sm text-center text-secondary-900 dark:text-white p-2 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-md"
            >14</button>
            <button 
              onClick={() => selectDate(15)}
              className="text-sm text-center text-secondary-900 dark:text-white p-2 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-md"
            >15</button>
            <button 
              onClick={() => selectDate(16)}
              className="text-sm text-center text-secondary-900 dark:text-white p-2 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-md"
            >16</button>
            <button 
              onClick={() => selectDate(17)}
              className="text-sm text-center text-secondary-900 dark:text-white p-2 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-md"
            >17</button>
            <button 
              onClick={() => selectDate(18)}
              className="text-sm text-center text-secondary-900 dark:text-white p-2 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-md"
            >18</button>
            <button 
              onClick={() => selectDate(19)}
              className="text-sm text-center text-secondary-900 dark:text-white p-2 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-md"
            >19</button>
            <button 
              onClick={() => selectDate(20)}
              className="text-sm text-center text-secondary-900 dark:text-white p-2 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-md"
            >20</button>
            <button 
              onClick={() => selectDate(21)}
              className="text-sm text-center text-secondary-900 dark:text-white p-2 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-md"
            >21</button>
            <button 
              onClick={() => selectDate(22)}
              className="text-sm text-center text-secondary-900 dark:text-white p-2 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-md"
            >22</button>
            <button 
              onClick={() => selectDate(23)}
              className={`text-sm text-center ${selectedDay === 23 ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 font-medium' : 'text-secondary-900 dark:text-white hover:bg-secondary-100 dark:hover:bg-secondary-700'} p-2 rounded-md`}
            >23</button>
            <button 
              onClick={() => selectDate(24)}
              className={`text-sm text-center ${selectedDay === 24 ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 font-medium' : 'text-secondary-900 dark:text-white hover:bg-secondary-100 dark:hover:bg-secondary-700'} p-2 rounded-md`}
            >24</button>
            <button 
              onClick={() => selectDate(25)}
              className={`text-sm text-center ${selectedDay === 25 ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 font-medium' : 'text-secondary-900 dark:text-white hover:bg-secondary-100 dark:hover:bg-secondary-700'} p-2 rounded-md`}
            >25</button>
            <button 
              onClick={() => selectDate(26)}
              className={`text-sm text-center ${selectedDay === 26 ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 font-medium' : 'text-secondary-900 dark:text-white hover:bg-secondary-100 dark:hover:bg-secondary-700'} p-2 rounded-md`}
            >26</button>
            <button 
              onClick={() => selectDate(27)}
              className={`text-sm text-center ${selectedDay === 27 ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 font-medium' : 'text-secondary-900 dark:text-white hover:bg-secondary-100 dark:hover:bg-secondary-700'} p-2 rounded-md`}
            >27</button>
            <button 
              onClick={() => selectDate(28)}
              className={`text-sm text-center ${selectedDay === 28 ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 font-medium' : 'text-secondary-900 dark:text-white hover:bg-secondary-100 dark:hover:bg-secondary-700'} p-2 rounded-md`}
            >28</button>
            <button 
              onClick={() => selectDate(29)}
              className={`text-sm text-center ${selectedDay === 29 ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 font-medium' : 'text-secondary-900 dark:text-white hover:bg-secondary-100 dark:hover:bg-secondary-700'} p-2 rounded-md`}
            >29</button>
            <button 
              onClick={() => selectDate(30)}
              className={`text-sm text-center ${selectedDay === 30 ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 font-medium' : 'text-secondary-900 dark:text-white hover:bg-secondary-100 dark:hover:bg-secondary-700'} p-2 rounded-md`}
            >30</button>
            <span className="text-sm text-center text-secondary-400 dark:text-secondary-500 p-2">1</span>
            <span className="text-sm text-center text-secondary-400 dark:text-secondary-500 p-2">2</span>
            <span className="text-sm text-center text-secondary-400 dark:text-secondary-500 p-2">3</span>
            <span className="text-sm text-center text-secondary-400 dark:text-secondary-500 p-2">4</span>
            <span className="text-sm text-center text-secondary-400 dark:text-secondary-500 p-2">5</span>
            <span className="text-sm text-center text-secondary-400 dark:text-secondary-500 p-2">6</span>
          </div>
        </div>
      )}
    </div>
  );

  const mainCode = `import { useState } from 'react';
import { DateTimePicker } from 'reacui';

function Example() {
  const [date, setDate] = useState(new Date('2023-04-23'));
  
  return (
    <DateTimePicker
      value={date}
      onChange={setDate}
      mode="date"
    />
  );
}`;

  // Basic DatePicker example
  const [showBasicCalendar, setShowBasicCalendar] = useState(false);
  const [basicDate, setBasicDate] = useState("July 23, 2023");
  const [basicMonth, setBasicMonth] = useState(6); // July (0-indexed)
  const [basicYear, setBasicYear] = useState(2023);
  const [basicSelectedDay, setBasicSelectedDay] = useState(23);

  const selectBasicDate = (day) => {
    setBasicSelectedDay(day);
    setBasicDate(`July ${day}, 2023`);
    setShowBasicCalendar(false);
  };

  const toggleBasicCalendar = () => {
    setShowBasicCalendar(!showBasicCalendar);
  };

  const previousBasicMonth = () => {
    if (basicMonth === 0) {
      setBasicMonth(11);
      setBasicYear(basicYear - 1);
    } else {
      setBasicMonth(basicMonth - 1);
    }
  };

  const nextBasicMonth = () => {
    if (basicMonth === 11) {
      setBasicMonth(0);
      setBasicYear(basicYear + 1);
    } else {
      setBasicMonth(basicMonth + 1);
    }
  };

  // Helper to get days in month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Helper to get first day of month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  // Generate days for the basic calendar
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(basicYear, basicMonth);
    const firstDay = getFirstDayOfMonth(basicYear, basicMonth);
    
    // Create an array for all days in the month plus empty spots for proper alignment
    const days = [];
    
    // Add empty cells for days before the first of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <button 
          key={`day-${day}`}
          onClick={() => selectBasicDate(day)}
          className={`p-2 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-md m-1 text-sm text-center ${
            day === basicSelectedDay ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 font-medium' : 'text-secondary-900 dark:text-white'
          }`}
        >
          {day}
        </button>
      );
    }
    
    return days;
  };

  return (
    <>
      <Banner />

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <h1 id="overview" className="text-4xl font-bold text-secondary-900 dark:text-white mb-3">DateTimePicker</h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8">
            A flexible component for selecting dates, times, or both from a calendar or time input
          </p>

          {/* Main Example with Tabs */}
          <div className="mb-12">
            <TabGroup example={mainExample} code={mainCode} />
          </div>

          {/* Installation Section */}
          <section id="installation" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Installation</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The DateTimePicker component is part of the ReacUI library. Install the package to use it in your project.
            </p>
            <div className="bg-secondary-900 text-white p-4 rounded-md overflow-x-auto">
              <pre className="text-sm">
                <code>npm install reacui</code>
              </pre>
            </div>
          </section>

          {/* Import Section */}
          <section id="import" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Import</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Import the DateTimePicker component into your React component.
            </p>
            <div className="bg-secondary-900 text-white p-4 rounded-md overflow-x-auto">
              <pre className="text-sm">
                <code>import {'{ DateTimePicker }'} from 'reacui';</code>
              </pre>
            </div>
          </section>

          {/* Basic DatePicker Section */}
          <section id="basic" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Basic DatePicker</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Use the DateTimePicker in date mode to allow users to select a date from a calendar.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-sm mx-auto">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-5 h-5 text-secondary-500 dark:text-secondary-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input 
                      type="text" 
                      value={`${monthNames[basicMonth]} 23, ${basicYear}`}
                      readOnly
                      onClick={toggleBasicCalendar}
                      className="bg-white dark:bg-secondary-800 border border-secondary-300 dark:border-secondary-700 text-secondary-900 dark:text-white text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 cursor-pointer"
                      placeholder="Select date"
                    />
                  </div>
                  {showBasicCalendar && (
                    <div className="bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 rounded-md shadow p-2 sm:p-4 mt-2 fixed sm:static z-10 left-2 right-2 sm:left-auto sm:right-auto">
                      <div className="flex items-center justify-between mb-2">
                        <button 
                          className="p-1 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded"
                          onClick={previousBasicMonth}
                        >
                          <svg className="w-5 h-5 text-secondary-500 dark:text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <h2 className="text-secondary-900 dark:text-white font-medium">{monthNames[basicMonth]} {basicYear}</h2>
                        <button 
                          className="p-1 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded"
                          onClick={nextBasicMonth}
                        >
                          <svg className="w-5 h-5 text-secondary-500 dark:text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                      
                      {/* Weekday Headers */}
                      <div className="grid grid-cols-7 gap-1 mb-2">
                        <span className="text-xs text-center text-secondary-500 dark:text-secondary-400">Su</span>
                        <span className="text-xs text-center text-secondary-500 dark:text-secondary-400">Mo</span>
                        <span className="text-xs text-center text-secondary-500 dark:text-secondary-400">Tu</span>
                        <span className="text-xs text-center text-secondary-500 dark:text-secondary-400">We</span>
                        <span className="text-xs text-center text-secondary-500 dark:text-secondary-400">Th</span>
                        <span className="text-xs text-center text-secondary-500 dark:text-secondary-400">Fr</span>
                        <span className="text-xs text-center text-secondary-500 dark:text-secondary-400">Sa</span>
                      </div>
                      
                      {/* Calendar Grid */}
                      <div className="grid grid-cols-7 gap-0.5 sm:gap-1">
                        {generateCalendarDays()}
                      </div>
                    </div>
                  )}
                </div>
              }
              code={`import { useState } from 'react';
import { DateTimePicker } from 'reacui';

function Example() {
  const [date, setDate] = useState(new Date('2023-04-23'));
  
  return (
    <DateTimePicker
      value={date}
      onChange={setDate}
      mode="date"
    />
  );
}`}
            />
          </section>

          {/* TimePicker Section */}
          <section id="time" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">TimePicker</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Use the DateTimePicker in time mode to allow users to select a specific time.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-sm mx-auto">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-5 h-5 text-secondary-500 dark:text-secondary-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input 
                      type="text" 
                      value="2:30 PM"
                      readOnly
                      className="bg-white dark:bg-secondary-800 border border-secondary-300 dark:border-secondary-700 text-secondary-900 dark:text-white text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
                      placeholder="Select time"
                    />
                  </div>
                </div>
              }
              code={`import { useState } from 'react';
import { DateTimePicker } from 'reacui';

function Example() {
  const [time, setTime] = useState(new Date('2023-04-23T14:30:00'));
  
  return (
    <DateTimePicker
      value={time}
      onChange={setTime}
      mode="time"
    />
  );
}`}
            />
          </section>

          {/* DateTimePicker Section */}
          <section id="datetime" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">DateTimePicker</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Use the DateTimePicker in datetime mode to allow users to select both a date and time.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-sm mx-auto">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-5 h-5 text-secondary-500 dark:text-secondary-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input 
                      type="text" 
                      value="April 23, 2023 2:30 PM"
                      readOnly
                      className="bg-white dark:bg-secondary-800 border border-secondary-300 dark:border-secondary-700 text-secondary-900 dark:text-white text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
                      placeholder="Select date and time"
                    />
                  </div>
                </div>
              }
              code={`import { useState } from 'react';
import { DateTimePicker } from 'reacui';

function Example() {
  const [datetime, setDatetime] = useState(new Date('2023-04-23T14:30:00'));
  
  return (
    <DateTimePicker
      value={datetime}
      onChange={setDatetime}
      mode="datetime"
    />
  );
}`}
            />
          </section>

          {/* Date Range Picker Section */}
          <section id="range" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Date Range Picker</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Use the DateTimePicker with the range prop to select a date range.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-sm mx-auto">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-5 h-5 text-secondary-500 dark:text-secondary-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input 
                      type="text" 
                      value="April 10 - April 20, 2023"
                      readOnly
                      className="bg-white dark:bg-secondary-800 border border-secondary-300 dark:border-secondary-700 text-secondary-900 dark:text-white text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
                      placeholder="Select date range"
                    />
                  </div>
                </div>
              }
              code={`import { useState } from 'react';
import { DateTimePicker } from 'reacui';

function Example() {
  const [dateRange, setDateRange] = useState({
    start: new Date('2023-04-10'),
    end: new Date('2023-04-20')
  });
  
  return (
    <DateTimePicker
      value={dateRange}
      onChange={setDateRange}
      mode="date"
      range
    />
  );
}`}
            />
          </section>

          {/* Customization Section */}
          <section id="customization" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Customization</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The DateTimePicker can be customized with various options.
            </p>

            <ComponentExample
              example={
                <div className="w-full max-w-sm mx-auto">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-5 h-5 text-primary-500 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input 
                      type="text" 
                      value="Apr 23, 2023 (Custom Format)"
                      readOnly
                      className="bg-white dark:bg-secondary-800 border border-primary-300 dark:border-primary-700 text-secondary-900 dark:text-white text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
                      placeholder="Select date"
                    />
                  </div>
                </div>
              }
              code={`import { useState } from 'react';
import { DateTimePicker } from 'reacui';

function Example() {
  const [date, setDate] = useState(new Date('2023-04-23'));
  
  return (
    <DateTimePicker
      value={date}
      onChange={setDate}
      mode="date"
      format="MMM dd, yyyy (Custom Format)"
      theme="primary"
      weekStartsOn={1} // Start week on Monday
      disabledDates={[new Date('2023-04-25')]} // Disable specific dates
    />
  );
}`}
            />
          </section>

          {/* API Reference Section */}
          <section id="api-reference" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">API Reference</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The following props are available for the DateTimePicker component.
            </p>

            <div className="border border-secondary-200 dark:border-secondary-800 rounded-lg overflow-hidden overflow-x-auto">
              <table className="w-full text-left min-w-full">
                <thead className="bg-secondary-50 dark:bg-secondary-800">
                  <tr>
                    <th className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Prop</th>
                    <th className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Type</th>
                    <th className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Default</th>
                    <th className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">value</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Date | {'{'}start: Date, end: Date{'}'}</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">new Date()</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">The selected date/time value.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">onChange</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">function</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">required</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Callback function when the value changes.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">mode</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">'date'</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Mode of the picker: 'date', 'time', or 'datetime'.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">range</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">boolean</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">false</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Whether to enable date range selection.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">format</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Depends on mode</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Format string for the displayed date/time.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">theme</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">'secondary'</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Color theme for the picker: 'primary', 'secondary', etc.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">weekStartsOn</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">number</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">0</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">First day of the week (0 = Sunday, 1 = Monday, etc.).</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">minDate</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Date</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">-</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Minimum selectable date.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">maxDate</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Date</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">-</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Maximum selectable date.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">disabledDates</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Date[]</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">[]</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Array of dates that cannot be selected.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">className</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">''</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Additional CSS classes for the component.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Table of Contents */}
        <div className="w-64 hidden lg:block">
          <div className="sticky top-20">
            <TableOfContents items={tocItems} />
          </div>
        </div>
      </div>
    </>
  );
} 