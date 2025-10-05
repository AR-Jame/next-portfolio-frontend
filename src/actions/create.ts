"use server"

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { getProfile } from "./auth";


export const create = async (data: FormData) => {

    const user = await getProfile();

    const blogInfo = Object.fromEntries(data.entries());

    console.log(blogInfo);

    const modifiedData = {
        title: blogInfo.title,
        content: blogInfo.content,
        thumbnail: blogInfo.thumbnail,
        authorId: user?.data?.id,
        isFeatured: Boolean(blogInfo.isFeatured),
        categories: blogInfo.tag
            .toString()
            .split(",")
            .map(tag => tag.trim())
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/create`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(modifiedData)
    })

    const result = await res.json();
    console.log(result);
    if (result.success) {
        revalidateTag("BLOGS")
        redirect("/blogs")
    }
    return result

}