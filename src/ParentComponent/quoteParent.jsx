import React from 'react'
import Quote from '../pages/Quote'
import quoteData from "../JSON/quoteData.json";
const QuoteParent = () => {
  return (
    <div>
    <Quote data={quoteData}/>
    </div>
  )
}

export default QuoteParent