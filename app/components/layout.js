export default function ComponentsLayout({ children }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold mb-6 text-secondary-900 dark:text-white">Component Library</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-12">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
} 