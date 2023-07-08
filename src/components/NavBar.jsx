import React from 'react'
import { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import { Link } from "react-scroll";

function NavBar() {
    const [nav , setNav] = useState(false);
    const links = [
        {
            id : 1,
            link : "home",
        },
        {
            id : 2,
            link : "about",
        },
        {
            id : 3,
            link : "portfolio",
        },
        {
            id : 4,
            link : "experience",
        },
        {
            id : 5,
            link : "Contact",
        },
    ]
  return (
  <div className='flex justify-between items-center w-full 
  h-20 px-4 text-white bg-black fixed z-40'>
    <div className='flex flex-row align-middle items-center'> <h1 className='font-signature text-5xl m-2'>Jitesh</h1>
    
    {/* <div className='cursor-pointer text-gray-500 z-10 pr-4 ml-0'>
    <label htmlFor="check" className='bg-slate-100 peer-checked:bg-gray-900 relative cursor-pointer w-10 top-0.5 h-5 rounded-full'>
            <input type="checkbox" id='check' className='peeru sr-only' />
            <span className=" w-2/5 h-4/5 bg-gray-900 absolute rounded-full left-1 top-0.5  peeru-checked:bg-gray-400 peeru-checked:left-5 transition-all duration-500" ></span>
        </label> 
    </div> */}
     </div>
  
    <ul className='hidden md:flex'>
       {links.map(({id, link})=> (
        <li className='px-4 capitalize cursor-pointer font-medium
         text-gray-500 hover:text-gray-300 hover:scale-105 duration-300 '>
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
            </li>
       ))}
       <label htmlFor="check" className='bg-gray-100 relative cursor-pointer w-10 top-0.5 h-5 rounded-full'>
            <input type="checkbox" id='check' className='sr-only peer' />
            <span className=" w-2/5 h-4/5 bg-rose-700 absolute rounded-full left-1 top-0.5 peer-checked:bg-rose-950 peer-checked:left-5 transition-all duration-500" ></span>
        </label>
        
    </ul>


    {/* <label htmlFor="check" className='bg-slate-100 jap peer-checked:bg-gray-900 relative cursor-pointer w-10 top-0.5 h-5 rounded-full'>
            <input type="checkbox" id='check' className='peer hidden' />
            <span className=" w-2/5 h-4/5 bg-gray-900 absolute rounded-full left-1 top-0.5  peer-checked:bg-gray-400 peer-checked:left-5 transition-all duration-500" ></span>
        </label> */}
        
    
    

    <div onClick={()=> setNav(!nav)} className=' cursor-pointer text-gray-500 z-10 pr-4 md:hidden'>
        {nav ?<><FaTimes size={30} /></> : <><FaBars size={30} /> </>}
    </div>

    {nav && ( <ul className ="flex flex-col md:hidden justify-center items-center fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500"> 
        {links.map(({id, link }) => (
             <li
              kev={id} 
              className="px-4 cursor-pointer hover:text-white duration-300 capitalize py-6 text-4xl" 
              >
                <Link  onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500} >   {link}</Link> 
              </li> 
              ))}
                </ul>

    )}
    
    </div>

    )
    }

export default NavBar