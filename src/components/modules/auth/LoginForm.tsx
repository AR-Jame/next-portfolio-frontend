"use client"

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

/* eslint-disable @typescript-eslint/no-explicit-any */
const LoginForm = () => {

    const params = useSearchParams();
    const error = params.get("error");
    console.log(error);
    const handleLogin = async (e: any) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value

        try {
            const res = await signIn("credentials", {
                email,
                password,
                callbackUrl: "/dashboard",
                redirect: false
            }) 
            console.log(res);

            if (res?.error) {
                toast.error(res.error)
                return;
            }
            window.location.href = "/dashboard";
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <form className="w-96" onSubmit={handleLogin}>
                <label htmlFor="name">Name</label>
                <input className="block mt-1 mb-3 h-12 w-full bg-[#c4bcbc29] px-2 py-4 text-xl border-b focus:border-b-[#000] focus:border-b-2 focus:ring-0 focus:outline-none border-b-[#0000004d]" type="text" id="name" name="name" />
                <label htmlFor="email">Email</label>
                <input
                    className="block mt-1 mb-3 h-12 w-full bg-[#c4bcbc29] px-2 py-4 text-xl border-b focus:border-b-[#000] focus:border-b-2 focus:ring-0 focus:outline-none border-b-[#0000004d]"
                    type="email"
                    id="email"
                    name="email" />
                <label htmlFor="password">Password</label>
                <input className="block mt-1 mb-3 h-12 w-full bg-[#c4bcbc29] px-2 py-4 text-xl border-b focus:border-b-[#000] focus:border-b-2 focus:ring-0 focus:outline-none border-b-[#0000004d]"
                    type="password" id="password" name="password" />
                <button className="w-full border rounded-md py-3 text-[#f7b2b2]">Submit</button>
            </form>
        </div>
    );
};

export default LoginForm;