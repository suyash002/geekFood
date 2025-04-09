import React from 'react';

const HeroSec = () => {
  return (
    <section className="relative h-screen overflow-hidden">
    {/* Background Image */}
    <img
      src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r from-white/95 to-white/25"></div>

    {/* Content */}
    <div className="relative z-10 mx-auto max-w-screen-xl h-full flex items-center justify-start px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl text-left px-4 sm:px-0">
      <h1 className="text-5xl sm:text-4xl font-bold text-center text-black leading-tight">
        Let us find your
        <strong className="block text-red-600 font-bold ">Forever Food.</strong>
      </h1>

        <p className="mt-4 max-w-lg text-base sm:text-xl text-black">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
        </p>

          <div class="flex mt-4 justify-center gap-4">
      <button type="button" class="text-white bg-red-600  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 mr-8">
        Search Now
      </button>
      <button type="button" class="text-red-600 bg-white border border-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-6 py-3">
        Know More
      </button>
    </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSec;
