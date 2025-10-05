import { qurova } from "@/app/layout";
import Link from "next/link";
import { MoveRight, User } from "lucide-react";
import { getProfile } from "@/actions/auth";

const Navbar = async () => {

    const data = await getProfile();
    console.log(data);

    return (
        <nav className="h-24 px-[5%] fixed top-0 left-0 flex items-center justify-between w-full bg-white">
            <Link href={"/"}><h1 className={`${qurova.className} text-4xl`}>abdur rahman</h1></Link>
            <div className="text-2xl space-x-7">
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/project"}>Projects</Link>
                <Link href={"/blogs"}>Blogs</Link>
                {

                    data?.data?.id &&
                    <Link href={"/dashboard"}>Dashboard</Link>

                }
            </div>
            <Link href={"/login"}>
                <button
                    className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-700"
                >
                    <div className="relative inline-flex -translate-x-2 items-center transition-all duration-700 group-hover:-translate-x-6">
                        <div className="absolute -translate-x-1 opacity-100 transition-all duration-700 group-hover:-translate-x-6 group-hover:opacity-0">
                            <User size={20} />
                        </div>
                        <span className="pl-6">Login</span>
                        <div className="absolute right-0 translate-x-12 opacity-0 transition-all duration-700 group-hover:translate-x-8 group-hover:opacity-100">
                            <MoveRight />
                        </div>
                    </div>
                </button>
            </Link>

        </nav>
    );
};

export default Navbar;
