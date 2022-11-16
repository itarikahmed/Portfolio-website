import React from 'react'
// import {FaBars,FaTimes} from'react-icons/fa';
const NavBar = () => {
  
    const links=[
        {
            id:1,
            link:'Home'
        },
        {
            id:2,
            link:'About'
        },
        {
            id:3,
            link:'Portfolio'
        },
        {
            id:4,
            link:'Exprience'
        },
        {
            id:5,
            link:'Contract'
        }
    ]

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 bg-black'>
    <div> <h1 className=' ml-2 text-white text-5xl  font-bold font-signature'>Niloy </h1> </div>
    <div>
        <ul className='flex'>
            {links.map(({id,link})=>(
                 <li key={id} className='px-4 text-gray-500 font-medium cursor-pointer  hover:scale-105 duration-300'>{link}</li>
              ))}          
        </ul>
    </div>
</div>
)}

export default NavBar