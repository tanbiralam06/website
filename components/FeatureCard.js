const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="rounded-lg bg-white dark:bg-secondary-900 p-6 shadow-md border border-secondary-200 dark:border-secondary-700 hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
      <div className="mb-4 rounded-full bg-primary-100 dark:bg-primary-900/30 p-2 w-fit">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-secondary-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-secondary-600 dark:text-secondary-400">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard; 