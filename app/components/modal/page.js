"use client";

import { useState, useRef } from 'react';
import Link from 'next/link';
import TabGroup from '../../../components/TabGroup';
import ComponentExample from '../../../components/ComponentExample';
import TableOfContents from '../../../components/TableOfContents';
import Banner from '../../../components/banner';
import CodeBlock from '../../../components/CodeBlock';
// Mock imports of the actual reacui components
// In a real implementation, you would import from your component library
// import { Modal } from 'reacui';

export default function ModalPage() {
  // Table of Contents items
  const tocItems = [
    { id: 'overview', title: 'Overview' },
    { id: 'installation', title: 'Installation' },
    { id: 'import', title: 'Import' },
    { id: 'basic', title: 'Basic Modal' },
    { id: 'sizes', title: 'Modal Sizes' },
    { id: 'positioning', title: 'Modal Positioning' },
    { id: 'animations', title: 'Animations' },
    { id: 'forms', title: 'Forms in Modals' },
    { id: 'customization', title: 'Customization' },
    { id: 'accessibility', title: 'Accessibility' },
    { id: 'api-reference', title: 'API Reference' }
  ];

  // State to control modal visibility
  const [isOpen, setIsOpen] = useState(false);
  const [isCustomOpen, setIsCustomOpen] = useState(false);
  const [isSmallOpen, setIsSmallOpen] = useState(false);
  const [isLargeOpen, setIsLargeOpen] = useState(false);
  const [isCenteredOpen, setIsCenteredOpen] = useState(false);
  const [isTopOpen, setIsTopOpen] = useState(false);
  const [isAnimatedOpen, setIsAnimatedOpen] = useState(false);
  const [isSlideOpen, setIsSlideOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isAccessibleOpen, setIsAccessibleOpen] = useState(false);
  
  // Form state
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const initialFocusRef = useRef(null);

  // Helper function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with Name: ${formName}, Email: ${formEmail}`);
    setIsFormOpen(false);
    setFormName('');
    setFormEmail('');
  };

  // Helper function to toggle modal state
  const toggleModal = (setter) => {
    setter(prev => !prev);
  };

  // Main example for the top showcase
  const mainExample = (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors shadow-sm"
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <div 
              className="fixed inset-0 bg-secondary-900/75 backdrop-blur-sm transition-opacity"
              onClick={() => setIsOpen(false)}
            ></div>
            
            <div className="relative transform overflow-hidden rounded-lg bg-white dark:bg-secondary-800 text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-md bg-white dark:bg-transparent text-secondary-400 hover:text-secondary-600 dark:hover:text-secondary-200 focus:outline-none"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/20 sm:mx-0 sm:h-10 sm:w-10">
                    <svg className="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3 className="text-lg font-medium leading-6 text-secondary-900 dark:text-white">
                      Modal Title
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-secondary-600 dark:text-secondary-400">
                        This is the content of the modal. You can put any information or form elements here.
                        The modal backdrop handles clicking outside to close, and we've added a dedicated close button.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-secondary-50 dark:bg-secondary-900/50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Confirm
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md border border-secondary-300 dark:border-secondary-700 bg-white dark:bg-secondary-800 px-4 py-2 text-base font-medium text-secondary-700 dark:text-secondary-300 shadow-sm hover:bg-secondary-50 dark:hover:bg-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );

  const mainCode = `import { useState } from 'react';
import { Modal } from 'reacui';

function Example() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Modal Title"
        closeButton
      >
        <Modal.Body>
          This is the content of the modal. You can put any information 
          or form elements here. The modal backdrop handles clicking 
          outside to close, and we've added a dedicated close button.
        </Modal.Body>
        <Modal.Footer>
          <Modal.Button variant="primary" onClick={() => setIsOpen(false)}>
            Confirm
          </Modal.Button>
          <Modal.Button variant="secondary" onClick={() => setIsOpen(false)}>
            Cancel
          </Modal.Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}`;

  return (
    <>
      <Banner />

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1 max-w-4xl">
          <h1 id="overview" className="text-4xl font-bold text-secondary-900 dark:text-white mb-3">Modal</h1>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 mb-8">
            A dialog component for displaying content that requires user interaction
          </p>

          {/* Main Example with Tabs */}
          <div className="mb-12">
            <TabGroup example={mainExample} code={mainCode} />
          </div>

          {/* Installation Section */}
          <section id="installation" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Installation</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Modal component is part of the ReacUI library. Install the package to use it in your project.
            </p>
            <div className="bg-secondary-900 text-white p-4 rounded-md overflow-x-auto">
              <pre className="text-sm">
                <CodeBlock code="npm install reacui" language="bash" />
              </pre>
            </div>
          </section>

          {/* Import Section */}
          <section id="import" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Import</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Import the Modal component into your React component.
            </p>
            <div className="bg-secondary-900 text-white p-4 rounded-md overflow-x-auto">
              <pre className="text-sm">
                <CodeBlock code="import { Modal } from 'reacui';" language="javascript" />
              </pre>
            </div>
          </section>

          {/* Basic Modal Section */}
          <section id="basic" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Basic Modal</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              A basic modal with a title, content, and action buttons.
            </p>

            <ComponentExample
              example={
                <>
                  <button
                    onClick={() => setIsOpen(true)}
                    className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors"
                  >
                    Open Modal
                  </button>
                </>
              }
              code={`import { useState } from 'react';
import { Modal } from 'reacui';

function Example() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Modal Title"
      >
        <Modal.Body>
          This is the content of the modal. You can put any information 
          or form elements here.
        </Modal.Body>
        <Modal.Footer>
          <Modal.Button variant="primary" onClick={() => setIsOpen(false)}>
            Confirm
          </Modal.Button>
          <Modal.Button variant="secondary" onClick={() => setIsOpen(false)}>
            Cancel
          </Modal.Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}`}
            />
          </section>

          {/* Modal Sizes Section */}
          <section id="sizes" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Modal Sizes</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Modals come in different sizes to fit your content needs.
            </p>

            <ComponentExample
              example={
                <div className="w-full flex flex-wrap gap-4 justify-center">
                  <button
                    onClick={() => setIsSmallOpen(true)}
                    className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors mr-2"
                  >
                    Small Modal
                  </button>
                  <button
                    onClick={() => setIsOpen(true)}
                    className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors mr-2"
                  >
                    Medium Modal
                  </button>
                  <button
                    onClick={() => setIsLargeOpen(true)}
                    className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors"
                  >
                    Large Modal
                  </button>

                  {isSmallOpen && (
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                        <div 
                          className="fixed inset-0 bg-secondary-900/75 transition-opacity"
                          onClick={() => setIsSmallOpen(false)}
                        ></div>
                        
                        <div className="relative transform overflow-hidden rounded-lg bg-white dark:bg-secondary-800 text-left shadow-xl transition-all sm:w-full sm:max-w-sm">
                          <div className="px-4 pt-5 pb-4 sm:p-6">
                            <h3 className="text-lg font-medium leading-6 text-secondary-900 dark:text-white">
                              Small Modal
                            </h3>
                            <div className="mt-2">
                              <p className="text-sm text-secondary-600 dark:text-secondary-400">
                                This is a small modal dialog, perfect for simple confirmations or alerts.
                              </p>
                            </div>
                          </div>
                          <div className="bg-secondary-50 dark:bg-secondary-900/50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                              type="button"
                              className="inline-flex w-full justify-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none sm:w-auto sm:text-sm"
                              onClick={() => setIsSmallOpen(false)}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {isLargeOpen && (
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                        <div 
                          className="fixed inset-0 bg-secondary-900/75 transition-opacity"
                          onClick={() => setIsLargeOpen(false)}
                        ></div>
                        
                        <div className="relative transform overflow-hidden rounded-lg bg-white dark:bg-secondary-800 text-left shadow-xl transition-all sm:w-full sm:max-w-2xl">
                          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <h3 className="text-lg font-medium leading-6 text-secondary-900 dark:text-white">
                              Large Modal
                            </h3>
                            <div className="mt-2">
                              <p className="text-sm text-secondary-600 dark:text-secondary-400">
                                This is a large modal dialog with more content. It's perfect for displaying forms, tables, or other complex information that requires more space.
                              </p>
                              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="rounded-lg bg-secondary-50 dark:bg-secondary-900/30 p-4">
                                  <h4 className="text-md font-medium text-secondary-900 dark:text-white">Section 1</h4>
                                  <p className="mt-1 text-sm text-secondary-600 dark:text-secondary-400">Information can be organized in different sections.</p>
                                </div>
                                <div className="rounded-lg bg-secondary-50 dark:bg-secondary-900/30 p-4">
                                  <h4 className="text-md font-medium text-secondary-900 dark:text-white">Section 2</h4>
                                  <p className="mt-1 text-sm text-secondary-600 dark:text-secondary-400">Provide additional details in a structured layout.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-secondary-50 dark:bg-secondary-900/50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                              type="button"
                              className="inline-flex w-full justify-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                              onClick={() => setIsLargeOpen(false)}
                            >
                              Save Changes
                            </button>
                            <button
                              type="button"
                              className="mt-3 inline-flex w-full justify-center rounded-md border border-secondary-300 dark:border-secondary-700 bg-white dark:bg-secondary-800 px-4 py-2 text-base font-medium text-secondary-700 dark:text-secondary-300 shadow-sm hover:bg-secondary-50 dark:hover:bg-secondary-700 focus:outline-none sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm"
                              onClick={() => setIsLargeOpen(false)}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              }
              code={`import { useState } from 'react';
import { Modal } from 'reacui';

function Example() {
  const [isSmallOpen, setIsSmallOpen] = useState(false);
  const [isMediumOpen, setIsMediumOpen] = useState(false);
  const [isLargeOpen, setIsLargeOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setIsSmallOpen(true)}>
        Small Modal
      </button>
      <button onClick={() => setIsMediumOpen(true)}>
        Medium Modal
      </button>
      <button onClick={() => setIsLargeOpen(true)}>
        Large Modal
      </button>
      
      <Modal
        isOpen={isSmallOpen}
        onClose={() => setIsSmallOpen(false)}
        title="Small Modal"
        size="sm"
      >
        <Modal.Body>
          This is a small modal dialog, perfect for simple confirmations or alerts.
        </Modal.Body>
        <Modal.Footer>
          <Modal.Button variant="primary" onClick={() => setIsSmallOpen(false)}>
            Close
          </Modal.Button>
        </Modal.Footer>
      </Modal>

      <Modal
        isOpen={isMediumOpen}
        onClose={() => setIsMediumOpen(false)}
        title="Medium Modal"
        size="md"
      >
        <Modal.Body>
          This is a medium modal dialog.
        </Modal.Body>
        <Modal.Footer>
          <Modal.Button variant="primary" onClick={() => setIsMediumOpen(false)}>
            Close
          </Modal.Button>
        </Modal.Footer>
      </Modal>

      <Modal
        isOpen={isLargeOpen}
        onClose={() => setIsLargeOpen(false)}
        title="Large Modal"
        size="lg"
      >
        <Modal.Body>
          <p>This is a large modal dialog with more content...</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-secondary-50 p-4 rounded">
              <h4>Section 1</h4>
              <p>Information can be organized in different sections.</p>
            </div>
            <div className="bg-secondary-50 p-4 rounded">
              <h4>Section 2</h4>
              <p>Provide additional details in a structured layout.</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Button variant="primary" onClick={() => setIsLargeOpen(false)}>
            Save Changes
          </Modal.Button>
          <Modal.Button variant="secondary" onClick={() => setIsLargeOpen(false)}>
            Cancel
          </Modal.Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}`}
            />
          </section>

          {/* Modal Positioning Section */}
          <section id="positioning" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Modal Positioning</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Control the vertical position of your modals to create different visual effects.
            </p>

            <ComponentExample
              example={
                <div className="w-full flex flex-wrap gap-4 justify-center">
                  <button
                    onClick={() => setIsCenteredOpen(true)}
                    className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors mr-2"
                  >
                    Centered Modal
                  </button>
                  <button
                    onClick={() => setIsTopOpen(true)}
                    className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors"
                  >
                    Top Modal
                  </button>

                  {isCenteredOpen && (
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                        <div 
                          className="fixed inset-0 bg-secondary-900/75 transition-opacity"
                          onClick={() => setIsCenteredOpen(false)}
                        ></div>
                        
                        <div className="relative transform overflow-hidden rounded-lg bg-white dark:bg-secondary-800 text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
                          <div className="px-4 pt-5 pb-4 sm:p-6">
                            <h3 className="text-lg font-medium leading-6 text-secondary-900 dark:text-white">
                              Centered Modal
                            </h3>
                            <div className="mt-2">
                              <p className="text-sm text-secondary-600 dark:text-secondary-400">
                                This modal is centered vertically in the viewport, which is the default position.
                              </p>
                            </div>
                          </div>
                          <div className="bg-secondary-50 dark:bg-secondary-900/50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                              type="button"
                              className="inline-flex w-full justify-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                              onClick={() => setIsCenteredOpen(false)}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {isTopOpen && (
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                      <div className="flex items-start justify-center p-4 text-center sm:p-0 pt-16">
                        <div 
                          className="fixed inset-0 bg-secondary-900/75 transition-opacity"
                          onClick={() => setIsTopOpen(false)}
                        ></div>
                        
                        <div className="relative transform overflow-hidden rounded-lg bg-white dark:bg-secondary-800 text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
                          <div className="px-4 pt-5 pb-4 sm:p-6">
                            <h3 className="text-lg font-medium leading-6 text-secondary-900 dark:text-white">
                              Top Modal
                            </h3>
                            <div className="mt-2">
                              <p className="text-sm text-secondary-600 dark:text-secondary-400">
                                This modal appears at the top of the viewport instead of being centered.
                              </p>
                            </div>
                          </div>
                          <div className="bg-secondary-50 dark:bg-secondary-900/50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                              type="button"
                              className="inline-flex w-full justify-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                              onClick={() => setIsTopOpen(false)}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              }
              code={`import { useState } from 'react';
import { Modal } from 'reacui';

function Example() {
  const [isCenteredOpen, setIsCenteredOpen] = useState(false);
  const [isTopOpen, setIsTopOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setIsCenteredOpen(true)}>
        Centered Modal
      </button>
      <button onClick={() => setIsTopOpen(true)}>
        Top Modal
      </button>
      
      <Modal
        isOpen={isCenteredOpen}
        onClose={() => setIsCenteredOpen(false)}
        title="Centered Modal"
        position="center"
      >
        <Modal.Body>
          This modal is centered vertically in the viewport, which is the default position.
        </Modal.Body>
        <Modal.Footer>
          <Modal.Button variant="primary" onClick={() => setIsCenteredOpen(false)}>
            Close
          </Modal.Button>
        </Modal.Footer>
      </Modal>

      <Modal
        isOpen={isTopOpen}
        onClose={() => setIsTopOpen(false)}
        title="Top Modal"
        position="top"
      >
        <Modal.Body>
          This modal appears at the top of the viewport instead of being centered.
        </Modal.Body>
        <Modal.Footer>
          <Modal.Button variant="primary" onClick={() => setIsTopOpen(false)}>
            Close
          </Modal.Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}`}
            />
          </section>

          {/* Modal Animations Section */}
          <section id="animations" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Animations</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Add smooth animations to your modals for a better user experience.
            </p>

            <ComponentExample
              example={
                <div className="w-full flex flex-wrap gap-4 justify-center">
                  <button
                    onClick={() => setIsAnimatedOpen(true)}
                    className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors mr-2"
                  >
                    Fade In Modal
                  </button>
                  <button
                    onClick={() => setIsSlideOpen(true)}
                    className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors"
                  >
                    Slide Up Modal
                  </button>

                  {isAnimatedOpen && (
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                        <div 
                          className="fixed inset-0 bg-secondary-900/75 transition-opacity animate-fadeIn"
                          onClick={() => setIsAnimatedOpen(false)}
                        ></div>
                        
                        <div className="relative transform overflow-hidden rounded-lg bg-white dark:bg-secondary-800 text-left shadow-xl transition-all sm:w-full sm:max-w-lg animate-fadeIn">
                          <div className="px-4 pt-5 pb-4 sm:p-6">
                            <h3 className="text-lg font-medium leading-6 text-secondary-900 dark:text-white">
                              Fade In Modal
                            </h3>
                            <div className="mt-2">
                              <p className="text-sm text-secondary-600 dark:text-secondary-400">
                                This modal smoothly fades in when it appears.
                              </p>
                            </div>
                          </div>
                          <div className="bg-secondary-50 dark:bg-secondary-900/50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                              type="button"
                              className="inline-flex w-full justify-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                              onClick={() => setIsAnimatedOpen(false)}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {isSlideOpen && (
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                        <div 
                          className="fixed inset-0 bg-secondary-900/75 transition-opacity animate-fadeIn"
                          onClick={() => setIsSlideOpen(false)}
                        ></div>
                        
                        <div className="relative transform overflow-hidden rounded-lg bg-white dark:bg-secondary-800 text-left shadow-xl transition-all sm:w-full sm:max-w-lg animate-slideUp">
                          <div className="px-4 pt-5 pb-4 sm:p-6">
                            <h3 className="text-lg font-medium leading-6 text-secondary-900 dark:text-white">
                              Slide Up Modal
                            </h3>
                            <div className="mt-2">
                              <p className="text-sm text-secondary-600 dark:text-secondary-400">
                                This modal slides up from the bottom when it appears.
                              </p>
                            </div>
                          </div>
                          <div className="bg-secondary-50 dark:bg-secondary-900/50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                              type="button"
                              className="inline-flex w-full justify-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                              onClick={() => setIsSlideOpen(false)}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              }
              code={`import { useState } from 'react';
import { Modal } from 'reacui';

function Example() {
  const [isFadeModalOpen, setIsFadeModalOpen] = useState(false);
  const [isSlideModalOpen, setIsSlideModalOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setIsFadeModalOpen(true)}>
        Fade In Modal
      </button>
      <button onClick={() => setIsSlideModalOpen(true)}>
        Slide Up Modal
      </button>
      
      <Modal
        isOpen={isFadeModalOpen}
        onClose={() => setIsFadeModalOpen(false)}
        title="Fade In Modal"
        animation="fade"
      >
        <Modal.Body>
          This modal smoothly fades in when it appears.
        </Modal.Body>
        <Modal.Footer>
          <Modal.Button variant="primary" onClick={() => setIsFadeModalOpen(false)}>
            Close
          </Modal.Button>
        </Modal.Footer>
      </Modal>

      <Modal
        isOpen={isSlideModalOpen}
        onClose={() => setIsSlideModalOpen(false)}
        title="Slide Up Modal"
        animation="slide-up"
      >
        <Modal.Body>
          This modal slides up from the bottom when it appears.
        </Modal.Body>
        <Modal.Footer>
          <Modal.Button variant="primary" onClick={() => setIsSlideModalOpen(false)}>
            Close
          </Modal.Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}`}
            />
          </section>

          {/* Forms in Modals Section */}
          <section id="forms" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Forms in Modals</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Modals are perfect for containing forms that require user input.
            </p>

            <ComponentExample
              example={
                <div className="w-full flex flex-wrap gap-4 justify-center">
                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors"
                  >
                    Open Form Modal
                  </button>

                  {isFormOpen && (
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                        <div 
                          className="fixed inset-0 bg-secondary-900/75 transition-opacity"
                          onClick={() => setIsFormOpen(false)}
                        ></div>
                        
                        <div className="relative transform overflow-hidden rounded-lg bg-white dark:bg-secondary-800 text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
                          <form onSubmit={handleFormSubmit}>
                            <div className="px-4 pt-5 pb-4 sm:p-6">
                              <h3 className="text-lg font-medium leading-6 text-secondary-900 dark:text-white mb-4">
                                Contact Information
                              </h3>
                              <div className="space-y-4">
                                <div>
                                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                                    Name
                                  </label>
                                  <input
                                    ref={initialFocusRef}
                                    type="text"
                                    id="name"
                                    value={formName}
                                    onChange={(e) => setFormName(e.target.value)}
                                    placeholder="Enter your name"
                                    className="block w-full rounded-md border-secondary-300 dark:border-secondary-700 bg-white dark:bg-secondary-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm p-2"
                                    required
                                  />
                                </div>
                                <div>
                                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                                    Email
                                  </label>
                                  <input
                                    type="email"
                                    id="email"
                                    value={formEmail}
                                    onChange={(e) => setFormEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="block w-full rounded-md border-secondary-300 dark:border-secondary-700 bg-white dark:bg-secondary-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm p-2"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="bg-secondary-50 dark:bg-secondary-900/50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                              <button
                                type="submit"
                                className="inline-flex w-full justify-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                              >
                                Submit
                              </button>
                              <button
                                type="button"
                                className="mt-3 inline-flex w-full justify-center rounded-md border border-secondary-300 dark:border-secondary-700 bg-white dark:bg-secondary-800 px-4 py-2 text-base font-medium text-secondary-700 dark:text-secondary-300 shadow-sm hover:bg-secondary-50 dark:hover:bg-secondary-700 focus:outline-none sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm"
                                onClick={() => setIsFormOpen(false)}
                              >
                                Cancel
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              }
              code={`import { useState, useRef } from 'react';
import { Modal } from 'reacui';

function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const initialFocusRef = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Form submitted with Name: \${name}, Email: \${email}\`);
    setIsOpen(false);
    setName('');
    setEmail('');
  };
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Open Form Modal
      </button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Contact Information"
        initialFocus={initialFocusRef}
      >
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  ref={initialFocusRef}
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="block w-full rounded-md border p-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="block w-full rounded-md border p-2"
                  required
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Button type="submit" variant="primary">
              Submit
            </Modal.Button>
            <Modal.Button variant="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </Modal.Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}`}
            />
          </section>

          {/* Customization Section */}
          <section id="customization" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Customization</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              Customize the modal with different styles and content.
            </p>

            <ComponentExample
              example={
                <div className="w-full flex justify-center p-4">
                  <button
                    onClick={() => setIsCustomOpen(true)}
                    className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full font-medium shadow-lg transition-colors"
                  >
                    Custom Modal
                  </button>
                  
                  {isCustomOpen && (
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                      <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <div 
                          className="fixed inset-0 bg-secondary-900/75 backdrop-blur-sm transition-opacity"
                          onClick={() => setIsCustomOpen(false)}
                        ></div>
                        
                        <div className="relative transform overflow-hidden rounded-2xl bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 text-center shadow-2xl transition-all sm:w-full sm:max-w-md border border-purple-200 dark:border-purple-900/30">
                          <div className="absolute top-2 right-2">
                            <button
                              onClick={() => setIsCustomOpen(false)}
                              className="rounded-full p-1.5 bg-white/80 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 hover:bg-white dark:hover:bg-purple-800/50 transition-colors"
                            >
                              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                          <div className="p-6">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 mb-4">
                              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                              Custom Styled Modal
                            </h3>
                            <p className="mt-3 text-secondary-600 dark:text-secondary-300">
                              This modal has a custom design with gradient backgrounds, rounded corners, and styled content.
                            </p>
                            <div className="mt-6 grid grid-cols-2 gap-3">
                              <button
                                onClick={() => setIsCustomOpen(false)}
                                className="w-full py-2.5 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full font-medium shadow-sm transition-colors"
                              >
                                Confirm
                              </button>
                              <button
                                onClick={() => setIsCustomOpen(false)}
                                className="w-full py-2.5 bg-white dark:bg-secondary-800 hover:bg-secondary-50 dark:hover:bg-secondary-700 text-secondary-900 dark:text-secondary-100 border border-secondary-300 dark:border-secondary-700 rounded-full font-medium shadow-sm transition-colors"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              }
              code={`import { useState } from 'react';
import { Modal } from 'reacui';

function Example() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full"
      >
        Custom Modal
      </button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        className="rounded-2xl bg-gradient-to-r from-pink-50 to-purple-50 border border-purple-200"
        contentClassName="p-6 text-center"
        closeButton
        overlayClassName="backdrop-blur-sm"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 mb-4">
          <CheckIcon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold">Custom Styled Modal</h3>
        <p className="mt-3 text-secondary-600">
          This modal has a custom design with gradient backgrounds, rounded corners, and styled content.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <Modal.Button 
            variant="custom" 
            onClick={() => setIsOpen(false)}
            className="py-2.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full"
          >
            Confirm
          </Modal.Button>
          <Modal.Button 
            variant="custom" 
            onClick={() => setIsOpen(false)}
            className="py-2.5 bg-white text-secondary-900 border border-secondary-300 rounded-full"
          >
            Cancel
          </Modal.Button>
        </div>
      </Modal>
    </>
  );
}`}
            />
          </section>

          {/* Accessibility Section */}
          <section id="accessibility" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">Accessibility</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The Modal component implements best practices for accessibility, including keyboard navigation, focus management, and ARIA attributes.
            </p>

            <ComponentExample
              example={
                <div className="w-full flex flex-wrap gap-4 justify-center">
                  <button
                    onClick={() => setIsAccessibleOpen(true)}
                    className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md font-medium transition-colors"
                  >
                    Accessible Modal
                  </button>

                  {isAccessibleOpen && (
                    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true" aria-labelledby="modal-title">
                      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                        <div 
                          className="fixed inset-0 bg-secondary-900/75 transition-opacity"
                          onClick={() => setIsAccessibleOpen(false)}
                        ></div>
                        
                        <div className="relative transform overflow-hidden rounded-lg bg-white dark:bg-secondary-800 text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
                          <div className="absolute top-0 right-0 pt-4 pr-4">
                            <button
                              onClick={() => setIsAccessibleOpen(false)}
                              className="rounded-md bg-white dark:bg-transparent text-secondary-400 hover:text-secondary-600 dark:hover:text-secondary-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                              aria-label="Close modal"
                            >
                              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                          <div className="px-4 pt-5 pb-4 sm:p-6">
                            <h3 className="text-lg font-medium leading-6 text-secondary-900 dark:text-white" id="modal-title">
                              Accessible Modal
                            </h3>
                            <div className="mt-2">
                              <p className="text-sm text-secondary-600 dark:text-secondary-400">
                                This modal implements accessibility best practices:
                              </p>
                              <ul className="mt-2 list-disc list-inside text-sm text-secondary-600 dark:text-secondary-400 space-y-1">
                                <li>Proper ARIA attributes</li>
                                <li>Focus management</li>
                                <li>Keyboard navigation</li>
                                <li>Screen reader support</li>
                              </ul>
                            </div>
                          </div>
                          <div className="bg-secondary-50 dark:bg-secondary-900/50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                              type="button"
                              className="inline-flex w-full justify-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                              onClick={() => setIsAccessibleOpen(false)}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              }
              code={`import { useState, useRef } from 'react';
import { Modal } from 'reacui';

function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const initialFocusRef = useRef(null);
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Accessible Modal
      </button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Accessible Modal"
        initialFocus={initialFocusRef}
        closeButton
        aria={{
          labelledby: "modal-title"
        }}
      >
        <Modal.Body>
          <p>This modal implements accessibility best practices:</p>
          <ul className="mt-2 list-disc list-inside space-y-1">
            <li>Proper ARIA attributes</li>
            <li>Focus management</li>
            <li>Keyboard navigation</li>
            <li>Screen reader support</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Button 
            ref={initialFocusRef}
            variant="primary" 
            onClick={() => setIsOpen(false)}
          >
            Close
          </Modal.Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}`}
            />
          </section>

          {/* API Reference Section */}
          <section id="api-reference" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">API Reference</h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6">
              The following props are available for the Modal component.
            </p>

            <div className="border border-secondary-200 dark:border-secondary-800 rounded-lg overflow-hidden overflow-x-auto">
              <table className="w-full text-left min-w-full">
                <thead className="bg-secondary-50 dark:bg-secondary-800">
                  <tr>
                    <th className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Component</th>
                    <th className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Prop</th>
                    <th className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Type</th>
                    <th className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Default</th>
                    <th className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700" rowSpan="14">Modal</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">isOpen</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">boolean</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">false</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Controls whether the modal is displayed</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">onClose</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">function</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">required</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Function called when the modal should close</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">children</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">ReactNode</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">required</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Content to display inside the modal</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">title</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">-</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Optional title for the modal</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">size</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">'md'</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Size of the modal: 'sm', 'md', 'lg', 'xl', 'full'</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">position</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">'center'</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Vertical position of the modal: 'center', 'top'</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">animation</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">'none'</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Animation style: 'none', 'fade', 'scale', 'slide-up'</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">initialFocus</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">RefObject</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">-</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Ref to the element that should receive focus when the modal opens</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">closeButton</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">boolean</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">false</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Whether to show a close button in the top-right corner</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">closeOnEsc</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">boolean</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">true</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Whether to close the modal when the Escape key is pressed</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">closeOnOverlayClick</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">boolean</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">true</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Whether to close the modal when clicking the overlay</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">className</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">''</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Additional CSS classes for the modal container</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">contentClassName</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">''</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Additional CSS classes for the modal content</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">overlayClassName</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">''</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Additional CSS classes for the modal overlay</td>
                  </tr>

                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Modal.Body</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">className</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">''</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Additional CSS classes for the modal body</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Modal.Header</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">className</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">''</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Additional CSS classes for the modal header</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Modal.Footer</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">className</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">''</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Additional CSS classes for the modal footer</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700" rowSpan="3">Modal.Button</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">variant</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">'primary'</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Button variant: 'primary', 'secondary', 'danger', 'custom'</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">onClick</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">function</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">-</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Function called when the button is clicked</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">className</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">string</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">''</td>
                    <td className="px-4 py-2 border-b border-secondary-200 dark:border-secondary-700">Additional CSS classes for the button</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Table of Contents */}
        <div className="w-64 hidden lg:block lg:flex-shrink-0">
          <div className="sticky top-20">
            <TableOfContents items={tocItems} />
          </div>
        </div>
      </div>
    </>
  );
} 