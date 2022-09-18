import React, { useEffect, useState } from "react";
import Data from "../../data/port"
import "./Work.css"
import Api from "../../Api/backurl"



const Work = () => { 


  // console.log(Datap)
    
    // const [portfolio, setPortfolio] = useState(Data);
    const [portfolio, setportfolio] = useState([])
    useEffect(() => {
  
      const getdata= async()=>{
  
        try{
          const response= await  Api.get("/api/getdata");
          console.log(response.data)
          setportfolio(response.data)
  
        }catch(err){
            console.log(err)
        }
  
  
      }
      getdata();
    }, [])
  
  

    return (
        <>
            <div className="container portfolio-page ">
                <h1 className="page-title text-6xl lg:p-2 mb-8 lg:mb-4 font-bold text-[#FCA61F]">
                 Projects
                </h1>
                {/* <div>{renderPortfolio(portfolio)}</div> */}
                <div className="images-container flex flex-wrap justify-center gap-2 ">
                {
                    portfolio.map((port, idx) => {

                      console.log(port)
                        return (
                            <div className="image-box   cursor-pointer shadow-lg rounded-xl bg-red-600  hover:bg-slate-300 hover:text-zinc-500 "
                             key={idx} 
                             onClick={() => window.open(port.link)}>

                            <div className="imgcont rounded-xl">
                            

                          
                            <img 
                                src={port.image}
                                className="portfolio-image rounded-xl"
                                alt="portfolio" />  
                                </div>


                            
{/*                               
                                <div className="content text-red-600">
                                    <p className="title text-center text-white hover:text-zinc-500">{port.title}</p>
                                   
                                    <button
                                        className="btn p-2 px-5 text-center bg-yellow-400 text-white"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div> */}
                            </div>
                        )
                    })
                }
            </div>
            </div>
           
        </>
    );
}

export default Work;