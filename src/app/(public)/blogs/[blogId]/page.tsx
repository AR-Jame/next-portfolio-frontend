import Image from "next/image";

const BlogDetails = async ({ params }: { params: Promise<{ blogId: string }> }) => {

    const { blogId } = await params;

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${blogId}`);
    const data = await response.json();

    const blog = data?.data
    console.log(blog);
    return (
        <div className="max-w-6xl mt-24 mx-auto relative min-h-dvh">
            <h3 className="text-3xl font-semibold mb-6 pt-5">{blog?.title}</h3>
            <img src={blog?.thumbnail} alt={blog?.title} fill className="w-full h-auto object-contain" />
            <p className="text-lg pt-8">{blog?.content}</p>
            <p>Categories</p>
            <ul className="flex gap-2">
                {
                    blog?.categories?.map((category: string) => (
                        <li key={category} className="bg-blue-300 px-2 py-1 text-white rounded-md text-sm">{category}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default BlogDetails;