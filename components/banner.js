'use client';

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-3 rounded-lg mb-6">
      <div className="container flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2">
        <div className="flex items-center justify-center sm:justify-start">
          <span className="mr-2">🚀</span>
          <span>
            ReacUI is currently in <strong>Beta</strong>. We're actively improving it! ✨
          </span>
        </div>
        <button className="text-white hover:text-white/80 underline text-sm">
          Share feedback
        </button>
      </div>
    </div>
  );
};

export default Banner;
