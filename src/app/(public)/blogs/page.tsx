/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "@/components/modules/Blog/BlogCard";

const BlogPage = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/all-blogs`);
    const blogs = await response.json();
    console.log(blogs);
    return (
        <div className="mt-24 container mx-auto">
            <p className="text-center text-2xl font-medium py-5">See all of my blogs here</p>
            <div className="grid grid-cols-3 gap-5">
                {
                    blogs?.data?.data?.map((blog: any) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))
                }
            </div>
        </div>
    );
};

export default BlogPage;