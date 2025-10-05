"use server"
import { cookies } from "next/headers";

export const login = async (data: { email: string, password: string }) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data),
            credentials: "include"
        });

        return await res.json();
    } catch (error) {
        console.log(error);
    }

}

export const getProfile = async () => {

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/profile`, {
            headers: {
                Cookie: (await cookies()).toString()
            }
        })
        const user = await res.json();
        return user;
    } catch (error) {
        console.log(error);
        return null
    }
}