//src/app/api/login/page.tsx
"use client";

import { useRouter } from 'next/navigation';

import { FormEvent, useState } from "react"; //husk import

const Page = () => {

    const router = useRouter();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        console.log('submit');

        const submitData = { email, password };//data tot submit

        try {

            const res = await fetch("http://localhost:3000/login", {
                credentials:'include',
                cache: 'no-store',
                method: 'POST',
                body: JSON.stringify(submitData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (res.ok) {
                console.log("ok")
                router.push('dashboard/dashboardIndex');
            } else {
                console.log("not ok")
            }
            //res.ok ? console.log("ok") : console.log("not ok")
        } catch (error) {
            console.log(error)
        }

    };


    return (

        <>

            <div className="flex justify-center items-center h-screen">

                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>


        </>
    )
}

export default Page;