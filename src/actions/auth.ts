
export const login = async (data: { email: string, password: string }) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (!res?.ok) {
        console.error("Login failed")
    }

    return await res.json();
}