"use client";

import { useRouter } from 'next/navigation';

const page = () =>{

    const router= useRouter();

    return(
        
        <>
        im client and not logged in go and log in here
        <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
         onClick={ ()=> router.push("/api/login")}>klik her</button>
        </>
    )
}

export default page;