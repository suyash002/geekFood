import React from "react";

const Quote = ({data}) => {
    
  return (
    <div className="px-16 py-16 " style={{marginTop:"72px"}}>
    {data.map((quote, index) => (
      <div className="m-24 pt-8 pb-8 px-8" key={index}>
        <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            {quote.quote}
          </h5>
          <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            {quote.author || 'Anonymous'}
          </p>
        </div>
      </div>
    ))}
  </div>
  );
};

export default Quote;
