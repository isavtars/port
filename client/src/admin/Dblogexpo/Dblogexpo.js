import React from 'react'
import { useLocation } from 'react-router-dom';
import "./Dblogexpo.css"
const Dblogexpo = () => {
  let book = useLocation().state.datas;
  console.log(book)

  return (
    <div className="lg:full   overflow-y-hidden lg:mx-5 lg:my-1 flex justify-center items-center  ">
    <div className="becon  p-2">
    <div className="card mb-3">
    <div className="card-head  font-serif font-monospace  lg:h-16 rounded-sm shadow-lg">
    <h5 className="card-title text-black">{book.btitle}</h5>
    </div>
  <img src={book.image} className=" lg:my-2 card-img-top lg:w-[1000px] lg:h-[350px] object-contain" alt="..." />
  <div className="card-body">
   
    <p className="card-text my-3 text-[#8d8d8a] bg-[#181818] lg:h-12 px-1 font-xl rounded-md">{book.bdescription}</p>

    <pre className='dddd px-2 preforblogs'>{`${book.bcontent}`}</pre>
    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
  </div>

   
  <div className="card-footer feat flex my-3">
        <button className='px-2 bg-green-500 mx-1 py-1 rounded-lg text-[#0a0909]'>
          {book.bstack}
        </button>
        <button className='px-2 bg-blue-500 mx-1 py-1 rounded-lg text-[white]'>
          {book.bcategories}
        </button>
        </div>
       
</div>
    </div>
       


     
    </div>
  )
}

export default Dblogexpo