'use client'

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';


// Dynamically import components with SSR disabled for animations
const FeatureCard = dynamic(() => import('../components/FeatureCard'), { ssr: true });
const ParallaxEffect = dynamic(() => import('../components/ParallaxEffect'), { ssr: false });
const AnimatedLogo = dynamic(() => import('../components/AnimatedLogo'), { ssr: false });

// ComponentCard component definition
function ComponentCard({ title, description, color, children, delay }) {
  return (
    <div className="flex-shrink-0 w-[280px] bg-indigo-950/60 backdrop-blur-sm border border-indigo-800/30 rounded-xl overflow-hidden hover:border-indigo-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-900/20">
      <div className={`p-3 border-b border-indigo-800/30 flex justify-between items-center bg-gradient-to-r ${color} bg-opacity-10`}>
        <div>
          <div className="text-white font-medium">{title}</div>
          <div className="text-xs text-indigo-300">{description}</div>
        </div>
        <div className={`w-8 h-8 rounded-md bg-gradient-to-br ${color} opacity-80 flex items-center justify-center text-white`}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </div>
      </div>
      <div className="p-4 bg-indigo-950/40">
        {children}
      </div>
    </div>
  );
}

export default function Home() {
  const features = [
    {
      title: 'Customizable Components',
      description: 'Easily customize components with props for variants, sizes, and colors.',
      icon: (
        <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
    },
    {
      title: 'Dark/Light Mode',
      description: 'Built-in support for dark and light modes using Tailwind CSS.',
      icon: (
        <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
    },
    {
      title: 'Responsive Design',
      description: 'All components are fully responsive and work on any screen size.',
      icon: (
        <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Accessible',
      description: 'Components include ARIA attributes and keyboard navigation for accessibility.',
      icon: (
        <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Lightweight',
      description: 'Optimized bundle size with tree-shaking support via Rollup.',
      icon: (
        <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Comprehensive Docs',
      description: 'Detailed documentation with examples and API references.',
      icon: (
        <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const codeAnimation = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut",
        delay: 0.6
      }
    }
  };

  const floating = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  // Sample code for the enhanced code preview
  const sampleCode = `import { Button, Card, Avatar } from 'reacui';

function DashboardWidget({ user }) {
  return (
    <Card elevation="md" className="dashboard-card">
      <div className="flex items-center gap-3">
        <Avatar
          src={user.avatar}
          fallback={user.name}
          status="online"
        />
        <div>
          <h3 className="text-lg font-medium">
            Welcome back, {user.name}!
          </h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Your dashboard is ready
          </p>
        </div>
      </div>
      
      <div className="stats-grid mt-4">
        {/* Stats content */}
      </div>
      
      <div className="flex justify-end gap-2 mt-6">
        <Button variant="outline">View Analytics</Button>
        <Button variant="primary">Update Profile</Button>
      </div>
    </Card>
  );
}`;

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section with premium dark theme styling */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-800 via-primary-900 to-secondary-950 py-24 sm:py-32">
        {/* Interactive background */}
        <div className="absolute inset-0 z-0">
          {/* Geometric shapes */}
          {Array.from({ length: 15 }).map((_, index) => (
            <motion.div
              key={`shape-${index}`}
              className={`absolute ${index % 3 === 0 ? 'rounded-full' : index % 3 === 1 ? 'rounded-lg' : 'rounded-md'}`}
              style={{
                width: (Math.random() * 120 + 40) + 'px',
                height: (Math.random() * 120 + 40) + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                background: `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 50 + 30)}, ${Math.floor(Math.random() * 200 + 55)}, 0.1)`,
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
              initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
              animate={{
                rotate: [0, (Math.random() - 0.5) * 30],
                scale: [0.8, 1, 0.8],
                opacity: [0, 0.3, 0],
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}

          {/* Dynamic mesh lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10">
            <pattern id="mesh-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20h40M20 0v40" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#mesh-pattern)" />
          </svg>

          {/* Animate light sweep effect */}
          <motion.div 
            className="absolute top-0 -left-1/2 w-[150%] h-[500px] rotate-[-20deg] bg-gradient-to-r from-transparent via-white to-transparent opacity-[0.03]"
            initial={{ left: '-150%' }}
            animate={{ left: '100%' }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatDelay: 10,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Main hero content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col max-w-2xl text-center lg:text-left"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-3 inline-flex mx-auto lg:mx-0"
              >
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 backdrop-blur-sm">
                  <span className="inline-block w-2 h-2 mr-2 rounded-full bg-indigo-400 animate-pulse"></span>
                  New Components Released
                </span>
              </motion.div>
              
              <h1 className="text-6xl font-bold tracking-tight text-white mb-4">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  Elevate 
                  <span className="relative mx-2">
                    <span className="relative z-10 italic">every</span>
                    <motion.span 
                      className="absolute -z-10 bottom-0 left-0 right-0 h-3 bg-primary-500/30 rounded-sm"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    />
                  </span>
                  interface
                </motion.span>
                <motion.span 
                  className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-primary-300 to-teal-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  with ReacUI
                </motion.span>
              </h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="text-xl leading-relaxed text-indigo-100/80"
              >
                A thoughtfully crafted React component library that combines elegance with performance. Build exceptional user experiences with less code and more creativity.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="flex flex-wrap mt-8 gap-4 mx-auto lg:mx-0 justify-center lg:justify-start"
              >
              <Link
                href="/docs/getting-started"
                  className="relative group overflow-hidden rounded-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-primary-600 group-hover:from-indigo-500 group-hover:to-primary-500 transition-all duration-300"></div>
                  <div className="absolute inset-0.5 bg-black/90 group-hover:bg-black/70 rounded-lg transition-all duration-300"></div>
                  <div className="relative px-5 py-3 flex items-center">
                    <span className="mr-2 text-white font-medium">Start Building</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                    >
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.span>
                  </div>
              </Link>
                
              <Link
                href="/components"
                  className="relative group rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="backdrop-blur-md px-5 py-3 flex items-center">
                    <span className="mr-2 text-white/90">Explore Components</span>
                    <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
              </Link>
              </motion.div>
              
              {/* Installation command */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-10 overflow-hidden rounded-lg border border-indigo-900/50 bg-indigo-950/50 backdrop-blur-md"
              >
                <div className="flex items-center justify-between px-4 py-2 bg-indigo-900/30 border-b border-indigo-800/50">
                  <div className="text-xs text-indigo-300 font-medium">Install in your project</div>
                  <div className="flex space-x-2">
                    <motion.button 
                      className="text-xs text-indigo-400 hover:text-indigo-300 transition"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Copy
                    </motion.button>
            </div>
          </div>
                <div className="p-4 font-mono text-sm text-indigo-300 overflow-x-auto">
                  <div className="flex">
                    <span className="text-primary-400 mr-2">$</span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1.5, delay: 1.2 }}
                    >
                      npm install @reacui/core @reacui/hooks tailwindcss
                    </motion.span>
                    <motion.span 
                      className="border-r-2 border-primary-500 ml-1 h-5" 
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* Social proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="mt-8 flex items-center space-x-4"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div 
                      key={i} 
                      className="w-8 h-8 rounded-full ring-2 ring-indigo-900 bg-gradient-to-br from-indigo-600 to-primary-600"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 1.2 + (i * 0.1) }}
                    />
                  ))}
                </div>
                <div className="text-sm text-indigo-200">
                  Trusted by <span className="font-semibold">thousands</span> of developers
                </div>
              </motion.div>
            </motion.div>
            
            {/* Interactive 3D component preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full lg:flex-1 mt-10 lg:mt-0"
            >
              <div className="relative">
                {/* Card stack effect */}
                <motion.div
                  className="absolute top-6 -right-4 w-full h-48 sm:h-60 rounded-xl bg-gradient-to-br from-indigo-900/20 to-primary-800/20 border border-indigo-700/10 backdrop-blur-sm z-10"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: -4 }}
                  transition={{ type: "spring", stiffness: 100 }}
                ></motion.div>
                <motion.div
                  className="absolute top-3 -right-2 w-full h-48 sm:h-60 rounded-xl bg-gradient-to-br from-indigo-800/20 to-primary-700/20 border border-indigo-700/10 backdrop-blur-sm z-20"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: -2 }}
                  transition={{ type: "spring", stiffness: 100 }}
                ></motion.div>
                
                {/* Main component preview */}
                <motion.div
                  className="relative w-full h-48 sm:h-60 rounded-xl border border-indigo-700/30 overflow-hidden shadow-xl shadow-indigo-900/20 z-30"
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(79 70 229 / 0.2)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 via-primary-600/5 to-teal-500/5"></div>
                  
                  {/* Component UI preview - cards carousel */}
                  <div className="h-full bg-indigo-950/90 backdrop-blur-sm p-4 flex items-center">
                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="flex gap-3 w-full overflow-hidden"
                    >
                      {/* Component cards */}
                      {Array.from({ length: 3 }).map((_, index) => (
                        <motion.div
                          key={index}
                          className={`shrink-0 h-full ${index === 0 ? 'w-4/5' : 'w-2/3'} rounded-lg bg-gradient-to-br from-indigo-900/40 to-indigo-950/40 border border-indigo-800/30 p-3 flex flex-col justify-between`}
                          initial={{ x: 100 * (index + 1), opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.6 + (index * 0.2), duration: 0.5 }}
                          whileHover={{ y: -2 }}
                        >
                          <div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-sky-500 mb-2"></div>
                            <div className="h-2 w-20 bg-indigo-700/50 rounded mb-1"></div>
                            <div className="h-2 w-16 bg-indigo-800/50 rounded"></div>
                          </div>
                          <div className="mt-4">
                            <div className="h-2 w-full bg-indigo-800/30 rounded mb-1"></div>
                            <div className="h-2 w-3/4 bg-indigo-800/30 rounded"></div>
                            <div className="flex justify-between mt-2">
                              <div className="h-4 w-1/3 bg-primary-700/40 rounded"></div>
                              <div className="h-4 w-1/4 bg-indigo-600/40 rounded"></div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                  
                  {/* Controls overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/40 to-transparent flex items-center justify-center">
              <div className="flex space-x-1">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <motion.div 
                          key={i} 
                          className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-primary-400' : 'bg-indigo-700'}`}
                          whileHover={{ scale: 1.2 }}
                        />
                      ))}
              </div>
            </div>
                </motion.div>
                
                {/* Floating badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20, x: -50 }}
                  animate={{ opacity: 1, y: 0, x: -30 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  className="absolute -bottom-8 -left-2 bg-indigo-900/40 backdrop-blur-md px-3 py-2 rounded-lg shadow-lg border border-indigo-700/30 text-xs font-medium text-indigo-200 z-40"
                >
                  <div className="flex items-center">
                    <svg className="w-3 h-3 text-primary-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Accessible by default</span>
      </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: -20, x: 50 }}
                  animate={{ opacity: 1, y: 0, x: 30 }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                  className="absolute -top-8 right-8 bg-indigo-900/40 backdrop-blur-md px-3 py-2 rounded-lg shadow-lg border border-indigo-700/30 text-xs font-medium text-indigo-200 transform rotate-2 z-40"
                >
                  <div className="flex items-center">
                    <svg className="w-3 h-3 text-teal-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>High performance</span>
            </div>
                </motion.div>
                
                {/* Code snippet */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute -bottom-16 right-0 p-3 bg-indigo-950/70 backdrop-blur-md rounded-lg border border-indigo-800/30 text-indigo-300 font-mono text-xs max-w-[240px] overflow-hidden z-30"
                >
                  <div className="text-indigo-500">{`import`} <span className="text-primary-400">{`{ Card }`}</span> {`from`} <span className="text-teal-400">{`'@reacui/core'`}</span></div>
                </motion.div>
          </div>
            </motion.div>
          </div>

          {/* Technology pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-20 max-w-6xl mx-auto flex flex-wrap justify-center gap-3"
          >
            {['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js', 'Storybook'].map((tech, index) => (
              <motion.div
                key={tech}
                className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-900/30 text-indigo-300 text-sm border border-indigo-700/20 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + (index * 0.1), duration: 0.4 }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: 'rgba(99, 102, 241, 0.2)', 
                  borderColor: 'rgba(129, 140, 248, 0.3)' 
                }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>

          {/* Stats bar - minimalist design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-indigo-800/30">
              <div className="flex flex-col items-center p-4">
                <div className="text-indigo-300 text-sm font-medium">COMPONENTS</div>
                <div className="text-white text-3xl font-bold mt-2">50+</div>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="text-indigo-300 text-sm font-medium">VARIANTS</div>
                <div className="text-white text-3xl font-bold mt-2">200+</div>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="text-indigo-300 text-sm font-medium">STARS</div>
                <div className="text-white text-3xl font-bold mt-2">3.2K</div>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="text-indigo-300 text-sm font-medium">DOWNLOADS</div>
                <div className="text-white text-3xl font-bold mt-2">125K+</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Component Showcase Section */}
      <section className="py-24 relative overflow-hidden bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900 via-secondary-950 to-primary-950">
        {/* Dynamic background patterns */}
        <div className="absolute inset-0 opacity-[0.07]">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 20h40M20 0v40" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        
        {/* Animated background elements */}
        <motion.div 
          className="absolute -top-40 left-20 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.15, 0.25, 0.15],
            x: [0, 30, 0],
            y: [0, 15, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute -bottom-20 right-10 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2], 
            opacity: [0.15, 0.2, 0.15],
            x: [0, -40, 0],
            y: [0, 20, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-700/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1], 
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        <div className="container relative z-10 mx-auto px-4">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-medium border border-indigo-500/20 backdrop-blur-sm mb-4">
              <span className="inline-block w-2 h-2 mr-2 rounded-full bg-indigo-400 animate-pulse"></span>
              POWERFUL COMPONENTS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="relative">
                Build interfaces 
                <motion.span 
                  className="absolute -z-10 bottom-2 left-0 right-0 h-3 bg-indigo-500/30 rounded-sm"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </span>
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-primary-300 to-teal-300">
                without limits
              </span>
            </h2>
            <p className="text-indigo-100/80 max-w-2xl mx-auto text-lg">
              Our meticulously crafted components are designed for flexibility, accessibility, and performance
            </p>
          </motion.div>
          
          {/* Infinite auto-scrolling component carousel */}
          <div className="mb-16 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* First row - left to right */}
              <motion.div 
                className="flex gap-6 mb-6"
                animate={{ x: [0, -1920] }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear"
                }}
              >
                {/* Component cards - row 1 */}
                <ComponentCard 
                  title="Buttons" 
                  description="Interactive controls" 
                  delay={0.1}
                  color="from-indigo-500 to-blue-600"
                >
                  <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md shadow-sm text-sm font-medium transition-all">
                      Primary
                    </button>
                    <button className="px-4 py-2 bg-transparent border border-indigo-700 hover:border-indigo-500 text-white rounded-md text-sm font-medium transition-all">
                      Secondary
                    </button>
                    <button className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-md shadow-sm text-sm font-medium transition-all">
                      Danger
                    </button>
          </div>
                </ComponentCard>
                
                <ComponentCard 
                  title="Inputs" 
                  description="Form controls & elements" 
                  delay={0.2}
                  color="from-sky-500 to-teal-500"
                >
                  <div className="space-y-3">
                    <input 
                      type="text" 
                      placeholder="Enter your name"
                      className="w-full px-3 py-2 bg-indigo-950/50 border border-indigo-800 focus:border-indigo-500 rounded-md text-white text-sm transition-all"
                    />
                    <div className="flex items-center">
                      <input 
                        type="checkbox"
                        className="h-4 w-4 rounded border-indigo-700 bg-indigo-950/50 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label className="ml-2 text-sm text-indigo-300">
                        Remember me
                      </label>
                </div>
                  </div>
                </ComponentCard>
                
                <ComponentCard 
                  title="Cards" 
                  description="Versatile containers" 
                  delay={0.3}
                  color="from-violet-500 to-purple-600"
                >
                  <div className="p-3 bg-indigo-900/50 rounded-lg border border-indigo-700/50">
                    <div className="text-white font-medium mb-2">Dashboard</div>
                    <div className="text-xs text-indigo-300 mb-3">Weekly summary</div>
                    <div className="flex justify-between">
                      <span className="text-indigo-200 text-xs">Engagement</span>
                      <span className="text-white font-medium text-xs">+24%</span>
                    </div>
                  </div>
                </ComponentCard>
                
                <ComponentCard 
                  title="Alerts" 
                  description="Status notifications" 
                  delay={0.3}
                  color="from-amber-500 to-orange-600"
                >
                  <div className="p-3 bg-green-950/30 border border-green-700/30 rounded-md flex items-start">
                    <div className="mr-3 text-green-400">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-green-400 text-sm font-medium">Success</div>
                      <div className="text-green-300/80 text-xs">Your changes have been saved</div>
                    </div>
                  </div>
                </ComponentCard>
                
                <ComponentCard 
                  title="Badges" 
                  description="Status indicators" 
                  delay={0.4}
                  color="from-fuchsia-500 to-pink-600"
                >
                  <div className="flex gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      New
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Completed
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Error
                    </span>
                  </div>
                </ComponentCard>
                
                <ComponentCard 
                  title="Modals" 
                  description="Dialog windows" 
                  delay={0.5}
                  color="from-rose-500 to-red-600"
                >
                  <div className="p-3 bg-indigo-900/50 rounded-lg border border-indigo-700/50">
                    <div className="text-white font-medium mb-2">Confirmation</div>
                    <div className="text-xs text-indigo-300 mb-3">Are you sure you want to delete this item?</div>
                    <div className="flex justify-end gap-2">
                      <button className="px-2 py-1 text-xs bg-transparent hover:bg-indigo-800/50 text-indigo-300 rounded">
                        Cancel
                      </button>
                      <button className="px-2 py-1 text-xs bg-red-600 hover:bg-red-500 text-white rounded">
                        Delete
                      </button>
                    </div>
                  </div>
                </ComponentCard>
                
                {/* Duplicate first 3 components to ensure seamless looping */}
                <ComponentCard 
                  title="Buttons" 
                  description="Interactive controls" 
                  delay={0.1}
                  color="from-indigo-500 to-blue-600"
                >
                  <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md shadow-sm text-sm font-medium transition-all">
                      Primary
                    </button>
                    <button className="px-4 py-2 bg-transparent border border-indigo-700 hover:border-indigo-500 text-white rounded-md text-sm font-medium transition-all">
                      Secondary
                    </button>
                    <button className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-md shadow-sm text-sm font-medium transition-all">
                      Danger
                    </button>
                  </div>
                </ComponentCard>
                
                <ComponentCard 
                  title="Inputs" 
                  description="Form controls & elements" 
                  delay={0.2}
                  color="from-sky-500 to-teal-500"
                >
                  <div className="space-y-3">
                    <input 
                      type="text" 
                      placeholder="Enter your name"
                      className="w-full px-3 py-2 bg-indigo-950/50 border border-indigo-800 focus:border-indigo-500 rounded-md text-white text-sm transition-all"
                    />
                    <div className="flex items-center">
                      <input 
                        type="checkbox"
                        className="h-4 w-4 rounded border-indigo-700 bg-indigo-950/50 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label className="ml-2 text-sm text-indigo-300">
                        Remember me
                      </label>
                    </div>
                  </div>
                </ComponentCard>
                
                <ComponentCard 
                  title="Cards" 
                  description="Versatile containers" 
                  delay={0.3}
                  color="from-violet-500 to-purple-600"
                >
                  <div className="p-3 bg-indigo-900/50 rounded-lg border border-indigo-700/50">
                    <div className="text-white font-medium mb-2">Dashboard</div>
                    <div className="text-xs text-indigo-300 mb-3">Weekly summary</div>
                    <div className="flex justify-between">
                      <span className="text-indigo-200 text-xs">Engagement</span>
                      <span className="text-white font-medium text-xs">+24%</span>
                    </div>
                  </div>
                </ComponentCard>
              </motion.div>
              
              {/* Second row - right to left (reverse direction) */}
              <motion.div 
                className="flex gap-6"
                animate={{ x: [-1920, 0] }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear"
                }}
              >
                {/* Component cards - row 2 */}
                <ComponentCard 
                  title="Tables" 
                  description="Data organization" 
                  delay={0.6}
                  color="from-emerald-500 to-teal-600"
                >
                  <div className="rounded-md overflow-hidden border border-indigo-800/50 text-xs">
                    <div className="bg-indigo-900/70 p-2 font-medium text-indigo-300 grid grid-cols-2">
                      <div>Name</div>
                      <div>Status</div>
                    </div>
                    <div className="p-2 grid grid-cols-2 border-t border-indigo-800/50">
                      <div className="text-white">Jane Doe</div>
                      <div className="text-green-400">Active</div>
                    </div>
                    <div className="p-2 grid grid-cols-2 border-t border-indigo-800/50">
                      <div className="text-white">John Smith</div>
                      <div className="text-amber-400">Pending</div>
                    </div>
                  </div>
                </ComponentCard>
                
                <ComponentCard 
                  title="Tabs" 
                  description="Content organization" 
                  delay={0.7}
                  color="from-blue-500 to-indigo-600"
                >
                  <div>
                    <div className="flex border-b border-indigo-800">
                      <div className="px-4 py-2 text-indigo-200 border-b-2 border-indigo-500 text-sm font-medium">Profile</div>
                      <div className="px-4 py-2 text-indigo-400 text-sm">Settings</div>
                      <div className="px-4 py-2 text-indigo-400 text-sm">Notifications</div>
                    </div>
                    <div className="p-2 text-indigo-300 text-xs">
                      Active tab content area
                    </div>
                  </div>
                </ComponentCard>
                
                <ComponentCard 
                  title="Dropdowns" 
                  description="Selection menus" 
                  delay={0.8}
                  color="from-cyan-500 to-sky-600"
                >
                  <div className="relative">
                    <button className="w-full flex justify-between items-center px-3 py-2 bg-indigo-900/40 border border-indigo-800/50 rounded-md text-sm text-white">
                      <span>Select option</span>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute mt-1 w-full rounded-md border border-indigo-800/50 bg-indigo-950 shadow-lg z-10">
                      <div className="py-1 px-2 text-sm text-indigo-200 hover:bg-indigo-900/30 rounded-t-md">Option 1</div>
                      <div className="py-1 px-2 text-sm text-indigo-200 hover:bg-indigo-900/30">Option 2</div>
                      <div className="py-1 px-2 text-sm text-indigo-200 hover:bg-indigo-900/30 rounded-b-md">Option 3</div>
                    </div>
                  </div>
                </ComponentCard>
                
                <ComponentCard 
                  title="Toggles" 
                  description="Interactive switches" 
                  delay={0.9}
                  color="from-primary-500 to-indigo-600"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-indigo-300">Notifications</span>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-900/70 border border-indigo-700/50">
                      <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-indigo-400"></span>
                    </button>
                  </div>
                </ComponentCard>
                
                <ComponentCard 
                  title="Progress" 
                  description="Status indicators" 
                  delay={1}
                  color="from-amber-500 to-orange-600"
                >
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-indigo-300">Uploading files...</span>
                      <span className="text-indigo-300">75%</span>
                    </div>
                    <div className="w-full bg-indigo-900/50 rounded-full h-2">
                      <div className="bg-gradient-to-r from-indigo-500 to-sky-500 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </ComponentCard>
                
                <ComponentCard 
                  title="Tooltips" 
                  description="Contextual information" 
                  delay={1.1}
                  color="from-violet-500 to-fuchsia-600"
                >
                  <div className="relative inline-block text-center">
                    <button className="px-3 py-1 bg-indigo-900/40 border border-indigo-800/50 rounded-md text-sm text-white">
                      Hover me
                    </button>
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-indigo-800 text-white text-xs rounded whitespace-nowrap">
                      Tooltip content
                      <div className="absolute w-2 h-2 bg-indigo-800 transform rotate-45 left-1/2 -bottom-1 -translate-x-1/2"></div>
                    </div>
                  </div>
                </ComponentCard>
                
                <ComponentCard 
                  title="Avatars" 
                  description="User representations" 
                  delay={1.2}
                  color="from-emerald-500 to-teal-600"
                >
                  <div className="flex space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-primary-500 flex items-center justify-center text-white font-medium">
                      JD
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-medium">
                      TS
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-medium">
                      AM
                    </div>
                  </div>
                </ComponentCard>
                
                {/* Duplicate last 3 components to ensure seamless looping */}
                <ComponentCard 
                  title="Tables" 
                  description="Data organization" 
                  delay={0.6}
                  color="from-emerald-500 to-teal-600"
                >
                  <div className="rounded-md overflow-hidden border border-indigo-800/50 text-xs">
                    <div className="bg-indigo-900/70 p-2 font-medium text-indigo-300 grid grid-cols-2">
                      <div>Name</div>
                      <div>Status</div>
                    </div>
                    <div className="p-2 grid grid-cols-2 border-t border-indigo-800/50">
                      <div className="text-white">Jane Doe</div>
                      <div className="text-green-400">Active</div>
                    </div>
                    <div className="p-2 grid grid-cols-2 border-t border-indigo-800/50">
                      <div className="text-white">John Smith</div>
                      <div className="text-amber-400">Pending</div>
                    </div>
                  </div>
                </ComponentCard>
                
                <ComponentCard 
                  title="Tabs" 
                  description="Content organization" 
                  delay={0.7}
                  color="from-blue-500 to-indigo-600"
                >
                  <div>
                    <div className="flex border-b border-indigo-800">
                      <div className="px-4 py-2 text-indigo-200 border-b-2 border-indigo-500 text-sm font-medium">Profile</div>
                      <div className="px-4 py-2 text-indigo-400 text-sm">Settings</div>
                      <div className="px-4 py-2 text-indigo-400 text-sm">Notifications</div>
                    </div>
                    <div className="p-2 text-indigo-300 text-xs">
                      Active tab content area
                    </div>
                  </div>
                </ComponentCard>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Component search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-xl mx-auto rounded-lg border border-indigo-800/30 bg-indigo-900/20 p-1 backdrop-blur-sm mb-16"
          >
            <div className="relative flex items-center">
              <div className="absolute left-3 text-indigo-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input 
                type="text" 
                placeholder="Search for components..."
                className="w-full bg-transparent py-3 pl-10 pr-4 text-indigo-100 placeholder-indigo-400 focus:outline-none"
              />
              <div className="absolute right-3 flex items-center space-x-2 text-xs text-indigo-400">
                <kbd className="px-1.5 py-0.5 rounded border border-indigo-700 bg-indigo-800/50">⌘</kbd>
                <kbd className="px-1.5 py-0.5 rounded border border-indigo-700 bg-indigo-800/50">K</kbd>
              </div>
            </div>
          </motion.div>
          
          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <Link 
              href="/components"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-primary-600 hover:from-indigo-500 hover:to-primary-500 text-white font-medium shadow-lg shadow-indigo-900/30 transition-all duration-300"
            >
              <span>Explore all components</span>
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <p className="mt-4 text-indigo-300 text-sm">
              Access to over 50+ customizable components
            </p>
          </motion.div>
              </div>
      </section>
      
      {/* Define the ComponentCard subcomponent */}
      {ComponentCard}
      
      {/* Testimonials Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-secondary-900 to-secondary-950">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        
        {/* Background effects */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-700/50 to-transparent"></div>
        <motion.div 
          className="absolute -left-32 top-1/4 w-96 h-96 rounded-full bg-primary-900/20 blur-3xl"
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1], 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute -right-32 bottom-1/4 w-96 h-96 rounded-full bg-fuchsia-900/10 blur-3xl"
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1.1, 1, 1.1], 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        <div className="container relative z-10">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-primary-900/60 backdrop-blur-sm border border-primary-800/50 text-primary-400 text-xs font-medium tracking-wide mb-3">
              LOVED BY DEVELOPERS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What developers are saying
            </h2>
            <p className="text-secondary-300 max-w-2xl mx-auto">
              Join thousands of developers who are building amazing projects with ReacUI
            </p>
          </motion.div>
          
          {/* Testimonials grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-secondary-900 border border-secondary-800 rounded-lg p-6 hover:border-primary-700/50 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-primary-600"></div>
                </div>
                <div>
                  <div className="font-medium text-white">Developer 1</div>
                  <div className="text-sm text-secondary-400">Senior Frontend Engineer</div>
                </div>
              </div>
              <div className="mb-3 text-yellow-400 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-secondary-300 text-sm">
                "ReacUI has dramatically improved our development velocity. The components are well-designed, accessible, and incredibly flexible. It's now our go-to UI library for all new projects."
              </p>
            </motion.div>
            
            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-secondary-900 border border-secondary-800 rounded-lg p-6 hover:border-primary-700/50 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-600"></div>
                </div>
                <div>
                  <div className="font-medium text-white">Developer 2</div>
                  <div className="text-sm text-secondary-400">UI/UX Designer & Developer</div>
                </div>
              </div>
              <div className="mb-3 text-yellow-400 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-secondary-300 text-sm">
                "As both a designer and developer, I appreciate how ReacUI bridges the gap between beautiful design and functional code. The attention to detail in every component is impressive."
              </p>
            </motion.div>
            
            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-secondary-900 border border-secondary-800 rounded-lg p-6 hover:border-primary-700/50 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-cyan-600"></div>
                </div>
                <div>
                  <div className="font-medium text-white">Developer 3</div>
                  <div className="text-sm text-secondary-400">Tech Lead</div>
                </div>
              </div>
              <div className="mb-3 text-yellow-400 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-secondary-300 text-sm">
                "Having evaluated many component libraries, ReacUI stands out for its performance, accessibility, and developer experience. It's become an essential part of our tech stack."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-800 via-primary-700 to-purple-700"></div>
        
        {/* Enhanced background effects */}
        <div className="absolute inset-0">
          {/* Animated floating particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 15 }).map((_, index) => (
              <motion.div
                key={`cta-particle-${index}`}
                className="absolute rounded-full bg-white/20"
                style={{
                  width: Math.random() * 8 + 2 + 'px',
                  height: Math.random() * 8 + 2 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                }}
                animate={{
                  y: [0, -(20 + Math.random() * 80)],
                  x: [0, (Math.random() - 0.5) * 40],
                  opacity: [0.1 + Math.random() * 0.3, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 6,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
              />
            ))}
          </div>
          
          {/* Background decoration */}
          <svg className="absolute right-0 top-0 h-full w-1/3 translate-x-1/3 transform text-white opacity-20" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          
          <motion.div 
            className="absolute -inset-0.5 bg-gradient-to-r from-primary-500/0 via-white/5 to-primary-500/0"
            animate={{ 
              x: ['-100%', '100%'], 
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity,
              ease: "linear" 
            }}
          />
        </div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-3">Optimized Developer Experience</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary-200 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">Intuitive API with TypeScript support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary-200 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">Detailed documentation with live examples</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary-200 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">Copy-paste ready code snippets</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 mt-6">
                <h3 className="text-2xl font-semibold text-white mb-3">Performance Optimized</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary-200 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">Built with performance in mind</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary-200 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">Tree-shakeable exports</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary-200 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">Minimal dependencies</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Ready to build your next project?
              </motion.h2>
              
              <motion.p 
                className="text-xl text-primary-100 mb-8 max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                Start building beautiful interfaces with our component library in minutes. Install the package and begin integrating components into your application.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link href="/docs/getting-started" className="btn bg-white text-primary-700 hover:bg-primary-50 hover:text-primary-800 shadow-xl shadow-primary-900/20">
                    <span className="flex items-center">
                      <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      Get Started
                    </span>
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link href="https://github.com/yourusername/reacui" className="btn bg-primary-800/80 text-white hover:bg-primary-800 border border-primary-600 backdrop-blur-sm">
                    <span className="flex items-center">
                      <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      Star on GitHub
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
              
              {/* Installation command */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="inline-block bg-black/20 backdrop-blur-md rounded-lg overflow-hidden border border-white/10 shadow-2xl"
              >
                <div className="flex items-center justify-between px-4 py-2 bg-white/5">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-white/70 font-mono">terminal</div>
                </div>
                <div className="p-4 font-mono text-sm">
                  <div className="flex">
                    <span className="text-primary-300 mr-2">$</span>
                    <span className="text-white">npm install reacui</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Grid pattern addition to global styles */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        @media (prefers-color-scheme: dark) {
          .bg-grid-pattern {
            background-image: 
              linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          }
        }
        
        .line {
          min-height: 1.5rem;
        }
      `}</style>
      
      {/* CTA section */}
      <section className="bg-primary-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Ready to build amazing UIs?
          </h2>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-8">
            Get started with ReacUI today and build beautiful interfaces in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/docs/installation"
              className="px-8 py-3 bg-white text-primary-900 font-medium rounded-lg hover:bg-primary-50 transition-colors duration-200"
            >
              Get Started
            </Link>
            <Link
              href="/components"
              className="px-8 py-3 bg-primary-800 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              Browse Components
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
} 