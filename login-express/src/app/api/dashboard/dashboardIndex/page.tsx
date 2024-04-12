
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import NotLogged from "@/components/NotLogged";


const Page = ()=>{

    const cookieStore = cookies();
    const session = cookieStore.get('session');
 

    return (
        <>
            {session ? (
                <div>Welcome</div>
            ) : (
               <NotLogged />
            )}
        </>
    );
}

export default Page;