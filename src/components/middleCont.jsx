import React from "react";

const MiddleCont = () => {
  return (
    <>
      <section class="bg-white p-6">
        <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 mt-8">
          <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            {/* Image section */}
            <div class="relative z-10 lg:py-16">
              <div class="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1770&amp;q=80"
                  class="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Content section */}
            <div class="relative flex items-center bg-gray-100">
              <span class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div class="p-8 sm:p-16 lg:p-24">
                <h2 class="text-4xl font-bold sm:text-3xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore, debitis.
                </h2>

                <p class="mt-4 mb-6 text-gray-600 text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                  beatae, magni dolores provident quaerat totam eos, aperiam
                  architecto eius quis quibusdam fugiat dicta.
                </p>
                <div className="ml-6">
  <button
    type="button"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-xl px-8 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Get in Touch
  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MiddleCont;
