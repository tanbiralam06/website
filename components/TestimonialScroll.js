'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useScroll } from 'framer-motion';
import Image from 'next/image';

// Define the testimonial data structure
const testimonials = [
  {
    id: 1,
    name: 'Rayhan Hossain Rahat',
    username: '@rh_rahat_dev',
    text: 'Absolutely Awesome. Would really love to use some of these in my projects.',
    verified: true,
    avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    likes: 42,
    retweets: 7,
    shares: 3,
  },
  {
    id: 2,
    name: 'Joe Mifsud',
    username: '@Joe_Mifsud',
    text: 'These look awesome, nice work!',
    verified: true,
    avatarUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
    likes: 38,
    retweets: 5,
    shares: 2,
  },
  {
    id: 3,
    name: 'Greg Bergé',
    username: '@gregberge_',
    text: '✨ ReacUI is a complete collection of stunning effects ready to use for your website. It\'s shadow/ui for magic effects. Can\'t believe it\'s free!',
    verified: false,
    avatarUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
    likes: 89,
    retweets: 23,
    shares: 12,
  },
  {
    id: 4,
    name: 'Parth Agarwal',
    username: '@ParthAgarwal17',
    text: 'I just tried it out this is crazy awesome',
    verified: false,
    avatarUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
    likes: 27,
    retweets: 4,
    shares: 1,
  },
  {
    id: 5,
    name: 'Rajdeep Seth',
    username: '@rajdeepseth1',
    text: 'Stumbled upon ReacUI.com today and my mind is blown. 🤯 The seamless integration of framer-motion, tailwind CSS, and shadow showcases a masterclass in UI design. 🚀 Kudos to the team for creating such an innovative and inspirational resource for devs! #UI #nextjs',
    verified: false,
    avatarUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
    likes: 112,
    retweets: 35,
    shares: 18,
  },
  {
    id: 6,
    name: 'Micky',
    username: '@mickyy',
    text: 'Yoo... This has to be the most beautiful component library I\'ve ever seen!!',
    verified: true,
    avatarUrl: 'https://randomuser.me/api/portraits/men/6.jpg',
    likes: 76,
    retweets: 21,
    shares: 9,
  },
  {
    id: 7,
    name: 'flat.Rhythm',
    username: '@pointsquatto',
    text: 'I like the interaction and animation. Beautiful!',
    verified: false,
    avatarUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
    likes: 54,
    retweets: 12,
    shares: 5,
  },
  {
    id: 8,
    name: 'Cody De Arkland',
    username: '@Codydearkland',
    text: 'This library is so dope. Stoked to see more components drop.',
    verified: true,
    avatarUrl: 'https://randomuser.me/api/portraits/men/7.jpg',
    likes: 92,
    retweets: 28,
    shares: 14,
  },
  {
    id: 9,
    name: 'viney • building rn',
    username: '@vineyactive',
    text: 'Upon my return from a short break every time, I consistently find innovative additions by you.✨ 🚀',
    verified: false,
    avatarUrl: 'https://randomuser.me/api/portraits/men/8.jpg',
    likes: 63,
    retweets: 15,
    shares: 8,
  },
];

// Twitter X Logo component
const XLogo = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TestimonialCard = ({ testimonial, columnIndex }) => {
  const [isLiked, setIsLiked] = React.useState(false);
  const [isRetweeted, setIsRetweeted] = React.useState(false);
  const [likeCount, setLikeCount] = React.useState(testimonial.likes);
  const [retweetCount, setRetweetCount] = React.useState(testimonial.retweets);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleRetweet = () => {
    if (isRetweeted) {
      setRetweetCount(retweetCount - 1);
    } else {
      setRetweetCount(retweetCount + 1);
    }
    setIsRetweeted(!isRetweeted);
  };

  return (
    <motion.div 
      className="p-0.5 mb-4"
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <motion.div 
        className="bg-[#0f1729] border border-[#1e2a45] rounded-xl p-4 shadow-lg text-sm relative overflow-hidden"
        initial={{ opacity: 0.8 }}
        whileHover={{ 
          opacity: 1,
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12), 0 0 1px rgba(120, 130, 250, 0.3), 0 0 2px rgba(100, 110, 230, 0.2)",
          borderColor: "#2e3a55",
          transition: { duration: 0.2 }
        }}
      >
        {/* Small highlight effect in the top corner */}
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-indigo-500/10 rounded-full blur-xl"></div>
        
        {/* Header with avatar, name and username */}
        <div className="flex items-start mb-2">
          <div className="flex-shrink-0 mr-2">
            <motion.div 
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-transparent"
              whileHover={{ scale: 1.1, borderColor: '#3b82f6' }}
            >
              <Image 
                src={testimonial.avatarUrl} 
                alt={testimonial.name} 
                width={40} 
                height={40}
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
          <div className="flex flex-col flex-grow min-w-0">
            <div className="flex items-center">
              <span className="font-medium text-white truncate">{testimonial.name}</span>
              {testimonial.verified && (
                <span className="ml-1 text-sky-400">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                  </svg>
                </span>
              )}
            </div>
            <span className="text-gray-400 truncate">{testimonial.username}</span>
          </div>
          <motion.div 
            className="flex-shrink-0 ml-2 text-gray-400"
            whileHover={{ color: '#1DA1F2', scale: 1.1 }}
          >
            <XLogo />
          </motion.div>
        </div>
        
        {/* Tweet content */}
        <p className="text-gray-200 mb-2 leading-relaxed">{testimonial.text}</p>
        
        {/* Tweet interactions */}
        <div className="flex justify-start space-x-10 mt-3 text-gray-500">
          <motion.button 
            className="flex items-center group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLike}
          >
            <svg 
              className={`w-4 h-4 mr-1.5 ${isLiked ? 'text-red-500 fill-red-500' : 'group-hover:text-red-500'}`} 
              fill={isLiked ? "currentColor" : "none"} 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className={`text-xs ${isLiked ? 'text-red-500' : 'group-hover:text-red-500'}`}>
              {likeCount}
            </span>
          </motion.button>
          <motion.button 
            className="flex items-center group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRetweet}
          >
            <svg 
              className={`w-4 h-4 mr-1.5 ${isRetweeted ? 'text-green-500' : 'group-hover:text-green-500'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
            <span className={`text-xs ${isRetweeted ? 'text-green-500' : 'group-hover:text-green-500'}`}>
              {retweetCount}
            </span>
          </motion.button>
          <motion.button 
            className="flex items-center group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-4 h-4 mr-1.5 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span className="text-xs group-hover:text-blue-500">
              {testimonial.shares}
            </span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const TestimonialColumn = ({ testimonials, columnIndex, direction = 1 }) => {
  // Filter testimonials for this column (distribute evenly between columns)
  const columnTestimonials = testimonials.filter((_, i) => i % 3 === columnIndex);
  
  return (
    <motion.div
      initial={{ y: direction > 0 ? 0 : -1000 }}
      animate={{ y: direction > 0 ? -1000 : 0 }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 30 + columnIndex * 5, // Slightly different speeds for each column
        ease: "linear",
      }}
      className="flex flex-col"
    >
      {columnTestimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} columnIndex={columnIndex} />
      ))}
      
      {/* Duplicate testimonials for seamless looping */}
      {columnTestimonials.map((testimonial) => (
        <TestimonialCard key={`dup-${testimonial.id}`} testimonial={testimonial} columnIndex={columnIndex} />
      ))}
    </motion.div>
  );
};

const TestimonialScroll = () => {
  return (
    <div className="bg-[#0c1222] text-white">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Loved by thousands of people
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here's what some of our users have to say about ReacUI.
          </p>
        </motion.div>
        
        <div className="relative overflow-hidden" style={{ height: "600px" }}>
          {/* Gradient overlays for fade effect at top and bottom */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0c1222] to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0c1222] to-transparent z-10"></div>
          
          {/* Background subtle glow effects */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl opacity-50"></div>
          
          <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 relative h-full">
            {/* Three columns with different scroll speeds and directions */}
            <div className="overflow-hidden">
              <TestimonialColumn testimonials={testimonials} columnIndex={0} direction={1} />
            </div>
            <div className="overflow-hidden">
              <TestimonialColumn testimonials={testimonials} columnIndex={1} direction={-1} />
            </div>
            <div className="overflow-hidden">
              <TestimonialColumn testimonials={testimonials} columnIndex={2} direction={1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialScroll; 