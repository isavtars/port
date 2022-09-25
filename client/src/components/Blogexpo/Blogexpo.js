import React from 'react'
import { useLocation } from 'react-router-dom';
import "./Blogexpo.css"
const Blogexpo = () => {
  let book = useLocation().state.datas;
  console.log(book)

  return (
    <div className="lg:full   overflow-y-hidden lg:mx-5 lg:my-1 flex justify-center items-center  ">
    <div class="becon  p-2">
      <h1 className='text-yellow-500 text-2xl mx-2 px-2'>{book.btitle}</h1>
      <div class="blgexpoimgsss  flex justify-center items-center">
      <img src={book.image} alt=""   width={200} />
      </div>
     
      <h2>{book.bdescription}</h2>
      <div class="precont">
      <pre className='precontfdf overflow-y-hidden bg-green-500  h-60'>{` ${book.bcontent} `}
      </pre>
      </div>
    </div>
       


     
    </div>
  )
}

export default Blogexpo