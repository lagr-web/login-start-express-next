"use client";

import { useRouter } from 'next/navigation';

const page = () =>{

    const router= useRouter();

    return(
        
        <>

         <header className="flex flex-row p-2 bg-slate-800">
        <div className='w-5/6'></div>

        <div className='w-1/6 flex justify-end items-end mr-1'>
          <span className='pr-1 text-white'>you are not logged in</span>
        <button 
        className="bg-slate-500 hover:bg-slate-400 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
         onClick={ ()=> router.push("/api/login")}>login</button>
         </div>
         </header>
        </>
    )
}

export default page;